import { useEffect, useRef, useState } from "react"

import { relay, sendToActiveContentScript, sendToBackground } from "./index"
import { getPort } from "./port"
import type { InternalSignal, MessageName, PlasmoMessaging } from "./types"
import { getActiveTab } from "./utils"

export type {
  PlasmoMessaging,
  MessageName,
  PortName,
  PortsMetadata,
  MessagesMetadata
} from "./types"

const _signalActiveCS: PlasmoMessaging.SendFx<InternalSignal> =
  sendToActiveContentScript

/**
 * Used in a tab page or sandbox page to send message to background.
 */
export const usePageMessaging: PlasmoMessaging.MessageHook = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function init() {
      // Send something to contentscript to make sure it's ready before we establish comms
      await _signalActiveCS({ name: "__PLASMO_MESSAGING_PING__" })

      const tab = await getActiveTab()
      if (tab?.id) {
        setIsReady(true)
      }
    }

    init()
  }, [])

  return {
    async send(req) {
      if (!isReady) {
        throw new Error("Background Service not ready to receive message")
      }
      return await sendToBackground(req)
    }
  }
}

export const usePort: PlasmoMessaging.PortHook = (name) => {
  const port = useRef(getPort(name))
  const [data, setData] = useState()

  useEffect(() => {
    const messageHandler = (msg) => {
      setData(msg)
    }

    port.current.onMessage.addListener(messageHandler)

    return () => {
      port.current.onMessage.removeListener(messageHandler)
    }
  }, [])

  return {
    data,
    send: port.current.postMessage
  }
}

/**
 * Perhaps add a way to detect if this hook is beign used inside CS?
 */
export function useMessageRelay<TRequestBody = any>(
  name: MessageName,
  onMessage: PlasmoMessaging.RelayFxOnMessage<TRequestBody>
) {
  useEffect(() => relay(name, onMessage), [])
}

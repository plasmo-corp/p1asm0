const LOADING_ID = "__plasmo-loading__"

function createLoadingEl() {
  const loadingEl = document.createElement("div")
  loadingEl.id = LOADING_ID

  loadingEl.innerHTML = `
  <svg height="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      /***************************************************
       * Generated by SVG Artista on 2/8/2023, 4:53:34PM
       * MIT license (https://opensource.org/licenses/MIT)
       * W. https://svgartista.net
       **************************************************/
      
      @keyframes animate-svg-fill-1 {
        0% {
          fill: transparent;
        }
      
        100% {
          fill: #333;
        }
      }
      
      .svg-elem-1 {
        animation: animate-svg-fill-1 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
      }
      
      @keyframes animate-svg-fill-2 {
        0% {
          fill: transparent;
        }
      
        100% {
          fill: #333;
        }
      }
      
      .svg-elem-2 {
        animation: animate-svg-fill-2 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
      }
      
      @keyframes animate-svg-fill-3 {
        0% {
          fill: transparent;
        }
      
        100% {
          fill: #333;
        }
      }
      
      .svg-elem-3 {
        animation: animate-svg-fill-3 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
      }
    
    </style>

    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>  
  `

  loadingEl.style.pointerEvents = "none"

  loadingEl.style.position = "fixed"
  loadingEl.style.bottom = "14.7px"
  loadingEl.style.right = "14.7px"

  loadingEl.style.display = "flex"
  loadingEl.style.justifyContent = "center"
  loadingEl.style.alignItems = "center"

  loadingEl.style.width = "47px"
  loadingEl.style.height = "47px"
  loadingEl.style.borderRadius = "4.7px"

  loadingEl.style.border = "1px solid #333"
  loadingEl.style.background = "#f3f3f3"

  loadingEl.style.zIndex = "2147483647"

  loadingEl.style.opacity = "0"
  loadingEl.style.transition = "opacity 0.47s ease-in-out"
  loadingEl.style.boxShadow = "#333 4.7px 4.7px"

  return loadingEl
}

export const createLoadingIndicator = () => {
  const loadingEl = document.getElementById(LOADING_ID) || createLoadingEl()

  return {
    element: loadingEl,
    show: () => {
      loadingEl.style.opacity = "1"
    },
    hide: () => {
      loadingEl.style.opacity = "0"
    }
  }
}

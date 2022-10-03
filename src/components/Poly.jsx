import React from 'react'
import styled from 'styled-components'

function Poly({inLocation, inFooter}) {
  let hideDash = {
    display: inFooter ? "none" : null,
  }
  return (
    <ScPoly id={inLocation ? "polyLocation" : inFooter ? "polyFooter" : null}>
        <div className="dash" style={hideDash}/>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="7.5" stroke="var(--tan)" className="svg-elem-1"></circle>
        <circle cx="8" cy="16" r="7.5" stroke="var(--tan)" className="svg-elem-2"></circle>
        <circle cx="16" cy="8" r="7.5" stroke="var(--tan)" className="svg-elem-3"></circle>
        <circle cx="16" cy="24" r="7.5" stroke="var(--tan)" className="svg-elem-4"></circle>
        <circle cx="16" cy="24" r="3.5" stroke="var(--tan)" className="svg-elem-5"></circle>
        <circle cx="8" cy="16" r="3.5" stroke="var(--tan)" className="svg-elem-6"></circle>
        <circle cx="24" cy="16" r="3.5" stroke="var(--tan)" className="svg-elem-7"></circle>
        <circle cx="16" cy="8" r="3.5" stroke="var(--tan)" className="svg-elem-8"></circle>
        </svg>
    </ScPoly>
  )
}

const ScPoly = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    /* transform: translate(-50%, -32%); */
    transform: translate(-50%, 0) scale(1.2);
    width: 2.6rem !important;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    .dash {
      width: 1.6px;
      border-radius: 8px;
      height: 0;
      background: var(--tan);
      animation: dashGrow 0.4s ease forwards;
    }
    @keyframes dashGrow {
      to {
        height: 6rem;
      }
    }

    svg {
      transform: rotate(270deg);
    }
    /***************************************************
    * Generated by SVG Artista on 9/22/2022, 8:09:26 AM
    * MIT license (https://opensource.org/licenses/MIT)
    * W. https://svgartista.net
    **************************************************/

@-webkit-keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

@keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-stroke-1 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s both;
          animation: animate-svg-stroke-1 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s both;
}

@-webkit-keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

@keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

.svg-elem-2 {
  -webkit-animation: animate-svg-stroke-2 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.1s both;
          animation: animate-svg-stroke-2 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.1s both;
}

@-webkit-keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

@keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

.svg-elem-3 {
  -webkit-animation: animate-svg-stroke-3 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.2s both;
          animation: animate-svg-stroke-3 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.2s both;
}

@-webkit-keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

@keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 49.12388980384689px;
    stroke-dasharray: 49.12388980384689px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 49.12388980384689px;
  }
}

.svg-elem-4 {
  -webkit-animation: animate-svg-stroke-4 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.30000000000000004s both;
          animation: animate-svg-stroke-4 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.30000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

@keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

.svg-elem-5 {
  -webkit-animation: animate-svg-stroke-5 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.4s both;
          animation: animate-svg-stroke-5 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.4s both;
}

@-webkit-keyframes animate-svg-stroke-6 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

@keyframes animate-svg-stroke-6 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

.svg-elem-6 {
  -webkit-animation: animate-svg-stroke-6 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.5s both;
          animation: animate-svg-stroke-6 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.5s both;
}

@-webkit-keyframes animate-svg-stroke-7 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

@keyframes animate-svg-stroke-7 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

.svg-elem-7 {
  -webkit-animation: animate-svg-stroke-7 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.6000000000000001s both;
          animation: animate-svg-stroke-7 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.6000000000000001s both;
}

@-webkit-keyframes animate-svg-stroke-8 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

@keyframes animate-svg-stroke-8 {
  0% {
    stroke-dashoffset: 23.991148575128552px;
    stroke-dasharray: 23.991148575128552px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 23.991148575128552px;
  }
}

.svg-elem-8 {
  -webkit-animation: animate-svg-stroke-8 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.7000000000000001s both;
          animation: animate-svg-stroke-8 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.7000000000000001s both;
}

`

export default Poly;
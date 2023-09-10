import styled from "styled-components";
import {Device} from "../../Utils/devices";

/*
*
* black: #000000
* gris-oscuro: #333333
* azul-marino: #001f3f
* verde-bosque: #006400
* marron-oscuro: #321414
* borgoña: #800020
* Morado oscuro: #4B0082
* Gris carbón: #1C1C1C
*
* */

export const LoadingStyled = styled.div`

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #33333399;
  
  .image-loading {
    width: 5vw;
    animation: rotate 4s linear infinite;
  }
  .text-loading {
    font-size: 1.5vw;
    color: white;
  }
  
  @media ${Device.desktopL} {

  }
  @media ${Device.desktop} {

  }
  @media ${Device.laptopL} {

  }
  @media ${Device.laptop} {
    
  }
  @media ${Device.tablet} {
    
  }
  @media ${Device.mobileL} {
    
  }
  @media ${Device.mobileM} {
    
  }
  @media ${Device.mobileS} {
    
  }
`
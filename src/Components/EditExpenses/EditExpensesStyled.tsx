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

export const ExpensesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  border-radius: 5px;
  padding: 1vw 0 4vw 0;
  background: #f0f0f0;

  .title-income {
    font-size: 2.5vw;
    color: #001f3f;
  }
  .form-income {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1vw;
    width: 40%;

    .container-input {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;

      label {
        font-size: .9vw;
        font-weight: bold;
        color: #1C1C1C;
      }
      input {
        outline: none;
        background: transparent;
        border: 1px solid #006400;
        border-radius: 5px;
        font-size: .8vw;
        padding: .3vw;
        color: #1C1C1C;
        width: 97%;
      }
      textarea {
        outline: none;
        background: transparent;
        border: 1px solid #006400;
        border-radius: 5px;
        font-size: .8vw;
        padding: .3vw;
        color: #1C1C1C;
        width: 97%;
      }
    }
    .button-income {
      border: 1px solid #006400;
      border-radius: 5px;
      color: #006400;
      width: 100%;
      padding: .3vw 0;
      cursor: pointer;
      transition: .2s ease;
    }
    .button-income:hover {
      border: 1px solid #f0f0f0;
      background: #006400;
      color: #f0f0f0;
    }
    .message {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 1vw;
      color: #006400;
    }
    .err {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 1vw;
      color: #800020;
    }
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
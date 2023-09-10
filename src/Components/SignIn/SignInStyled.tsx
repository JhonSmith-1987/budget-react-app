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

export const SignInStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #001f3f;
  border-radius: 0 15px 15px 0;
  
  .title-log-in {
    font-size: 2.5vw;
    color: #fff;
  }
  .container-form-login {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1vw;
    width: 70%;

    .container-row {
      display: flex;
      align-items: start;
      justify-content: space-between;
      gap: 1vw;
      width: 100%;

      .container-input {
        display: flex;
        flex-direction: column;
        gap: .5vw;
        width: 100%;

        label {
          color: white;
          font-size: 1vw;
        }
        input {
          background: transparent;
          outline: none;
          border: none;
          border-bottom: 1px solid #ffffff;
          color: white;
        }
        .errors {
          font-size: .7vw;
          color: #800020;
        }
      }
    }
    .container-input {
      display: flex;
      flex-direction: column;
      gap: .5vw;
      width: 100%;

      label {
        color: white;
        font-size: 1vw;
      }
      input {
        background: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid #ffffff;
        color: white;
      }
      .errors {
        font-size: .7vw;
        color: #800020;
      }
    }
    .button-sign-in {
      width: 100%;
      background: #006400;
      color: white;
      padding: .3vw 0;
      outline: none;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
  }
  .return-log-in {
    color: white;
    font-size: .9vw;
    cursor: pointer;
  }
  .error-sign-in {
    font-size: .9vw;
    color: #800020; 
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
    border-radius: 0 0 15px 15px;

    .title-log-in {
      font-size: 3vw;
    }
    .container-form-login {

      .container-row {

        .container-input {

          label {
            font-size: 1.5vw;
          }
          input {
            font-size: 1.5vw;
          }
          input::placeholder {
            font-size: 1.3vw;
          }
          .errors {
            font-size: 1.3vw;
          }
        }
      }
      .container-input {

        label {
          font-size: 1.5vw;
        }
        input {
          font-size: 1.5vw;
        }
        input::placeholder {
          font-size: 1.3vw;
        }
        .errors {
          font-size: 1.3vw;
        }
      }
      .button-sign-in {
        padding: .8vw 0;
        font-size: 1.5vw;
      }
    }
    .return-log-in {
      font-size: 1.3vw;
    }
    .error-sign-in {
      font-size: 1.3vw;
    }
  }
  @media ${Device.mobileL} {
    border-radius: 0 0 15px 15px;

    .title-log-in {
      font-size: 4.5vw;
    }
    .container-form-login {

      .container-row {

        .container-input {
          width: 45%;

          label {
            font-size: 2vw;
          }
          input {
            font-size: 2vw;
          }
          input::placeholder {
            font-size: 1.7vw;
          }
          .errors {
            font-size: 1.6vw;
          }
        }
      }
      .container-input {

        label {
          font-size: 2vw;
        }
        input {
          font-size: 2vw;
        }
        input::placeholder {
          font-size: 1.7vw;
        }
        .errors {
          font-size: 1.6vw;
        }
      }
      .button-sign-in {
        margin-top: 3vw;
        padding: 1vw 0;
        font-size: 2vw;
      }
    }
    .return-log-in {
      font-size: 2vw;
    }
    .error-sign-in {
      font-size: 1.6vw;
    }
  }
  @media ${Device.mobileM} {
    border-radius: 0 0 15px 15px;

    .title-log-in {
      font-size: 5vw;
    }
    .container-form-login {

      .container-row {

        .container-input {
          width: 45%;

          label {
            font-size: 3vw;
          }
          input {
            font-size: 2.5vw;
          }
          input::placeholder {
            font-size: 3vw;
          }
          .errors {
            font-size: 2vw;
          }
        }
      }
      .container-input {

        label {
          font-size: 3vw;
        }
        input {
          font-size: 2.5vw;
        }
        input::placeholder {
          font-size: 3vw;
        }
        .errors {
          font-size: 2vw;
        }
      }
      .button-sign-in {
        margin-top: 3vw;
        padding: 1vw 0;
        font-size: 3vw;
      }
    }
    .return-log-in {
      font-size: 3vw;
    }
    .error-sign-in {
      font-size: 2vw;
    }
  }
  @media ${Device.mobileS} {
    border-radius: 0 0 15px 15px;

    .title-log-in {
      font-size: 5vw;
    }
    .container-form-login {

      .container-row {

        .container-input {
          width: 45%;

          label {
            font-size: 3vw;
          }
          input {
            font-size: 2.5vw;
          }
          input::placeholder {
            font-size: 3vw;
          }
          .errors {
            font-size: 2vw;
          }
        }
      }
      .container-input {

        label {
          font-size: 3vw;
        }
        input {
          font-size: 2.5vw;
        }
        input::placeholder {
          font-size: 3vw;
        }
        .errors {
          font-size: 2vw;
        }
      }
      .button-sign-in {
        margin-top: 3vw;
        padding: 1vw 0;
        font-size: 3vw;
      }
    }
    .return-log-in {
      font-size: 3vw;
    }
    .error-sign-in {
      font-size: 2vw;
    }
  }
`
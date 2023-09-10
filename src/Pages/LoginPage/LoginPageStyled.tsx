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

interface ILoginPageStyledProps {
    left:string;
    border_radius:string;
    border_radius_mobile:string;
}

export const LoginPageStyled = styled.div<ILoginPageStyledProps>`
  background: #1C1C1C;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-login-sign-in {
    position: relative;
    display: flex;
    width: 80%;
    height: 80%;
    border-radius: 15px;
    
    .container-login {
      width: 50%;
      height: 100%;
      border-radius: 15px 0 0 15px;
    }
    .container-sign-in {
      width: 50%;
      height: 100%;
      border-radius: 0 15px 15px 0;
    }
    .container-img-budget {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: ${({left}) => left};
      top: 0;
      width: 50%;
      height: 100%;
      //background: #61dafb;
      border-radius: ${({border_radius}) => border_radius};
      transition: left 1s;

      .img-budget {
        width: 100%;
        height: 100%;
        border-radius: ${({border_radius}) => border_radius};
      }
    }
  }
  
  @media ${Device.desktopL} {
    .container-login-sign-in {
      
      .container-img-budget {
        background-size: 100%;
      }
    }
  }
  @media ${Device.desktop} {
    .container-login-sign-in {
      
      .container-img-budget {
        background-size: 100%;
      }
    }
  }
  @media ${Device.laptopL} {
    .container-login-sign-in {

      .container-img-budget {
        background-size: 100%;
      }
    }
  }
  @media ${Device.laptop} {
    
    .container-login-sign-in {
      width: 90%;
    }
  }
  
  @media ${Device.tablet} {
    .container-login-sign-in {
      flex-direction: column;

      .container-login {
        width: 100%;
        border-radius: 15px 15px 0 0;
      }
      .container-sign-in {
        width: 100%;
        border-radius: 0 0 15px 15px;
      }
      .container-img-budget {
        left: 0;
        top: ${({left}) => left};
        width: 100%;
        height: 50%;
        border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        transition: top 1s;

        .img-budget {
          border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        }
      }
    }
  }
  @media ${Device.mobileL} {
    .container-login-sign-in {
      flex-direction: column;

      .container-login {
        width: 100%;
        border-radius: 15px 15px 0 0;
      }
      .container-sign-in {
        width: 100%;
        border-radius: 0 0 15px 15px;
      }
      .container-img-budget {
        left: 0;
        top: ${({left}) => left};
        width: 100%;
        height: 50%;
        border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        transition: top 1s;

        .img-budget {
          border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        }
      }
    }
  }
  @media ${Device.mobileM} {
    .container-login-sign-in {
      width: 90%;
      flex-direction: column;

      .container-login {
        width: 100%;
        border-radius: 15px 15px 0 0;
      }
      .container-sign-in {
        width: 100%;
        border-radius: 0 0 15px 15px;
      }
      .container-img-budget {
        left: 0;
        top: ${({left}) => left};
        width: 100%;
        height: 50%;
        border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        transition: top 1s;

        .img-budget {
          border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        }
      }
    }
  }
  @media ${Device.mobileS} {
    .container-login-sign-in {
      width: 90%;
      flex-direction: column;

      .container-login {
        width: 100%;
        border-radius: 15px 15px 0 0;
      }
      .container-sign-in {
        width: 100%;
        border-radius: 0 0 15px 15px;
      }
      .container-img-budget {
        left: 0;
        top: ${({left}) => left};
        width: 100%;
        height: 50%;
        border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        transition: top 1s;

        .img-budget {
          border-radius: ${({border_radius_mobile}) => border_radius_mobile};
        }
      }
    }
  }
`
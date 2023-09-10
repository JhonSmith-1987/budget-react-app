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
*
*
*/

export const HomePageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #1C1C1C;
  
  .container-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8%;
    background: #838080;
    
    .container-logo-nav {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 4vw;
      margin-left: 1vw;
      
      .title-budget {
        margin: 0;
        font-size: 2.5vw;
        color: #001f3f;
        cursor: pointer;
      }
      .nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        
        .item {
          //color: #4B0082;
          color: white;
          font-size: 1vw;
          cursor: pointer;
        }
      }
    }
    .container-user-sign-out {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .5vw;
      margin-right: 1vw;
      
      .container-user {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .2vw;
        cursor: pointer;
        //margin-top: 4vw;
        
        .img-user {
          width: 2vw;
        }
        .title-user {
          width: 100%;
          font-size: .8vw;
          color: white;
        }
      }
      .container-menu-user {
        position: absolute;
        top: 4vw;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        background: white;
        width: 10vw;
        border-radius: 5px;
        padding: .3vw 0;
        
        .menu-user-item {
          font-size: 1vw;
          color: #001f3f;
          cursor: pointer;
        }
      }
    }
  }
  .container-routes {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
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
    .container-header {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: unset;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8%;

      .container-logo-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4vw;
        margin-left: 1vw;

        .title-budget {
          position: absolute;
          bottom: 175vw;
          left: 5vw;
          font-size: 5vw;
          color: whitesmoke;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6vw;

          .item {
            //color: #4B0082;
            color: white;
            font-size: 5vw;
          }
        }
      }
      .container-user-sign-out {
        position: absolute;
        bottom: 173vw;
        right: 5vw;
        align-items: center;
        justify-content: center;
        gap: .5vw;
        margin-right: 1vw;

        .container-user {
          align-items: center;
          justify-content: center;
          gap: .5vw;

          .img-user {
            width: 7vw;
          }
          .title-user {
            font-size: 3vw;
          }
        }
        .container-menu-user {
          position: absolute;
          top: 12vw;
          right: 0;
          width: 30vw;

          .menu-user-item {
            font-size: 4vw;
          }
        }
      }
    }
    .container-routes {
    }
  }
  @media ${Device.mobileL} {
    .container-header {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: unset;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8%;

      .container-logo-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4vw;
        margin-left: 1vw;

        .title-budget {
          position: absolute;
          bottom: 175vw;
          left: 5vw;
          font-size: 5vw;
          color: whitesmoke;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6vw;

          .item {
            //color: #4B0082;
            color: white;
            font-size: 5vw;
          }
        }
      }
      .container-user-sign-out {
        position: absolute;
        bottom: 173vw;
        right: 5vw;
        align-items: center;
        justify-content: center;
        gap: .5vw;
        margin-right: 1vw;

        .container-user {
          align-items: center;
          justify-content: center;
          gap: .5vw;

          .img-user {
            width: 7vw;
          }
          .title-user {
            font-size: 3vw;
          }
        }
        .container-menu-user {
          position: absolute;
          top: 12vw;
          right: 0;
          width: 30vw;

          .menu-user-item {
            font-size: 4vw;
          }
        }
      }
    }
    .container-routes {
    }
  }
  @media ${Device.mobileM} {
    .container-header {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: unset;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8%;

      .container-logo-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4vw;
        margin-left: 1vw;

        .title-budget {
          position: absolute;
          bottom: 175vw;
          left: 5vw;
          font-size: 5vw;
          color: whitesmoke;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6vw;

          .item {
            //color: #4B0082;
            color: white;
            font-size: 5vw;
          }
        }
      }
      .container-user-sign-out {
        position: absolute;
        bottom: 173vw;
        right: 5vw;
        align-items: center;
        justify-content: center;
        gap: .5vw;
        margin-right: 1vw;

        .container-user {
          align-items: center;
          justify-content: center;
          gap: .5vw;

          .img-user {
            width: 7vw;
          }
          .title-user {
            font-size: 3vw;
          }
        }
        .container-menu-user {
          position: absolute;
          top: 12vw;
          right: 0;
          width: 30vw;

          .menu-user-item {
            font-size: 4vw;
          }
        }
      }
    }
    .container-routes {
    }
  }
  @media ${Device.mobileS} {

    .container-header {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: unset;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8%;

      .container-logo-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4vw;
        margin-left: 1vw;

        .title-budget {
          position: absolute;
          bottom: 175vw;
          left: 5vw;
          font-size: 5vw;
          color: whitesmoke;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6vw;

          .item {
            //color: #4B0082;
            color: white;
            font-size: 5vw;
          }
        }
      }
      .container-user-sign-out {
        position: absolute;
        bottom: 173vw;
        right: 5vw;
        align-items: center;
        justify-content: center;
        gap: .5vw;
        margin-right: 1vw;

        .container-user {
          align-items: center;
          justify-content: center;
          gap: .5vw;

          .img-user {
            width: 7vw;
          }
          .title-user {
            font-size: 3vw;
          }
        }
        .container-menu-user {
          position: absolute;
          top: 12vw;
          right: 0;
          width: 30vw;

          .menu-user-item {
            font-size: 4vw;
          }
        }
      }
    }
    .container-routes {
    }
  }
`
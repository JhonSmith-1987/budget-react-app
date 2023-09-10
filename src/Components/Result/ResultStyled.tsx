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

export const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  border-radius: 5px;
  padding: 1vw 0 1vw 0;
  background: #f0f0f0;
  
  .title {
    font-size: 2.5vw;
    color: #006400;
  }
  .result-table {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: .5vw 0;
    border: 1px solid #006400;
    border-radius: 5px;
    padding: 1vw;
    
    .result {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 30%;
      padding: .3vw;
      border-radius: 5px;
      
      .title-result {
        font-size: 1vw;
        font-weight: bold;
        color: whitesmoke;
      }
      .total-result {
        font-size: 1.5vw;
        color: whitesmoke;
      }
    }
    .green {
      background: #006400;
    }
    .green50 {
      background: #00A86B;
    }
    .green30 {
      background: #00A890;
    }
    .green00 {
      background: red;
    }
    .red {
      background: #800020;
    }
  }
  .container-table {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: .5vw 0;
    border: 1px solid #006400;
    border-radius: 5px;
    padding: 1vw;
    
    .table {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      width: 100%;
      height: 30.8vh;
      overflow-y: scroll;
      
      .thead {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 1.5vw;
      }
      .row-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 96%;
        border-bottom: 1px solid #282c34;
        
        .col {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25%;
        }
      }
      .tbody {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 1vw;
      }
      .row-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 96%;
        border-bottom: 1px solid #282c34;
        
        .col {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25%;
          
          .container-img-edit-delete {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1vw;
            
            .icon-action {
              width: 1.5vw;
              cursor: pointer;
            }
          }
        }
      }
    }
    ::-webkit-scrollbar {
      width: .4vw;
      background-color: #333333;
    }
    ::-webkit-scrollbar-thumb {
      background: #006400; /* Color del thumb */
      border-radius: 5px; /* Borde redondeado del thumb */
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #009529; /* Cambia el color del thumb al pasar el ratón sobre él */
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
    width: 90%;
    padding: 1vw 0 1vw 0;
    margin-bottom: 15vw;

    .title {
      font-size: 8vw;
    }
    .result-table {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 1vw;
      padding: 1.5vw;

      .result {
        width: 60%;
        padding: .8vw;

        .title-result {
          font-size: 3vw;
        }
        .total-result {
          font-size: 3vw;
        }
      }
    }
    .container-table {
      width: 100%;

      .table {
        width: 100%;
        height: 30.8vh;
        overflow-y: scroll;

        .thead {
          font-size: 3vw;
        }
        .row-head {
          width: 96%;

          .col {
            width: 25%;
          }
        }
        .tbody {
          font-size: 2.5vw;
        }
        .row-body {
          width: 96%;

          .col {
            width: 25%;

            .container-img-edit-delete {
              gap: 1vw;

              .icon-action {
                width: 3.5vw;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  @media ${Device.mobileL} {
    width: 90%;
    padding: 1vw 0 1vw 0;
    margin-bottom: 15vw;

    .title {
      font-size: 8vw;
    }
    .result-table {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 1vw;
      padding: 1.5vw;

      .result {
        width: 60%;
        padding: .8vw;

        .title-result {
          font-size: 3vw;
        }
        .total-result {
          font-size: 3vw;
        }
      }
    }
    .container-table {
      width: 100%;

      .table {
        width: 100%;
        height: 30.8vh;
        overflow-y: scroll;

        .thead {
          font-size: 3vw;
        }
        .row-head {
          width: 96%;

          .col {
            width: 25%;
          }
        }
        .tbody {
          font-size: 2.5vw;
        }
        .row-body {
          width: 96%;

          .col {
            width: 25%;

            .container-img-edit-delete {
              gap: 1vw;

              .icon-action {
                width: 3.5vw;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  @media ${Device.mobileM} {
    width: 90%;
    padding: 1vw 0 1vw 0;
    margin-bottom: 15vw;

    .title {
      font-size: 8vw;
    }
    .result-table {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 1vw;
      padding: 1.5vw;

      .result {
        width: 60%;
        padding: .8vw;

        .title-result {
          font-size: 3vw;
        }
        .total-result {
          font-size: 3vw;
        }
      }
    }
    .container-table {
      width: 100%;

      .table {
        width: 100%;
        height: 30.8vh;
        overflow-y: scroll;

        .thead {
          font-size: 3vw;
        }
        .row-head {
          width: 96%;

          .col {
            width: 25%;
          }
        }
        .tbody {
          font-size: 2.5vw;
        }
        .row-body {
          width: 96%;

          .col {
            width: 25%;

            .container-img-edit-delete {
              gap: 1vw;

              .icon-action {
                width: 3.5vw;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  @media ${Device.mobileS} {
    width: 90%;
    padding: 1vw 0 1vw 0;
    margin-bottom: 15vw;

    .title {
      font-size: 8vw;
    }
    .result-table {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 1vw;
      padding: 1.5vw;

      .result {
        width: 60%;
        padding: .8vw;

        .title-result {
          font-size: 3vw;
        }
        .total-result {
          font-size: 3vw;
        }
      }
    }
    .container-table {
      width: 100%;

      .table {
        width: 100%;
        height: 30.8vh;
        overflow-y: scroll;

        .thead {
          font-size: 3vw;
        }
        .row-head {
          width: 96%;

          .col {
            width: 25%;
          }
        }
        .tbody {
          font-size: 2.5vw;
        }
        .row-body {
          width: 96%;

          .col {
            width: 25%;

            .container-img-edit-delete {
              gap: 1vw;

              .icon-action {
                width: 3.5vw;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`
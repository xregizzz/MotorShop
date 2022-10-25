import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        /* background-color:var(--grey8); */
        background-color: #fff;
    }
    p{
        font-family: 'Inter', sans-serif;
    }
    button{
        cursor: pointer;
        font-family: 'Inter', sans-serif;
    }
    input, input::placeholder, label,textarea{
        font-family: 'Inter', sans-serif;
    }
    figcaption{
        display: none;
    }
    label,span{
        font-weight: 500;
        font-size: 14px;
        color: var(--grey2);
    }
    input::placeholder,textarea::placeholder{
        font-weight: 400;
        font-size: 16px;
        color: var(--grey2);
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Lexend', sans-serif;
        font-style: normal;
        color: var(--grey1);
        padding: 0;
    }
    h1{
        font-size: 44px;
        font-weight: 700;
    }
    h2{
        font-weight: 600;
        font-size: 36px;
    }
    h3{
        font-weight: 600;
        font-size: 32px;
    }
    h4{
        font-weight: 600;
        font-size: 28px;
    }
    h5{
        font-weight: 600;
        font-size: 24px;
    }
    h6{
        font-weight: 600;
        font-size: 20px;
    }

    a{
        text-decoration: none;
    }
    ul, li, figcaption{
        list-style: none;
    }
    :root{
        --brand1:#4529e6;
        --brand2:#5126ea;
        --brand3:#b0a6f0;
        --brand4:#edeafd;

        --grey0:#0b0d0d;
        --grey1:#212529;
        --grey2:#495057;
        --grey3:#868e96;
        --grey4:#ADB5BD;
        --grey5:#ced4da;
        --grey6:#dee2e6;
        --grey7:#e9ecef;
        --grey8:#f1f3f5;
        --grey9:#f8f9fa;
        --grey10:#fdfdfd;

        --whiteFixed:#ffffff;

        --alert1:#cd2b31;
        --alert2:#fdd8d8;
        --alert3:#ffe5e5;

        --sucess1:#18794e;
        --sucess2:#ccebd7;
        --sucess3:#ddf3e4;

        --random1:#e34d8c;
        --random2:#c04277;
        --random3:#7d2a4d;
        --random4:#7000ff;
        --random5:#6200e3;
        --random6:#36007d;
        --random7:#349974;
        --random8:#2a7d5f;
        --random9:#153d2e;
        --random10:#6100ff;
        --random11:#5700e3;
        --random12:#30007d;


    }
`;
export const globalStyles = {
  brand1: "#4529E6",
  brand2: "#5126EA",
  brand3: "#B0A6F0",
  brand4: "#EDEAFD",

  grey0: "#0B0D0D",
  grey1: "#212529",
  grey2: "#495057",
  grey3: "#868E96",
  grey4: "#ADB5BD",
  grey5: "#CED4DA",
  grey6: "#DEE2E6",
  grey7: "#E9ECEF",
  grey8: "#F1F3F5",
  grey9: "#F8F9FA",
  grey10: "#FDFDFD",
  whiteFixed: "#FFFFFF",

  alert1: "#CD2B31",
  alert2: "#FDD8D8",
  alert3: "#FFE5E5",
  sucess1: "#18794E",
  sucess2: "#CCEBD7",
  sucess3: "#DDF3E4",

  random1: "#E34D8C",
  random2: "#C04277",
  random3: "#7D2A4D",
  random4: "#7000FF",
  random5: "#6200E3",
  random6: "#36007D",
  random7: "#349974",
  random8: "#2A7D5F",
  random9: "#153D2E",
  random10: "#6100FF",
  random11: "#5700E3",
  random12: "#30007D",
};

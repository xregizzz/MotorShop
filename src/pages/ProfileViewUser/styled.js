import styled from "styled-components";

export const AdContainer = styled.main`
  position: relative;
  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);
    margin: 32px 0 8px 0;
  }
  .container {
    margin: 0 auto;
    max-width: 1265px;
    min-height: 500px;
    display: flex;
    justify-content: space-between;
    padding: 40px 12px;
    flex-wrap: wrap;
    gap: 16px;
    @media (max-width: 1238px) {
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-direction: column;
    }
  }
  .blue-bg {
    background-color: var(--brand1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
  }

  .box {
    padding: 36px 38px 36px;
    margin: auto;
    background-color: var(--grey10);
    z-index: 2;
    border-radius: 4px;
    width: 85%;
  }

  .ownerNameInitials {
    text-align: center;
    color: var(--whiteFixed);
    border-radius: 50%;
    height: 104px;
    width: 104px;
    cursor: pointer;
    margin: 20px 0px;
    font-weight: 500;
    font-size: 36px;
    padding: 26px 0;
    line-height: 53px;
    background-color: var(--brand1);
  }
`;



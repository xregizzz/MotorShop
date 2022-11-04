
import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0 ,0 ,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 19px;
    overflow: auto;
    z-index:1;
    
    .modal-box{
        max-height: 100%;
        padding: 0 24px 32px;
        max-width: 520px;
        width: 100%;
        background-color: var(--whiteFixed);
        overflow: auto;
        border-radius: 8px;
        position: relative;
        
    }
    .modal-header{
        background-color: var(--whiteFixed);
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        margin: 0 0 32px;
        span{
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            color: var(--grey1);
        }
        svg{
            color: var(--grey4);
            width: 24px;
            font-size: 24px;
            height: 24px;
            cursor: pointer;
        }
    }
    .modal-body{
        height: 100%;
        background-color: var(--whiteFixed);

    }
`

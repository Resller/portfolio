import styled from "styled-components";

export const Container = styled.div`
    flex:1;
    display: flex;

`
export const AreaContainer = styled.div`
    flex:1;
    max-width:1024px;
    margin:0 auto;
    padding:30xp 0 ;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    .right{
        flex:1;
    }
    .left{
        width:100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media(max-width:1000px){
      
    }
`
export const AreaBar = styled.div`
    @media (max-width: 1100px) {
        padding-top: 30px;
    }
`

export const AreaModal = styled.div <{modal:boolean}>`
    content: "";
    z-index: 9999;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.5s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;

    opacity: ${(props) => (props.modal ? 1 : 0)};
    pointer-events: ${(props) => (props.modal ? 'auto' : 'none')};

    @media(max-width:850px){
        display: block;
        overflow-y: auto;
    }


`
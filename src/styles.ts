import styled from "styled-components";

export const Container = styled.div<{bg:string,changeMobile:boolean}>`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props=> props.bg};
    padding:0 20px ;


    @media(max-width:1000px){
        padding:0 10px;
        position: relative;
        overflow-y:${props=> props.changeMobile ? 'hidden;':'initial'} 
        height: ${props=> props.changeMobile ? '100vh':'auto'}
    }
  
`
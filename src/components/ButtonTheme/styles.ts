import styled from "styled-components";

type props = {
    colorTextPrimary:string,
    colorShadowPrimary:string,
    colorShadowSecondary:string,
    bgGradientPrimary:string,
    bgGradientSecondary:string,
    bgGradientBeforePrimary:string,
    bgGradientBeforeSecondary:string,
    darkMode : boolean
}

export const Container = styled.div <props>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 20px 40px;
    background: linear-gradient(145deg, ${props=>props.bgGradientPrimary}, ${props=>props.bgGradientSecondary});
    box-shadow: 5px 5px 10px ${props=>props.colorShadowPrimary}, -5px -5px 10px ${props=>props.colorShadowSecondary};
    position: relative;
    border-radius: 8px;
    cursor: pointer;
    transition: all ease-in-out 0.4s;
    
    &::before{
        content: "";
        position: absolute;
        transition: 0.4s;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        top: 0px;
        left: 0;
        background: linear-gradient(to right bottom, ${props=>props.bgGradientBeforePrimary},  ${props=>props.bgGradientBeforeSecondary});
        opacity: 0;
        z-index: -1;
    }
    
    &:hover{
        margin-top: -5px;
        
    }
    &:hover::before{
        opacity: 1;
        z-index: 99;
    }
    svg{
        z-index: 999;
        position: absolute;
        fill: ${props=> props.colorTextPrimary};
        transition: transform ease .8s;
        display: block;
        font-size:20px;
        transition-delay :0s;       
    }
    &:hover> svg{
        fill:#FFF;
        
    }
    .sun{
        transform: ${props=>props.darkMode?'scale(0) rotate(360deg)':' scale(1)'};
        transition-delay: ${props=> props.darkMode ? '0s':'0.8s'};
        
    }
    .moon{
        transform: ${props=>props.darkMode?'scale(1) rotate(360deg)  ':' scale(0) '};
        transition-delay: ${props=> props.darkMode ? '0.8s':'0s'};
    }

    @media(max-width:1000px){
        padding:20px;
        box-shadow: 5px 5px 1px ${props=>props.colorShadowPrimary}, -1px -1px 2px ${props=>props.colorShadowSecondary};
       
        &:hover{
            margin-top:0;
        
            
        }
        svg{
            font-size:16px;
        }
    }
`

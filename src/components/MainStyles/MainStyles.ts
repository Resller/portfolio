import styled from "styled-components";
type props = {
    colorShadowPrimary:string,
    colorShadowSecondary:string,
    bgGradientPrimary:string,
    bgGradientSecondary:string,
    bgGradientBeforePrimary:string,
    bgGradientBeforeSecondary:string,
    padding :string,
    hover : boolean
}


export const MainAreabox = styled.div<props>`
    flex:1;
    background-color: ${props=>props.bgGradientPrimary};
    box-shadow: 5px 5px 10px ${props=>props.colorShadowPrimary},-5px -5px 10px ${props=>props.colorShadowSecondary};
    position: relative;
    border-radius: 8px;
    transition: all ease-in-out 0.4s;
    padding:${props=>props.padding}px;

    &::before{
        content: "";
        position: absolute;
        transition: 0.4s;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        top: 0px;
        left: 0;
        background: linear-gradient(to right bottom, ${props=>props.bgGradientBeforePrimary},  ${props=>props.bgGradientBeforeSecondary});
        opacity: 0;
        z-index: -1;
    }

    &:hover::before{
        opacity:${props=>props.hover?'1':'0'};
        z-index: ${props=>props.hover?'99':'0'};
    } 
   
`
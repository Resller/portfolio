import styled from "styled-components";

type props = {
    colorTextPrimary:string
    colorShadowPrimary:string,
    colorShadowSecondary:string,
    bgGradientPrimary:string,
    bgGradientSecondary:string,
    bgGradientBeforePrimary:string,
    bgGradientBeforeSecondary:string,
    padding :string,
    hover : boolean,
    mobile:boolean,
    color?:string,
    sizeSvg?:string
}

export const Areabox = styled.div<props>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, ${props=>props.bgGradientPrimary}, ${props=>props.bgGradientSecondary});
    box-shadow: ${props=>props.mobile?'5px 5px 1px':'5px 5px 10px'} ${props=>props.colorShadowPrimary},${props=>props.mobile?' -1px -1px 2px':'-5px -5px 10px'} ${props=>props.colorShadowSecondary};
    position: relative;
    border-radius: 8px;
    cursor:${props=>props.hover?'pointer':'default'} ;
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

    &:hover{
        margin-top: ${props=>props.hover?'-5':'0'}px;  
    }
    &:hover::before{
        opacity:${props=>props.hover?'1':'0'};
        z-index: ${props=>props.hover?'99':'0'};
    }  
    svg{
        z-index: 999;
        fill: ${props=> props.color};
        transition: transform ease .8s;
        display: block;
        font-size:${props=>props.sizeSvg}px;    
    }
    
    &:hover > svg{
        fill:${props=>props.hover ? '#FFF' :props.color};   
    }
    
    div{
        z-index: 999 
    }

    @media(max-width:600px){
        padding:14px;
        svg{
            font-size:24px;    
        }
    }

`
export const Icon = styled.img <{width:string,scale:string,widthMobile?:string,widthMobileSmall?:string}>`
    width: ${props=> props.width}px;
    height: auto;
    object-fit: cover;
    z-index: 999;
    transition: all ease .5s;

    &:hover{
        transform: scale(${props=> props.scale});
        transition: all ease .5s;
    }
    @media(max-width:600px){
        width: ${props=> props.widthMobile}px;
    }
    @media(max-width:400px){
        width: ${props=> props.widthMobileSmall}px;
    }
`
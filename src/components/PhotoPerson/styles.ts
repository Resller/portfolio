import styled from "styled-components";

type propsAreaBg = {
    colorShadowPrimary:string,
    colorShadowSecondary:string,
    bgGradientPrimary:string,
    bgGradientSecondary:string,
    heightBefore:string
}

export const Container = styled.div <propsAreaBg>`
    position: relative;
    z-index: 2;
    &::before{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: calc(100% - ${props=>props.heightBefore}px);
        content: "";
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        background: linear-gradient(145deg, ${props=>props.bgGradientPrimary}, ${props=>props.bgGradientSecondary});
        box-shadow: 10px 10px 19px ${props=>props.colorShadowPrimary}, -10px -10px 19px  ${props=>props.colorShadowSecondary};
        border-radius: 6px;
    }

    @media(max-width:1000px){
        margin:auto;
    }
`
export const AreaPhoto = styled.div`
        max-width: 800px;
`
export const Photo = styled.img<{ scaleX:string ,newWidth?:boolean}>`
    border: 0;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    transform: scaleX(${props=>props.scaleX});

    @media(max-width:1000px){
        max-width:${props=>props.newWidth ?'180' :'350'}px;
        margin: auto;
        display: block;
    }
    @media(max-width:600px){
        max-width:${props=>props.newWidth ?'150' :'250'}px;
    }
    @media(max-width:405px){
        max-width:${props=>props.newWidth ?'120' :'200'}px;
    }
`
import styled from "styled-components";

type propsButton = {
    colorTextPrimary:string,
    colorShadowPrimary:string,
    colorShadowSecondary:string,
    bgGradientPrimary:string,
    bgGradientSecondary:string,
    bgGradientBeforePrimary:string,
    bgGradientBeforeSecondary:string, 
    colorHover:string
}

export const Container = styled.div < {bg:string, modal:boolean} >`
    background-color: ${props=> props.bg};
    display:flex;
    gap:30px;
    position: relative;
    padding: 30px;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    transition: opacity 0.3s ease;

    opacity: ${(props) => (props.modal ? 1 : 0)};
    pointer-events: ${(props) => (props.modal ? 'auto' : 'none')};
   

    @media(max-width:850px){
        flex-direction: column;
        border-radius: 0px;
        padding-top:20px;
    }
    @media(max-width:550px){
        width:100%;
        min-height:100%;
        border-radius: 0px;
        padding:30px 20px;
    }
    @media(max-width:370px){
        padding: 30px 16px;
    }
 
`
export const AreaImg = styled.div`
    padding-top: 30px;
    
    @media(max-width:550px){
       margin-top: 10px;
    }
`
export const AreaInfo = styled.div`
    padding-top: 30px;
    max-width:500px;
    display: flex;
    flex-direction: column;

    @media(max-width:850px){
        max-width:100%
    }

    @media(max-width:550px){
        padding-top: 20px;
    }
`
export const Title = styled.h2<{colorTextPrimary:string}>`
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom:12px;
    color:${props=> props.colorTextPrimary};

    @media(max-width:600px){
        font-size: 30px;
    }
    @media(max-width:405px){
        font-size: 26px;
    }
    @media(max-width:365px){
        font-size: 22px;
    }
`
export const Description = styled.p <{ colorTextSecondary:string}>`
    color:${props=> props.colorTextSecondary};
    font-size: 15px;
    line-height: 26px;
    opacity: 0.9;
    max-width:450px;
    @media(max-width:850px){
        max-width:100%
    }
  
    
    @media(max-width:550px){
        font-size: 14px;
    }

`
export const AreaTechnology = styled.div`
    max-width:500px;
    padding-bottom:40px;
    @media(max-width:550px){
        max-width:300px;
    }
  
`

export const TitleTechnology = styled.h3<{colorText:string}>`
    font-size: 18px;
    font-weight: 600;
    padding:20px 0;
    letter-spacing: 2px;
    color:${props=> props.colorText}
`
export const AreaSvg = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:8px;
`
export const Svg = styled.img`
    height: 24px;
    @media(max-width:370px){
        height: 20px;
    }
`

export const Areabutton = styled.div`
    flex:1;
    display: flex;
    justify-content: end;
    align-items: end;
    gap:50px;

    @media(max-width:850px){
        gap:20px;
    }
`

export const Button = styled.div<propsButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    background: linear-gradient(145deg, ${props=>props.bgGradientPrimary}, ${props=>props.bgGradientSecondary});
    box-shadow: 10px 10px 10px ${props=>props.colorShadowPrimary},-10px -10px 10px ${props=>props.colorShadowSecondary};
    position: relative;
    border-radius: 4px;
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
   
    &:hover::before{
        opacity: 1;
        z-index: 99;
    }
    &:hover > a{
        color :${props=>props.colorHover};
    }
    &:hover> a svg{
        fill:#FFF;   
    }
   
    @media(max-width:1000px){
        box-shadow: 5px 5px 1px ${props=>props.colorShadowPrimary}, -1px -1px 2px ${props=>props.colorShadowSecondary};
    }

    @media(max-width:550px){
        padding: 12px 16px;
    }
`
export const Link = styled.a<{colorTextPrimary:string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:8px;
    text-decoration: none;
    font-size:18px;   
    z-index: 999;
    color : ${props=> props.colorTextPrimary};
    transition: all ease-in-out 0.4s;
    svg{
        z-index: 999;
        fill: ${props=> props.colorTextPrimary};
        transition: transform ease .8s;
        display: block;
        font-size:18px;      
    }

    @media(max-width:550px){
        font-size:16px;
        svg{
            font-size:16px;
        }
    }

    @media(max-width:330px){
        gap:6px;
        font-size:13px
        svg{
            font-size:13px;
        }
    }
`
export const ButtonClose = styled.div<{ bgGradientPrimary:string,bgGradientSecondary:string,colorShadowPrimary:string,colorShadowSecondary:string}>`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg,${props=>props.bgGradientPrimary},${props=>props.bgGradientSecondary});
    box-shadow: 5px 5px 1px ${props=>props.colorShadowPrimary}, -1px -1px 2px ${props=>props.colorShadowSecondary};
    font-size:26px;
    color:#FF014F;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 12px;

`
import styled from "styled-components";

export const Container = styled.div`
    flex:1;
    display:flex;
`
export const AreaContainer = styled.div`
    flex:1;
    max-width:1024px;
    margin:0 auto;
    display: flex;
    padding:30px 0;
    position: relative;
    overflow: hidden;

    .left{
        padding:0 20px ;
    }
  

    @media(max-width:1000px){
        flex-direction: column-reverse;
        gap:40px;
        padding-top:0px;
        padding-bottom: 40px;
 
        .left{
            padding:0 10px;
        }
        .right{
            padding:0 10px;
        }
    }
`
export const AreaInfo = styled.div`

`
export const Title = styled.h1<{colorTextPrimary:string, colorHighlight:string}>`
    font-size: 46px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom:22px;
    color:${props=> props.colorTextPrimary};

    span{
        color:${props=> props.colorHighlight};
    }

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
export const Typer = styled.div <{ colorTextPrimary:string}>`
    span{
        font-weight: 600;
        font-size: 38px;
        color:${props=> props.colorTextPrimary};    
    }
    @media(max-width:600px){
       span{
        font-size: 26px;
       }
    }
    @media(max-width:405px){
        span{
            font-size: 22px;
           }
    }
    @media(max-width:365px){
        span{
            font-size: 18px;
           }
    }

`
export const Description = styled.div <{ colorTextSecondary:string}>`
    color:${props=> props.colorTextSecondary};
    font-size: 16px;
    line-height: 28px;
    padding-right: 16%;
    opacity: 0.9;

    @media(max-width:1000px){
        padding-right: 0;
    }
    @media(max-width:405px){
        font-size: 14px;
    }
`
export const AreaInfoContact = styled.div`
    display:flex;
    flex:1;
    align-items: center;
   
    @media(max-width:1000px){
        flex-direction: column-reverse;
    }
`
export const AreaSocial = styled.div`
    flex:1;
    height:50%;
    margin-top:36px;
    position: relative;
    
    @media(max-width:1000px){
        width: 100%;
    }
`
export const AreaSkills = styled.div`
    flex:1;   
    height:50%;
    margin-top:36px;
    @media(max-width:1000px){
        width: 100%;
    }
`
export const TitleSocial = styled.div<{  colorTextPrimary:string}>`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    margin-bottom: 24px;
    color:${props=> props. colorTextPrimary};
`
export const Social = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap:18px;
    position: absolute;
    
    @media(max-width:1000px){
        position: initial;
    }
`
export const Skills = styled.div`
    display:flex;
    align-items: center;
    justify-content:flex-start;
    gap:18px;
    position: absolute;
    @media(max-width:1000px){
        position: initial;
    }
`




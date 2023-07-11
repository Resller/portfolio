import styled from "styled-components";

export const Container = styled.div`
    flex:1;
    display: flex;
`
export const AreaContainer = styled.div`
    flex:1;
    max-width:1024px;
    margin:0 auto;
    display: flex;
    padding:30px 0;
    overflow: hidden;

    .left{
        padding:0 20px ;
        flex:1;
    }
    .right{
        flex:2;
        padding-left:30px;
    }

    @media(max-width:1000px){
        flex-direction: column;
        gap:40px;
        padding:20px 0;
        .left{
            padding:0 10px;
        }
        .right{
            padding:0 10px;
        }
    }
`
export const AreaInfo = styled.div`
    width:100%;
    @media(max-width:1000px){
        padding-bottom:20px;
    }
`
export const AreaTitle = styled.div`
    position:relative;
    margin-top:-38px;
    @media(max-width:1000px){
        margin-top:0;
    }

`
export const TitleBig = styled.h1<{colorTextBelow:string}>`
    font-size:50px;
    margin-bottom:20px;
    color:${props=> props.colorTextBelow};
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    font-weight: 900;
    @media(max-width:600px){
        font-size:50px;
    }
    @media(max-width:600px){
        display:none;
    }
`
export const TitleSmall = styled.h2<{colorHighlight:string}>`
    font-size: 40px;
    font-weight: 700;
    color:${props=> props.colorHighlight};
    @media(max-width:600px){
        font-size:40px;
    }
   
`
export const AreaDescription = styled.p`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
   
`
export const Description = styled.div <{ colorTextSecondary:string}>`
    color:${props=> props.colorTextSecondary};
    font-size: 15px;
    line-height: 22px;
    @media(max-width:400px){
       font-size: 14px;
    }
`



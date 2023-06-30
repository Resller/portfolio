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
        flex:1;
    }
    .right{
        flex:1;
    }

    @media(max-width:1000px){
        flex-direction: column-reverse;
        gap:40px;
        padding-top:0px;
        padding-bottom: 40px;
    }
`
export const AreaTitleSkills = styled.div`
    position:relative;
    margin-top:-38px;
`
export const TitleBig = styled.h1<{colorTextBelow:string}>`
    font-size:5vw;
    margin-bottom:20px;
    color:${props=> props.colorTextBelow};
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    font-weight: 900;
`
export const TitleSmall = styled.h2<{colorHighlight:string}>`
    font-size: 50px;
    font-weight: 700;
    color:${props=> props.colorHighlight};
   
`

export const AreaSkills = styled.div`

`
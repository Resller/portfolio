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
    overflow: hidden;
    flex-direction: column;

    .right{
        flex:1;
        padding:0 20px ;
    }
    
    .left{
        width:100%;
        display: flex;
        justify-content: center;
       
    }

    @media(max-width:1000px){
        padding:30px 20px;
    }
`
export const AreaTitleSkills = styled.div`
    position:relative;
`
export const TitleBig = styled.h1<{colorTextBelow:string}>`
    font-size:70px;
    color:${props=> props.colorTextBelow};
    z-index: -1;
    font-weight: 900;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    @media(max-width:600px){
        font-size:50px;
    }
    @media(max-width:600px){
        display:none;
    }

`
export const TitleSmall = styled.h2<{colorHighlight:string}>`
    font-size: 46px;
    font-weight: 700;
    color:${props=> props.colorHighlight};
    text-align: center;
    width:100%;
    
    @media(max-width:600px){
        font-size:36px;
    }
    @media(max-width:400px){
        font-size:27px;
    }
`

export const AreaSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    padding:50px 0 ;
    
    @media(max-width:600px){
        grid-template-columns: repeat(2,1fr);
        padding:0 ;
        padding-top:40px;
    }
    @media(max-width:400px){
        grid-template-columns: repeat(2,1fr);
    }
`
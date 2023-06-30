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
    gap:20px;
    overflow: hidden;

    .left{
        flex:1;
        padding:0 20px;
    }
    .right{
        flex:1;
    }

    @media(max-width:1000px){
        flex-direction: column;
        gap:40px;
        padding:20px 10px;
        .left{
            flex:1;
            padding:0;
            padding-bottom:30px;
        }
       
    }
    @media(max-width:800px){
        gap:30px;
    } 
    @media(max-width:500px){
        gap:20px;
    } 
`

export const AreaInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const AreaPerson = styled.div`
    display: flex;
    align-items: end;
    gap:20px;
    padding:20px 0;
    
    @media(max-width:1000px){
        padding:0;
        padding-bottom:20px;
    } 

`
export const AreaPhotoContact = styled.div`
    width: 150px;
    @media(max-width:1000px){
        width: auto;
    }
`
export const PhotoContact = styled.img`
    width:100%;
    object-fit: cover;
    height: auto;
`
export const InfoPerson = styled.div`
    flex:1;
`

export const Name = styled.h2<{colorTextPrimary:string}>`
    font-size: 32px;
    font-weight: 700;
    color:${props=> props.colorTextPrimary};
    
    @media(max-width:500px){
        font-size: 26px;
    } 
    @media(max-width:375px){
        font-size: 22px;
    } 
`

export const Profession = styled.h4<{colorTextSecondary:string}>`
    font-size: 22px ;
    font-weight: 600;
    color:${props=> props.colorTextSecondary};
    opacity: 0.9;

    @media(max-width:500px){
        font-size: 16px;
    } 
    @media(max-width:375px){
        font-size: 14px;
    } 

`

export const Description = styled.p<{colorTextSecondary:string}>`
    color:${props=> props.colorTextSecondary};
    font-size: 16px;
    line-height: 26px;
    opacity: 0.9;
    
    @media(max-width:375px){
        font-size: 14px;
    } 

`

export const Email = styled.div<{colorTextPrimary:string,colorTextSecondary:string}>`
    padding:30px 0;
    span{
        font-size: 16px ;
        font-weight: 400;
        color:${props=> props.colorTextSecondary};
    }
    a{
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 16px ;
        color:${props=> props.colorTextPrimary};
    }
`


export const TitleIcons = styled.div<{colorTextPrimary:string}>`
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    margin-bottom: 24px;
    color:${props=> props. colorTextPrimary};

    @media(max-width:500px){
        font-size: 15px;
        letter-spacing: 1.5px;
    } 

`

export const AreaIcons = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    gap:20px;
    padding-bottom:20px;
`
export const AreaTitle = styled.div`
    position:relative;
    margin-bottom:20px;
`
export const TitleSmall = styled.h2<{colorHighlight:string}>`
    font-size: 50px;
    font-weight: 700;
    color:${props=> props.colorHighlight};

    @media(max-width:1000px){
        font-size: 40px;
    }
    @media(max-width:500px){
        font-size: 26px;
    } 

`

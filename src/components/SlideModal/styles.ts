import styled from "styled-components";

type propsCard = {
    bgGradientP:string, 
    bgGradientS:string, 
    shadowP:string, 
    shadowS:string, 
    activeSlide:number, 
    index:number 
}

export const Container = styled.div`
    width:100%;

    .swiper-slide {
        width: 310px;
        height: auto;
        display: flex;
        flex-direction: column;
        transition: all linear .8s;
    }

`


export const Img = styled.img`
    display: block;
    width: 100%;
    border-radius: 10px;
    height:340px;
    object-fit: cover;
    object-position: top center;

    @media(max-width:370px){
        width:280px;
        height:300px;
        margin:auto;
    }
   
`
    

export const Controler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    transition: all linear .4s;

`

export const Pagination = styled.div<{colorActive:string,bgGradientPrimary:string,bgGradientSecondary:string}>`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    
    .swiper-pagination-bullet-active{
        background:${props=> props.colorActive};
    }
    
    .swiper-pagination-bullet{
        width:11px;
        height:11px;
        margin: 4px;
        box-shadow:1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.7) inset;
    }
    
`

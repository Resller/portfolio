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
    padding-top:30px;
   
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 292px;
        height: 290px;
        position: relative;

        @media (max-width: 340px) {
            width: 242px;
            height: 240px;
        }
    }

   
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
      display: none;
    }

    @media (max-width: 1100px) {
        .swiper{
            width:100%;
        }
    }

    @media (max-width: 750px) {
        .swiper{
            width:100%;
        }
    }
    @media (max-width:  370px) {
        .swiper{
            width: 250px;
        }
    }
`

export const AreaCard = styled.div<propsCard>`
    background: linear-gradient(145deg,${props=> props.bgGradientP},${props=> props.bgGradientS});
    padding:20px;
    border-radius: 10px;
    position: relative;
    transition: all linear .2s;
    ${(props)=> 
        props.activeSlide === props.index && 
        `
            box-shadow:4px 4px 6px ${props.shadowP}, -4px -4px 6px ${ props.shadowS};

        `
    }
`
export const Background = styled.div`
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0, 0, 0.5);
`
export const Img = styled.img`
    display: block;
    width: 100%;
    border-radius: 10px;
    height:240px;
    object-fit: cover;
    object-position: top center;
   
    @media (max-width: 340px) {
        height: 220px;
    }
`
export const AreaInfo = styled.div<{colorHighlight:string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:30px;
    cursor: pointer;
    &:hover > h3{
        color: ${props => props.colorHighlight};
    }
    &:hover > div > svg{
        margin-bottom: 0px;
        opacity:1;  
    }
`
export const Title = styled.h3<{colorText:string}>`
    display: block;
    font-size: 22px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    letter-spacing: 0.5px;
    text-align: left;
    position: relative;
    color: ${props => props.colorText};
    transition: all linear .2s;
    
`
export const ViewMore = styled.div<{colorHighlight:string}>`
    display: flex;
    align-items: center;
    gap:4px;
    span{
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.5px;
        color: ${props => props.colorHighlight};
    }
    svg{
        fill: ${props => props.colorHighlight};
        transform: rotate(45deg);
        margin-bottom: -10px;
        opacity:0;
        transition: all linear .2s;

    }
`
export const Controler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    @media (max-width: 1000px) {
      padding:0 20px;
    }
`
export const NextAndPrev = styled.div<{colorSvg:string}>`
    cursor: pointer;
    svg{
        fill:${props=> props.colorSvg};
        font-size:30px;
    }

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

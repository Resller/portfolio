import styled from "styled-components";
import { motion } from 'framer-motion';

type props = {
    colorTextPrimary:string
    colorShadowPrimary:string,
    colorShadowSecondary:string,
    bgGradientPrimary:string,
    bgGradientSecondary:string,
    bgGradientBeforePrimary:string,
    bgGradientBeforeSecondary:string
}

export const Container = styled(motion.div)<props>`
    background: linear-gradient(145deg, ${props=>props.bgGradientPrimary}, ${props=>props.bgGradientSecondary});
    box-shadow: 5px 5px 10px, ${props=>props.colorShadowPrimary}, -5px -5px 10px, ${props=>props.colorShadowSecondary};
    position: relative;
    border-radius: 8px;
    cursor: pointer;
    transition: all ease-in-out 0.4s;
    padding:20px;

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

    &:hover::before{
        opacity: 1;
        z-index: 50;
    }  
`
export const AreaCardImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`
export const CardImg = styled.img`
   width:100%;
    object-fit: cover;
    z-index: 999;
`
export const CardName = styled.div`
    z-index: 999;
`
export const ViewMore = styled.button`
    z-index: 999;
`
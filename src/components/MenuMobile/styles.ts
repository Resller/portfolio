import styled from "styled-components";

export const Container = styled.div <{changeMobile:boolean}>`
    content: "";
    z-index: 9999;
    position: ${props=> props.changeMobile ? ' absolute':'inherit'};
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.5s ease-out;
    overflow-y: hidden;
`
export const AreaMenu = styled.div<{ bgGradientPrimary:string,bgGradientSecondary:string,changeMobile:boolean}>`
    padding: 25px 40px;
    width: 350px;
    z-index: 9999;
    position: absolute;
    background: linear-gradient(145deg,${props=>props.bgGradientPrimary},${props=>props.bgGradientSecondary});
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
    margin-left: ${props=> props.changeMobile ? '0':'-390'}px;
    transition: all 0.5s ease-out;
    overflow-y: auto;
    height: 100vh;

    @media(max-width:350px){
        width:100%;
        padding: 25px 20px;
    }
`
export const AreaTop =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Discription =styled.p<{colorTextSecondary:string}>`
    display: block;
    padding-top: 15px;
    color:${props=> props.colorTextSecondary} ;
    font-size: 14px;
    line-height: 26px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
`
export const AreaList =styled.div`
    padding: 30px 0 ;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex:1;
`
export const AreaFoot =styled.div`
    
`
export const Txt =styled.h3 <{color:string}>`
    padding: 30px 0;
    color: ${props=>props.color};
    font-size:14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
`
export const AreaSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:18px;

    a{
        cursor: pointer;
    }
`
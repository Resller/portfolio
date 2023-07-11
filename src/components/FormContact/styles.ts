import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const FormArea = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 999;
    transition: all .4s;
`
export const Label = styled.label<{color:string}>`
    font-size: 14px;
    color: ${props=>props.color};
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: left;
    display: block;
`
export const Input = styled.input<{bgInput:string, colorPrimary:string}>`
    background-color:${props=>props.bgInput};
    border-radius: 3px;
    height: 40px;
    border: 2px solid ${props=>props.bgInput};
    padding: 0 15px;
    font-size: 16px;
    color:  ${props=>props.colorPrimary};
    box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
    letter-spacing: 1px;
    outline: none;
`
export const Textarea = styled.textarea<{bgInput:string, colorPrimary:string}>`
    background-color:${props=>props.bgInput};
    border-radius: 3px;
    height: 85px;
    transition:  0.4s;
    border: 2px solid ${props=>props.bgInput};
    padding: 5px 15px;
    font-size: 14px;
    color:  ${props=>props.colorPrimary};
    box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
    letter-spacing: 1px;
    overflow: auto;
    resize: none;
    outline: none;
`
type buttonProps = {
    bgButton:string, 
    color:string, 
    colorShadowPrimary:string, 
    colorShadowSecondary:string, 
    bgGradientBeforePrimary : string
    bgGradientBeforeSecondary:string,
    bgBefore:string,
    sendLoading:boolean
}
export const Button = styled.button<buttonProps>`
    width:120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    padding:8px 0;
    border-radius: 4px;
    border:0;
    cursor: pointer;
    box-shadow: 5px 5px 10px ${props=>props.colorShadowPrimary}, -5px -5px 10px ${props=>props.colorShadowSecondary};
    margin-left:auto;
    background-color:${props=>props.bgButton};
    margin-top:20px;
    font-weight: 500;
    position: relative;

    span{
        font-size: 16px;
        color:  ${props=>props.color};
        z-index:999;
    }

    &::before{
        content: "";
        position: absolute;
        transition: 0.4s;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        top: 0px;
        left: 0;
        background:${props=>props.bgBefore};
        opacity: 0;
        z-index: -1;
    }

    &:hover::before{
        opacity:1;
        z-index:9;
    } 
    svg{
        font-size: 18px;
        cursor: pointer;
        fill: ${props=>props.color};
        z-index:999;
        animation:${ props=> props.sendLoading ? ' rotate 1s linear infinite':'none'};
    }
    @keyframes rotate {
        0% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(0deg);
    }


`
export const AreaError = styled.span`
    margin-top: -5px;
    color: #FFF;
    background-color: #F00;
    font-size: 12px;
    padding:3px;
    font-weight: 400;
    transition: all ease .2s;
    opacity: 0;
`
export const AreaModal = styled.div<{ modal:boolean}>`
   padding-top:20px;
   opacity : ${props=>props.modal? '1':'0'};
   transition: all .4s;
`
import styled from "styled-components";

export const Container = styled.div <{send:boolean, bgP:string, bgS:string}>`
    display: flex;
    align-items: center;
    gap:16px;
    padding: 0 16px;
    border-left: solid 2px ${props=>props.send? '#6AC259':'#FF014F'};
    transition: all .4s;
`
export const AreaIcon = styled.div <{send:boolean}>`
    width: 20px;
    svg{
        width: 20px;
        fill:${props=>props.send? '#6AC259':'#FF014F'};
    }  
`
export const AreaTxt = styled.div<{color:string}>`
    display: flex;
    flex-direction: column;
    gap: 3px;
    span{
        color: ${props=>props.color};
        font-size: 14px;
        letter-spacing: 2px;
   }
`
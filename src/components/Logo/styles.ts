import styled from "styled-components";

export const Container = styled.div<{borderColor:string}>`
    width: 68px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 50%;
    border: solid 1px${props=>props.borderColor};
`

export const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
`
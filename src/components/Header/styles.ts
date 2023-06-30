import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 110px;
  padding: 0 64px;
 

  @media(max-width:1000px){
    padding: 0 10px;
    height: 62px;
  }
`
export const Area = styled.div`
  margin:auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap:80px;
  height: inherit;
  
  @media(max-width:1000px){
    display:none;
  }
`
export const AreaMobile = styled.div`
  display:none;  
  margin:auto;
  width: 100%;
  height: inherit;
  
  @media(max-width:1000px){
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
`
export const Nav = styled.nav`
  flex:1;
  display: flex;

`
export const ButtonMobile = styled.div <{colorPrimary:string}>`

  svg{
    fill:${props=> props.colorPrimary};
    font-size:32px;
    cursor: pointer;
  }
`


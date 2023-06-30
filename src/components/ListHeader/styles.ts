import styled from "styled-components";

type props = {
    direction:string, 
    gap:string,
    align:string,
    justify :string
}

export const Ul = styled.ul <props>`
  flex:1;
  display: flex;
  flex-direction:${props=> props.direction} ;
  align-items: ${props=> props.align};
  justify-content:${props=> props.justify};
  gap:${props=> props.gap}px;
  list-style: none;
`

export const Li = styled.li <{ colorTextSecondary:string,colorTextHover:string, bgBar:string}>`
  a{
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color:${props => props.colorTextSecondary};
    text-transform: uppercase;
    font-size: 13px;
    transition: all ease 0.3s;
    
    &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -5px;
      left: 0;
      background: ${props => props.bgBar};
      visibility: visible;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    
    &:hover::before{
      transform: scaleX(1);
    }

    &:hover{
      color:${props => props.colorTextHover};
    }
  }
  
  a.active{
    color:${props => props.colorTextHover};
    &::before{
      transform: scaleX(1);
    }
  }
`
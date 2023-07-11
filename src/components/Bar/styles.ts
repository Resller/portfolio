import styled from "styled-components";

type propsContainer = {
    bgGradientP:string, 
    bgGradientS:string, 
    shadowP:string, 
    shadowS:string,
}

type propsSection = {
    bgGradientP:string, 
    bgGradientS:string, 
    shadowP:string, 
    shadowS:string,
    colorP:string,
    colorH : string,
    card:string,
    title:string
}

export const Container = styled.div < propsContainer >`
    border-radius:10px;
    background: linear-gradient(145deg,${props=> props.bgGradientP},${props=> props.bgGradientS});
    box-shadow: 5px 5px 10px ${props=> props.shadowP}, -5px -5px 10px ${props=> props.shadowS};
    display:flex;
    gap:6px;
    transition: all linear 0.4s;
`
export const Section = styled.div< propsSection >`
    display:flex;
    gap:20px;
    align-items: center;
    padding: 12px 34px;
    border-radius: 10px;
    background: transparent;
    border: 0 none;
    transition: all linear 0.4s;
    background: transparent;
    color:${props=> props.colorP};
    cursor: pointer;
   
    &:hover{
        background: linear-gradient(145deg,${props=> props.bgGradientP},${props=> props.bgGradientS});
        box-shadow: 5px 5px 10px ${props=> props.shadowP}, -5px -5px 10px ${props=> props.shadowS};
        color:${props=> props.colorH};
    }

    ${(props) =>
        props.card == props.title &&  
        `
            background: linear-gradient(145deg,${props.bgGradientP},${ props.bgGradientS});
            box-shadow: 5px 5px 10px ${props.shadowP}, -5px -5px 10px ${ props.shadowS};
            color:${props.colorH};
        `
    }
    @media (max-width: 750px) {
        padding: 10px 24px;
    }
    @media (max-width: 450px) {
        padding: 10px 16px;
    }
`
export const icon = styled.img`
    width:20px;
    @media (max-width: 350px) {
        width:16px;
    }
`
export const name = styled.div`
    color: inherit;
    font-size:18px ;
    font-weight: 500;
    @media (max-width: 450px) {
        font-size:16px;
    }
   
`
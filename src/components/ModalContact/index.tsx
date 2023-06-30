import * as C from './styles'

type props = {
    txt :string
    send: boolean,
    icon : JSX.Element,
    bgP :string,
    bgS : string,
    color:string
}

export const ModalContact = ({txt, send, icon, bgP, bgS, color}:props)=>{

    let newTxt = txt.split('/')

    return(
       <C.Container 
            send = {send}
            bgP = {bgP}
            bgS = {bgS}
        >
            <C.AreaIcon send = {send}>{icon}</C.AreaIcon>
            <C.AreaTxt color ={color}>
                {newTxt.length &&
                   newTxt.map((i,k)=>(    
                    <span key={k}>{i}</span>                                    
                   ))
                }
            </C.AreaTxt>
       </C.Container>
    )
}
import * as C from './styles'

import { Context  } from '../../context/Context';
import { useContext, useState} from 'react';

import { IoSend } from "react-icons/io5";
import { sendMessage } from '../../helpers/helpers';

import { FaHistory , FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

import { ModalContact } from '../ModalContact';

export const FormContact = ()=>{
    const {state} = useContext(Context);

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [txtModal,setTxtModal]= useState<string>('')
    const [loading,setLoading] = useState<boolean>(false);
    const [sendSuccess,setSendSuccess] = useState <boolean>(false);
    const [modal,setModal] = useState <boolean>(false)
    const [iconModal,setIconModal] = useState<JSX.Element>(<FaRegCheckCircle/>)

    const handleForm = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true)
        let response = await sendMessage(name,email,message);
        if(response.status === 200){
                setName('');
                setEmail('');
                setMessage('');
                setTxtModal('Messagem enviado com sucesso / obrigado pelo Contato 😀')
                setSendSuccess(true)
                setIconModal(<FaRegCheckCircle/>)
        }else{
            setTxtModal('Erro no envio tente novamente')
            setIconModal(<FaRegTimesCircle/>)
            setSendSuccess(false)
        }

        setLoading(false)
        setModal (true)
        setTimeout(()=>{
            setModal(false)
        },3000)
    }

    return(
        <C.Container>
            <C.FormArea onSubmit={handleForm}>
                    <C.Label    
                       color = {state.theme.colorTextLabel}
                    >
                        Nome:
                    </C.Label>
                    <C.Input
                        onChange={e=>setName(e.target.value)}
                        value={name}
                        type='text' 
                        required
                        bgInput = {state.theme.bgInput} 
                        colorPrimary = {state.theme.colorTextPrimary}
                    />                   
                    <C.Label
                        color = {state.theme.colorTextLabel}
                    >
                        Email:
                    </C.Label>
                    <C.Input 
                        onChange={e=>setEmail(e.target.value)}
                        value={email}
                        type='email' 
                        required
                        bgInput = {state.theme.bgInput} 
                        colorPrimary = {state.theme.colorTextPrimary}
                    />     
                    <C.Label
                        color = {state.theme.colorTextLabel}
                    >
                        Mensagem:
                    </C.Label>
                    <C.Textarea
                        onChange={e=>setMessage(e.target.value)}
                        value={message}
                        required
                        bgInput = {state.theme.bgInput} 
                        colorPrimary = {state.theme.colorTextPrimary}
                    >
                    </C.Textarea>
                    <C.Button 
                        bgButton={state.theme.colorHighlight}
                        color={state.theme.bg}
                        colorShadowPrimary = {state.theme.colorShadowPrimary}
                        colorShadowSecondary  = {state.theme.colorShadowPrimary} 
                        bgGradientBeforePrimary = {state.theme.bgGradientBeforePrimary}
                        bgGradientBeforeSecondary = {state.theme.bgGradientBeforeSecondary}
                        bgBefore= {state.theme.bgBeforeButton}
                        loading = {loading}
                    >
                       <span>Enviar </span> {loading && <FaHistory/> } {!loading && <IoSend/> } 
                    </C.Button>
                    {modal &&
                        <C.AreaModal   modal = {modal}>
                            <ModalContact
                                txt={txtModal}
                                send = {sendSuccess}
                                icon = {iconModal}
                                bgP = {state.theme.bgGradientPrimary}
                                bgS = {state.theme.bgGradientSecondary}
                                color= {state.theme.colorTextPrimary}
                            />
                        </C.AreaModal>
                    }
            </C.FormArea>
       </C.Container>
    )
}
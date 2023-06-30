import * as C from './styles'
import logo from '../../img/logoPortfolio.png'

import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'

type props = {
    setChangeMobile?:(i:boolean)=>void
}

export const Logo = ({ setChangeMobile}:props)=>{

    const {state} = useContext(Context)

    const toCheckFunction = ()=>{
        if(typeof setChangeMobile === 'function' && setChangeMobile !== undefined){
            setChangeMobile(false)
        }
    }
    
    return(
        <Link to='/'> 
            <C.Container 
                onClick={toCheckFunction}
                borderColor = {state.theme.colorShadowPrimary}>
                <C.LogoImg src={logo} />
            </C.Container>
       </Link>
    )
}
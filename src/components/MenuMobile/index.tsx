import * as C from './styles'

import { useContext } from 'react'
import { Context } from '../../context/Context'

import { ListHeader } from '../ListHeader'
import { Logo } from '../Logo'
import { Box } from '../Box'

import { Link } from 'react-router-dom'
import { listIconSocial } from '../../data/icons'

type props = {
    changeMobile:boolean
    setChangeMobile : (i:boolean)=>void
}

export const MenuMobile = ({  changeMobile,setChangeMobile}:props )=>{
    const {state} = useContext(Context)
    const discription  = 'Sou um desenvolvedor front-end apaixonado por transformar ideias em realidade através de interfaces web impressionantes e funcionais.'

    return(
        <C.Container 
            changeMobile = {changeMobile}
        >
            <C.AreaMenu
                bgGradientPrimary = {state.theme.bgGradientPrimary}
                bgGradientSecondary = {state.theme.bgGradientSecondary}
                changeMobile = {changeMobile}
            >
                <C.AreaTop>
                    <Logo  setChangeMobile = {setChangeMobile} />
                    <C.ButtonClose
                        onClick={()=>setChangeMobile(false)}
                        bgGradientPrimary = {state.theme.bgGradientPrimary}
                        bgGradientSecondary = {state.theme.bgGradientSecondary}
                        colorShadowPrimary = {state.theme.colorShadowPrimary}
                        colorShadowSecondary = {state.theme.colorShadowSecondary}
                    >
                        x
                    </C.ButtonClose>
                </C.AreaTop>
                <C.Discription
                    colorTextSecondary = {state.theme.colorTextSecondary}
                >
                    {discription}
                </C.Discription>
                <C.AreaList>
                    <ListHeader
                        direction = 'column'
                        gap='20'
                        align = 'start'
                        justify = 'flex-start'
                        setChangeMobile = {setChangeMobile}
                    />
                </C.AreaList>
                <C.AreaFoot>
                    <C.Txt color={state.theme.colorTextPrimary}>Conecte-se comigo</C.Txt>
                    <C.AreaSocial>
                        {listIconSocial.length > 0 &&
                            listIconSocial.map((i,k)=>(
                                <Link to={i.link} key={k} target="_blank" >
                                    <Box
                                        padding = '14'
                                        mobile = {true}
                                        hover = {false}
                                        sizeSvg  = '24'
                                        color= {state.theme.colorTextPrimary}
                                        iconSvg={i.iconSvg}
                                    />
                                </Link>
                            ))
                        }
                    </C.AreaSocial>
                </C.AreaFoot>
            </C.AreaMenu>
       </C.Container>
    )
}
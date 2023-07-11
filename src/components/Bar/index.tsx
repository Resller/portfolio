import * as C from './styles'
import { useContext} from 'react';
import { Context } from '../../context/Context';
import { ListCategoriesProjects } from '../../data/icons';

type props = {
    card:'React' | 'Javascript',
    setCard:( card:'React' | 'Javascript')=>void
}
export const Bar = ({card,setCard}:props)=>{
    const {state} = useContext(Context);
    
    const changeCard = (title:'React' | 'Javascript')=>{
        setCard(title)
    }
   
    return(
       <C.Container 
            bgGradientP={state.theme.bgGradientPrimary} 
            bgGradientS={state.theme.bgGradientSecondary}
            shadowP={state.theme.colorShadowPrimary}
            shadowS={state.theme.colorShadowSecondary}
        > 
        {ListCategoriesProjects &&
            ListCategoriesProjects.map((i,k)=>(
                <C.Section 
                    onClick={()=>changeCard(i.title)}
                    key={k}
                    bgGradientP={state.theme.bgGradientPrimary} 
                    bgGradientS={state.theme.bgGradientSecondary}
                    shadowP={state.theme.colorShadowPrimary}
                    shadowS={state.theme.colorShadowSecondary}
                    colorP={state.theme.colorTextPrimary}
                    colorH={state.theme.colorHighlight}
                    card = { card}
                    title = {i.title}
                >
                    <C.icon src={i.icon}/>
                    <C.name>{i.title}</C.name>
                </C.Section>
            ))
        }
       </C.Container>
    )
}
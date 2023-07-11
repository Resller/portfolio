import { typeDefaultAction, typeThemeInitialState } from "../types/typesReducer"

export const themeInitialState :typeThemeInitialState = {
    colorTextPrimary: '#FFF',
    colorTextSecondary:'#c4cfde',
    colorHighlight : '#ffbd39',
    colorTextBelow : 'rgba(255, 189, 57, 0.1)',
    colorTextHover:'#FFF',
    colorButtonHover:'#ffbd39',
    colorTextLabel : '#a0a8b3',
    colorShadowPrimary:'#1c1e22',
    colorShadowSecondary:'#262a2e',
    bg:'#212428',
    bgBar:'#ffbd39',
    bgGradientPrimary:'#1e2024',
    bgGradientSecondary:'#23272b',
    bgGradientBeforePrimary:' #212428',
    bgGradientBeforeSecondary :'#16181c',
    bgInput:'#191b1e',
    bgBeforeButton:'#faa600',
    darkMode : true
}

export const ThemeReducer = (state:typeThemeInitialState,action:typeDefaultAction)=>{
    switch(action.type){
        case 'CHANGE_LIGTH' : 
        return {...state,
            colorTextPrimary: '#1e2125',
            colorTextSecondary:'#3c3e41',
            colorHighlight : '#ff014f',
            colorTextBelow : 'rgba(255, 1, 79, 0.1)',
            colorTextHover:'#1e2125',
            colorButtonHover:'#fff',
            colorTextLabel : '#3c3e41',
            colorShadowPrimary:'#D1D9E6',
            colorShadowSecondary:'#FFF',
            bg:'#ECF0F3',
            bgBar:'#ff014f',
            bgGradientPrimary:'#e2e8ec',
            bgGradientSecondary:'#FFF',
            bgGradientBeforePrimary:' #ff014f',
            bgGradientBeforeSecondary :'#d11414',
            bgInput:'#FDFEFE',
            bgBeforeButton:'#cd003f',
            darkMode : false
        }
        case 'CHANGE_DARK':
            return {...state,
                colorTextPrimary: '#FFF',
                colorTextSecondary:'#c4cfde',
                colorHighlight : '#ffbd39',
                colorTextBelow : 'rgba(255, 189, 57, 0.1)',
                colorTextHover:'#FFF',
                colorButtonHover:'#ffbd39',
                colorTextLabel : '#a0a8b3',
                colorShadowPrimary:'#1c1e22',
                colorShadowSecondary:'#262a2e',
                bg:'#212428',
                bgBar:'#ffbd39',
                bgGradientPrimary:'#1e2024',
                bgGradientSecondary:'#23272b',
                bgGradientBeforePrimary:' #212428',
                bgGradientBeforeSecondary :'#16181c',
                bgInput:'#191b1e',
                bgBeforeButton:'#faa600',
                darkMode :true
            }
        default :
        return state
    }

}
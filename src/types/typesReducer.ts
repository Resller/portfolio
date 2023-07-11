export type typeDefaultAction = {
    type : string,
    payload : {
    [key:string]:any
    }
}

export type PropsChildren = {
    children : JSX.Element
}

export type typeThemeInitialState = {
    colorTextPrimary: string,
    colorTextSecondary: string,
    colorHighlight :string,
    colorTextBelow : string,
    colorTextHover : string,
    colorButtonHover:string,
    colorTextLabel : string,
    colorShadowPrimary:string,
    colorShadowSecondary:string,
    bg:string,
    bgBar:string;
    bgGradientPrimary:string,
    bgGradientSecondary:string,
    bgGradientBeforePrimary:string,
    bgGradientBeforeSecondary:string,
    bgInput:string,
    bgBeforeButton:string,
    darkMode : boolean
}

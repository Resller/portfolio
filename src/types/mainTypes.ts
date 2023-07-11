export type ListIconSkillsTypes = {
    url :string
}
export type ListIconSocialTypes = {
    link:string,
    iconSvg : JSX.Element
}
export type TxtTypes = {
    p :string
}
export type listProjectsTypes = {
    name:string,
    description : string, 
    link: string,
    repository :string,  
    mainPhoto:string,
    technology :technologytype[]
    listPhotos : string[]
}

export type ListCategoriesProjectsTypes = {
    title:'React' | 'Javascript',
    icon :string
}
type technologytype = {
    svg:string,
    title:string
}

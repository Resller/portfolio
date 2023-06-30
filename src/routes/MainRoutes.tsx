import {useLocation, useRoutes} from 'react-router-dom'

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Skills } from '../pages/Skills'; 
import { Contact } from '../pages/Contact';
import { NoFound } from '../pages/NoFound';
import { AnimatePresence } from 'framer-motion';
import * as React from "react";

export const MainRoutes = ()=>{
    const element = useRoutes ([
        {path:'/',element : <Home/>},
        {path:'/sobre',element : <About/>},
        {path:'/projetos',element : < Projects/>},
        {path:'/habilidades',element : <Skills/>},
        {path:'/contato',element : <Contact/>},
        {path:'*',element : <NoFound/>}
    ])


    const location = useLocation()

    if (!element) return null
  
    return (
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    )
  
}

import * as C from  './styles';

import { useContext, useState,  useEffect, useRef} from 'react';
import { Context } from '../../context/Context';

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { EffectCoverflow ,Pagination, Navigation} from 'swiper/modules';

import {FaArrowCircleRight, FaArrowCircleLeft , FaArrowUp } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { listProjectsReact } from '../../data/listProjectsReact';
import { listProjectsTypes } from '../../types/mainTypes';
import { listProjectsJs } from '../../data/listProjectsJs';

type props = {
    card:'React' | 'Javascript',
    setCard:( card:'React' | 'Javascript')=>void,
    setModal:(b:boolean)=>void,
    setProjectModal:(i:listProjectsTypes)=>void
}

export const Slide =({card, setCard, setModal, setProjectModal}:props)=> {
    const {state} = useContext(Context);

    const [listProjects,setListProjects] = useState<listProjectsTypes[]>(listProjectsReact);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const swiperRef = useRef<SwiperRef>(null);
    const swiperApi = swiperRef.current?.swiper;

    useEffect(()=>{
        switch(card){
            case 'React' :
                setListProjects(listProjectsReact)
            break
            case 'Javascript' :
                setListProjects(listProjectsJs)
            break
        }
    },[card])

        const openModal = (i:listProjectsTypes)=>{
            setModal(true);
            setProjectModal(i)
        }

    return (
        <C.Container>
            <Swiper
                ref={swiperRef}
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={{ el: '.ball', clickable: true }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev'
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                onSlideChange={(e) => setActiveSlide(e.activeIndex)}
            >
                {listProjects.map((i,k)=>(
                    <SwiperSlide key={k}>
                        <C.AreaCard
                            bgGradientP={state.theme.bgGradientPrimary} 
                            bgGradientS={state.theme.bgGradientSecondary}
                            shadowP={state.theme.colorShadowPrimary}
                            shadowS={state.theme.colorShadowSecondary}
                            activeSlide = {activeSlide}
                            index = {k}                        
                        > 
                            <C.Img src = {i.mainPhoto}/>
                            <C.AreaInfo 
                                onClick={()=>openModal(i)}
                                colorHighlight={state.theme.colorHighlight}
                            >
                                <C.Title colorText={state.theme.colorTextPrimary}>{i.name}</C.Title>
                                <C.ViewMore
                                    colorHighlight={state.theme.colorHighlight}
                                >
                                    <span> Ver mais  </span> 
                                    <FaArrowUp/>
                                </C.ViewMore>
                            </C.AreaInfo>
                            {activeSlide !== k &&
                            <C.Background></C.Background>
                            }
                        </C.AreaCard>
                    </SwiperSlide>
                ))}
              
                <C.Controler className="slider-controler">
                    <C.NextAndPrev className="prev slider-arrow" colorSvg= {state.theme.colorHighlight}>
                        <FaArrowCircleLeft/>
                    </C.NextAndPrev>
                    <C.Pagination className="ball" 
                        colorActive =  {state.theme.colorHighlight}
                        bgGradientPrimary = {state.theme.  bgGradientPrimary}
                        bgGradientSecondary =  '#000'
                    >
                    </C.Pagination>
                    <C.NextAndPrev className="next slider-arrow" colorSvg= {state.theme.colorHighlight}>
                        <FaArrowCircleRight/>
                    </C.NextAndPrev>
                </C.Controler>
          </Swiper>
        </C.Container>
    )
}



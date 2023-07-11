import * as C from  './styles';

import { useContext} from 'react';
import { Context } from '../../context/Context';

import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCreative ,Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';


type props = {
   data : string[]
   title:string
}

export const SlideModal =({data,title}:props)=> {
    const {state} = useContext(Context);

    return (
        <C.Container>
            <Swiper
                effect={'creative'}
                loop= {true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ['100%', 0, 0],
                    },
                  }}
                pagination={{ el: '.ball', clickable: true}}
                modules={[EffectCreative, Pagination,Autoplay]}
                className='swiper-slide'
            >
                {data.map((i,k)=>(
                    <SwiperSlide key={k}>
                        <C.Img src = {i} alt={title}/>    
                    </SwiperSlide>
                ))}
                <C.Controler className="slider-controler">      
                    <C.Pagination className="ball" 
                        colorActive =  {state.theme.colorHighlight}
                        bgGradientPrimary = {state.theme.  bgGradientPrimary}
                        bgGradientSecondary =  '#000'
                    >
                    </C.Pagination>  
                </C.Controler>
          </Swiper>
        </C.Container>
    )
}



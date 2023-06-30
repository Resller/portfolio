import { motion } from 'framer-motion';

type props = {
    children : JSX.Element
}
export const MotionRight = ({children}:props)=>{
    return(
        <motion.div 
            initial={{ x: '-100%' ,opacity: 0 }}
            animate={{ x:'0', opacity: 1}}
            exit={{ x:'-100%' ,opacity: 0 }}
            transition={{
                    ease: "easeOut",
                    duration: 1 ,
                    x: { duration:1}, 
                }}
            className='right'
        >
            {children}
        </motion.div>
    )
}
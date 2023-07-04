import React from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 


interface SlideProps {
    left?: boolean; 
    children: React.ReactNode;
}; 

const Slide: React.FC<SlideProps> = ({ left, children }) => {
    const { ref, inView } = useInView({ threshold: 0 }); 
    const variants = {
        hidden: { opacity: 0, x: left ? 200 : -200} , 
        show: { opacity: 1, x: 0 }
    }; 

    return (
        <div ref={ref}>
            <motion.div 
                initial={false}
                animate={inView ? 'show' : 'hidden'}
                exit={'false'}
                variants={variants}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </div>
    )
}; 

export default Slide; 
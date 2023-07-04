import React, { useState } from "react";
import { motion } from 'framer-motion';


interface HoverGrowImageProps {
    image?: {
        src: string; 
        alt: string; 
    }; 
    className?: string; 
}; 

const HoverGrowImage: React.FC<HoverGrowImageProps> = ({ image, className }) => {
    const [hovered, setHovered] = useState<true | false>(false); 

    return (
        <motion.div    
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={className}
            initial={false}
            animate={hovered ? 'hover' : 'normal'}
            variants={{
                hover: { scale: 1.05 }, 
                normal: { scale: 1 }
            }}
            transition={{ duration: 0.5, type: 'spring', damping: 10, stiffness: 100 }}
        >
            <img 
                src={image?.src ? image?.src : ''}
                alt={image?.alt}
                className='w-full'
            />
        </motion.div>
    )
}; 

export default HoverGrowImage; 
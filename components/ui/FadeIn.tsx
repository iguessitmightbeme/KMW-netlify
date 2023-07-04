import { motion} from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 


interface FadeInProps {
    children: React.ReactNode;
    className?: string;
}; 

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
    const { ref, inView } = useInView({
        threshold: 0
    })

    const transition = {
        duration: 0.8, 
        delay: 0.2, 
        ease: 'easeInOut'
    };

    const variants={
        hidden: {
            scale: 0, 
            opacity: 0, 
            transition
        }, 
        show: {
            scale: 1, 
            opacity: 1, 
            transition
        }
    };

    return (
        <div ref={ref}>
            <motion.div
                variants={variants}
                animate={inView ? 'show' : 'hidden'}
                initial='hidden'
                exit='hidden'
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
};

export default FadeIn; 
import React, { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";


interface ICount {
    numberInstallations: number; 
}; 

const Count: React.FC<ICount> = ({ numberInstallations }) => {
    const [count, setCount] = useState('0'); 
    const duration = '3'; 

    useEffect(() => {
        let start = 0; 
        const end = parseInt(String(numberInstallations).substring(0, 3)); 
        if (start === end) return; 

        let totalMilSecDur = parseInt(duration); 
        let incrementTime = (totalMilSecDur / end) * 1000; 

        let timer = setInterval(() => {
            start += 1; 
            setCount(String(start) + String(numberInstallations).substring(3)); 
            if (start === end) clearInterval(timer); 
        }, incrementTime); 
    }, [numberInstallations, duration]); 

    return (
        <div className="flex flex-row items-center">
            <p className="text-2xl text-contrastsecondary">
                {count}
            </p>
            <PlusIcon className="w-5 h-5 mr-2 text-contrastsecondary" />
            <p className="text-contrastsecondary text-2xl">Installations</p>
        </div>
    )
}

export default Count; 
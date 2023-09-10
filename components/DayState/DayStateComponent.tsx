import React from "react";
import Image from "@/node_modules/next/image";

const DayState = ({ day }: { day: boolean | undefined }) => {
    const src = day === true ? "/images/check.svg" : day === false ? "/images/x.svg" : "/images/gray.svg";
    return (
        <div className="flex items-center justify-center h-9"> 
            <Image 
                src={src}
                width={12} 
                height={12} 
                alt="checkmark" 
            /> 
        </div>
    );
}
export default DayState;
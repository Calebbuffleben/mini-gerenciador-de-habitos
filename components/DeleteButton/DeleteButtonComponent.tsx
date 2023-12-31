"use client"

import Image from "next/image";
import { deleteHabit } from "@/app/actions";

const DeleteButtonComponent = ({ habit }) => {
    return (
        <button onClick={() => deleteHabit(habit)}>
            <Image 
                src="/images/trash.svg" 
                width={20} 
                height={20} 
                alt="Lixeira" 
            />
        </button>
    )
}

export default DeleteButtonComponent;
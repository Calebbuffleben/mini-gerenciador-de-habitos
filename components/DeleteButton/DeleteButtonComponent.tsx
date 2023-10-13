import { deleteHabit } from "@/app/actions";
import Image from "next/image";

const DeleteButtonComponent = ({ habit }) => {
    return (
        <button onClick={() => deleteHabit(habit)}>
            <Image 
                src="/images/trash.svg" 
                width={20} 
                height={20} 
                alt="Lixeira vermelha" 
            />
        </button>
    )
}

export default DeleteButtonComponent;
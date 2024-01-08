import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDatabase } from "../../../utils/mongodb";
import HabitControler from "../controllers/HabitController";

const NewHabit = () => {
    async function newHabit (formData: FormData) {
        "use server"
        
        const habitController = new HabitControler();

        const habit = formData.get("habit");

        const newHabit = {
            [habit as string] : {

            }
        };
        await habitController.addHabit(newHabit);

        revalidatePath("/");
        redirect("/"); 
    }
    return ( 
        <main className="container relative flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-4xl font-light text-center text-white font-display">Novo Hábito</h1>
            <form action={newHabit} className="flex flex-col gap-4 mt-4">
                <input 
                    type="text" 
                    name="habit" 
                    id="habit" 
                    className="p-2 font-sanz text-xl text-white rounded-md bg-neutral-800"
                />
                <button type="submit" className="bg-[#45EDAD] font-display text-neutral-900 font-regular text-2xl p-2 rounded-md mt-8">Cadastrar</button>
                <button className="bg-neutral-800 text-[#F85858] font-display font-regular text-2xl p-2 rounded-md">Cancelar</button>
            </form>
        </main>
    )
}

export default NewHabit;
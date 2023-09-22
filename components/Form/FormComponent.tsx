const FormComponent = ({ newHabit }) => {
    return (
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
    );
}

export default FormComponent;
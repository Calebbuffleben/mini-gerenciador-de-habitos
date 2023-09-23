import React from "react";
import { connectToDatabase } from "../../../utils/mongodb"

const Habit = async ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURI(habit);
    const { db } = await connectToDatabase();

    return (
        <main className="container relative flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-4xl font-light text-center text-white font-display">
                {decodedHabit}
            </h1>
        </main>
    )
}

export default Habit;
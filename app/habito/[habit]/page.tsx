import React from "react";
import { connectToDatabase } from "../../../utils/mongodb"

const Habit = async ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURIComponent(habit);
    const { db } = await connectToDatabase();

    return (
        <h1>Habit {decodedHabit}</h1>
    )
}

export default Habit;
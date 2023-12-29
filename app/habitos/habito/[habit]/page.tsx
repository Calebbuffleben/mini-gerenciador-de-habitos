import React from "react";
import { connectToDatabase } from "../../../../utils/mongodb";

import CalendarComponent from "../../../../components/Calendar/CalendarComponent";

const Habit = async ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURI(habit);
    const { db } = await connectToDatabase();
    const habits = await db.collection('habits').find({}).toArray();

    return (
        <CalendarComponent decodedHabit={decodedHabit} habitStreak={JSON.stringify(habits)} />
    )
}

export default Habit;
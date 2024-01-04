import React from "react";
import { connectToDatabase } from "../../../../utils/mongodb";

import CalendarComponent from "../../../../components/Calendar/CalendarComponent";
import HabitController from "../../controllers/HabitController";

const Habit = async ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURI(habit);

    const habits = new HabitController().getHabits();

    return (
        <CalendarComponent decodedHabit={decodedHabit} habitStreak={JSON.stringify(habits)} />
    )
}

export default Habit;
import ArrowIcon from "@/components/ArrowIcon/ArrowIconComponent";
import Link from "next/link";
import React from "react";
import { connectToDatabase } from "../../../utils/mongodb";

import CalendarComponent from "../../../components/Calendar/CalendarComponent";

const Habit = async ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURI(habit);
    const { db } = await connectToDatabase();

    return (
        <CalendarComponent decodedHabit={decodedHabit} />
    )
}

export default Habit;
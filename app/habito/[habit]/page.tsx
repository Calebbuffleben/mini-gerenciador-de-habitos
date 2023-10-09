import ArrowIcon from "@/components/ArrowIcon/ArrowIconComponent";
import Link from "next/link";
import React from "react";
import { connectToDatabase } from "../../../utils/mongodb";

import CalendarComponent from "../../../components/Calendar/CalendarComponent";

function getDaysByMonth(month: number, year: number) {
    const date = new Date(year, month, 1);
    const monthFirstWeekDay = date.getDay()
    const fillLastMonthDays = Array(monthFirstWeekDay).fill(null)
    const days = [...fillLastMonthDays];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1)
    }

  return days;
}

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const Habit = async ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURI(habit);
    const { db } = await connectToDatabase();

    const daysInMonth = getDaysByMonth(currentMonth, currentYear);

    return (
        <CalendarComponent decodedHabit={decodedHabit} daysInMonth={daysInMonth} />
    )
}

export default Habit;
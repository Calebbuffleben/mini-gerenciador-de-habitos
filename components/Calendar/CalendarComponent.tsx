"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

import ArrowIcon from "../ArrowIcon/ArrowIconComponent";
import DayState from "../DayState/DayStateComponent";

import { toggleHabit } from "@/app/actions";

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

function getDaysByMonth(month: number, year: number) {
    const date = new Date(year, month, 1);
    const monthFirstWeekDay = date.getDay();
    const fillLastMonthDays = Array(monthFirstWeekDay).fill(null);
    const days = [...fillLastMonthDays];

    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1)
    }

  return days;
}

const CalendarComponent = ({ decodedHabit, habitStreak }: { decodedHabit: string, habitStreak: any }) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [daysInMonth, setDaysInMonth] = useState(getDaysByMonth(currentMonth, currentYear));

    useEffect(() => {
        setDaysInMonth(getDaysByMonth(month, year));
        setSelectedDate(new Date(year, month, 1))
    }, [month, year])

    const goToPreviousMonth = () => {
        if(month === 0){
            setYear(year - 1)
            setMonth(11)
        } else {
            setMonth(month - 1)
        }
    }

    const goToNextMonth = () => {
        if(month === 11){
            setYear(year + 1)
            setMonth(0)
        } else {
            setMonth(month + 1)
        }
    }

    const getDateTitleString = () => {
        return `${selectedDate.toLocaleString('pt-BR', {month: 'long'}).toUpperCase()} de ${selectedDate.getFullYear()}`
    }

    const getDayString = (day: Date) => {
        return `${year.toString()}-${(month + 1).toString().padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`
    }

    return(
        <main className="container relative flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-2xl font-light text-center text-white font-display">
                {decodedHabit}
            </h1>
            <Link className="flex items-center font-sans text-xs text-neutral-300 gap-2" href="/">
                <ArrowIcon width={12} height={12} />
                Voltar
            </Link>
            <section className="w-full my-2 rounded-md bg-neutral-800">
                <div className="flex justify-between mx-2 my-4 font-sanz text-neutral-400">
                    <button onClick={goToPreviousMonth}>
                        <ArrowIcon className="stroke-neutral-400" width={12} height={12} />
                    </button>
                    <span>{getDateTitleString()}</span>
                    <button onClick={goToNextMonth}>
                        <ArrowIcon className="rotate-180 stroke-neutral-400" width={12} height={12} />
                    </button>
                </div>
                <div className="grid w-full grid-cols-7 mt-2">
                    {weekDays.map(day => (
                        <div key={day} className="flex flex-col item-center p-2">
                            <span className='font-sans text-xs font-light text-neutral-200'>
                                {day}
                            </span>
                        </div>
                    ))}
                    {daysInMonth.map((day, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center p-2"
                            onClick={() => toggleHabit({
                                decodedHabit,
                                habitStreak,
                                date: getDayString(day),
                                done: habitStreak ? habitStreak[getDayString(day)] : true,
                            })}
                        >
                            <span className="font-sans text-xs font-light text-neutral-400 text-center">
                                {day?.getDate()}
                            </span>
                            {day && <DayState day={habitStreak ? habitStreak[getDayString(day)] : undefined} />}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default CalendarComponent
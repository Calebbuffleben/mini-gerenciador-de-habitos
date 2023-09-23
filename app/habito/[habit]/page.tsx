import ArrowIcon from "@/components/ArrowIcon/ArrowIconComponent";
import Link from "next/link";
import React from "react";
import { connectToDatabase } from "../../../utils/mongodb"

const Habit = async ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURI(habit);
    const { db } = await connectToDatabase();

    return (
        <main className="container relative flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-2xl font-light text-center text-white font-display">
                {decodedHabit}
            </h1>
            <Link className="flex items-center font-sans text-xs text-white gap-2" href="/">
                <ArrowIcon width={12} height={12} />
                Voltar
            </Link>
        </main>
    )
}

export default Habit;
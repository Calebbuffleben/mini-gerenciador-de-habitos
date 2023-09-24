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
            <Link className="flex items-center font-sans text-xs text-neutral-300 gap-2" href="/">
                <ArrowIcon width={12} height={12} />
                Voltar
            </Link>
            <section className="w-full my-2 rounded-md bg-neutral-800">
                <div className="flex justify-between mx-2 my-4 font-sanz text-neutral-400">
                    <button>
                        <ArrowIcon className="stroke-neutral-400" width={12} height={12} />
                    </button>
                    <span>Julho 2023</span>
                    <button>
                        <ArrowIcon className="rotate-180 stroke-neutral-400" width={12} height={12} />
                    </button>
                </div>
                <div className="grid w-full grid-cols-7 mt-2">

                </div>
            </section>
        </main>
    )
}

export default Habit;
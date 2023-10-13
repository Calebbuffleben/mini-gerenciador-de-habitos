import React from "react";
import DayState from '@/components/DayState/DayStateComponent'
import Image from "@/node_modules/next/image";
import Link from "next/link";
import { connectToDatabase } from "@/utils/mongodb";
import DeleteButtonComponent from "@/components/DeleteButton/DeleteButtonComponent";

export default async function Home() {
  const { db } = await connectToDatabase();
  const habits = await db.collection('habits').find({}).toArray();

  const keysToDisplay = habits.map(item => Object.keys(item).filter(key => key !== '_id')).flat()

  const uniqueKeys = [...keysToDisplay];

  uniqueKeys.forEach(key => {
    const item = habits.find(obj => obj[key]);
    if (item) {
      console.log(`Data for ${key}:`, item[key]);
    } else {
      console.log(`No data for ${key}`);
    }
  });

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  const sortedWeekDays = weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1))

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || Object.keys(habits).length === 0 ? (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
          Você não tem hábitos cadastrados
        </h1>
      ) : (
        habits.map(item => (
          Object.entries(item).map(([key, value]) => (
            Object.keys(value).length > 0 ? (
                key !== '_id' && (
                  <div key={key} className="text-white flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-light text-white font-sans">{key}</span>
                      <DeleteButtonComponent habit={key} />
                    </div>
                    <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                      {Object.entries(value).map(([date, boolValue]) => (
                        <div key={date} className="flex flex-col last:font-bold">
                          <span className="font-sans text-xs text-white text-center" >{date}</span>
                          <DayState day={boolValue} />
                        </div>
                      ))}
                    </section>
                  </div>
                )
            ) : null
          ))
        ))
      )}
      <Link 
        href="novo-habito" 
        className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display font-regular text-2xl p-2 rounded-md"
      >
        Novo hábito
      </Link>
    </main>
  );
}

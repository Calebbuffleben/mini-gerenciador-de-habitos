"use server";

import { connectToDatabase } from "@/utils/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type toogleHabit = {
  decodedHabit: string;
  habitStreak: string;
  date: string | null;
  done?: boolean | string;
}

export async function deleteHabit(habit: string) {
  const { db } = await connectToDatabase();
  const result = await db.collection('habits').deleteOne({ habit });

  revalidatePath("/")
}

export async function newHabit(formData: FormData) {
  "use server";

  const { db } = await connectToDatabase();
  const habit = formData.get("habit");
  const result = await db.collection('habits').insertOne({
    habit
  });

  revalidatePath('/')
  redirect('/')
}

export async function toggleHabit({ decodedHabit, habitStreak, date, done }: toogleHabit) {
  const { db } = await connectToDatabase();
  const habit = JSON.parse(habitStreak);
  //console.log("Habit: " + JSON.stringify(habit[0][decodedHabit]) +" Decode Habit:        " + decodedHabit + "Habit Streak:       " + habitStreak + "Date:         " + date + "Done:         " + done)

  if (!habitStreak || !date) return

  /*const updatedHabitStreak = {
    [decodedHabit]: {
      ...habitStreak,
      [date]: done === undefined ? true : !done
    }
  }

  const habitUpdate = { [date]: completed };
  
  await db.collection('habits').updateOne(
    { habit },
    { $set: habitUpdate },
    { upsert: true }
  );
  revalidatePath("/") */
}
"use server";

import { connectToDatabase } from "@/utils/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type toogleHabit = {
  habit: string;
  habitStreak: Record<string, boolean> | null;
  date: string | null;
  done?: boolean
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

export async function toggleHabit({habit, habitStreak, date, done}: toogleHabit) {
  const { db } = await connectToDatabase();
  
  if (!habitStreak || !date) return

  const updatedHabitStreak = {
    [habit]: {
      ...habitStreak,
      [date]: done === undefined ? true : !done
    }
  }

  await db.collection('habits').updateOne(
    { _id: habitName },
    { $set: habitUpdate },
    { upsert: true }
  );
  revalidatePath("/")
}
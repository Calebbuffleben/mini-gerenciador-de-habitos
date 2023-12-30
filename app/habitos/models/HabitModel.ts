import IHabit from "@/app/interfaces/IHabit";
import { connectToDatabase } from "@/utils/mongodb";

export class HabitModel {
    async addHabit(habit: IHabit) {
        const { db } = await connectToDatabase();
    
        await db.collection("habits").insertOne(habit);
    }
}
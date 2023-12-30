import { connectToDatabase } from "@/utils/mongodb";

export class HabitModel {
    async habitModel(habit) {
        const { db } = await connectToDatabase();
    
        await db.collection("habits").insertOne(habit);
    }
}
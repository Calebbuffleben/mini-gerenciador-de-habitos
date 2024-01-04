import IHabit from "@/app/interfaces/IHabit";
import { connectToDatabase } from "@/utils/mongodb";
import HabitService from "../services/HabitService";

class HabitController {

    async addHabit(habit: IHabit) {
        const habitService = new HabitService();
        const response = await habitService.createHabit(habit);

        return { message: 'Habit Added', response };
    }

    async getHabits() {
        const { db } = await connectToDatabase();
        const habits = await db.collection('habits').find({}).toArray();

        return { habits };
    }
}

export default HabitController;
import { HabitModel } from "../models/HabitModel";

class HabitService {
    async createHabit(habit) {
        const habitModel = new HabitModel(habit);
        const response = await habitModel;

        return response;
    }
}

export default HabitService;
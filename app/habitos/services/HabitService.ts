import IHabit from "@/app/interfaces/IHabit";
import { HabitModel } from "../models/HabitModel";

class HabitService {
    async createHabit(habit: IHabit) {
        const habitModel = new HabitModel();
        const response = await habitModel.addHabit(habit);

        return response;
    }
}

export default HabitService;
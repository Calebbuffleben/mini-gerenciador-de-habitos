import HabitService from "../services/HabitService";

class HabitController {

    async addHabit(habit) {
        const habitService = new HabitService();
        const response = await habitService.createHabit(habit);

        return { message: 'Habit Added', habit };
    }
}

export default HabitController;
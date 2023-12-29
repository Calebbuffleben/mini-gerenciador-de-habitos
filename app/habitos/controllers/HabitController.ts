class HabitController {
    async addHabit() {
        const habit = await this.habitService.createHabit();

        return { message: 'Habit Added', habit };
    }
}

export default HabitController;
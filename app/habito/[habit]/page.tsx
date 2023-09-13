import React from "react";

const Habit = ({ params: {habit} }: { params: { habit: string } }) => {
    const decodedHabit = decodeURIComponent(habit);

    return (
        <h1>{decodedHabit}</h1>
    )
}

export default Habit;
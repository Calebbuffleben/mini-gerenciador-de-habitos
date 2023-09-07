import React from "react";
import Image from "@/node_modules/next/image";

export default function Home() {
  const habits = {
    'correr': {
      '2023-08-24': true,
      '2023-08-25': false,
      '2023-08-26': false,
    },
    'estudar programação': {
      '2023-08-24': true,
      '2023-08-25': false,
      '2023-08-26': false,
    },
    'estudar inglês': {
      '2023-08-24': true,
      '2023-08-25': false,
      '2023-08-26': false,
    },
  }

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || Object.keys(habits).length === 0 ? (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
          Vocä não tem hábitos cadastrados
        </h1>
      ) : (
        habits !== null && Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="text-white">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">{habit}</span>
              <button>
                <Image 
                 src="/images/trash.svg" 
                 width={20} 
                 height={20} 
                 alt="Lixeira vermelha" 
                />
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  );
}

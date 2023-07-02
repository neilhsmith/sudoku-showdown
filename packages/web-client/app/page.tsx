import GameInitiator from "@/app/game-initiator"

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center space-y-10 h-full">
      <h1 className="text-3xl md:text-6xl font-bold text-center">
        Sudoku Showdown
      </h1>
      <main className="flex flex-col items-center space-y-16">
        <p className="text-center text-lg md:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus fuga
          illum possimus voluptatem aliquam, cum necessitatibus, laboriosam
          ipsam in facere laborum nostrum harum reiciendis delectus saepe,
          asperiores adipisci eaque alias?
        </p>
        <GameInitiator />
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import Panel from "@/app/components/panel"
import NewGameForm from "./game/forms/new-game-form"

const GameInitiator = () => {
  const [status, setStatus] = useState<"idle" | "new" | "join">("idle")

  if (status === "idle") {
    return (
      <ul className="flex space-x-20 md:space-x-32">
        <li>
          <button onClick={() => setStatus("new")}>New game</button>
        </li>
        <li>
          <button onClick={() => setStatus("join")}>Join game</button>
        </li>
      </ul>
    )
  }

  if (status === "new") {
    return (
      <Panel title="New Game">
        <NewGameForm />
      </Panel>
    )
  }

  if (status === "join") {
    return (
      <Panel title="Join Game">
        <div>todo</div>
      </Panel>
    )
  }

  return null
}

export default GameInitiator

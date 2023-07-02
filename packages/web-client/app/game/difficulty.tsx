import { RadioGroup } from "@headlessui/react"

export const DIFFICULTY_LEVEL = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
  EXPERT: "Expert",
} as const

export type DifficultyLevel = keyof typeof DIFFICULTY_LEVEL

export const getDifficultyLevels = () => {
  return Object.keys(DIFFICULTY_LEVEL) as (keyof typeof DIFFICULTY_LEVEL)[]
}

export const getDifficultyLevelNames = () => {
  return Object.values(DIFFICULTY_LEVEL)
}

// ---

const difficultyLevelNames = getDifficultyLevelNames()

export const DifficultyRadioGroup = ({
  value,
  title,
}: {
  value: DifficultyLevel
  title?: string
}) => {
  return (
    <RadioGroup value={DIFFICULTY_LEVEL[value]}>
      {title ? <RadioGroup.Label>Difficulty</RadioGroup.Label> : null}
      {difficultyLevelNames.map((difficulty) => (
        <RadioGroup.Option key={difficulty} value={difficulty}>
          {({ checked }) => (
            <span className={checked ? "text-white" : "text-black-900"}>
              {difficulty}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

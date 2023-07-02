"use client"

import { useForm } from "react-hook-form"
import Button from "@/app/components/button"
import {
  Form,
  FormGroup,
  Label,
  RadioGroup,
  Textbox,
} from "@/app/components/form"
import { DifficultyRadioGroup, getDifficultyLevelNames } from "../difficulty"

const difficultyLevelNames = getDifficultyLevelNames()

const NewGameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="room-name">Room Name</Label>
        <Textbox
          id="room-name"
          placeholder="Leave blank to autogenerate"
          {...register("room-name", { maxLength: 20 })}
        />
      </FormGroup>
      <FormGroup>
        <DifficultyRadioGroup title="Difficulty" value="MEDIUM" />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Create Game</Button>
      </FormGroup>
    </Form>
  )
}

export default NewGameForm

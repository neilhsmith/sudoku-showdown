import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react"
import { LabelProps } from "@headlessui/react/dist/components/label/label"
import { RadioGroupProps } from "@headlessui/react/dist/components/radio-group/radio-group"
import { ElementType, PropsWithChildren, Ref, forwardRef } from "react"

// Extends @headless-ui's RadioGroup, and its compound components, with styles

export const RadioGroup = forwardRef(function RadioGroup<
  T extends ElementType = "div"
>(
  { children, ...rest }: Omit<RadioGroupProps<T, string>, "className">,
  ref: Ref<HTMLDivElement>
) {
  return <HeadlessRadioGroup>{children}</HeadlessRadioGroup>
})

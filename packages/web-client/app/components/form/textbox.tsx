import { ComponentPropsWithRef, Ref, forwardRef } from "react"

export const Textbox = forwardRef(function Textbox(
  { ...rest }: Omit<ComponentPropsWithRef<"input">, "className">,
  ref: Ref<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      type="text"
      className="py-2 bg-transparent border-b min-w-[400px] placeholder:font-light"
      {...rest}
    />
  )
})

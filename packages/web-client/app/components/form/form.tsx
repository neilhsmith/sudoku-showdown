import { ComponentPropsWithoutRef } from "react"

export const Form = ({
  children,
  onSubmit,
  ...rest
}: Omit<ComponentPropsWithoutRef<"form">, "className">) => (
  <form onSubmit={onSubmit} className="flex flex-col text-lg" {...rest}>
    {children}
  </form>
)

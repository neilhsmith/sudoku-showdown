import { ComponentPropsWithoutRef } from "react"

export const Label = ({
  children,
  ...rest
}: Omit<ComponentPropsWithoutRef<"label">, "className">) => (
  <label className="block text-lg mb-1" {...rest}>
    {children}
  </label>
)

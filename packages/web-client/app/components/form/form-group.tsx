import { ComponentPropsWithoutRef } from "react"

export const FormGroup = ({
  children,
  ...rest
}: Omit<ComponentPropsWithoutRef<"div">, "className">) => (
  <div className="flex flex-col mb-8 last-of-type:mb-0" {...rest}>
    {children}
  </div>
)

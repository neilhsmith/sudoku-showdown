import {
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
  Ref,
  forwardRef,
} from "react"
import { VariantProps, cva } from "class-variance-authority"

const buttonCVA = cva(["flex justify-center items-center whitespace-nowrap"], {
  variants: {
    intent: {
      primary: "border-4 border-black-900 hover:border-white",
    },
    fullWidth: {
      true: "w-full",
    },
    size: {
      sm: "px-4 py-1 text-sm lg:px-6 lg:py-2 lg:text-base",
      md: "px-6 py-2 lg:px-8 lg:py-4 lg:text-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
})

type ButtonProps<T extends ElementType = "a" | "button"> = {
  as?: T
} & VariantProps<typeof buttonCVA> &
  ComponentPropsWithRef<T>

const Button = forwardRef(function Button<T extends ElementType = "button">(
  {
    as,
    children,
    intent,
    fullWidth,
    size,
    ...rest
  }: PropsWithChildren<ButtonProps<T>>,
  ref: Ref<T>
) {
  const Component = as || "button"

  return (
    <Component
      ref={ref}
      className={buttonCVA({ intent, fullWidth, size })}
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Button

import { ElementType, PropsWithChildren } from "react"
import { PolymorphicComponentProps } from "../types/react"
import { twMerge } from "tailwind-merge"

type PanelProps = {
  title?: string
}

const Panel = <C extends ElementType = "article">({
  as,
  children,
  title,
  ...rest
}: PolymorphicComponentProps<C, PropsWithChildren<PanelProps>>) => {
  const Component = as || "article"

  const classes = [
    "bg-black-transparent",
    "flex flex-col p-12",
    "rounded-lg border-2 border-black-900",
  ]

  return (
    <Component className={twMerge(classes)} {...rest}>
      {title && <h1 className="text-3xl font-bold mb-8">{title}</h1>}
      {children}
    </Component>
  )
}

export default Panel

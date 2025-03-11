import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        rank: 
          `px-3 py-1 text-sm font-bold uppercase text-cyan-300 select-none
          bg-cyan-900 border border-cyan-500 rounded-lg shadow-[0_0_10px_rgba(0,255,255,0.6)] 
          hover:shadow-[0_0_15px_rgba(0,255,255,1)] transition-all duration-300

          before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full 
          before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 
          before:blur-md before:transition-all before:duration-500 before:ease-out 
          hover:before:left-[100%]`,
        genres:
          "relative px-4 py-2 select-none font-bold text-white tracking-wide transition-all bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,105,180,0.6)] rounded-lg overflow-hidden",
        personality:
          "border-transparent py-1 px-4 bg-red-600 text-white select-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

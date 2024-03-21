import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LucideLoaderCircle } from "lucide-react";

// Define button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ublue-100 text-ugray-0 hover:opacity-80",
        outline:
          "border border-ublue-200  text-ublue-200 hover:opacity-80",
        icon: " text-ublue-200  hover:opacity-80",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-6 text-sm",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

// Button props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean; // Add loading prop
}

// Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), {
          "opacity-50 cursor-not-allowed": loading, // Disable button when loading
        })}
        ref={ref}
        disabled={loading} // Disable button when loading
        {...props}
      >
        <div className="relative">
          <span className={loading ? "opacity-0" : ""}>{props.children}</span>
          {loading && <Spinner />}
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

// Spinner component
const Spinner = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <LucideLoaderCircle className="w-5 h-5 animate-spin" />
  </div>
);

export { Button, buttonVariants };







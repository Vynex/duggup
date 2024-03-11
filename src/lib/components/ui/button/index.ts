import Root from "./button.svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";

const buttonVariants = tv({
	base: "inline-flex items-center justify-center rounded text-sm font-medium whitespace-nowrap ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	variants: {
		variant: {
			default: "bg-card text-card-foreground stroke-card-foreground hover:bg-primary hover:text-primary-foreground hover:stroke-primary-foreground border shadow shadow-button hover:border-primary hover:shadow-primary-hover active:scale-btn",
			ghost: "hover:bg-accent text-card-foreground stroke-card-foreground hover:text-accent-foreground active:scale-btn",
			link: "text-card-foreground underline-offset-4 hover:underline",
			destructive: "bg-card text-destructive-foreground border shadow shadow-button hover:bg-destructive hover:text-primary-foreground hover:border-destructive hover:shadow-destructive-hover active:scale-btn",

			outline: "border border-input bg-background hover:bg-primary hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
		},
		size: {
			default: "h-9 px-4 py-0",
			lg: "h-13 rounded px-4",
			sm: "h-7 rounded px-3",

			icon: "h-10 w-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants,
};

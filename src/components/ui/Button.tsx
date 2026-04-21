import type { JSX, ParentComponent } from "solid-js";

export type ButtonVariant = "ghost" | "outline" | "accent";
export type ButtonSize = "sm" | "md";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
	ghost: [
		"bg-transparent hover:bg-[var(--surface-inset-hover)] active:bg-[var(--surface-inset)]",
		"text-[var(--text-2)] hover:text-[var(--text)]",
		"border-transparent",
	].join(" "),
	outline: [
		"bg-transparent hover:bg-[var(--surface-inset)] active:bg-[var(--surface-inset-hover)]",
		"text-[var(--text)]",
		"border-[0.5px] border-[var(--border-strong)]",
	].join(" "),
	accent: [
		"bg-[var(--accent)] hover:opacity-90 active:opacity-75",
		"text-[var(--accent-fg)]",
		"border-transparent",
	].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: "text-[12px] px-3 py-1.5 rounded-[var(--r-sm)]",
	md: "text-[13px] px-4 py-2 rounded-[var(--r-md)]",
};

const base =
	"inline-flex items-center justify-center gap-1.5 font-medium leading-none transition-all duration-150 ease-out cursor-default select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 disabled:opacity-40 disabled:pointer-events-none";

export const Button: ParentComponent<ButtonProps> = ({
	variant = "outline",
	size = "md",
	class: className = "",
	children,
	...rest
}) => (
	<button
		type="button"
		class={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
		{...rest}
	>
		{children}
	</button>
);

type LinkButtonProps = {
	href: string;
	variant?: ButtonVariant;
	size?: ButtonSize;
	class?: string;
	children: JSX.Element;
	target?: string;
	rel?: string;
};

export const LinkButton: ParentComponent<LinkButtonProps> = ({
	variant = "outline",
	size = "md",
	class: className = "",
	children,
	...rest
}) => (
	<a
		class={`inline-flex items-center justify-center gap-1.5 font-medium leading-none no-underline transition-all duration-150 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
		{...rest}
	>
		{children}
	</a>
);

export function Button({ variant="default", className="", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";
  const styles = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 hover:bg-gray-100",
    ghost: "hover:bg-gray-100",
  };
  return (
    <button className={`${base} ${styles[variant] ?? styles.default} ${className}`} {...props}>
      {children}
    </button>
  );
}

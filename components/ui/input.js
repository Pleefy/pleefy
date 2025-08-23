
export default function Input({ className = "", ...props }) {
  return <input className={`w-full rounded-xl bg-black/20 ring-apple px-3 py-2 placeholder:opacity-60 ${className}`} {...props} />;
}

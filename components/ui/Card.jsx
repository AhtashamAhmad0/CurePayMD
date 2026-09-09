export default function Card({ children, className = "", as: Comp = "div", ...props }) {
  return (
    <Comp
      className={`rounded-2xl border border-navy-900/8 bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(15,39,69,0.04)] transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

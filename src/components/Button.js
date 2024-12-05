export function Button({
  children,
  variant = "primary",
  rounded = "rounded-md", // New prop for rounded corners
  className = "",
  onClick,
}) {
  const baseStyles = `px-6 py-2 font-medium transition-colors duration-200 ${rounded}`;

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-200",
    secondary:
      "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

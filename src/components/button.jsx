function Button({ children, onClick, className }) {
  return (
    <button
      className={`capitalize text-xs lg:text-sm px-4 py-2 lg:px-7 lg:py-3 rounded-full cursor-pointer ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

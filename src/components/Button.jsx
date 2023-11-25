function Button({ text, onClick, style }) {
  return (
    <div
      onClick={onClick}
      className="w-full px-10 py-5 text-lg rounded-md flex item-center justify-center bg-white cursor-pointer hover:bg-cyan-600 hover:text-white font-bold"
      style={style}
    >
      {text}
    </div>
  );
}

export default Button;

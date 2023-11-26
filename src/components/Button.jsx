function Button({ text, style, onClick }) {
  return (
    <button
      type="submit"
      className="w-full px-10 py-5 text-lg rounded-md flex item-center justify-center bg-white cursor-pointer hover:bg-cyan-600 hover:text-white font-bold"
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

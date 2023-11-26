function Input({ placeholder, value, onChange, type = "text", children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-4">
      {children}
      <input
        className="px-2 py-[6px] border-2 cursor-text text-sm  rounded-[3px]  w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;

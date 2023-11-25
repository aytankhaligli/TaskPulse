function Input({ placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col ">
      <input
        className="px-2 py-[6px] border-2 cursor-text text-sm  rounded-[3px] mb-6 w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;

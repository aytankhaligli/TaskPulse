function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-2 py-[6px] border-2 cursor-text text-sm  rounded-[3px]  w-full mb-4 mt-3 flex"
    >
      {options.map((option) => {
        console.log(option.name);
        return (
          <option key={option.id} value={option.name}>
            {option.name || option.username}
          </option>
        );
      })}
    </select>
  );
}

export default Select;

function Form({ children, onSubmit }) {
  return (
    <form
      className="w-1/3 bg-white px-10 py-8 flex flex-col my-12 shadow-lg rounded-md"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;

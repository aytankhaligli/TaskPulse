function Form({ children, isLogin, errorText }) {
  return (
    <form className="w-1/3 bg-white px-10 py-8 flex flex-col my-12 shadow-lg rounded-md">
      {children}
    </form>
  );
}

export default Form;

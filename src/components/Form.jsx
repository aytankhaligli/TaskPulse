function Form({ children, isLogin, errorText }) {
  return (
    <form className="w-1/3 bg-white px-10 py-8 flex flex-col my-12 shadow-lg rounded-md">
      <h1 className="text-4xl mb-6 text-center text-gray-700">
        Task<span className="text-cyan-600">Pulse</span>
      </h1>
      <p className="mb-4 text-center opacity-40">
        {isLogin
          ? "Sign in your TaskPulse account"
          : "Sign up and create free TaskPulse account"}
      </p>
      {errorText && (
        <p className="text-sm pb-2 text-red-700 text-center">{errorText}</p>
      )}
      {children}
    </form>
  );
}

export default Form;

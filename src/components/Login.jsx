import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">Sign Up</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2"></p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg"></button>
      </form>
    </>
  );
};

export default Login;

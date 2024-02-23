import { useRef } from "react";
import { useSelector } from "react-redux";
import useLogin from '../hooks/useLogin'

function Login() {
  const { login, user, error } = useLogin();
  const password = useRef();
  const email = useRef();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);

    form.current.reset();
  }
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div className="flex flex-col items-center border-2 px-14 py-5 bg-black bg-opacity-60 rounded-lg">
        <h2 className="mb-5 text-xl text-white">Login</h2>
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col gap-2">
            <span className="text-white">Email:</span>
            <input className="rounded py-1 indent-2" ref={email} type="email" />
          </label>
          <label className="flex flex-col gap-2 mb-5">
            <span className="text-white">Password:</span>
            <input
              className="rounded py-1 indent-2"
              ref={password}
              type="password"
            />
          </label>
          <button className="px-4 py-2 bg-white inline-block rounded-md">
            Login
          </button>
          <p className="text-center text-white text-base">
                Already have an account?
                <a className="text-white text-base ml-2" href="/signup">
                  Signup
                </a>
              </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

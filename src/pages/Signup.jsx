import { useRef } from "react";
import useSignup from "../hooks/useSignup";
import { Navigate } from "react-router-dom";

function Signup() {
  const { signup, error, user } = useSignup();
  const displayName = useRef();
  const password = useRef();
  const email = useRef();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );
    form.current.reset();
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-11">
      <div className="flex flex-col items-center border-2 px-14 py-5 bg-black bg-opacity-60  rounded-lg">
        <h2 className="mb-5 text-white text-xl">Signup</h2>
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col gap-2">
            <span className="text-white">Name:</span>
            <input
              className="rounded py-1 indent-2"
              ref={displayName}
              type="text"
            />
          </label>
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
            Signup
          </button>

          <p className="text-center text-white text-base">
            Already have an account?
            <a className="text-white text-base ml-2" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
      {/* {error && <p className="text-red-600 mt-3">{error}</p>} */}
    </div>
  );
}

export default Signup;

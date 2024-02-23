import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { logIn, errorData } from "../redux/features/userSlice";
import { toast } from "react-toastify";

function useLogin() {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(logIn(user));
        toast.success('You succsessfuly login')
      })
      .catch((error) => {
        dispatch(errorData(error));
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(errorData(errorMessage));
        toast.error(errorCode, errorMessage);
      });
  };

  return { login, user, error };
}

export default useLogin;

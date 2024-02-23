import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { logIn, errorData } from "../redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function useSignup() {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
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
  return {user, error, signup };
}

export default useSignup;

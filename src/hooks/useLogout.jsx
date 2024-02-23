import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { logOut, errorData } from "../redux/features/userSlice";
import { toast } from "react-toastify";

function useLogout() {
  const dispatch = useDispatch();


  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        toast.error('You logout')
      })
      .catch(() => {
        dispatch(errorData("Something went wrong :("));
        toast.error("Something went wrong :(")
      });
  };

  return { logout };
}

export default useLogout;

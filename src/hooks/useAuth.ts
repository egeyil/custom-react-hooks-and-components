import { useContext } from "react";
import AuthContext, {IAuthContext} from "../context/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context as IAuthContext;
}

export default useAuth;
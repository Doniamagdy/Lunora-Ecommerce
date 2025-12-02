import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";

function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        {" "}
        <div className="flex justify-center items-center h-screen">
          <FadeLoader color={"#cfb798"} width={5} />{" "}
        </div>
      </>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;

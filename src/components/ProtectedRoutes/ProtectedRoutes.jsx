import "./ProtectedRoutes.css";
import { Navigate, Outlet, Link } from "react-router-dom";

export const ProtectedRoutes = ({ isAllowed, children }) => {
  if (!isAllowed) return <Navigate to={"/Login"} />;
  return children ? (
    children
  ) : (
    <>
      <h2>Dashboard</h2>
      <div className="Dashboard_NavBar_Container">
        <Link to={"Projects"}>
          <button>Projects</button>
        </Link>
        <Link to={"Tech"}>
          <button>Technologies</button>
        </Link>
        <Link to={"ProximTech"}>
          <button>Next Tech</button>
        </Link>
        <Link to={"States"}>
          <button>States</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

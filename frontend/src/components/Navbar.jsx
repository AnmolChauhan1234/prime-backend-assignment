import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ padding: "10px", background: "#111", color: "white" }}>
      <span>PrimeTrade Assignment</span>

      <button
        style={{ float: "right", width: "100px" }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };
  return (
    <div>
      This is the Dashboard
      <button onClick={handleClick}>Go back to Homepage</button>
    </div>
  );
}

export default Dashboard;

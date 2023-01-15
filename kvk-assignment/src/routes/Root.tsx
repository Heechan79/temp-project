import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export function Root() {
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!id) {
      navigate("/companies");
    }
  }, [id, navigate]);

  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div>
      <h1>Root</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

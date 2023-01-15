import React from "react";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

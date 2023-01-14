import React from "react";
import { useCompaniesQuery } from "../hooks";

export function Companies() {
  const { data } = useCompaniesQuery();

  const companies = data?.data ?? [];

  return (
    <div>
      <div>Search From with Button</div>

      {companies.length > 0 &&
        companies.map(({ name, id }) => <div key={id}>{name}</div>)}
    </div>
  );
}

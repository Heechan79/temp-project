import { useQuery } from "react-query";

import { CompanyAPIResponse } from "../models/company.model";
import { API_URL } from "../settings";

async function getCompanies() {
  const response = await fetch(`${API_URL}/companies`);

  return response.json();
}

export function useCompaniesQuery() {
  const key = "test-key";
  return useQuery<CompanyAPIResponse>([key], getCompanies);
}

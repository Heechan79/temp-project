import { useQuery } from "react-query";

import { CompanyAPIResponse } from "../models/company.model";
import { API_URL, DEFAULT_STALETIME } from "../settings";

async function getCompanies(searchTerm: string) {
  const hasSearchTerm = !!searchTerm.trim();
  const searchUrl = hasSearchTerm ? `?search=${searchTerm}` : "";

  const response = await fetch(`${API_URL}/companies${searchUrl}`);

  return response.json();
}

export function useCompaniesQuery(searchTerm: string) {
  const key = "companies";
  const hasValidString =
    searchTerm === "" || // default when no entry is given and needs to call the companies endpoint
    (searchTerm.length > 0 && searchTerm.trim().length > 0); // allow user input with whitespaces but do not make requests
  return useQuery<CompanyAPIResponse>({
    queryKey: [key, searchTerm], // Make new query when new search term is provided otherwise get from cache
    queryFn: () => getCompanies(searchTerm),
    staleTime: DEFAULT_STALETIME, // In the assumption companies wont be updated frequently, so no background refresh within stale time
    enabled: hasValidString,
  });
}

import { useQuery } from "react-query";

import { Company, CompanyDetails } from "../models/company.model";
import { API_URL, DEFAULT_STALETIME } from "../settings";

type FullCompanyDetails = Company & CompanyDetails;

async function getCompanyDetails(id: string): Promise<FullCompanyDetails> {
  const fetchDetails = await fetch(`${API_URL}/companies/${id}`);
  const fetchAdditionalDetails = await fetch(
    `${API_URL}/companies/${id}/details`
  );

  const fullDetails = await Promise.all([fetchDetails, fetchAdditionalDetails]);

  const details = await fullDetails[0].json();
  const additionalDetails = await fullDetails[1].json();

  return new Promise((res) =>
    res({ ...details.data, ...additionalDetails.data[0] })
  );
}

export function useCompanyDetailQuery(id: string) {
  const key = "companies";
  return useQuery<FullCompanyDetails>({
    queryKey: [key, id],
    queryFn: () => getCompanyDetails(id),
    staleTime: DEFAULT_STALETIME,
  });
}

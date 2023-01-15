export interface CompanyAPIResponse {
  data: Company[];
  total: number;
}

export interface CompanyDetailsApiResponse {
  catchPhrase: string;
  website: string;
  phoneNumber: string;
  id: string;
  companyId: string;
}

export interface CompanyApiResponse {
  city: string;
  createdAt: string;
  id: string;
  logo: string;
  name: string;
  streetName: string;
  zipCode: string;
}

// TODO: preferable using this model in the client/frontend. This model could be composed from the 2 calls
// to get the full details. Currently unused.
export interface CompanyDetailsClient {
  id: string;
  companyId: string;
  catchPhrase: string;
  name: string;
  logo: string;
  address: {
    streetName: string;
    zipCode: string;
    city: string;
  };
  contact: {
    website: string;
    phoneNumber: string;
  };
}

export interface Company extends CompanyApiResponse {}
export interface CompanyDetails extends CompanyDetailsApiResponse {}

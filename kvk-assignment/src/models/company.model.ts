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

export interface Company extends CompanyApiResponse {}
export interface CompanyDetails extends CompanyDetailsApiResponse {}

export interface CompanyAPIResponse {
  data: Company[];
  total: number;
}

export interface Company {
  city: string;
  createdAt: string;
  id: string;
  logo: string;
  name: string;
  streetName: string;
  zipCode: string;
}

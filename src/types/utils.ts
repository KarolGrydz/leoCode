type addressData = {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
};

type companyData = {
  name: string;
  bs: string;
  catchPhrase: string;
};

export type UrlData = {
  address?: addressData;
  company?: companyData;
  email?: string;
  id?: number;
  name: string;
  phone?: string;
  username: string;
  website?: string;
};

export type UserAPIData = {
  state: UrlData[] | [];
  handleUpdateState?: (value: UrlData[]) => void;
};

export type SearchListProps = {
  users: UrlData[] | [];
};

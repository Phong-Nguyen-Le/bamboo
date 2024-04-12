type AddressGeo = {
    lat: string;
    lng: string;
  };
  
  type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: AddressGeo;
  };
  
  type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  
  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  };


 export default User
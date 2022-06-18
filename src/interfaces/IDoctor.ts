export interface IDoctor {
  id: number | undefined;
  fullname: string;
  speciality: string;
  profile: string;
  address: {
    mobile: string;
    email: string;
    street: string;
  };
  days_available: number[];
  operation_interval: 30;
}

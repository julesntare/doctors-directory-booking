export interface IDoctor {
  id: string | undefined;
  fullname: string;
  speciality: string;
  profile: string;
  desc: string;
  address: {
    mobile: string;
    email: string;
    street: string;
  };
  days_available: any[];
  operation_interval: 30;
}

export interface IAppointment {
  id: string | undefined;
  userInfo: {
    firstname: string;
    surname: string;
    telephone: string;
    email: string;
  };
  doctorId: number;
  appoint_time: Date["toLocaleString"];
}

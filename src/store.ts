import { configureStore } from "@reduxjs/toolkit";
import AppointmentSlice from "./features/AppointmentSlice";
import DoctorSlice from "./features/DoctorSlice";
import UserSlice from "./features/UserSlice";

export const store = configureStore({
  reducer: {
    users: UserSlice,
    doctors: DoctorSlice,
    appointments: AppointmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

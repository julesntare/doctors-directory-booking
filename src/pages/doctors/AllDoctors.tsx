import React from "react";
import { useSelector } from "react-redux";
import { IDoctor } from "../../interfaces/IDoctor";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

const AllDoctors = () => {
  const doctors: IDoctor[] = useSelector<RootState, IDoctor[]>(
    (store) => store.doctors
  );

  const renderDoctors = () =>
    doctors.map((doctor: IDoctor) => (
      <div
        className="overflow-hidden shadow-lg rounded-lg relative mt-1 mb-6 w-64 m-auto"
        key={doctor.id}
      >
        <img alt="eggs" src={doctor.profile} className="rounded-lg" />
        <div className="absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0">
          <p className="text-white text-2xl nb-4">{doctor.fullname}</p>
          <div className="flex justify-between">
            <p className="text-sm text-gray-300 flex items-center">
              {doctor.speciality.toUpperCase()}
            </p>
            <Link
              to={`/doctor/${doctor.id}`}
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-100 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <h2
        className="
                  text-dark
                  mt-6
                  mb-6
                  uppercase
                  font-bold
                  text-center
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
      >
        All Doctors
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {
          // doctors.length ? (
          renderDoctors()
          // ) : (
          //   <p className="text-center col-span-2 text-gray-700 font-semibold">
          //     No Doctor Yet
          //   </p>
          // )
        }
      </div>
    </>
  );
};

export default AllDoctors;

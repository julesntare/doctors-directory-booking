import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { IDoctor } from "../../interfaces/IDoctor";
import CalendarSlots from "../../components/CalendarSlots";
import AppointForm from "../../components/AppointForm";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const doctors = useSelector<RootState, IDoctor[]>((store) => store.doctors);
  const dispatch = useDispatch();
  const { id } = useParams<{
    id: string;
  }>();
  const existingDoctor = doctors.filter((doctor) => String(doctor.id) === id);
  const {
    fullname,
    speciality,
    profile,
    desc,
    address,
    days_available,
    operation_interval,
  } = existingDoctor[0];

  const [values] = useState<IDoctor>({
    id,
    fullname,
    speciality,
    profile,
    desc,
    address,
    days_available,
    operation_interval,
  });

  const [openAppointForm, setOpenAppointForm] = useState<boolean>(false);

  const renderDoctorDetails = () => (
    <div className="bg-gray-100">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-blue-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src={values.profile}
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {values.fullname}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6 mt-3 mb-4">
                Category: <b>{values.speciality.toUpperCase()}</b>
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {values.desc.charAt(0).toUpperCase() + values.desc.slice(1)}
              </p>
            </div>

            <div className="my-4"></div>
          </div>

          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-blue-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">More Details</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-4">
                    <div className="px-4 py-2 font-semibold">Email:</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href={`mailto:${values.address.email}`}
                      >
                        {values.address.email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="px-4 py-2 font-semibold">Mobile No.:</div>
                    <div className="px-4 py-2">{values.address.mobile}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Street Address:
                    </div>
                    <div className="px-4 py-2">{values.address.street}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-blue-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">
                      Available Time (CAT time)
                    </span>
                  </div>
                  <ul className="list-inside space-y-2">
                    {values.days_available.map((day, i) => (
                      <li key={i}>
                        <div className="text-teal-600 mb-1">
                          {Object.keys(day)
                            .toString()
                            .toUpperCase()}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {Object.values(day)
                            .join()
                            .split(",")
                            .join(" - ")}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-blue-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Book a Slot</span>
                  </div>
                  <CalendarSlots />
                  <div className="flex justify-center mt-3">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => setOpenAppointForm(true)}
                    >
                      Book Appointment Now
                    </button>
                    {openAppointForm && (
                      <AppointForm
                        openModal={true}
                        availability={values.days_available}
                        interval={values.operation_interval}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-100">
      {existingDoctor.length > 0 ? (
        renderDoctorDetails()
      ) : (
        <p className="text-center col-span-2 text-gray-700 font-semibold">
          This doctor ain't found
        </p>
      )}
    </div>
  );
};

export default DoctorDetails;

import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets";

const TopDoctors = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse though our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            onClick={() => navigate(`/appointment/${doctor._id}`)}
          >
            <img src={doctor.image} alt={doctor.name} className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p className="">Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
              <p className="text-sm text-gray-600">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="cursor-pointer bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">
        More
      </button>
    </div>
  );
};

export default TopDoctors;

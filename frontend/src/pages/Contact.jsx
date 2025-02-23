import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        CONTACT <span className="text-gray-700 font-medium">US</span>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          src={assets.contact_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Rangpur Sadar, <br /> Rangpur, Bangladesh
          </p>
          <p className="text-gray-500">
            Tel: +8801770877400 <br />
            Email: shajjadshagor@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at PRESCRIPTO
          </p>
          <p className="text-gray-500">
            Learn more about our trams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

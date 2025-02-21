import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left section */}
        <div className="">
          <img src={assets.logo} alt="" className="w-40 mb-5" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, natus
            similique, repellat culpa velit vitae voluptatum facere saepe vero
            ea magnam ullam debitis voluptatibus animi aliquam iusto. Nisi
            accusamus itaque, est aut blanditiis sed amet sit atque iste
            repudiandae ducimus. Error aliquid distinctio dolor, quidem rem
            animi possimus dolorum consectetur rerum nobis reiciendis sapiente.
          </p>
        </div>

        {/* Middle section */}
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Contact Us</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="">+8801770877400</li>
            <li className="">shajjadshagor@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Prescripto - All Eight Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

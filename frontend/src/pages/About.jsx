import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        ABOUT <span className="text-gray-700 font-medium">US</span>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="">
            We are a team of experienced doctors and nurses who are dedicated to
            providing the best healthcare services to our patients. Our mission
            is to provide affordable and accessible healthcare to everyone in
            need. We believe that everyone deserves to live a healthy and happy
            life, and we are here to help you achieve that.
          </p>
          <p className="">
            Our team of doctors and nurses are highly qualified and experienced
            professionals who are committed to providing the best possible care
            to our patients. We offer a wide range of medical services,
            including general check-ups, vaccinations, and treatment for various
            health conditions.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p className="">
            At our clinic, we strive to create a warm and welcoming environment
            where our patients feel comfortable and cared for. We understand
            that visiting the doctor can be a stressful experience for many
            people, and we do our best to make the process as smooth and
            stress-free as possible.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p className="">
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="">EFFICIENCY:</b>
          <p className="">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="">CONVENIENCE:</b>
          <p className="">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="">PERSONALIZATION:</b>
          <p className="">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

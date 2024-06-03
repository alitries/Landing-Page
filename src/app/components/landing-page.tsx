import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPlayCircleOutline, IoNotificationsCircle } from "react-icons/io5";
import Image from "next/image";
import { GiNinjaStar } from "react-icons/gi";
import { LuBox } from "react-icons/lu";
import { BsHexagon } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="text-black w-full p-4 sm:p-8 relative">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="text-black w-full sm:w-1/2 flex flex-col justify-center p-4 sm:p-0 relative">
          <Image
            src="/images/Star.png"
            alt="Logo"
            width={50}
            height={50}
            className="absolute top-2 left-2"
          />

          <div
            className="bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/images/bg1.png')",
              paddingTop: "56.25%",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:text-center">
              <p className="text-3xl sm:text-5xl mt-4 sm:mt-10 sm:text-center font-extrabold">
                Make The Best <br /> Financial Decisions
              </p>
              <p className="text-gray-700 mt-4 text-sm sm:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br /> Iste rerum cupiditate eveniet possimus.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-2 mt-4 justify-center">
                <button className="flex items-center justify-between px-4 py-2 mb-2 sm:mb-0 sm:mr-4 bg-gray-800 text-white rounded hover:bg-gray-900">
                  <span>Get Started</span>
                  <FaLongArrowAltRight className="ml-2" />
                </button>
                <button className="flex items-center justify-between px-4 py-2 text-black rounded hover:text-gray-100">
                  <IoPlayCircleOutline className="w-6 h-6 sm:w-7 sm:h-7 mr-2" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/Star.png"
          alt="Logo"
          width={50}
          height={50}
          className="absolute top-96 right-12"
        />

        <div className="w-full sm:w-1/2 justify-center items-center mt-[6rem]">
          <div className="relative w-full h-[500px]">
            <div className="absolute md:-mt-[8rem] md:left-[2.5rem] z-20">
              <Image
                src="/images/phone1.png"
                alt="Phone 1"
                width={800}
                height={1200}
                quality={100}
                className="h-[400px] md:h-[600px] w-auto"
              />
            </div>
            <div className="absolute md:-mt-[3.5rem] left-[3rem] md:left-[9rem] z-10">
              <Image
                src="/images/phone2.png"
                alt="Phone 2"
                width={800}
                height={1200}
                className="h-[400px] md:h-[600px] w-auto brightness-95"
                quality={100}
              />
            </div>
            <div className="absolute md:left-[15rem] hidden md:block z-0">
              <Image
                src="/images/phone1.png"
                alt="Phone 3"
                width={800}
                height={1200}
                className="h-[400px] md:h-[600px] w-auto brightness-90"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/banner.png"
          alt="banner"
          width={600}
          height={600}
          className="w-full max-w-lg"
        />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center">
        <Image
          src="/images/Star.png"
          alt="Logo"
          width={50}
          height={50}
          className="absolute sm:right-12"
        />
        <Image
          src="/images/Star.png"
          alt="Logo"
          width={50}
          height={50}
          className="absolute sm:left-18"
        />

        <div
          style={{
            backgroundImage:
              'url("/images/bg1.png"), url("/images/circle.png")',
            backgroundPosition: "center , center ",
            backgroundSize: "cover, auto",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
          className="w-full sm:w-1/2 bg-no-repeat flex justify-center items-center"
        >
          <Image
            src="/images/phone3.png"
            alt="phone3"
            width={300}
            height={600}
            className="max-w-xs sm:max-w-lg"
          />
        </div>

        <div className="mt-14 sm:mt-0 sm:ml-10 p-4 relative">
          <p className="text-orange-600 tracking-[8px] text-center sm:text-left">
            FEATURES
          </p>
          <p className="font-bold text-2xl sm:text-5xl text-center sm:text-left">
            Uifry Premium
          </p>
          <div className="flex items-center mb-2">
            <GiNinjaStar className="mr-2 text-orange-600" />{" "}
            <h6 className="font-bold">Budgeting Intervals</h6>
          </div>
          <p className="mb-4 text-gray-700 text-left sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore incidunt exercitationem quam. <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            doloremque velit debitis{" "}
          </p>
          <div className="flex items-center mb-2">
            <BsHexagon className="mr-2 text-orange-600" />{" "}
            <h6 className="font-bold">Budgeting Intervals</h6>
          </div>
          <p className="mb-4 text-gray-700 text-left sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore incidunt exercitationem quam. <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            doloremque velit debitis{" "}
          </p>
          <div className="flex items-center mb-2">
            <LuBox className="mr-2 text-orange-600" />{" "}
            <h6 className="font-bold">Budgeting Intervals</h6>
          </div>
          <p className="text-gray-700 text-left sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore incidunt exercitationem quam. <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            doloremque velit debitis{" "}
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 p-4">
          <Image
            src="/images/Star.png"
            alt="Logo"
            width={40}
            height={40}
            className="absolute right-12  "
          />

          <p className="text-orange-600 tracking-[8px] text-center sm:text-left">
            ADVANTAGES
          </p>
          <p className="font-bold text-2xl sm:text-5xl text-center sm:text-left">
            Why Choose Urify?
          </p>
          <div className="flex items-center mb-2 mt-6 justify-center sm:justify-start">
            <IoNotificationsCircle className="mr-2 text-orange-600 text-3xl sm:text-4xl" />
            <h6 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left">
              Clever Notifications
            </h6>
          </div>

          <p className="text-gray-700 text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore incidunt exercitationem quam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto doloremque velit debitis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore incidunt exercitationem quam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto doloremque velit debitis.
          </p>
          <Image
            src="/images/Star.png"
            alt="Logo"
            width={50}
            height={50}
            className="absolute left-12  "
          />
        </div>
        <div
          style={{
            backgroundImage:
              'url("/images/bg1.png"), url("/images/circle.png")',
            backgroundPosition: "center , center ",
            backgroundSize: "cover, auto",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
          className="w-full sm:w-1/2 bg-no-repeat flex justify-center items-center  mt-8 sm:mt-0"
        >
          <Image
            src="/images/phone3.png"
            alt="phone3"
            width={300}
            height={600}
            className="max-w-xs sm:max-w-lg"
          />
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="font-sans text-lg tracking-[2px]">TESTIMONIAL</p>
        <p className="font-bold text-4xl">
          What Our Users <br /> Say About Us?
        </p>
        <div className="flex flex-col sm:flex-row items-center mt-10">
          <div className="w-full sm:w-1/2 flex justify-center">
            <Image
              src="/images/group.png"
              alt="Group"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col text-left p-4">
            <p className="text-lg sm:text-2xl font-bold">
              The Best Financial Acounting App Ever!
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              rerum cupiditate eveniet possimus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Iste rerum cupiditate eveniet
              possimus. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Iste rerum cupiditate eveniet possimus. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Iste rerum cupiditate
              eveniet possimus.
            </p>
            <Image
              src="/images/group2.png"
              alt="Star"
              width={150}
              height={150}
              className="mt-4"
            />
            <p className="text-lg sm:text-xl font-semibold mt-6">- John Doe</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto py-12 px-4">
          <p className="font-sans text-lg tracking-[6px] text-orange-600">
            FAQ's
          </p>
          <h1 className="text-4xl font-bold mb-8">
            Frequently Asked <br /> Questions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-500 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h2>
              <p>
                Arcu At Dictum Sapien, Mollis. Volutpate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h2>
              <p>
                Arcu At Dictum Sapien, Mollis. Volutpate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h2>
              <p>
                Arcu At Dictum Sapien, Mollis. Volutpate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
            <div className="bg-red-500 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h2>
              <p>
                Arcu At Dictum Sapien, Mollis. Volutpate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
            <div className="bg-red-500 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h2>
              <p>
                Arcu At Dictum Sapien, Mollis. Volutpate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h2>
              <p>
                Arcu At Dictum Sapien, Mollis. Volutpate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-black text-white flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/circle2.png"
            alt="Corner Image 1"
            width={400}
            height={400}
          />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <Image
            src="/images/circle2.png"
            alt="Corner Image 2"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-center">
          <div className="text-center md:text-left md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-6xl font-bold mt-16 mb-6 z-10">
              Ready To Get Started?
            </h1>
            <p className="text-lg md:text-xl mb-10">
              Risus Habitanti Leo Egestas Mauris Diam Eget Morbi Tempus
              Vulputate.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-white text-black py-2 px-4 rounded-full flex items-center">
                <FaApple className="w-6 h-6 mr-2" />
                Download App
              </button>
              <Image
                src="/images/Star2.png"
                alt="Logo"
                width={50}
                height={50}
                className="absolute top-20 left-16 z-[1]"
              />
            </div>
          </div>
          <div className="relative w-full flex justify-center md:justify-end md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/images/3phones.png"
              alt="Phones"
              width={500}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

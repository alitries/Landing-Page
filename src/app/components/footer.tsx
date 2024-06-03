import { FaRegEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-5 gap-8 px-4 sm:px-0">
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <img src="/images/logo.png" alt="uifry logo" className="h-8 mr-2" />
            <span className="text-3xl font-bold">uifry</span>
          </div>

          <div>
            <div className="flex items-center">
              <FaRegEnvelope className="mr-2 text-orange-600" />
              <p>Email: Help@Frybix.Com</p>
            </div>
            <div className="flex items-center ">
              <FaPhone className="mr-2 text-orange-600" />
              <p>Phone: +1234 456 678 89</p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-1">
          <h4 className="font-semibold mb-2 text-xl sm:text-2xl">Links</h4>
          <ul>
            <li className="mb-1">
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-1">
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a href="/bookings" className="hover:underline">
                Bookings
              </a>
            </li>
            <li className="mb-1">
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-2xl">Legal</h4>
          <ul>
            <li className="mb-1">
              <a href="/terms" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li className="mb-1">
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-1">
              <a href="/cookie" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-2xl">Product</h4>
          <ul>
            <li className="mb-1">
              <a href="/tour" className="hover:underline">
                Take Tour
              </a>
            </li>
            <li className="mb-1">
              <a href="/live-chat" className="hover:underline">
                Live Chat
              </a>
            </li>
            <li className="mb-1">
              <a href="/reviews" className="hover:underline">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Other columns are similar */}

        <div className="sm:col-span-1">
          <h4 className="font-semibold mb-2 text-xl sm:text-2xl">Newsletter</h4>
          <p className="mb-2">Stay Up To Date</p>
          <form className="flex flex-col sm:flex-row items-center sm:items-start">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 mb-2 sm:mb-0 mr-0 sm:mr-2 border border-gray-300 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 border-t pt-4">
        <p>Copyright 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

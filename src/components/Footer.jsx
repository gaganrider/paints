import React from "react";

// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-[#013D6C] text-white pt-12 px-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Group Company</h3>
          <div className="flex justify-center space-x-8">
            <img
              src="/path-to-astral-pipes-logo.png"
              alt="Astral Pipes"
              className="h-12"
            />
            <img
              src="/path-to-astral-adhesives-logo.png"
              alt="Astral Adhesives"
              className="h-12"
            />
            <img
              src="/path-to-bondit-logo.png"
              alt="Bond It"
              className="h-12"
            />
            <img
              src="/path-to-astral-bathware-logo.png"
              alt="Astral Bathware"
              className="h-12"
            />
            <img
              src="/path-to-gem-paints-logo.png"
              alt="Gem Paints"
              className="h-12"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600"></div>

      {/* Main Footer Section */}
      <div className="container flex  w-full ml-10 py-8 gap-10">
        {/* Astral Paints Info */}
        <div className="flex-1">
          <img
            src="/path-to-astral-logo.png"
            alt="Astral Paints"
            className="h-16 mb-4"
          />
          <h4 className="text-lg font-bold mb-4 text-yellow-100">Reach Us</h4>
          <p className="text-sm  font-extralight">
            #417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore -
            560 058
          </p>
          <p className="mt-2  font-extralight">+91 – 80 – 42552555</p>
          <p>info@gem-paints.com</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="  flex-1 ">
          <div className="flex items-center  ">
            <h4 className="text-lg font-bold mb-4 text-yellow-100">
              Sign Up To Our Newsletter
              <p className="mb-4  font-extralight">Lorem ipsum dolor sit amet consectetur.</p>
            </h4>
            
            <div className="flex ml-5 p-0 items-center border border-solid border-gray-500 rounded-full">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 text-black rounded-l-full bg-transparent "
              />
              <button className="bg-blue-500 px-4 py-2 w-64 rounded-full">
                Enquire Now
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex  gap-10">
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-100">About</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline font-extralight">
                    About Astrals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    Paint Journey
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline font-extralight">
                    Group Companies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-100">Category</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    Interior Paints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    Exterior Paints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    Undercoats
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline font-extralight">
                    Painting Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    Water Proofing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-100">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    Wall Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    water solution
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline  font-extralight">
                    painting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#001F3F] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          <div className="mt-4 md:mt-0">ALL RIGHTS RESERVED</div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:underline">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:underline">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:underline">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:underline">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

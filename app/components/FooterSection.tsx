export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-4 sm:px-16 py-6 sm:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Left side - Logo + Title + Follow Us */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src="/t-siam logo.png"
            alt="Company Logo"
            className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">
              T-SIAM ARCH CO.LTD
            </h2>

            {/* Follow Us */}
            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
              <img
                src="/facebook.png"
                alt="Facebook"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <a
                href="https://www.facebook.com"
                className="hover:text-gray-300"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Contact Us */}
        <div className="text-right mt-4 md:mt-0">
          <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 w-full">
            {/* FIXED: smaller on mobile */}
            Contact Us
          </h3>

          {/* Phone */}
          <p className="flex justify-end items-center gap-1 sm:gap-2 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
            <span>+66 1234 5678</span>
            <img
              src="/telephone.png"
              alt="Phone"
              className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
            />
          </p>

          {/* Email */}
          <p className="flex justify-end items-center gap-1 sm:gap-2 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
            <span>info@tsiamarch.com</span>
            <img
              src="/mail.png"
              alt="Email"
              className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
            />
          </p>

          {/* Location */}
          <p className="flex justify-end items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
            <span>123 Main Street, Bangkok</span>
            <img
              src="/location.png"
              alt="Location"
              className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}

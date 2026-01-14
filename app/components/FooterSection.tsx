export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-4 sm:px-16 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Logo + Brand */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <img
            src="/t-siam logo.png"
            alt="Company Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
          />

          <div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3">
              T-SIAM ARCH CO.LTD
            </h2>

            <a
              href="https://www.facebook.com"
              className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-gray-300"
            >
              <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
              Follow us on Facebook
            </a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3">
            <p className="flex items-center justify-center md:justify-end gap-3 text-sm sm:text-base">
              <img
                src="/telephone.png"
                alt="Phone"
                className="w-5 h-5 filter invert"
              />
              <span>+66 1234 5678</span>
            </p>

            <p className="flex items-center justify-center md:justify-end gap-3 text-sm sm:text-base">
              <img
                src="/mail.png"
                alt="Email"
                className="w-5 h-5 filter invert"
              />
              <span>info@tsiamarch.com</span>
            </p>

            <p className="flex items-center justify-center md:justify-end gap-3 text-sm sm:text-base">
              <img
                src="/location.png"
                alt="Location"
                className="w-5 h-5 filter invert"
              />
              <span>123 Main Street, Bangkok</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import star from '../images/star.png';

export default function Nav() {
  return (
    <nav className="fixed top-5 left-20 right-20 bg-white shadow-lg z-50 rounded-3xl">
      <div className="mx-auto px-5 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={star} alt="star" className="h-8 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/services" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="/About_us" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About us</a>
            <a href="/faq" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
          </div>

          {/* Login Button */}
          <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Login</button>
        </div>
      </div>
    </nav>
  );
}


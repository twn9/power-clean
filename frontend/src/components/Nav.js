import star from '../images/star.png'

export default function Nav() {
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-50 rounded-3xl">
    <div className="max-w-2xl mx-auto px-5 py-3">
      <div className="flex justify-between items-center">
        {/* Logo and other elements */}
        <div>
          <img src={star} alt="star" className="h-8 w-auto" />
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {/* Add nav items here */}
          <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          {/* More nav items */}
        </div>
        {/* Right-side elements like buttons or icons */}
        <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Login</button>
      </div>
    </div>
  </nav>
  );
}
export default function Nav() {
    return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="font-bold">Your Logo</div>
      <div>
        <a href="#services" className="p-2">Services</a>
        <a href="#reviews" className="p-2">Reviews</a>
        <a href="#contact" className="p-2">Contact</a>
      </div>
    </nav>
    );
}
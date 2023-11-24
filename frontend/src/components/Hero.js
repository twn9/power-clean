import washer from '../images/washer.png';
import hero2 from '../images/hero2.png';
import hero3 from '../images/hero3.png'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${hero3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 py-10 flex items-center justify-between">
        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-white">Professional Power Washing</h2>
          <p className="text-gray-200 mt-2">Making your house look new!</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Request a quote</button>
        </div>
        
        {/* Washer Image */}
        {/* <img src={washer} alt="washer" className="h-auto w-64" /> */}
      </div>
    </div>
  );
}

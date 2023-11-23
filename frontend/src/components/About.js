import './About.css'

export default function About() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-2">What We Do</h2>
      <p>Here is an explanation of the services we provide...</p>

      <div className="cards-container">
        <div className="card">
          <img src="driveway-image.jpg" alt="Driveway Cleaning" />
          <div className="card-body">
            <h5 className="card-title">Driveway Cleaning</h5>
            <p className="card-text">Description of driveway cleaning service.</p>
          </div>
        </div>

        <div className="card">
          <img src="roof-image.jpg" alt="Roof Cleaning" />
          <div className="card-body">
            <h5 className="card-title">Roof Cleaning</h5>
            <p className="card-text">Description of roof cleaning service.</p>
          </div>
        </div>

        <div className="card">
          <img src="garbage-can-image.jpg" alt="Garbage Can Cleaning" />
          <div className="card-body">
            <h5 className="card-title">Garbage Can Cleaning</h5>
            <p className="card-text">Description of garbage can cleaning service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

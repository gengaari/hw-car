import { Link } from 'react-router-dom';
import cars from '../../data/Cars.json';
import './Car.css';

export default function CarList() {
  return (
    <div className="Main">
      <h2>Cars</h2>
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id}>
            <Link to={`/cars/${car.id}`}>
              <img src={car.photo} alt={car.model} />
              <h3>{car.model}</h3>
              <p>{car.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

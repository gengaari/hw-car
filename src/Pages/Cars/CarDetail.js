import { useLoaderData, Link } from 'react-router-dom';

export default function CarDetails() {
  const car = useLoaderData();

  return (
    <div className="Main car-details">
      <Link to="/cars"> ←Back to cars</Link>
      <h2>{car.model}</h2>
      <img src={car.photo} alt={car.model} />
      <p><b>Color:</b> {car.color}</p>
      <p><b>Price:</b> {car.price}</p>
      <p><b>Manufacturer:</b> {car.manufacturer}</p>
    </div>
  );
}

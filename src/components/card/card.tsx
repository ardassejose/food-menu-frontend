import "./card.css";

interface CardProps {
  price: number;
  title: string;
  image: string;
}
export default function Card({ price, title, image }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>
        <strong>Valor: {price}</strong>
      </p>
    </div>
  );
}

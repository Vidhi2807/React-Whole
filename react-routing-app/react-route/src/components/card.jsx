function Card({ title, image, description, extra }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {extra && <p>{extra}</p>}
    </div>
  );
}

export default Card;


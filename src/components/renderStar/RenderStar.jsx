import "./RenderStar.css";

function RenderStar({ rating = 0, maxRating = 10 }) {
  const safeRating = Number(rating) || 0;
  const stars = Math.min(Math.max((safeRating / maxRating) * 5, 0), 5);
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`full-${i}`} className="star full">
          ⭐
        </span>
      ))}
      {hasHalfStar && <span className="star half">⭐</span>}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} className="star empty">
          ⭐
        </span>
      ))}
      <span className="rating-number">({safeRating.toFixed(1)})</span>
    </div>
  );
}

export default RenderStar;

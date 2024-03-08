interface starRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating(props: starRatingProps) {
  let rating = props.rating;

  return (
    <div className={props.className}>
      {Array(5)
        .fill(null)
        .map((_, index) => {
          if (rating >= 0.75) {
            rating--;
            return <span key={index} className="material-symbols-outlined filled-icon">grade</span>; // Filled star
          }
          
          if (rating >= 0.25) { 
            rating = 0;
            return <span key={index} className="material-symbols-outlined">star_half</span>; // Half star
          }

          return <span key={index} className="material-symbols-outlined">grade</span>; // Outlined star
        })}
    </div>
  );
};

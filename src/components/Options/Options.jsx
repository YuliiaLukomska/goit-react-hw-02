const Options = ({ reviewsObj, updateReviews, totalFeedbackValue }) => {
  const reviewArray = Object.keys(reviewsObj);

  return (
    <ul onClick={() => updateReviews(event.target.innerHTML)}>
      {reviewArray.map((review, index, array) => (
        <li key={index}>
          <button>{array[index]}</button>
        </li>
      ))}
      {totalFeedbackValue > 0 && (
        <li>
          <button>reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;

const Options = ({ reviewsObj, updateReviews }) => {
  const reviewArray = Object.keys(reviewsObj);

  return (
    <ul onClick={() => updateReviews(event.target.innerHTML)}>
      {reviewArray.map((review, index, array) => (
        <li key={index}>
          <button>{array[index]}</button>
        </li>
      ))}
    </ul>
  );
};

export default Options;

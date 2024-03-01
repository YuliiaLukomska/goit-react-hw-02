const Options = ({ reviewsObj }) => {
  const reviewArray = Object.keys(reviewsObj);

  return (
    <ul>
      {reviewArray.map((review, index, array) => (
        <li key={index}>
          <button>{array[index]}</button>
        </li>
      ))}
    </ul>
  );
};

export default Options;

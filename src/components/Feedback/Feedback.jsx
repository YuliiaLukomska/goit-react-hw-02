const Feedback = ({ goodReview, neutralReview, badReview }) => {
  return (
    <ul>
      <li>
        <p>Good: {goodReview}</p>
      </li>
      <li>
        <p>Neutral: {neutralReview}</p>
      </li>
      <li>
        <p>Bad: {badReview}</p>
      </li>
    </ul>
  );
};

export default Feedback;

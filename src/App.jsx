import Description from "./components/Description/Description";
import { useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
    console.log(feedbackType);
    setReviews((prevState) => prevState);
  };

  return (
    <>
      <Description />
      <Options reviewsObj={reviews} updateReviews={updateFeedback} />
      <Feedback
        reviewsObj={reviews}
        goodReview={reviews.good}
        neutralReview={reviews.neutral}
        badReview={reviews.bad}
      />
    </>
  );
}

export default App;

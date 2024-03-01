import Description from "./components/Description/Description";
import { useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    if (feedbackType === "reset") {
      setReviews({ good: 0, neutral: 0, bad: 0 });
    } else {
      setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
    }
    // Тут використовуй сеттер, щоб оновити стан
  };

  const feedbackValuesReset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        reviewsObj={reviews}
        updateReviews={updateFeedback}
        totalFeedbackValue={totalFeedback}
        feedbackReset={feedbackValuesReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviewsObj={reviews}
          goodReview={reviews.good}
          neutralReview={reviews.neutral}
          badReview={reviews.bad}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
export default App;

import Description from "./components/Description/Description";
import { useState } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <>
      <Description />
      <Options reviewsObj={reviews} />
      <Feedback />
    </>
  );
}

export default App;

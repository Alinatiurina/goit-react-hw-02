import { useState } from "react";
import { useEffect } from "react";
import Description from "./Description/description.jsx";
import Options from "./Options/options.jsx";
import Feedback from "./Feedback/feedback.jsx";
import Notofication from "./Notification/notification.jsx";

const getSaveFeedback = () => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback != null ? JSON.parse(savedFeedback) : {"good":null,"neutral":null,"bad":null};
        
};

export default function App() {
   
        const [typesFeedback, setTypesFeedback] = useState(
                getSaveFeedback,
                {
                good: 0,
                neutral: 0,
                bad: 0
        });
        const updateFeedback = (feedbackType) => {
                setTypesFeedback({
                        ...typesFeedback,
                        [feedbackType]: typesFeedback[feedbackType]+1
                });
        }
        const resetFeedback = () => {
                setTypesFeedback({
                 good: 0,
                 neutral: 0,
                 bad: 0,  
                });
        }
        
        const totalFeedback = typesFeedback.good + typesFeedback.neutral + typesFeedback.bad;
        const positiveFeedback = Math.round((typesFeedback.good / totalFeedback) * 100);
        
        useEffect(() => {
                localStorage.setItem("feedback", JSON.stringify(typesFeedback));
        }, [typesFeedback]
        );
  return (
        <>
        <Description />
        <Options updateFeedback={updateFeedback} total={totalFeedback} reset={resetFeedback} />
        {totalFeedback != 0 && <button onClick={resetFeedback}>Reset</button>}
        {totalFeedback != 0 && <Feedback feedback={typesFeedback} total={totalFeedback} positive={positiveFeedback} />}
        {totalFeedback === 0 && <Notofication />}
        
       </>
  );
};
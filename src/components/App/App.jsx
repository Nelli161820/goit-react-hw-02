import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import css from './App.module.css';

export default function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || initialState;
  });

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={css.container}>
      <Description />
      <Options setFeedback={setFeedback} feedback={feedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
}

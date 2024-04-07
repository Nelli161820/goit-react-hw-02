import css from './Options.module.css';

export default function Options({ setFeedback, feedback }) {
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <button className={css.btn} onClick={() => updateFeedback('good')}>
        Good{' '}
      </button>
      <button className={css.btn} onClick={() => updateFeedback('neutral')}>
        {' '}
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

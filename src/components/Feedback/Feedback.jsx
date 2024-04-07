export default function Feedback({ feedback }) {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;
  if (totalFeedback === 0) {
    return null;
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
}

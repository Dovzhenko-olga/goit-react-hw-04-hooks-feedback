import { useState } from "react";
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;
      case 'bad':
        setBad(prevState => prevState + 1);
        return;
      default:
        return;
    }
   }
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);

  return (
      <div className="App">
        <Section title="Please leave your feedback">
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        </Section>
        
        <Section title="Statistics">
          {countTotalFeedback ?
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage} />
          :<Notification message="No feedback given" />
          }
        </Section>
    </div>);
}

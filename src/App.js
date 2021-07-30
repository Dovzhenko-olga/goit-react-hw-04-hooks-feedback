import { Component } from "react";
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = feedback => {
    this.setState((prevState) => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);
    
    const options = Object.keys(this.state);

    return (
      <div className="App">
        <Section title="Please leave your feedback">
          <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
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
}

export default App;

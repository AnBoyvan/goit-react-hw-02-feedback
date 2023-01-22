// import { Feedback } from './Feedback/Feedback';
import React, { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVote = vote => {
    this.setState(prevState => ({
      [vote]: prevState[vote] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (total === 0) {
      return 0;
    }
    const percentage = (good / total) * 100;
    return Number(percentage.toFixed(2));
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section
        title="Please leave the feedback"
        options={this.state}
        onLeaveFeedback={this.handleVote}
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />
    );
  }
}

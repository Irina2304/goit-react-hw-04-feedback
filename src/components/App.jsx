import { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions'
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnClick = (key) => {

    return this.setState((prevState) => ({ [key]: prevState[key] + 1 }));
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }
  
 
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    const total = this.countTotalFeedback()
    return Math.round((good * 100)/total);
  } 



  render() {
  
    return (
      <>
        <SectionTitle title='Please leave feedback'>
            <FeedbackOption
            onBtnClick={this.onBtnClick}
            value = {Object.keys(this.state)}
            />
        </SectionTitle>

        <SectionTitle title='Statistics'>
          {this.countTotalFeedback() ? (
            <Statistics
              value={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title='There is no feedback!'/>
          )}    
        </SectionTitle>
      </>
    );
  }
}



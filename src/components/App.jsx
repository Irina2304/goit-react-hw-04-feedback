// import { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions'
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const value = {
    good: good,
    neutral: neutral,
    bad: bad,
  }

  const onBtnClick = (key) => {
    key === 'good' ? setGood((prevGood) => prevGood + 1) :
    key === 'neutral' ? setNeutral((prevNeutral) => prevNeutral + 1) :
    setBad((prevBad) => prevBad + 1)  
  }
  

   const countTotalFeedback = () => {
     return (good + neutral + bad);
   }
  
 
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    return Math.round((good * 100)/total);
  } 

  return (
    <>
      <SectionTitle title='Please leave feedback'>
          <FeedbackOption
          onBtnClick={onBtnClick}
          value = {Object.keys(value)}
          />
      </SectionTitle>

      <SectionTitle title='Statistics'>
        {countTotalFeedback() ? (
          <Statistics
            value={ value }
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title='There is no feedback!'/>
        )}    
      </SectionTitle>
    </>
  );
};


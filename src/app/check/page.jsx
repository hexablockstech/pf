// SurveyComponent.js
"use client";
import { useEffect, useState } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css'; // Import SurveyJS stylesheet

const SurveyForm = () => {
  const [survey, setSurvey] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define your survey JSON object
  const surveyJSON = {
    title: 'Financial Health Survey',
    pages: [
      {
        questions: [
          {
            type: 'radiogroup',
            name: 'age_group',
            title: 'What is your age group?',
            choices: [
              'Under 18',
              '18-24',
              '25-34',
              '35-44',
              '45-54',
              '55-64',
              '65 or older',
            ],
          },
          {
            type: 'radiogroup',
            name: 'income_range',
            title: 'What is your approximate annual income range?',
            choices: [
              'Less than $30,000',
              '$30,000 - $50,000',
              '$50,001 - $75,000',
              '$75,001 - $100,000',
              'Above $100,000',
            ],
          },
          {
            type: 'radiogroup',
            name: 'income_allocation_needs',
            title: 'On average, what percentage of your income do you allocate towards needs? (e.g., rent, utilities, groceries)',
            choices: [
              'Less than 50%',
              '50-70%',
              '70-90%',
              'More than 90%',
            ],
          },
          {
            type: 'radiogroup',
            name: 'income_allocation_wants',
            title: 'On average, what percentage of your income do you allocate towards wants? (e.g., dining out, entertainment, shopping)',
            choices: [
              'Less than 10%',
              '10-20%',
              '20-30%',
              'More than 30%',
            ],
          },
          {
            type: 'radiogroup',
            name: 'income_allocation_investments',
            title: 'On average, what percentage of your income do you allocate towards investments? (e.g., stocks, mutual funds, real estate)',
            choices: [
              'Less than 10%',
              '10-20%',
              '20-30%',
              'More than 30%',
            ],
          },
        ],
      },
    ],
  };

  // Handle survey completion
  const onCompleteSurvey = (survey) => {
    console.log('Survey results:', survey.data);
  };

  useEffect(() => {
    setSurvey(surveyJSON);
  }, []);

  const surveyContainer = document.querySelector('.survey-container');
  if (surveyContainer) {
    surveyContainer.classList.toggle('dark-mode');
  }

  return (
    <div
      style={{
        margin: '50px auto',
        marginTop: 100,
        maxWidth: '80%'
      }}
    >
      {survey && (
        <Survey.Survey
          json={survey}
          onComplete={onCompleteSurvey}
          showProgressBar="top"
          theme={isDarkMode ? 'dark' : 'default'}
        />
      )}
    </div>
  );
};

export default SurveyForm;




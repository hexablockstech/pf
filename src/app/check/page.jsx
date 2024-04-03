// SurveyComponent.js
"use client";
import API_URL from '../../config/config';
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
              '18-29',
              '30-39',
              '40-59',
              '60 or older',
            ],
          },
          {
            type: 'radiogroup',
            name: 'income_range',
            title: 'What is your approximate annual income range?',
            choices: [
              'Less than ₹3 lakh',
              '₹3 - 5 lakh',
              '₹5 - 9 lakh',
              '₹9 - 15 lakh',
              'Above ₹15 lakh'
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
  const onCompleteSurvey = async (survey) => {
    try {
      const response = await fetch(`${API_URL}/api/user/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(survey.data)
      });

      if (!response.ok) {
        throw new Error('Failed to save survey data');
      }

      console.log('Survey results:', JSON.stringify(survey.data));  
      console.log('Survey data saved successfully');
    } catch (error) {
      console.error('Error saving survey data:', error);
    }
  };

    useEffect(() => {
      setSurvey(surveyJSON);
  }, []);




  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const surveyContainer = document.querySelector('.survey-container');
    if (surveyContainer) {
      surveyContainer.classList.toggle('dark-mode');
    }
  };

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




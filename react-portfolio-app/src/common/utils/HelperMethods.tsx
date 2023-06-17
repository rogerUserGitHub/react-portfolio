import { DialogText } from '../enums/DialogText';

export const handleText = (name: string) => {
  let text = '';
  switch (name) {
    case 'React':
      text = DialogText.react;
      break;
    case 'Typescript':
      text = DialogText.typescript;
      break;
    case 'Javascript':
      text = DialogText.javascript;
      break;
    case '.NET':
      text = DialogText.dotnet;
      break;
    case 'CI/CD':
      text = DialogText.CICD;
      break;
    case 'AWS':
      text = DialogText.aws;
      break;
    case 'Java':
      text = DialogText.java;
      break;
    case 'C#':
      text = DialogText.csharp;
      break;
    case 'GIT':
      text = DialogText.git;
      break;
  }
  return text;
};

export const handleChipClick = (name: string): any => {
  let url = '';
  switch (name) {
    case 'react':
      url = 'https://reactjs.org/';
      break;
    case 'typescript':
      url = 'https://www.typescriptlang.org/';
      break;
    case 'mui':
      url = 'https://mui.com/';
      break;
    case 'i18n':
      url = 'https://www.i18next.com/';
      break;
    case 'coingecko':
      url = 'https://www.coingecko.com/en/api';
      break;
    case 'rapidapi':
      url = 'https://rapidapi.com/hub';
      break;
    case 'firebase':
      url = 'https://firebase.google.com/';
      break;
    case 'tailwind':
      url = 'https://tailwindcss.com/';
      break;
    case 'javascript':
      url = 'https://www.javascript.com/';
      break;
    case 'react-native':
      url = 'https://reactnative.dev/';
      break;
    case 'chatgpt':
      url = 'https://openai.com/blog/chatgpt';
      break;
    case 'aidy':
      url = 'https://www.linkedin.com/company/aidyhealth/?originalSubdomain=ch';
      break;
  }
  return url;
};

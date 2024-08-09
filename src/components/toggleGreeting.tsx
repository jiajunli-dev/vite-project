import { useState } from 'react';

type toggleType = {
  text: string;
};

const DisplayGreeting: React.FC = () => {
  const [isGreeting, setGreeting] = useState(true);

  const toggleGreeting = (): void => {
    setGreeting(!isGreeting);
  };

  return (
    <div>
      <button onClick={toggleGreeting} type="button">
        Toggle
      </button>

      {isGreeting ? <ToggleGreeting text="WELCOME TO DOODOO WEBSITE"/> : null}
    </div>
  );
};

const ToggleGreeting: React.FC<toggleType> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default DisplayGreeting;

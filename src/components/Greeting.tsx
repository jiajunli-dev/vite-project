import { ChangeEvent, FC, useState } from 'react';

type GreetingProps = {
  text: string;
};

const App: FC = () => {
  const [greeting, setGreeting] = useState('Welcome');
  const [isGreeting, setIsGreeting] = useState(true);

  const change = (event: ChangeEvent<HTMLInputElement>): void => {
    setGreeting(event.target.value);
  };

  const toggle = (): void => {
    setIsGreeting(!isGreeting);
  };

  return (
    <div>
      <ToggleButton fs={toggle} />

      <input type="text" value={greeting} onChange={change} />

      {isGreeting ? <Greeting text={greeting} /> : null}
    </div>
  );
};

const Greeting: FC<GreetingProps> = ({ text }) => {
  return <h1>{text}</h1>;
};

const ToggleButton: FC<{ fs: () => void }> = ({ fs }) => {
  return <button onClick={fs}>Toggle</button>;
};

export default App;

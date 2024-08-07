import { ChangeEvent, useState, FC } from 'react';

type GreetingProps = {
  greeting: string;
  fs: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Greeting = () => {
  const [greeting, setGreeting] = useState('Hello user!');

  const changeGreeting = (event: ChangeEvent<HTMLInputElement>) => setGreeting(event.target.value);

  return (
    <Headline greeting={greeting} fs={changeGreeting} />
  );
}

const Headline: FC<GreetingProps> = ({greeting, fs}) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <input type="text" className="border" value={greeting} onChange={fs} />
    </div>
  );
}

export default Greeting;

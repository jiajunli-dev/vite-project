type GreetingType = {
  greeting: string;
};

const MyComponent = () => {
  return (
    <div>
      <ComponentProps greeting="Hello user!" />
    </div>
  );
}

const ComponentProps: React.FC<GreetingType> = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default MyComponent;

import { useDisplayContext } from "./DisplayItemContext";

const Car: React.FC = (): JSX.Element => {
  const { ItemContextType } = useDisplayContext();
  
  return (
    <div>
      <h1>Car</h1>
      <p>
        Car is a vehicle that has four wheels and an engine. It is used for
        transportation.
      </p>
      <p>Car price: {ItemContextType.carPrice}</p>
    </div>
  );
};

export default Car;

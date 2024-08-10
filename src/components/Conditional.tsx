import React from "react";

const Item: React.FC<{isParked: boolean, car: string}> = ({isParked, car}): JSX.Element => {
  return (
    <li>
      {isParked ? <p>{car} is parked</p> : <p>{car} is not parked</p>}
    </li>
  );
};

const Conditional: React.FC = (): JSX.Element => {
  return (
    <div>
      <ul>
        <Item isParked={true} car="Toyota" />
        <Item isParked={false} car="Honda" />
      </ul>
    </div>
  );
};

export default Conditional;
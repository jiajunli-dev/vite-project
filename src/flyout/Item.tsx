import React from 'react';

const Item: React.FC<{ text: string }> = ({text}): JSX.Element => {
  return <li>{text}</li>;
};

export default Item;

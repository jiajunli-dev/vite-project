import React from 'react'

const Flag: React.FC<{ renderProp: (name: string) => JSX.Element, name: string }> = ({ renderProp, name }): JSX.Element => {
  return renderProp(name);
};

export default Flag;

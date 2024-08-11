import React from "react";

const Card: React.FC<{children: React.ReactNode}> = ({ children }): JSX.Element => {
  return (
    <div className="w-1/4 bg-slate-300">
      {children}
    </div>
  );
};

export default Card;

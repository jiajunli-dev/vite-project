import React from 'react';

interface DisplayAvatarProps {
  imgUrl: string;
}

const DisplayAvatar: React.FC<DisplayAvatarProps> = ({ imgUrl = '' }) => {
  const [count, setCount] = React.useState(0);
  
  return (
    <>
      <img src={imgUrl} alt="avatar" className="w-3/12" />
      <h1>doodoo</h1>
    </>
  );
};

export default DisplayAvatar;

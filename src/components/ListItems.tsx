import React from 'react';

type listType = {
  id: number;
  name: string;
};

export const Items: listType[] = [
  { id: 1, name: 'Jiajun' },
  { id: 2, name: 'Jiaqiang' },
  { id: 3, name: 'Omar' },
  { id: 4, name: 'Marcle' },
  { id: 5, name: 'Choukri' },
];

const ListItems: React.FC<{ list: listType[] }> = ({ list }): JSX.Element => {
  const [curList, setList] = React.useState(list);
  
  const handleClick = (): void => {
    setList(curList.slice().reverse());
  };
  
  return (
    <div>
      <ul>
        {curList.map((item: listType) => (
          <li key={item.id}>
            <DisplayItem name={item.name} />
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleClick}>
        Reverse List
      </button>
    </div>
  );
};

const DisplayItem: React.FC<{ name: string }> = ({ name }): JSX.Element => {
  return (
    <label>
      <input type="checkbox" />
      {name}
    </label>
  );
};

export default ListItems;

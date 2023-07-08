import { useState } from 'react';
import datas from './datas';


function GetData(){
const [data, setData] = useState(datas);

  const updateState = (index) => (e) => {
    const newArray = data.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setData(newArray);
  };

  return (
    <div className="App">
      <p>Hello, world!</p>
      {data.map((datum, index) => {
        <li key={datum.name}>
          <input
            type="text"
            name="name"
            value={datum.name}
            onChange={updateState(index)}
          />
        </li>;
        })}
    </div>
  );
}

export default GetData;
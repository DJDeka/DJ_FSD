
import React from "react";
import { createContext} from "react";
import Child3 from "./Child3";

const Context = createContext();

const App = () => {
    return (
        
        <Context.Provider value={{ data: "Data xxxxxxx" }}>
        <Child3/>
        </Context.Provider>
       
    );
  };

export default App;
export {Context};



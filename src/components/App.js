import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDark, setDark] = useState({appClass: "App light", mode: "Dark Mode"})
  const style = isDark.appClass

  function setMode() {
    
    if(isDark.appClass==="App dark") {setDark({appClass: "App light", mode: "Dark Mode"})} 
    else if(isDark.appClass==="App light") {setDark({appClass: "App dark", mode: "Light Mode"})};
  
  }

  

  

  return (
    <div className={style}>
      <header>
        <h2>Shopster</h2>
        <button onClick={setMode}>{isDark.mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

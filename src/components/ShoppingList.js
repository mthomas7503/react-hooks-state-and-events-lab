import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setCategory] = useState(items.map((item) => (
  <Item key={item.id} name={item.name} category={item.category}/>)))

 function filteredFood(event){
   const chosenItems = items.filter((item) => item.category === event.target.value)

   if(event.target.value === "All") {setCategory( items.map((item) => (
    <Item key={item.id} name={item.name} category={item.category}/>)) )}
    
   else setCategory(chosenItems.map((obj) => (<Item key={obj.id} name={obj.name} category={obj.category}/>)))
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filteredFood} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory}
      </ul>
    </div>
  );
}

export default ShoppingList;

import { useState } from "react";
import IconTrash from "../assets/icon-trash";

type ListItemType = {
  id: number;
  label: string;
  done: boolean;
};

const initialList: ListItemType[] = [
  {
    id: 0,
    label: "Nauci React",
    done: false,
  },
  {
    id: 1,
    label: "Nauci CSS",
    done: false,
  },
];

const Todo = () => {
  const [listItems, setListItems] = useState<ListItemType[]>(initialList);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    const newListItem = {
      id: listItems.length + 1,
      label: inputValue,
      done: false,
    };

    setListItems([...listItems, newListItem]);
    setInputValue("");
  };

  const deleteItem = (id: number) => {
    const newList = listItems.filter((listItem) => listItem.id !== id);
    setListItems(newList);
  };

  const handleCheck = (id: number) => {
    const newList = listItems.map((listItem) => {
      if (listItem.id === id) {
        return { ...listItem, done: true };
      }
      return listItem;
    });
    setListItems(newList);
  };

  return (
    <div className="container">
      <h1>To Do list</h1>
      <hr />
      <div className="todo">
        <div className="todo__header">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="todo__input"
            type="text"
          />
          <button onClick={() => handleAdd()} className="todo__btn">
            Dodaj
          </button>
        </div>
        <div className="todo__item__wrapper">
          {listItems.map((listItem: ListItemType) => {
            return (
              <div className="todo__item" key={listItem.id}>
                {listItem.done ? "gotovo" : ""}
                <div
                  onClick={() => handleCheck(listItem.id)}
                  className="todo__item__label"
                >
                  {listItem.label}
                </div>
                <div
                  onClick={() => deleteItem(listItem.id)}
                  className="todo__item__remove"
                >
                  <IconTrash />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;

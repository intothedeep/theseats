import React from "react";

function ToolBoxItem({ onTakeItem, item }) {
  return (
    <div
      className="toolbox__items__item"
      onClick={onTakeItem.bind(undefined, item)}
    >
      {item.i}
    </div>
  );
}

export default ToolBoxItem;

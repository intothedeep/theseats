import React from "react";

import ToolBoxItem from "./ToolBoxItem";

function ToolBox({ items, onTakeItem }) {
  return (
    <div className="toolbox">
      <span className="toolbox__title">Toolbox</span>
      <div className="toolbox__items">
        {items.map((item) => (
          <ToolBoxItem key={item.i} item={item} onTakeItem={onTakeItem} />
        ))}
      </div>
    </div>
  );
}

export default ToolBox;

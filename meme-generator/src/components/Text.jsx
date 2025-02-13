import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);
  const [editmode, seteditmode] = useState(false);
  const [value, setvalue] = useState("Double Click to Edit"); // ✅ Keep state updated

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        {editmode ? (
          <input
            onDoubleClick={() => seteditmode(false)}
            value={value} // ✅ Uses "value" correctly
            onChange={(e) => setvalue(e.target.value)} // ✅ Updates the value state
            autoFocus // ✅ Focus automatically when switching to input mode
          />
        ) : (
          <h1 onDoubleClick={() => seteditmode(true)}>{value}</h1> // ✅ Displays the updated value
        )}
      </div>
    </Draggable>
  );
};

export default Text;

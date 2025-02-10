import React, { useState } from "react";
import data from "./data";
import './styles.css'
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection,setEnableMultiSelection]=useState(false);
  const [multiple,setMultiple]=useState([]);

  function handleMulipleSelection(id){
    let copyMultiple=[...multiple];
    const findindexofid=copyMultiple.indexOf(id);
    
    console.log(findindexofid);
    if(findindexofid == -1)copyMultiple.push(id);
    else{
      copyMultiple.splice(findindexofid,1);
    }
    setMultiple(copyMultiple);
  }
  
  function handleSelection(id) {
    console.log(id);
    setSelected(id===selected?null:id);

    let copyMultiple=[...multiple];
    const findindexofid=copyMultiple.indexOf(id);
    
    console.log(findindexofid);
    if(findindexofid == -1);
    else{
      copyMultiple.splice(findindexofid,1);
    }
    setMultiple(copyMultiple);
  }
  return (
    <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={() => {
                  enableMultiSelection===true?handleMulipleSelection(dataitem.id):
                  handleSelection(dataitem.id);
                }}
                className="title"
              >
                <h3>{dataitem.question};</h3>
                <span>+</span>
              </div>
              {selected === dataitem.id || multiple.indexOf(dataitem.id)!=-1 ? (
                <div className="content">{dataitem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import './ProcentList.css';

const ProcentList = ({list}) => {
  return (
    list.map((it) => (
      <React.Fragment key={it}>
        <input
          type="radio"
          name="procent"
          className="procent_input"
          id={`id_${it}`}
          value={it}
          onChange={(evt)=>{
            console.log(evt.target.value);
          }}
        />
       <label className="procent_label" htmlFor={`id_${it}`}>{it}%</label>
      </React.Fragment>
    ))
  )
};

export default ProcentList;

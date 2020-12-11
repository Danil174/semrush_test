import React from 'react';
import {useAppContext} from '../../AppContext';
import './ProcentList.css';

const ProcentList = ({list}) => {
  const {setRatio, ratio, price, setInitPm} = useAppContext();
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
            setRatio(+evt.target.value);
            setInitPm(price / 100 * +evt.target.value);
          }}
          defaultChecked={ratio === it}
        />
       <label className="procent_label" htmlFor={`id_${it}`}>{it}%</label>
      </React.Fragment>
    ))
  )
};

export default ProcentList;

import React from 'react';

export default function Select(props) {
  return (
    <div className="inline-block">
      <label htmlFor="maximumRows">Rows: </label>
      <select id="maximumRows" value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: React.PropTypes.array,
  value: React.PropTypes.number,
  onChange: React.PropTypes.func,
};


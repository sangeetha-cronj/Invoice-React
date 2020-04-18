import React from 'react';

const Year = (props) => {
  const yearSelected = (e) => {
    props.yearFilter(e.target.value);
  };
  return (
    <div>
      <select className="dropdown" onChange={(e) => yearSelected(e)}>
        <option value="0">Year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
};

export default Year;

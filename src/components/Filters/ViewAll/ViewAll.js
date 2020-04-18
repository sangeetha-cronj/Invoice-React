import React from 'react';

const ViewAll = (props) => {
  return (
    <div>
      <button className="btn-view" onClick={props.viewAllFilter}>
        View All
      </button>
    </div>
  );
};

export default ViewAll;

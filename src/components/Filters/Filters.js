import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import './Filters.css';

import Date from './Date/Date';
import Month from './Month/Month';
import Year from './Year/Year';
import ViewAll from './ViewAll/ViewAll';

const Filters = (props) => {
  return (
    <Aux>
      <div className="Filters">
        <Date dateFilter={props.dateFilter} />
        <Month monthFilter={props.monthFilter} />
        <Year yearFilter={props.yearFilter} />
        <ViewAll viewAllFilter={props.viewAllFilter} />
      </div>
    </Aux>
  );
};

export default Filters;

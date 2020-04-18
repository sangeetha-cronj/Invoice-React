import React, { useState } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { InvoiceContext } from '../../../Context/InvoiceContext';

const Row = (props) => {
  const [edit, setEdit] = useState({
    isEdit: false,
    editId: null,
  });
  const deleteclicked = (e, id) => {
    e.preventDefault();
    props.deleteClick(id);
  };
  const editclicked = (e, id) => {
    e.preventDefault();
    setEdit({ isEdit: true, editId: id });
  };
  const updateClicked = (e, id) => {
    e.preventDefault();
    props.updateClick(id);
    setEdit({ isEdit: false });
  };

  return (
    <Aux>
      {edit.isEdit ? (
        <InvoiceContext.Consumer>
          {(context) => (
            <Aux>
              <tr>
                <td>
                  <input
                    type="text"
                    name="invoice_no"
                    id="invoice_no"
                    defaultValue={props.values.invoice_no}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="client_name"
                    id="client_name"
                    defaultValue={props.values.client_name}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    defaultValue={props.values.company_name}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="submitted"
                    id="submitted"
                    defaultValue={props.values.submitted}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    defaultValue={props.values.amount}
                  />
                </td>
                <td>
                  <button
                    type="submit"
                    onClick={(e) => updateClicked(e, props.values.id)}
                  >
                    update
                  </button>
                </td>
              </tr>
            </Aux>
          )}
        </InvoiceContext.Consumer>
      ) : (
        <tr>
          <td>{props.values.invoice_no}</td>
          <td>{props.values.client_name}</td>
          <td>{props.values.company_name}</td>
          <td>{props.values.submitted}</td>
          <td>{props.values.amount}</td>
          <td>
            <button
              className="btn-edit"
              onClick={(e) => editclicked(e, props.values.id)}
            >
              Edit
            </button>
            <button
              className="btn-delete"
              onClick={(e) => deleteclicked(e, props.values.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </Aux>
  );
};

export default Row;

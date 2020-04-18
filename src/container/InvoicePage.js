import React, { useState, useContext } from 'react';
import Filters from '../components/Filters/Filters';
import Table from '../components/Table/Table';
import { InvoiceContext } from '../Context/InvoiceContext';

const InvoicePage = () => {
  const [invoices, setInvoices] = useContext(InvoiceContext);

  const [filters, setFilters] = useState({
    invoices: null,
    isFilter: false,
  });

  const dateFilterHandler = (date) => {
    let array = invoices;
    if (filters.isFilter) {
      array = filters.invoices;
    }
    const filtered = array.filter(function (a) {
      let dateitem = new Date(a.submitted);
      dateitem = dateitem.getDate();
      return dateitem == date;
    });
    setFilters({ invoices: null });
    setFilters({ invoices: filtered, isFilter: true });
  };

  const monthFilterHandler = (month) => {
    let array = invoices;
    if (filters.isFilter) {
      array = filters.invoices;
    }
    const filtered = array.filter(function (a) {
      let monthitem = new Date(a.submitted);
      monthitem = monthitem.getMonth();
      return monthitem == month;
    });
    setFilters({ invoices: null });
    setFilters({ invoices: filtered, isFilter: true });
  };

  const yearFilterHandler = (year) => {
    let array = invoices;
    if (filters.isFilter) {
      array = filters.invoices;
    }
    const filtered = array.filter(function (a) {
      let yearitem = new Date(a.submitted);
      yearitem = yearitem.getFullYear();
      return yearitem == year;
    });
    setFilters({ invoices: null });
    setFilters({ invoices: filtered, isFilter: true });
  };

  const viewALLHandler = () => {
    setFilters({ isFilter: false });
  };

  const deleteHandler = (id) => {
    const filtered = invoices;
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].id == id) {
        filtered.splice(i, 1);
      }
    }
    setFilters({ invoices: filtered, isFilter: true });
  };

  const updateHandler = (id) => {
    const filtered = invoices;
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].id == id) {
        console.log(filtered[i].id);
        filtered[i].invoice_no = document.getElementById('invoice_no').value;
        filtered[i].client_name = document.getElementById('client_name').value;
        filtered[i].company_name = document.getElementById(
          'company_name'
        ).value;
        filtered[i].submitted = document.getElementById('submitted').value;
        filtered[i].amount = document.getElementById('amount').value;
      }
    }
    setFilters({ invoices: filtered, isFilter: true });
  };

  return (
    <div>
      <Filters
        dateFilter={dateFilterHandler}
        monthFilter={monthFilterHandler}
        yearFilter={yearFilterHandler}
        viewAllFilter={viewALLHandler}
      />
      {filters.isFilter ? (
        <Table
          invoices={filters.invoices}
          deleteClick={deleteHandler}
          updateClick={updateHandler}
        />
      ) : (
        <Table
          invoices={invoices}
          deleteClick={deleteHandler}
          updateClick={updateHandler}
        />
      )}
    </div>
  );
};

export default InvoicePage;

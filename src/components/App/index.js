import React from 'react';
import './App.css';
import Table from '../../containers/Table';
import SearchBar from '../../containers/SearchBar';
import FooterButtons from '../../containers/FooterButtons';
import AddNewBar from '../../containers/AddNewBar';

function App() {
  return (
    <div className="wrapper">
      <h1>React/Redux Table Demo</h1>
      <p>This is a demonstration of building a dynamic table application in React and Redux. Click on any column heading to toggle column sorting (ASC/DESC). You can filter by username, choose the number of rows you want displayed, paginate the values, and add new entries. The &quot;active&quot; user&apos;s row is <span className="highlighted">highlighted</span>.</p>
      <SearchBar />
      <Table />
      <FooterButtons />

      <h4>Add a Row</h4>
      <p>Use the form fields below to prepend a new Row to the table.</p>
      <AddNewBar />
    </div>
  );
}

export default App;

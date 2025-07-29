import "./styles.css";
import React from "react";
import DataGrid from "./components/DataGrid";
import sampleData from "./data/sampleData";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        FactWise Dashboard
      </h1>
      <DataGrid rowData={sampleData} />
    </div>
  );
};

export default App;

import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

// AG Grid styles
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DataGrid = ({ rowData }) => {
  const columnDefs = useMemo(
    () => [
      { headerName: "ID", field: "id", sortable: true, filter: true },
      { headerName: "Name", field: "name", sortable: true, filter: true },
      { headerName: "Role", field: "role", sortable: true, filter: true },
      {
        headerName: "Department",
        field: "department",
        sortable: true,
        filter: true,
      },
      { headerName: "Salary", field: "salary", sortable: true, filter: true },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      minWidth: 100,
      resizable: true,
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default DataGrid;

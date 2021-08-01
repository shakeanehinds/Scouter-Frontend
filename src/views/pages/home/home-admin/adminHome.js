import React from 'react';
import './style.css';
import { AGGridReact } from 'ag-grid-community';
import { noop } from 'lodash-es/noop';

///render top level errors, warning and info as banner or modal

export const AdminHome = (props) => {

    const colIds = {
        jobId: "jbid",
        jobPostTitle: "jbtitle",
        status: "status",
        numApplicants: "applicantsn",
        selectStagesConfigured: "selectstagesconfigured",
        selectStages: "selectStagesn"
    }

    const dashboardColumnDefs = [
        {
            headerName: "Job Post Title",
            field: colIds.jobPostTitle,
            width: 100
        },
        {
            headerName: "Status",
            field: colIds.status,
            width: 100
        },
        {
            headerName: "Total Applicants",
            field: colIds.numApplicants,
            width: 100
        },
        {
            headerName: "Stages Configured",
            field: colIds.selectStagesConfigured,
            width: 100
        },
        {
            headerName: "Total Selection Stages",
            field: colIds.selectStages,
            width: 100
        }
    ];

    let gridOptions = {
        rowData: props.dashboardData,
        columnDefs: dashboardColumnDefs,
        pagination: true,
        rowSelection: 'single',
        // onRowClicked: noop,
        //onGridReady: noop
    }


    return (
        <div id="admin-page" class="w-full">
            <nav id="admin-dashboard-nav" class="admin-dashboard-nav"></nav>
            <div id="admin-dashboard" class="admin-dashboard dashboard">
                <AGGridReact
                    gridOptions={gridOptions}
                />

            </div>

        </div>
    );
}
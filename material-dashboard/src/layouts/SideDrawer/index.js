import MDBox from "components/MDBox/index";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout/index";
import DataTable from "examples/Tables/DataTable/index";
import authorsTableData from "layouts/tables/data/authorsTableData";
import ResizePanel from "react-resize-panel";
import "./style.css";
import { Grid, Icon } from "../../../node_modules/@mui/material/index";
import { Tab } from "../../../node_modules/@mui/icons-material/index";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import MDTypography from "components/MDTypography/index";
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <MDBox sx={{ p: 3 }}>
          <MDTypography>{children}</MDTypography>
        </MDBox>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SideDrawer = () => {
  const { columns, rows } = authorsTableData();
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
      <div className="container">
        <div className="body">
          <div className="content panel">
            <DataTable
              table={{ columns, rows }}
              isSorted={false}
              entriesPerPage={false}
              showTotalEntries={false}
              noEndBorder
            />
          </div>
          <ResizePanel
            direction="w"
            style={{ width: "400px" }}
            // handleClass="customHandle"
            borderClass="customResizeBorder"
          >
            <div className="sidebar panel">
              <MDBox sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={tabValue} onChange={handleSetTabValue} aria-label="basic tabs example">
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </MDBox>
              <CustomTabPanel value={tabValue} index={0}>
                Item One
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={2}>
                Item Three
              </CustomTabPanel>
            </div>
          </ResizePanel>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default SideDrawer;

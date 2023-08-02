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
              <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
                <AppBar position="static">
                  <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                    <Tab
                      label="App"
                      icon={
                        <Icon fontSize="small" sx={{ mt: -0.25 }}>
                          home
                        </Icon>
                      }
                    />
                    <Tab
                      label="Message"
                      icon={
                        <Icon fontSize="small" sx={{ mt: -0.25 }}>
                          email
                        </Icon>
                      }
                    />
                    <Tab
                      label="Settings"
                      icon={
                        <Icon fontSize="small" sx={{ mt: -0.25 }}>
                          settings
                        </Icon>
                      }
                    />
                  </Tabs>
                </AppBar>
              </Grid>
            </div>
          </ResizePanel>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default SideDrawer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommunityStory from "./CommunityStory";
import ReportCommunity from "./ReportCommunity";
import CommunityProject from "./CommunityProject";
import CommunityFAQ from "./CommunityFAQ";

function CustomTabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CommunityReport() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Story" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Reports" {...a11yProps(2)} />
          <Tab label="FAQ" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CommunityStory />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CommunityProject />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ReportCommunity />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CommunityFAQ />
      </CustomTabPanel>
    </Box>
  );
}

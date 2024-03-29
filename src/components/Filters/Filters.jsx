import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Filters = ({ filters, selectedFilterIndex, setSelectedFilterIndex }) => {
  const handleFilterChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <Tabs
      value={selectedFilterIndex}
      onChange={handleFilterChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      {filters.map((filter, index) => (
        <Tab sx={{ color: 'white' }} key={index} label={filter.label} />
      ))}
    </Tabs>
  );
};

export default Filters;

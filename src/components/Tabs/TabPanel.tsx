import { Box } from "@mui/material";
import { BoxTabPanel } from "./styles";
import type { ITabPanelProps } from "./types";

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`season-tabpanel-${index}`}
      aria-labelledby={`season-tab-${index}`}
      {...other}
    >
      {value === index && <BoxTabPanel>{children}</BoxTabPanel>}
    </div>
  );
};
export default TabPanel;

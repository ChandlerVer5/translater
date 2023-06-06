import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StoriesIcon from '@mui/icons-material/AutoStories';
import HistoryIcon from '@mui/icons-material/ManageHistory';
import BallotIcon from '@mui/icons-material/Ballot';
import { Chip, Tooltip } from '@mui/material';
import Guide from './Guide';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function Aside() {
  const [initial, setInitial] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = () => { }

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        '&>div[role=tabpanel]': {
          width: '100%'
        }
      }}
    >

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          borderColor: 'divider',
          '& .MuiTab-root': {
            'min-width': 'auto',
          }
        }}
      >
        <Tooltip arrow placement="right" title="词典">
          <Tab icon={<StoriesIcon />} />
        </Tooltip>
        <Tooltip arrow placement="right" title="历史记录">
          <Tab icon={<HistoryIcon />} />
        </Tooltip>
        <Tooltip arrow placement="right" title="术语库">
          <Tab icon={<BallotIcon />} />
        </Tooltip>
      </Tabs>
      {
        true ? <Guide /> : <React.Fragment>
          <TabPanel value={value} index={0}>
            <Chip label="google" variant="outlined" onClick={handleClick} />
            <Chip label="bing" variant="outlined" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            历史记录
          </TabPanel>
          <TabPanel value={value} index={2}>
            术语库
          </TabPanel>
        </React.Fragment>
      }


    </Box>
  );
}

import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  Select,
  MenuItem,
  Tab,
  Tabs,
  Grid,
} from '@mui/material';

interface SelectedPerson {
  code?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  jobClassification?: string;
  homeLocation?: string;
  status?: string;
  dateStarted?: string;
  address?: string;
  defaultCustomer?: string;
  pern?: string;
}

import './EmployeeDetailsModal.css';

interface EmployeeDetailsModalProps {
  openInfoModal: boolean;
  handleInfoClose: () => void;
  selectedPerson?: SelectedPerson;
}

const EmployeeDetailsModal: React.FC<EmployeeDetailsModalProps> = ({
  openInfoModal,
  handleInfoClose,
  selectedPerson,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const [job_value, job_setValue] = useState('');
  const [home_value, home_setValue] = useState('');
  const [status_value, status_setValue] = useState('');
  const [customer_value, customer_setValue] = useState('');

  return (
    <Modal open={openInfoModal} onClose={handleInfoClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 800,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Employee Details
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          sx={{ mb: 3 }}
        >
          <Tab label="General Info" />
          <Tab label="Bank Info" />
          <Tab label="Other" />
        </Tabs>
        {activeTab === 0 && (
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Code"
                variant="outlined"
                InputProps={{ readOnly: true }}
                defaultValue={selectedPerson?.code || ''}
              />
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
                defaultValue={selectedPerson?.firstName || ''}
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
                defaultValue={selectedPerson?.lastName || ''}
              />

              <TextField
                sx={{ width: '100%' }}
                value={job_value}
                onChange={(e) => job_setValue(e.target.value)}
                select // tell TextField to render select
                label="Job Classification"
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Apprentice Installer">Apprentice Installer</MenuItem>
                <MenuItem value="Backhoe Operator">Backhoe Operator</MenuItem>
                <MenuItem value="Carpenter">Carpenter</MenuItem>
                <MenuItem value="Carpenter Lead">Carpenter Lead</MenuItem>
                <MenuItem value="Ceiling Installers">Ceiling Installers</MenuItem>
                <MenuItem value="Cleaning">Cleaning</MenuItem>
                <MenuItem value="Cleaning Barge">Cleaning Barge</MenuItem>
                <MenuItem value="Control Terminator">Control Terminator</MenuItem>
                <MenuItem value="Day Shift Electrical Mechanic">
                  Day Shift Electrical Mechanic
                </MenuItem>
                <MenuItem value="Design Gas">Design Gas</MenuItem>
                <MenuItem value="Dry Wall Installers">Dry Wall Installers</MenuItem>
                <MenuItem value="Electrical Forman Tech">Electrical Forman Tech</MenuItem>
                <MenuItem value="Electrical Helper">Electrical Helper</MenuItem>
                <MenuItem value="Electrician">Electrician</MenuItem>
                <MenuItem value="Fiber Glass Tech">Fiber Glass Tech</MenuItem>
                <MenuItem value="Finishers/Labor">Finishers/Labor</MenuItem>
                <MenuItem value="Flaggers">Flaggers</MenuItem>
                <MenuItem value="Foreman">Foreman</MenuItem>
                <MenuItem value="Foreman Carpenter">Foreman Carpenter</MenuItem>
                <MenuItem value="Foreman Cleaning">Foreman Cleaning</MenuItem>
                <MenuItem value="Forklift Operator">Forklift Operator</MenuItem>
                <MenuItem value="Gates">Gates</MenuItem>
                <MenuItem value="General Foreman">General Foreman</MenuItem>
                <MenuItem value="Green Helpers">Green Helpers</MenuItem>
                <MenuItem value="Helper">Helper</MenuItem>
                <MenuItem value="Helper Cleaner">Helper Cleaner</MenuItem>
                <MenuItem value="Highly Skilled Technician">Highly Skilled Technician</MenuItem>
                <MenuItem value="Insulators">Insulators</MenuItem>
                <MenuItem value="Journeyman">Journeyman</MenuItem>
                <MenuItem value="Journeyman Electrician">Journeyman Electrician</MenuItem>
                <MenuItem value="Labor">Labor</MenuItem>
                <MenuItem value="Labor Game Day">Labor Game Day</MenuItem>
                <MenuItem value="Leadman">Leadman</MenuItem>
                <MenuItem value="Mechanic">Mechanic</MenuItem>
                <MenuItem value="Mechanic Electrician">Mechanic Electrician</MenuItem>
                <MenuItem value="Mechanic/Framers">Mechanic/Framers</MenuItem>
                <MenuItem value="Night Shift Electrical Mechanic">
                  Night Shift Electrical Mechanic
                </MenuItem>
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Office Assistant">Office Assistant</MenuItem>
                <MenuItem value="Office Manager">Office Manager</MenuItem>
                <MenuItem value="Pipe fitter">Pipe fitter</MenuItem>
                <MenuItem value="Pipe Fitter Helper">Pipe Fitter Helper</MenuItem>
                <MenuItem value="Pipe Fitter Lead">Pipe Fitter Lead</MenuItem>
                <MenuItem value="Pipe Fitter Mechanic">Pipe Fitter Mechanic</MenuItem>
                <MenuItem value="Pipe Welder 1">Pipe Welder 1</MenuItem>
                <MenuItem value="Pipe Welder Master">Pipe Welder Master</MenuItem>
                <MenuItem value="Pipefitter 1">Pipefitter 1</MenuItem>
                <MenuItem value="Pipefitter 2">Pipefitter 2</MenuItem>
                <MenuItem value="Pipefitter Lead">Pipefitter Lead</MenuItem>
                <MenuItem value="Plumber">Plumber</MenuItem>
                <MenuItem value="Plumber Helper">Plumber Helper</MenuItem>
                <MenuItem value="Plumber Mechanic">Plumber Mechanic</MenuItem>
                <MenuItem value="Safety Personnel">Safety Personnel</MenuItem>
                <MenuItem value="Secretary">Secretary</MenuItem>
                <MenuItem value="Sheetmetal">Sheetmetal</MenuItem>
                <MenuItem value="Sheetmetal Helper">Sheetmetal Helper</MenuItem>
                <MenuItem value="Sheetmetal Lead">Sheetmetal Lead</MenuItem>
                <MenuItem value="Sheetmetal Mechanic">Sheetmetal Mechanic</MenuItem>
                <MenuItem value="Sheetmetal Top Helper">Sheetmetal Top Helper</MenuItem>
                <MenuItem value="Skilled Electrical Laborer">Skilled Electrical Laborer</MenuItem>
                <MenuItem value="Structural Fitter 1">Structural Fitter 1</MenuItem>
                <MenuItem value="Structural Fitter 2">Structural Fitter 2</MenuItem>
                <MenuItem value="Structural Welder 1">Structural Welder 1</MenuItem>
                <MenuItem value="Structural Welder Lead">Structural Welder Lead</MenuItem>
                <MenuItem value="Superintendent">Superintendent</MenuItem>
                <MenuItem value="Technician">Technician</MenuItem>
                <MenuItem value="Top Helper">Top Helper</MenuItem>
                <MenuItem value="Welder">Welder</MenuItem>
                <MenuItem value="Welder Helper">Welder Helper</MenuItem>
                <MenuItem value="Welder Mechanic">Welder Mechanic</MenuItem>
              </TextField>
            </Grid>

            {/* Right Column */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
                defaultValue={selectedPerson?.name || ''}
              />

              {/* <Select fullWidth defaultValue={selectedPerson?.homeLocation || ''} sx={{marginBottom: '20px !important'}}> */}
              <TextField
                sx={{ width: '100%' }}
                value={home_value}
                onChange={(e) => home_setValue(e.target.value)}
                select
                label="Home Location"
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="1-200-16">1-200-16</MenuItem>
                <MenuItem value="510 N Elam">510 N Elam</MenuItem>
                <MenuItem value="6th Floor Demo P2">6th Floor Demo P2</MenuItem>
                <MenuItem value="Ally - Charlotte">Ally - Charlotte</MenuItem>
                <MenuItem value="Amazon">Amazon</MenuItem>
                <MenuItem value="Auburn SC">Auburn SC</MenuItem>
                <MenuItem value="Blue Ridge">Blue Ridge</MenuItem>
                <MenuItem value="Burlington">Burlington</MenuItem>
                <MenuItem value="Cameron">Cameron</MenuItem>
                <MenuItem value="Carboro">Carboro</MenuItem>
                <MenuItem value="Cascade Va">Cascade Va</MenuItem>
                <MenuItem value="CC MOB 1 T1">CC MOB 1 T1</MenuItem>
                <MenuItem value="CC MOB 2 - Charlotte">CC MOB 2 - Charlotte</MenuItem>
                <MenuItem value="Chapel Hill">Chapel Hill</MenuItem>
                <MenuItem value="Charlotte">Charlotte</MenuItem>
                <MenuItem value="Clinton">Clinton</MenuItem>
                <MenuItem value="CMC Main K2">CMC Main K2</MenuItem>
                <MenuItem value="Concord">Concord</MenuItem>
                <MenuItem value="Conover">Conover</MenuItem>
                <MenuItem value="Duke">Duke</MenuItem>
                <MenuItem value="Durham">Durham</MenuItem>
                <MenuItem value="E&O OFFICE">E&O OFFICE</MenuItem>
                <MenuItem value="Fort Mill">Fort Mill</MenuItem>
                <MenuItem value="Graham">Graham</MenuItem>
                <MenuItem value="Greensboro">Greensboro</MenuItem>
                <MenuItem value="Harry G">Harry G</MenuItem>
                <MenuItem value="Holly Springs">Holly Springs</MenuItem>
                <MenuItem value="Holly Springs - Tower">Holly Springs - Tower</MenuItem>
                <MenuItem value="Hope Mills">Hope Mills</MenuItem>
                <MenuItem value="Landmark">Landmark</MenuItem>
                <MenuItem value="Lexington">Lexington</MenuItem>
                <MenuItem value="LMC">LMC</MenuItem>
                <MenuItem value="Lotus Bakery">Lotus Bakery</MenuItem>
                <MenuItem value="Mayodan">Mayodan</MenuItem>
                <MenuItem value="Mebane">Mebane</MenuItem>
                <MenuItem value="MERCY">MERCY</MenuItem>
                <MenuItem value="Mooresville">Mooresville</MenuItem>
                <MenuItem value="Moses Cone">Moses Cone</MenuItem>
                <MenuItem value="Nashville MLS">Nashville MLS</MenuItem>
                <MenuItem value="NC">NC</MenuItem>
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Parking Deck - Charlotte">Parking Deck - Charlotte</MenuItem>
                <MenuItem value="Parkton">Parkton</MenuItem>
                <MenuItem value="Pinehurst">Pinehurst</MenuItem>
                <MenuItem value="Raeford">Raeford</MenuItem>
                <MenuItem value="Raleigh">Raleigh</MenuItem>
                <MenuItem value="Saint Pauls">Saint Pauls</MenuItem>
                <MenuItem value="Salisbury">Salisbury</MenuItem>
                <MenuItem value="Sanford">Sanford</MenuItem>
                <MenuItem value="Smithfield">Smithfield</MenuItem>
                <MenuItem value="Smithfield Virginia">Smithfield Virginia</MenuItem>
                <MenuItem value="Surgical BUilding">Surgical BUilding</MenuItem>
                <MenuItem value="UNC Rex">UNC Rex</MenuItem>
                <MenuItem value="Valdese">Valdese</MenuItem>
                <MenuItem value="WAKE MED">WAKE MED</MenuItem>
                <MenuItem value="Wallace">Wallace</MenuItem>
                <MenuItem value="Wilmington">Wilmington</MenuItem>
                <MenuItem value="Winston Salem">Winston Salem</MenuItem>
                <MenuItem value="WS">WS</MenuItem>
                <MenuItem value="WVu Coliseum">WVu Coliseum</MenuItem>
                <MenuItem value="York, SC">YORKSC</MenuItem>
                <MenuItem value="Zebulon">Zebulon</MenuItem>
              </TextField>

              <TextField
                sx={{ width: '100%' }}
                value={status_value}
                onChange={(e) => status_setValue(e.target.value)}
                select
                label="Status"
              >
                {/* <Select sx={{marginBottom: '20px !important'}} fullWidth defaultValue={selectedPerson?.status || ''} required> */}
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </TextField>

              <TextField
                sx={{ marginBottom: '20px' }}
                fullWidth
                label="Date Started"
                variant="outlined"
                type="date"
                required
                InputLabelProps={{ shrink: true }}
                defaultValue={selectedPerson?.dateStarted || ''}
              />
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                defaultValue={selectedPerson?.address || ''}
              />

              <TextField
                sx={{ width: '100%', marginBottom: '20px !important' }}
                value={customer_value}
                onChange={(e) => customer_setValue(e.target.value)}
                select
                label="Default Customer"
              >
                {/* <Select fullWidth defaultValue={selectedPerson?.defaultCustomer || ''}> */}
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="ACBL">ACBL</MenuItem>
                <MenuItem value="Adams Electric">Adams Electric</MenuItem>
                <MenuItem value="Atlantic Constructors">Atlantic Constructors</MenuItem>
                <MenuItem value="Barton Malow Builders">Barton Malow Builders</MenuItem>
                <MenuItem value="Brite Electric">Brite Electric</MenuItem>
                <MenuItem value="Buckner Energy">Buckner Energy</MenuItem>
                <MenuItem value="CanAm Industrial">CanAm Industrial</MenuItem>
                <MenuItem value="Colonial Webb">Colonial Webb</MenuItem>
                <MenuItem value="Commissions">Commissions</MenuItem>
                <MenuItem value="Conaway Electrical Service">Conaway Electrical Service</MenuItem>
                <MenuItem value="CPM Electric Inc">CPM Electric Inc</MenuItem>
                <MenuItem value="Craigs Plumbing">Craigs Plumbing</MenuItem>
                <MenuItem value="Current Contracting LLC">Current Contracting LLC</MenuItem>
                <MenuItem value="D.E. Kirby">D.E. Kirby</MenuItem>
                <MenuItem value="Delta Marine & Environmental">
                  Delta Marine & Environmental
                </MenuItem>
                <MenuItem value="Design Electric">Design Electric</MenuItem>
                <MenuItem value="ECM Integrated Solutions">ECM Integrated Solutions</MenuItem>
                <MenuItem value="Edwards Electric Inc">Edwards Electric Inc</MenuItem>
                <MenuItem value="Excel Electric">Excel Electric</MenuItem>
                <MenuItem value="Gaylor Electric Inc">Gaylor Electric Inc</MenuItem>
                <MenuItem value="Grunley Construction">Grunley Construction</MenuItem>
                <MenuItem value="Harris Heating and Plumbing Co">
                  Harris Heating and Plumbing Co
                </MenuItem>
                <MenuItem value="Hazzard Electrical">Hazzard Electrical</MenuItem>
                <MenuItem value="Hickory Electric">Hickory Electric</MenuItem>
                <MenuItem value="IES Commercial and Industrial">
                  IES Commercial and Industrial
                </MenuItem>
                <MenuItem value="JRC Mechanical">JRC Mechanical</MenuItem>
                <MenuItem value="KIEWIT CORPORATION">KIEWIT CORPORATION</MenuItem>
                <MenuItem value="M&E Contractors">M&E Contractors</MenuItem>
                <MenuItem value="Mallory Electric">Mallory Electric</MenuItem>
                <MenuItem value="Master Electrical">Master Electrical</MenuItem>
                <MenuItem value="MKD Electric">MKD Electric</MenuItem>
                <MenuItem value="Moores Electrical and Mechanical">
                  Moores Electrical and Mechanical
                </MenuItem>
                <MenuItem value="MWM CONSTRUCTION INC">MWM CONSTRUCTION INC</MenuItem>
                <MenuItem value="Norris Electric Inc">Norris Electric Inc</MenuItem>
                <MenuItem value="Prime Controls">Prime Controls</MenuItem>
                <MenuItem value="Richard L Oreair">Richard L Oreair</MenuItem>
                <MenuItem value="SB Ballard Construction">SB Ballard Construction</MenuItem>
                <MenuItem value="Southwood">Southwood</MenuItem>
                <MenuItem value="Sullivan Mechanical Contractors Inc">
                  Sullivan Mechanical Contractors Inc
                </MenuItem>
                <MenuItem value="SV ELECTRIC">SV ELECTRIC</MenuItem>
                <MenuItem value="TECHSOURCE">TECHSOURCE</MenuItem>
                <MenuItem value="Tolley Electrical Corp">Tolley Electrical Corp</MenuItem>
                <MenuItem value="Triangle Brick Company">Triangle Brick Company</MenuItem>
                <MenuItem value="Trumbo Electric Inc">Trumbo Electric Inc</MenuItem>
                <MenuItem value="VA Industrial">VA Industrial</MenuItem>
                <MenuItem value="Waco Inc">Waco Inc</MenuItem>
                <MenuItem value="Watson Electrical Construction">
                  Watson Electrical Construction
                </MenuItem>
                <MenuItem value="Wesmart Inc">Wesmart Inc</MenuItem>
                <MenuItem value="Wheel Pros">Wheel Pros</MenuItem>
              </TextField>
              <TextField
                fullWidth
                label="PERN"
                variant="outlined"
                defaultValue={selectedPerson?.pern || ''}
              />
            </Grid>
          </Grid>
        )}
        {activeTab === 1 && (
          <Typography>Tab 2 Content: Add specific content or fields for Tab 2 here.</Typography>
        )}
        {activeTab === 2 && (
          <Typography>Tab 3 Content: Add specific content or fields for Tab 3 here.</Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleInfoClose} sx={{ mt: 3 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default EmployeeDetailsModal;

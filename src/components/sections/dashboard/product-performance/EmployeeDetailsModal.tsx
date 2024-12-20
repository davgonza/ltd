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
  first_name?: string;
  last_name?: string;
  name?: string;
  job_classification?: string;
  home_location?: string;
  status?: string;
  date_started?: string;
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
                defaultValue={selectedPerson?.first_name || ''}
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
                defaultValue={selectedPerson?.last_name || ''}
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

              {/* <Select fullWidth defaultValue={selectedPerson?.home_location || ''} sx={{marginBottom: '20px !important'}}> */}
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
                defaultValue={selectedPerson?.date_started || ''}
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

import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  MenuItem,
  Tab,
  Tabs,
  Grid,
} from '@mui/material';
import { supabase } from '../../../../utils/supabaseClient';
import {
  jobClassifications,
  homeLocations,
  defaultCustomers,
} from '../../../../data/dropdown-data';

interface SelectedPerson {
  id: string; // Make sure the `id` is included for updates
  code?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  job_classification?: string;
  home_location?: string;
  status?: string;
  date_started?: string;
  address?: string;
  default_customer?: string;
  pern?: string;
}

import './EmployeeDetailsModal.css';

import { useEffect } from 'react';

interface EmployeeDetailsModalProps {
  openInfoModal: boolean;
  handleInfoClose: () => void; // This will now include refreshing the grid
  selectedPerson?: SelectedPerson;
}

const EmployeeDetailsModal: React.FC<EmployeeDetailsModalProps> = ({
  openInfoModal,
  handleInfoClose,
  selectedPerson,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState<any>(selectedPerson || {});

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Debugging useEffect
  useEffect(() => {
    if (openInfoModal) {
      console.log('Modal opened with selected person:', selectedPerson);
    }
  }, [openInfoModal, selectedPerson]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (selectedPerson) {
      setFormData(selectedPerson); // Initialize formData with selectedPerson data, including id
    }
  }, [selectedPerson]);

  const handleSave = async () => {
    try {
      if (!formData.id) {
        console.error('Error: Missing employee id');
        return;
      }

      const { id, ...updatedData } = formData;

      const { data, error } = await supabase.from('employees').update(updatedData).eq('id', id);

      if (error) {
        console.error('Error updating employee:', error.message);
      } else {
        console.log('Employee updated successfully:', data);
        handleInfoClose(); // Close the modal and refresh the grid
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

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
                value={formData.code || ''}
                onChange={(e) => handleChange('code', e.target.value)}
              />
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
                value={formData.first_name || ''}
                onChange={(e) => handleChange('first_name', e.target.value)}
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
                value={formData.last_name || ''}
                onChange={(e) => handleChange('last_name', e.target.value)}
              />
              <TextField
                sx={{ width: '100%' }}
                value={formData.job_classification || ''}
                onChange={(e) => handleChange('job_classification', e.target.value)}
                select
                label="Job Classification"
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {jobClassifications.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Right Column */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                value={formData.first_name + ' ' + formData.last_name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              <TextField
                sx={{ width: '100%' }}
                value={formData.home_location || ''}
                onChange={(e) => handleChange('home_location', e.target.value)}
                select
                label="Home Location"
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {homeLocations.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{ width: '100%' }}
                value={formData.status || ''}
                onChange={(e) => handleChange('status', e.target.value)}
                select
                label="Status"
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
              <TextField
                sx={{ marginBottom: '20px' }}
                fullWidth
                label="Date Started"
                variant="outlined"
                type="date"
                required
                InputLabelProps={{ shrink: true }}
                value={formData.date_started || ''}
                onChange={(e) => handleChange('date_started', e.target.value)}
              />
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={formData.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
              />
              <TextField
                sx={{ width: '100%', marginBottom: '20px !important' }}
                value={formData.default_customer || ''}
                onChange={(e) => handleChange('default_customer', e.target.value)}
                select
                label="Default Customer"
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {defaultCustomers.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="PERN"
                variant="outlined"
                value={formData.pern || ''}
                onChange={(e) => handleChange('pern', e.target.value)}
              />
            </Grid>
          </Grid>
        )}
        {activeTab === 1 && <Typography>Bank Info</Typography>}
        {activeTab === 2 && <Typography>Other</Typography>}

        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleInfoClose}>
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EmployeeDetailsModal;

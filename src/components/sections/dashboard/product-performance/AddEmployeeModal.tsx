import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Box,
  Button,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

interface AddEmployeeModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (formData: EmployeeFormData) => void;
}

interface EmployeeFormData {
  code: string;
  firstName: string;
  lastName: string;
  fullName: string;
  homeLocation: string;
  jobClassification: string;
  dateStarted: Date | null;
  address: string;
  pern: string;
  noPayment: boolean;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = React.useState<EmployeeFormData>({
    code: '',
    firstName: '',
    lastName: '',
    fullName: '',
    homeLocation: '',
    jobClassification: '',
    dateStarted: null,
    address: '',
    pern: '',
    noPayment: false,
  });

  const handleChange = (field: keyof EmployeeFormData, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Add Employee</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="row" gap={2} flexWrap="wrap">
          <TextField
            label="Code"
            value={formData.code}
            onChange={(e) => handleChange('code', e.target.value)}
            fullWidth
          />
          <TextField
            label="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            fullWidth
          />
          <TextField
            label="Full Name"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Home Location</InputLabel>
            <Select
              value={formData.homeLocation}
              onChange={(e) => handleChange('homeLocation', e.target.value)}
            >
              <MenuItem value="Location 1">Location 1</MenuItem>
              <MenuItem value="Location 2">Location 2</MenuItem>
              <MenuItem value="Location 3">Location 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Job Classification</InputLabel>
            <Select
              value={formData.jobClassification}
              onChange={(e) => handleChange('jobClassification', e.target.value)}
            >
              <MenuItem value="Mechanic Electrician">Mechanic Electrician</MenuItem>
              <MenuItem value="Plumber">Plumber</MenuItem>
              <MenuItem value="Carpenter">Carpenter</MenuItem>
            </Select>
          </FormControl>
          <DatePicker
            label="Date Started"
            value={formData.dateStarted}
            onChange={(newValue) => handleChange('dateStarted', newValue)}
            slots={{
              textField: (textFieldProps) => <TextField {...textFieldProps} />,
            }}
          />
          <TextField
            label="Address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            fullWidth
          />
          <TextField
            label="PERN"
            value={formData.pern}
            onChange={(e) => handleChange('pern', e.target.value)}
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.noPayment}
                onChange={(e) => handleChange('noPayment', e.target.checked)}
              />
            }
            label="No Payment"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Exit
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeModal;

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
import { EmployeeFormData } from '../../../../data/product-performance';

interface AddEmployeeModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (formData: EmployeeFormData) => void;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = React.useState<EmployeeFormData>({
    id: 1,
    code: '',
    full_name: '',
    job_classification: '',
    default_customer: '',
    date_started: null,
    status: '',
    first_name: '',
    last_name: '',
    home_location: '',
    address: '',
    pern: '',
    no_payment: false,
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
            value={formData.first_name}
            onChange={(e) => handleChange('first_name', e.target.value)}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={formData.last_name}
            onChange={(e) => handleChange('last_name', e.target.value)}
            fullWidth
          />
          <TextField
            label="Full Name"
            value={formData.full_name}
            onChange={(e) => handleChange('full_name', e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Home Location</InputLabel>
            <Select
              value={formData.home_location}
              onChange={(e) => handleChange('home_location', e.target.value)}
            >
              <MenuItem value="Location 1">Location 1</MenuItem>
              <MenuItem value="Location 2">Location 2</MenuItem>
              <MenuItem value="Location 3">Location 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Job Classification</InputLabel>
            <Select
              value={formData.job_classification}
              onChange={(e) => handleChange('job_classification', e.target.value)}
            >
              <MenuItem value="Mechanic Electrician">Mechanic Electrician</MenuItem>
              <MenuItem value="Plumber">Plumber</MenuItem>
              <MenuItem value="Carpenter">Carpenter</MenuItem>
            </Select>
          </FormControl>
          <DatePicker
            label="Date Started"
            value={formData.date_started}
            onChange={(newValue) => handleChange('date_started', newValue)}
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
                checked={formData.no_payment}
                onChange={(e) => handleChange('no_payment', e.target.checked)}
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

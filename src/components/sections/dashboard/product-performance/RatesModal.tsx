import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface RatesModalProps {
  open: boolean;
  onClose: () => void;
  rateData?: any;
  employeeData?: { name: string; jobClassification: string } | null;
  rateHistory?: Array<{
    customer: string;
    pay_rate: number;
    overtime_rate: number;
    invoice_rate: number;
    invoice_rate_ot: number;
    status: string;
    deleted: boolean;
  }>;
}

const RatesModal: React.FC<RatesModalProps> = ({
  open,
  onClose,
  employeeData,
  rateHistory = [],
}) => {
  return (
    <Modal open={open} onClose={onClose}>
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
          width: 1100,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Edit Rates
        </Typography>

        {/* Employee Information Section */}
        <Box sx={{ bgcolor: 'grey.70', p: 2, borderRadius: 1, mb: 3 }}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Employee
              </Typography>
              <Typography variant="body1" color="text.primary">
                {employeeData?.name || 'Unknown Employee'}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Job Classification
              </Typography>
              <Typography variant="body1" color="text.primary">
                {employeeData?.jobClassification || 'Unknown Classification'}
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Rates History Table */}
        <Typography variant="subtitle1" gutterBottom>
          Rates History
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: 400, overflowY: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Pay Rate</TableCell>
                <TableCell>Overtime Rate</TableCell>
                <TableCell>Invoice Rate</TableCell>
                <TableCell>Invoice Rate OT</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Deleted</TableCell>
                <TableCell>Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rateHistory.map((rate, index) => (
                <TableRow key={index}>
                  <TableCell>{rate.customer}</TableCell>
                  <TableCell>{rate.pay_rate}</TableCell>
                  <TableCell>{rate.overtime_rate}</TableCell>
                  <TableCell>{rate.invoice_rate}</TableCell>
                  <TableCell>{rate.invoice_rate_ot}</TableCell>
                  <TableCell>{rate.status}</TableCell>
                  <TableCell>{rate.deleted ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default RatesModal;

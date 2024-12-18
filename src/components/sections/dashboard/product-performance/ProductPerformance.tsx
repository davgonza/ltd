import { useState } from 'react';
import { Box, Button, Chip, Link, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import { rows as initialRows } from 'data/product-performance';
import { currencyFormat } from 'helpers/utils';
import CustomPagination from 'components/common/CustomPagination';
import SearchFilter from 'components/common/SearchFilter';
import EmployeeDetailsModal from './EmployeeDetailsModal';

type Row = {
  id: number;
  assigned: any;
  name: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  budget: number;
};

const ProductPerformance = () => {
  const apiRef = useGridApiRef();
  const [rows, setRows] = useState<Row[]>(initialRows as Row[]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Row['assigned'] | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
  });

  const handleAddOpen = () => setOpenAddModal(true);
  const handleAddClose = () => setOpenAddModal(false);
  const handleInfoOpen = (person: Row['assigned']) => {
    setSelectedPerson(person);
    setOpenInfoModal(true);
  };
  const handleInfoClose = () => {
    setSelectedPerson(null);
    setOpenInfoModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    const newRow: Row = {
      id: rows.length + 1,
      assigned: {
        name: `${formData.firstName} ${formData.lastName}`,
        role: formData.jobTitle,
      },
      name: `${formData.firstName} ${formData.lastName}`,
      priority: 'Low',
      budget: 10000,
    };
    setRows([...rows, newRow]);
    handleAddClose();
  };

  const columns: GridColDef<Row>[] = [
    {
      field: 'assigned',
      headerName: 'Assigned',
      flex: 1.5,
      minWidth: 200,
      valueGetter: ({ name }: { name: string }) => name,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" height={1}>
            <Typography
              variant="h6"
              component={Link}
              href="#!"
              color="text.primary"
              sx={{ width: 'max-content', cursor: 'pointer' }}
              onClick={() => handleInfoOpen(params.row.assigned)}
            >
              {params.row.assigned.name}
            </Typography>
            <Typography variant="subtitle2">{params.row.assigned.role}</Typography>
          </Stack>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => {
        let color: string = '';
        switch (params.value) {
          case 'Low':
            color = 'success.lighter';
            break;
          case 'Medium':
            color = 'info.lighter';
            break;
          case 'High':
            color = 'error.lighter';
            break;
          case 'Critical':
            color = 'warning.lighter';
            break;
        }
        return <Chip label={params.value} sx={{ bgcolor: color }} />;
      },
    },
    {
      field: 'budget',
      headerName: 'Budget',
      flex: 0.5,
      minWidth: 150,
      valueGetter: (value) => value,
      valueFormatter: (value: number) => `${currencyFormat(value / 1000)}k`,
    },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Stack
        direction={{ md: 'row' }}
        rowGap={2}
        justifyContent="space-between"
        alignItems={{ md: 'center' }}
      >
        <Typography variant="h4" color="primary.dark">
          {/* Product Performance */}
        </Typography>
        <Stack direction="row" spacing={2}>
          <SearchFilter apiRef={apiRef} sx={{ maxWidth: 350 }} />
          <Button variant="contained" color="primary" onClick={handleAddOpen}>
            Add
          </Button>
        </Stack>
      </Stack>

      <Box
        sx={{
          height: 400,
          width: 1,
          mt: 3,
        }}
      >
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </Box>
      <CustomPagination apiRef={apiRef} />

      {/* Add Modal */}
      <Modal open={openAddModal} onClose={handleAddClose}>
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
            width: 400,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add New Employee
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Info Modal */}
      <EmployeeDetailsModal
        openInfoModal={openInfoModal}
        handleInfoClose={handleInfoClose}
        selectedPerson={selectedPerson}
      />
    </Paper>
  );
};

export default ProductPerformance;

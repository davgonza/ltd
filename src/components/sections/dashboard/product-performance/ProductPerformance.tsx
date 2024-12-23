import { useState } from 'react';
import { Box, Button, Chip, Link, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import { rows as initialRows } from 'data/product-performance';
import { currencyFormat } from 'helpers/utils';
import CustomPagination from 'components/common/CustomPagination';
import SearchFilter from 'components/common/SearchFilter';
import EmployeeDetailsModal from './EmployeeDetailsModal';
import AddEmployeeModal from './AddEmployeeModal';
import { supabase } from '../../../../utils/supabaseClient';
import { EmployeeFormData } from '../../../../data/product-performance';

type Row = {
  id: number;
  assigned: any;
  default_customer: string;
  status: 'Low' | 'Medium' | 'High' | 'Critical';
  budget: number;
};

const ProductPerformance = () => {
  const apiRef = useGridApiRef();
  const [rows, setRows] = useState<EmployeeFormData[]>(initialRows as EmployeeFormData[]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Row['assigned'] | null>(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    job_classification: '',
  });

  const handleAddOpen = () => setOpenAddModal(true);
  const handleAddClose = () => setOpenAddModal(false);
  const handleInfoOpen = (person: any) => {
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

  const columns: GridColDef<EmployeeFormData>[] = [
    {
      field: 'full_name',
      headerName: 'Name',
      flex: 1.5,
      minWidth: 200,
      valueGetter: ({ full_name }: { full_name: string }) => full_name,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" height={1}>
            <Typography
              variant="h6"
              component={Link}
              href="#!"
              color="text.primary"
              sx={{ width: 'max-content', cursor: 'pointer' }}
              onClick={() => handleInfoOpen(params.row)}
            >
              {params.row.full_name}
            </Typography>
            <Typography variant="subtitle2">{params.row.job_classification}</Typography>
          </Stack>
        );
      },
    },
    {
      field: 'default_customer',
      headerName: 'Customers',
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
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
      field: 'date_started',
      headerName: 'Date Started',
      flex: 0.5,
      minWidth: 150,
      valueGetter: (value) => value,
      //   valueFormatter: (value: Date) => ``,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleSave = async (newEmployee: any) => {
    try {
      const { error } = await supabase.from('employees').insert([newEmployee]);

      if (error) {
        console.error('Error saving employee:', error.message);
      } else {
        console.log('Employee added successfully');

        const newRow: EmployeeFormData = {
          id: 1,
          code: newEmployee.code,
          full_name: newEmployee.full_name,
          job_classification: newEmployee.job_classification,
          default_customer: newEmployee.default_customer,
          date_started: newEmployee.date_started,
          status: newEmployee.status,
          first_name: newEmployee.first_name,
          last_name: newEmployee.last_name,
          home_location: newEmployee.home_location,
          address: newEmployee.address,
          pern: newEmployee.pern,
          no_payment: newEmployee.no_payment,
        };
        setRows([...rows, newRow]);
        setShowModal(false);
        // Refresh the grid here if necessary
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

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
          {/* <Button variant="contained" color="primary" onClick={handleAddOpen}>
            Add
          </Button> */}
          <div>
            <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
              Add
            </Button>
            {showModal && (
              <AddEmployeeModal
                open={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSave}
              />
            )}
          </div>
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

      <EmployeeDetailsModal
        openInfoModal={openInfoModal}
        handleInfoClose={handleInfoClose}
        selectedPerson={selectedPerson}
      />
    </Paper>
  );
};

export default ProductPerformance;

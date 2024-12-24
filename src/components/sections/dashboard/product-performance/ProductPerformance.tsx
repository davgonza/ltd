import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Chip,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import { supabase } from '../../../../utils/supabaseClient';
import CustomPagination from 'components/common/CustomPagination';
import SearchFilter from 'components/common/SearchFilter';
import EmployeeDetailsModal from './EmployeeDetailsModal';
import AddEmployeeModal from './AddEmployeeModal';
import { EmployeeFormData } from '../../../../data/product-performance';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const ProductPerformance = () => {
  const apiRef = useGridApiRef();
  const [rows, setRows] = useState<EmployeeFormData[]>([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleAction = (action: string, row: any) => {
    console.log(`${action} action for`, row);
    handleMenuClose();
  };

  const fetchEmployees = async () => {
    try {
      const { data, error } = await supabase.from('employees').select('*');
      if (error) {
        console.error('Error fetching employees:', error.message);
        return;
      }

      // Transform data to match grid format if needed
      const formattedData = data?.map((employee) => ({
        id: employee.id, // Use the unique identifier from your Supabase table
        full_name: `${employee.first_name} ${employee.last_name}`,
        code: `${employee.code}`,
        job_classification: employee.job_classification,
        default_customer: employee.default_customer,
        status: employee.status,
        date_started: employee.date_started,
        first_name: employee.first_name,
        last_name: employee.last_name,
        home_location: employee.home_location,
        address: employee.address,
        pern: employee.pern,
        no_payment: employee.no_payment,
      }));

      setRows(formattedData || []);
    } catch (error) {
      console.error('Unexpected error fetching employees:', error);
    }
  };

  const handleInfoOpen = (person: any) => {
    setSelectedPerson(person);
    setOpenInfoModal(true);
  };

  useEffect(() => {
    fetchEmployees(); // Fetch employees on component mount
  }, []);

  const handleSave = async (newEmployee: any) => {
    try {
      console.log('new one', newEmployee);

      // Ensure the ID is not being sent if it's auto-generated
      const { id, ...employeeData } = newEmployee;
      employeeData.status = 'Active';

      const { error } = await supabase.from('employees').insert([employeeData]);

      if (error) {
        console.error('Error saving employee:', error.message);
      } else {
        console.log('Employee added successfully');

        // Refresh rows after saving to keep the grid up to date
        fetchEmployees();
        setShowModal(false);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const columns: GridColDef<EmployeeFormData>[] = [
    {
      field: 'code',
      headerName: 'Code',
      minWidth: 200,
    },
    {
      field: 'full_name',
      headerName: 'Name',
      flex: 1.5,
      minWidth: 200,
      renderCell: (params) => (
        <Stack justifyContent="center" height={1} onClick={() => handleInfoOpen(params.row)}>
          <Typography
            variant="h6"
            component={Link}
            href="#!"
            color="text.primary"
            sx={{ width: 'max-content', cursor: 'pointer' }}
          >
            {params.row.full_name}
          </Typography>
          <Typography sx={{ cursor: 'pointer' }} variant="subtitle2">
            {params.row.job_classification}
          </Typography>
        </Stack>
      ),
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
        const statusColors: Record<string, string> = {
          Active: 'success.lighter',
          Inactive: 'error.lighter',
        };

        return <Chip label={params.value} sx={{ bgcolor: statusColors[params.value] }} />;
      },
    },
    {
      field: 'date_started',
      headerName: 'Date Started',
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
          <IconButton color="primary" onClick={() => handleAction('finance', params.row)}>
            <MonetizationOnIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleAction('delete', params.row)}>
            <DeleteIcon />
          </IconButton>
          <div>
            <IconButton
              aria-controls={isMenuOpen ? 'actions-menu' : undefined}
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="actions-menu"
              anchorEl={menuAnchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleAction('edit', params.row)}>Edit</MenuItem>
              <MenuItem onClick={() => handleAction('view', params.row)}>View</MenuItem>
            </Menu>
          </div>
        </div>
      ),
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
          Employees
        </Typography>
        <Stack direction="row" spacing={2}>
          <SearchFilter apiRef={apiRef} sx={{ maxWidth: 350 }} />
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
          height: 800,
          width: 1,
          mt: 3,
        }}
      >
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            sorting: {
              sortModel: [{ field: 'date_started', sort: 'desc' }],
            },
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
        />
      </Box>
      <CustomPagination apiRef={apiRef} />

      <EmployeeDetailsModal
        openInfoModal={openInfoModal}
        handleInfoClose={() => {
          setOpenInfoModal(false);
          fetchEmployees(); // Refresh the grid
        }}
        selectedPerson={selectedPerson}
      />
    </Paper>
  );
};

export default ProductPerformance;

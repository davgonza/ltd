export interface EmployeeFormData {
  id: number;
  code: string;
  first_name: string;
  last_name: string;
  full_name: string;
  home_location: string;
  job_classification: string;
  date_started: Date | null;
  address: string;
  pern: string;
  no_payment: boolean;
  default_customer: string;
  status: string;
}

export const rows: EmployeeFormData[] = [
  {
    id: 1,
    code: '12002',
    full_name: 'Leonardo Reyes',
    job_classification: 'Leadman',
    default_customer: 'Adams Electric',
    date_started: new Date('06/25/2018'),
    status: 'Active',
    first_name: 'Leonardo',
    last_name: 'Reyes',
    home_location: '',
    address: '',
    pern: '',
    no_payment: false,
  },
];

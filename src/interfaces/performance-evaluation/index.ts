import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  criteria: string;
  employee_id?: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  criteria?: string;
  employee_id?: string;
}

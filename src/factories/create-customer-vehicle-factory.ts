import { Customer } from "../customer/customer";
import { Vehicle } from "../vehicle/vehicle";

export interface CreateVehicleCustomerFactory {
  createCustomer(CustomerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
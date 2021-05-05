import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-custom-vehicle-factory";

//MY CLIENT-CODE
const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle("Fusca", "John Doe");
const car2 = individualFactory.createVehicle("Gol", "Jenyffer");

car1.pickUp();
car2.pickUp();
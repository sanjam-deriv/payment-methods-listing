export interface IResidenceItem {
  text: string;
  value: string;
  phone_idd: string;
}

export interface IPaymentMethod {
  display_name: string;
  supported_currencies: Array<string>;
  id: string;
  description: string;
}

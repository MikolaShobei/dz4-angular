import {Iaddress} from './address-interface';
export interface Iuser {
  id: number;
  name: string;
  username: string;
  address: Iaddress;
  email: string;
}

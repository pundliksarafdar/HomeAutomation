import {ComData} from './comData';

export class RasPiDetails {
  id: number;
  name: string;
  status : string;
  temp:number;
  freq:number;
  comData:Array<ComData>;
}
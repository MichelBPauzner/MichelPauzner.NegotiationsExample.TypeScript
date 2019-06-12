import { Equable } from './Equable';
import { Printable } from './Printable';
export interface BaseModel<T> extends Printable, Equable<T>{

}
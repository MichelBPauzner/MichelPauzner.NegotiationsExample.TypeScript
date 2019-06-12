import { Printable } from "../models/modelBarrel";

export function printLog(...objects: Printable[]){
    objects.forEach(obj=> obj.toString());
}
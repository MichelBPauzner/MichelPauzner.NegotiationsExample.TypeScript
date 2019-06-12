import { BaseModel } from './BaseModel';

export class Negotiation implements BaseModel<Negotiation>{
    
    constructor(readonly date: Date, readonly quantity: number, readonly value:number){
    }
        
    get volume(){
        return this.quantity * this.value;
    }

    toString(): void{
        console.log('-- toString --');
        console.log(
            `Data: ${this.date}
             Quantidade: ${this.quantity}, 
             Valor: ${this.value}, 
             Volume: ${this.volume}`
        )
    }

    equals(negotiation: Negotiation): boolean{
        return this.date.getDate() == negotiation.date.getDate()
                && this.date.getMonth() == negotiation.date.getMonth()
                && this.date.getFullYear() == negotiation.date.getFullYear();
    }
}
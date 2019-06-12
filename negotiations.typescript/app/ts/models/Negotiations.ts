import { BaseModel } from './BaseModel';
import { Negotiation } from './Negotiation';

export class Negotiations implements BaseModel<Negotiations>{
    //private _negociacoes: Array<Negociacao> = [];
    private _negotiations: Negotiation[] = [];

    add(negociacao: Negotiation): void {
        this._negotiations.push(negociacao);
    }

    toArray(): Negotiation[]{
        return ([] as Negotiation[]).concat(this._negotiations);
    }

    toString(): void{
        console.log('-- toString --');
        console.log(JSON.stringify(this._negotiations));
    }

    equals(negotiations: Negotiations): boolean{
        return JSON.stringify(this._negotiations) == JSON.stringify(negotiations.toArray());
    }
}
import {Negotiations, Negotiation, NegotiationApi} from '../models/modelBarrel';
import {NegotiationsView, MessageView} from '../views/viewBarrel';
import { domInject, throttleExecution } from '../helpers/decorators/decoratorBarrel';
import { NegotiationService } from '../services/serviceBarrel';
import { printLog } from '../helpers/helperBarrel';

export class NegotiationController{

    @domInject('#data')
    private _inputDate: JQuery;
    
    @domInject('#quantidade')
    private _inputQuantity: JQuery;
    
    @domInject('#valor')
    private _inputValue: JQuery;

    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negociacoesView');
    private _messageView = new MessageView('#mensagemView');
    private _service = new NegotiationService();

    constructor(){
        this._negotiationsView.update(this._negotiations);
    }

    @throttleExecution(200)
    add(event: Event){
        

        let date = new Date(this._inputDate.val().replace(/-/g,','));
        if(!this._canAddNegotiation(date)) {
            this._messageView.update("Só é possível realizar uma negociação em dias úteis.");
            return;
        }

        const neg = new Negotiation(
            date,
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );
        this._negotiations.add(neg);

        printLog(neg, this._negotiations);

        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negociação adicionada com sucesso!");

        // this._negociacoes.paraArray().forEach(negociacao=>{
        //     console.log(negociacao.data);
        //     console.log(negociacao.quantidade);
        //     console.log(negociacao.valor);
        //     console.log(negociacao.volume);
        // });
      
    }

    private _canAddNegotiation(date: Date): boolean {
        return date.getDay() != WeekDay.Sunday && date.getDay() != WeekDay.Saturday;
    }

    @throttleExecution()
    async importFromAPI(){

        try
        {
            const negotiations = await this._service.getNegotiations(res => {
                if(res.ok){
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
        
            const negotiationsAlreadyAdded = this._negotiations.toArray();

            negotiations
                .filter(n => !negotiationsAlreadyAdded.some(naa=> n.equals(naa)))
                .forEach(negotiation => this._negotiations.add(negotiation));

            this._negotiationsView.update(this._negotiations);
        }
        catch(err)
        {
            this._messageView.update(err.message);
        }
    }
}

enum WeekDay{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
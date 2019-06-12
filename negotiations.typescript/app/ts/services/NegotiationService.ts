import { Negotiation, NegotiationApi } from '../models/modelBarrel';

export class NegotiationService {
    
    getNegotiations(handler: HandlerFunction): Promise<Negotiation[]>{

        return fetch('http://localhost:8080/dados')
        .then(res => handler(res))
        .then(res => res.json())
        .then((data: NegotiationApi[]) => 
            data.map(info => new Negotiation(new Date(), info.vezes, info.montante))
        )
        .catch(err=> 
            {
                console.log(err);
                throw new Error('Não foi possível importar as negociações da API.');
            });
    }
}

interface HandlerFunction{
    (res: Response) : Response; 
}
import { executionTimeLog } from '../helpers/decorators/decoratorBarrel';

export abstract class View<T>{
        private _element: JQuery;
    
        constructor(selector:string, private _escape: boolean = false){
            this._element = $(selector);
        }
    
        @executionTimeLog()
        update(model: T): void{
            let template = this.template(model);
            if(this._escape){
                template =  template.replace(/<script>[\s\S]*?<\/script>/, '');
            }

            this._element.html(this.template(model));
        }
    
       abstract template(model: T): string ;
        
    }


import { NegotiationController } from  './controllers/NegotiationController';


const controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));
$('#botaoImportar').click(controller.importFromAPI.bind(controller));

// document
//     .querySelector('.form')
//     .addEventListener('submit',controller.adiciona.bind(controller));
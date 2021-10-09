import * as Parser from 'ua-parser-js';

//genero la funcion para usar despues en los componentes. Marca si esl Mobile o desktop

//Para eso uso Parser y tomo los header de las request del cliente, en la data del user agent
//que puede estar ya declarado si estamos navegando, o que puede ser la primera peticion

export default function isMobile (req){
let userDevice;

if(req){
    userDevice = Parser(req.headers['user-agent'] || '' )}
    else{
        //Si es la primera peticion entonces, primero genera el parser y despues obtiene la datita. 
        //Datita linda, datita hermosa, como el ssitema operativo del cliente for example. o el tipo de navegador etc.
        userDevice = new Parser().getResult();
    }

return userDevice?.device?.type === 'mobile'
}

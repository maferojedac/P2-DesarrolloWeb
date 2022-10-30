const FS = require('../firebase');
const { db } = FS;


//unicamente crea una cuenta con dinero inicial
const createAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections');   
        //al crear la cuenta, se crea un objeto con las propiedades señaladas
        const { _path: { segments } } = await DC.add({
             current_balance: {
                money: dc.money,
                collectibles: []
            }
        });
        const id = segments[1];
        //se muestra al usuario
        res.send({
            status: 200,
            id,
            money: dc.money,
            collectables: []
        });
        console.log(res)
    }catch (error){
        console.log(error); //es importante saber lo que pasa interiormente cuando aparece un error
        res.send(error);
    }
  };


//necesitamos que se actualice el dinero que ya se tenia antes
//y se muestre las colecciones existentes
const updateAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections');

        //necesitamos extraer el dinero almacenado
        await DC.get()
            .then((result) => {
                result.docs.map((dc) => ({
                    money: dc.money,
                    newMoney: dc.money
                }));
                //actualizando el dinero
                const dinero = DC.doc(dc.id).set({
                    current_balance: {
                        money: dc.money + dc.newMoney
                    }
                }, {merge: true}); //para concatenar con la info que habia anterior
            })
            .catch(error => {
                console.log(error);
                res.send({
                    current_balance: {},
                    
                })
            })
        
            //actualizando con los coleccionables junto el dinero
        const resp = await DC.update({
            dinero,
            collectables: [{
                collection_name: "CARD_1",
                amount: 2,
                collection_price: 50
            }]
        });
        res.send({
            status: 200,
            resp
        });
    }catch (error){
        console.log(error);
        res.send(error);
    }
} //ya no supe como resovler el error que me daba al ejecutar este endpoint :(


//necesitamos saber lo que el usuario quiere hacer: comprar/vender
//vender-solo puede hacerlo si tiene colecciones disponibles en su inventario
//comprar-solo puede hacerlo si tiene el dinero suficiente al comprar
//        una vez realizada la compra, se añadira a sus colecciones disponibles para que esas las pueda vender
const CompraVenta = async (req, res) => {
    try{
        const {params: {id, opt}, body: dc} = req;
        const DC = db.collection('dcollections').doc(id);   

        if(opt = "/BUY"){
            
        } else if(opt = "/SELL"){
            if(db.collectables.length == 0)
            {
                res.send({
                    status: 404,
                    message: "You have no collections to sell"
                });
            } else {
                await DC.get()
                .then((result) => {
                    result.docs.map((dc) => ({
                        money: dc.money,
                        collectables: dc.collectables
                    }));
                    const operacion = DC.doc(dc.id).set({
                        operation: "SELL"
                    }, {merge: true}); //para concatenar con la info que habia anterior
                })
                .catch(error => {
                    console.log(error);
                    res.send({
                        status: 404
                    })
                })

                const resp = await DC.update({
                    operacion,
                    collectables: [collectables.dc]
                });
                res.send({
                    status: 200,
                    resp
                });
               
            }
        }
    
    }catch (error){
        res.send(error);
    }
} 


module.exports = {
    createAccount,
    updateAccount,
    CompraVenta
}
const FS = require('../firebase');
const { db } = FS;



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
    }catch (error){
        console.log(error); //es importante saber lo que pasa interiormente cuando aparece un error
        res.send(error);
    }
  };



const updateAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const { money: extraMoney } = dc; //necesitamos extraer el dinero almacenado
        const DC = db.collection('dcollections').doc(id); /* se necesita buscar el id para la cuenta? */
        
        //necesitamos agregar nuevos objetos al actualizar
        //solo si es la primera vez, necesita que pase

        await DC.get()
            .then(response => {

                await DC.set({
                    current_balance: {
                        money: oldMoney + extraMoney
                    }
                }, {merge: true});
            })
            .catch(error => {
                console.log(error);
                res.send({
                    current_balance: {},
                    
                })
            })

        console.log(user);

        

        /*const { _path: { segments } } = await DC.add({
               collectibles: 
               [ {
                 collection_name,
                 amount,
                collection_price
                } ]
       });*/  


        const resp = await DC.update({
            money: dc.money + money,
            collectables: [dc.collectables]
        });
        res.send({
            status: 200,
            id
        });
    }catch (error){
        res.send(error);
    }
} 

const CompraVenta = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections');   
        res.send({
            status: 200,
            currentbalance: {
                money,
                collectibles:[
                    {
                        collection_name,
                        amount,
                        collection_price
                    }
                ]
            }
        });
    }catch (error){
        res.send(error);
    }
} 


module.exports = {
    createAccount,
    updateAccount,
    CompraVenta
}
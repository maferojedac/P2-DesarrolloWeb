let {userData} = require('../models/database')

const createAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections');   
        const { _path: { sengments } } = await DC.add(dc);
        const id = sengments[1];
        res.send({
            status: 200,
            id,
            money,
            collectables
        });
    }catch (error){
        res.send(error);
    }
  };



/* const updateAccount = async (req, res) => {
    try{
        const {params:{ id }} = req;
        const mapeo = useState.map(id);

        const resp = await useState.map({
           
        })
        res.send({
            status: 200,
            id
        });
    }catch (error){
        res.send(error);
    }
} 

const CompraVenta = async (req, res) => {

} */


module.exports = {
    createAccount,
    /* updateAccount,
    CompraVenta */
}
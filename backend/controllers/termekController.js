import TermekModel from "../models/termekModel.js";

const TermekController = {
    async getAll(req, res){
        try{
            const termekek = await TermekModel.getAll();
            res.json(termekek);
        }
        catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
        }
    },
    async getById(req, res){
        try{
            const termekek = await TermekModel.getById(req.params.id);
            res.json(termekek);
        }
        catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
        }
    },

    async create(req, res){
        try{
            const id = await TermekModel.create(req.body);
            res.status(201).json({id});
        }
        catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
        }
    }
}
export default TermekController;
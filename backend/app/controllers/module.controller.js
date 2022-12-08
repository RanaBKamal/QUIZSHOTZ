const Module = require("../models/module.model");

exports.getModules = async (req, res) => {
    const modules = await Module.find();
	res.send(modules);
};
exports.getModuleById = async (req, res) => {
    const module = await Module.find({'_id': req.params.moduleId});
	res.send(module);
};

exports.addModule = (req, res) => {
    const module = new Module({
        name: req.body.name,
        type: req.body.type
    });
    if (req.body.name === ""){
        res.status(400).send({message: "cant be empty"});
        return;
    }
    module.save((err, module) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: module + "Module added successfully!" });
    })
};
const Module = require("../models/module.model");

exports.getModules = (req, res) => {
    Module.find().then(
    (things) => {
      res.status(200).json(things);
    }
    ).catch(
        (error) => {
        res.status(400).json({
            error: error
        });
        }
    );
    res.status(500).send("Internal server error");
};

exports.addModule = (req, res) => {
    const module = new Module({
        name: req.body.name,
        type: req.body.type
    });
    module.save((err, module) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: module + "Module added successfully!" });
    })
};
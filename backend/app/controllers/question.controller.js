const Question = require("../models/question.model");
const Module = require("../models/module.model");


exports.getQuestions = async (req, res) => {
    const questions = await Question.find({"module":req.params.moduleId});
	res.send(questions);
};
exports.getQuestion = async (req, res) => {
    const question = await Question.find({"_id": req.params.questionId});
	res.send(question);
};

exports.addQuestion = (req, res) => {
    const question = new Question({
        question: req.body.question,
        type: 'All',
        option: req.body.option,
        answer:req.body.answer,

    });
    if (req.body.question === ""){
        res.status(400).send({message: "cant be empty"});
        return;
    }
    question.save((err, question) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (req.body.module){
             Module.findOne({ name: req.body.module }, (err, module) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                question.module = module._id;
                question.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                res.send({ message: "Question added successfully!" });
                });
            });
        }
    })
};
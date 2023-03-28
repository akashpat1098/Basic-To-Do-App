const ToDoModel = require("../models/ToDoModel");

module.exports.getTodo = async (req, res) => {
  const ToDo = await ToDoModel.find();
  res.send(ToDo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text })
    .then(() => {
      res.status(201).send("Added Succesfully");
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.status(201).send("Delected Successfully");
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports.updateTodo = async (req, res) => {
  const { _id ,text} = req.body;
  ToDoModel.findByIdAndUpdate(_id,{text})
    .then(() => {
      res.status(201).send("Updated Successfully");
    })
    .catch((err) => {
      console.error(err);
    });
};

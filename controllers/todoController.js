let bodyParser = require('body-parser');

let todoTasksList = [{item: 'Pray Fajar'},{item: 'Breakfast'}];

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports = function(app){

    app.get('/todo',(req,res)=>{
        res.render('todo',{todoList:todoTasksList});
    });

    app.post('/todo',urlencodedParser,(req,res)=>{
        todoTasksList.push(req.body);
        res.json(todoTasksList);
    });

    app.delete('/todo/:item',(req,res)=>{
        
        todoTasksList = todoTasksList.filter(function(todo){
            return todo.item.replace(' ',"-") !== req.params.item;
        });
        console.log(todoTasksList);
        res.json(todoTasksList);
    });
}
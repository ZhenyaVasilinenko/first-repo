

module.exports.all = function(req, res) {
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM customers', function(err, rows){
            if (err) throw new Error;
            console.log(rows);
            res.send(rows);
            //res.render('customers', {page_title: 'IMT-CRM Пользователи', data: rows});
        });
    });
};

// module.exports.add = function(req, res) {
//     res.render('add_customer', {page_title: 'Добавить пользователя в CRM систему'});
// };

// module.exports.edit = function(req, res) {
//     let id = req.params.id;
//     req.getConnection(function(err, connection){
//         connection.query('SELECT * FROM customers WHERE id = ?', [id], function(err, rows){
//             if (err) throw new Error;
//             res.render('edit_customer', {page_title: 'Изменить пользователя в CRM системе', data: rows});

//         });
//     });
// };

// module.exports.save = function(req, res) {
//     let input = req.body;
//     //console.log(input);
//     //debugger;
//     req.getConnection(function(err, connection){
//         let data = 
//     })
// }
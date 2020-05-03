const fs = require('fs');
const nodemailer = require('nodemailer');
fs.writeFileSync('data.txt', 'Hello world'); 

let data = fs.readFileSync('data.txt');

fs.appendFileSync('data.txt','\r\n'+'And Hello Node.'+'\r\n'+'Again', function (err) {
    if (err) throw err;
    console.log('Updated!');
  })
console.log(data.toString());


let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'vasvasjane@gmail.com', 
        pass: '******'
    } 
}); 
  
let mailDetails = { 
    from: 'vasvasjane@gmail.com', 
    to: 'vasvasjane@gmail.com', 
    subject: 'Test mail', 
    text: 'Node.js file',
    attachments: [{ filename: 'data.txt', content: data }],
}; 
  
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 
    } else { 
        console.log('Email sent successfully'); 
    } 
}); 
var express = require('express');
var app = express();
var fs = require('fs');
//const pdf = require('./dummy.pdf');
const pdf2html = require('pdf2html')

//let pdfApi = new PdfApi('27549b53-b51d-4304-b824-17f6398870ba', '13ee6f97e97173cc9e65f755e3f0a557');


app.get('/', function(req, res){
    pdf2html.html('./dummy.pdf', (err, html) => {
        if (err) {
            console.error('Conversion error: ' + err)
        } else {
            console.log('html',html)
        }
    })
});


app.listen(8000);

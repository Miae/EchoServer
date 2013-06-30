var express = require('express');
var app = express();

app.get('/input/:id', function(req, res){
    res.send('Input Value : ' + req.params.id);
});

app.put('/input/:id', function (req, res){
  return ProductModel.findById(req.params.id, function (err, product) {
    product.title = req.body.title;
    product.description = req.body.description;
    product.style = req.body.style;
    return product.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(product);
    });
  });
});
app.listen(8000);
console.log('Start echoserver5');
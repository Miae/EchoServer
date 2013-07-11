var express = require('express');
var app = express();
// update (PUT)
// create (POST) 와 동일한 route url 을 사용합니다.
//
app.put('/api/todo', function(req, res){
  //
  // 이전편에서 idAttribute 에 대해서 배웠죠 ^^
  // 입력된 Model 은 _id 값을 가지게 됩니다.
  //
  return Todo.findById(req.body._id, function(err, todo) {
    //
    // 수정된 이름을 재설정
    //
    todo.name = req.body.name;
    todo.save(function(err) {
      if (!err) {
        console.log("updated");
      }
      //
      // _id 값이 포함된 todo JSON 객체를 그대로 반환 => 중요함 저번시간에 굉장히 강조했죠
      //
      res.send(todo);
    });
  });
});
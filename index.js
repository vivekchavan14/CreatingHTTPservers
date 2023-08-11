const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3011

app.use(bodyParser.json());

function calculateSum(counter){
  let sum = 0;
  for(let i=0; i<=counter;i++)
  {
      sum = sum + i;
  }
  return sum;
}


function handleRequest(req, res) {
  console.log(res.body);
  var counter = req.query.counter;
  var calculatedSum = calculateSum(counter);

  var answerObj = {
    sum : calculatedSum,
  
  }
  res.status(200).send(answerObj);
}
app.get('/handle', handleRequest)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



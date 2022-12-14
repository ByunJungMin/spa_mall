const express = require('express');
const app = express();
const port = 5000;


const goodsRouter = require('./routes/goods');
const cartsRouter = require('./routes/carts.js')
const connect = require('./schemas');
connect();

app.use(express.json()); // middleware로써 JSON middleware 를 사용해 body로 전달된 데이터를 사용할 수 있도록 함.
                         // 이 미들웨어는 app.use('/api', [goodsRouter]) 보다 위에 작성되어야함.
                         // 그 이유는 미들웨어는 순차적으로 거쳐가기 때문에 먼저 작성해 주는 것이다.
app.use('/api', [goodsRouter, cartsRouter])



app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
     console.log(port, '포트로 서버가 열렸어요!')
})
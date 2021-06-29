const express = require('express');
const app = express();
const stripe_sk = require('./config').stripe_sk;

const port = require('./config').port;

const userRouter = require('./routers/userManager');
const equipmentRouter = require('./routers/equipmentManager');
const crewRouter = require('./routers/crewManager');
const utilRouter = require('./routers/utils');
const reviewRouter = require('./routers/reviewManager');
const orderRouter = require('./routers/orderManager');

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/equipment', equipmentRouter);
app.use('/util', utilRouter);
app.use('/crew', crewRouter);
app.use('/review', reviewRouter);
app.use('/order', orderRouter);

app.use(express.static('./uploads/'))

const stripe = require('stripe')(stripe_sk);

app.post("/create-payment-intent", async (req, res) => {
    const data = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: data.amount,
        currency: 'inr'
    });
    res.status(200).json(paymentIntent);
});

app.get('/home', (req, res) => {
    res.send("Welcome Home");
})

app.listen(port, () => {
    console.log('server started at port 5000')
})
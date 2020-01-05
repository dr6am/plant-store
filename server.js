const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if (process.env.NODE_ENV !== "production") require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

if (process.env.NODE_ENV === "production") {

}


app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.post('/payment', (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd'
	};
	stripe.charges.create(body,(e, StripeRes)=>{
		
		if(e){
			res.status(500).send({error:e})
		}
		else{
			res.status(200).send({success:StripeRes})
		}
		
	}
	)
})


app.listen(port, () => {
	console.log("\t App listening on port " + port + "\t", Date(Date.now()).toString())
})
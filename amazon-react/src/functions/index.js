const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'pk_test_51MesK9GYNswVKYtr228Oai8EJr2DxpbhRWQaRn4eySDwq1FpPxjoQrDCvWqKtoHCTijuJshsMhsJ7hOmzoXJs1CK00Mc0qcnID'
);

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5000" }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("안녕"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log(" payment.js에서 가져온 total의 양은 다음과 같다!!  ", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-c2851/us-central1/api
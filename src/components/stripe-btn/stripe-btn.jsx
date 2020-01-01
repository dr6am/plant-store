import React from 'react';
import StipeCheckout from 'react-stripe-checkout'
import axios from 'axios';

const StripeCheckout = ({price})=>{
    const priceForStripe = price *100;
    const publicKey = 'pk_test_h7kfD96HACBxHmU56VZBODFp00ipycj9jI';
    const onToken = token=>{
        alert('payment Successful');
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        })
            .then(resp=>{
                alert('Payment successful');
            })
            .catch(e=>{
                console.log(JSON.parse(e))
                alert('There was an issue with your payment. Please sure you use the provided credit cart')
            })
    }
    return(
        <StipeCheckout
            label='Pay Now'
            name='Clothing store'
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicKey}
        />
    )
}

export default StripeCheckout;
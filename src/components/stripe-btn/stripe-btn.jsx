import React from 'react';
import StipeCheckout from 'react-stripe-checkout'

const StripeCheckout = ({price})=>{
    const priceForStripe = price *100;
    const publicKey = 'pk_test_h7kfD96HACBxHmU56VZBODFp00ipycj9jI';
    const onToken = token=>{
        alert('payment Successful');
        console.log(token)
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
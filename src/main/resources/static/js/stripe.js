const stripe = Stripe('pk_test_51PvdpdLP1TyKMPzT84EnmeablbrcTqs3hHVSBhM4XcS5dGPpA6CL1mf63BWlK2blfGopNf5Aa5yyGzLxArWptpAe00GUB3zAul');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});

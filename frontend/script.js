const paymentForm = document.getElementById('payment-form');
const submitPaymentButton = document.getElementById('submit-payment');

paymentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;
  const currency = document.getElementById('currency').value;
  const paymentMethod = document.getElementById('payment-method').value;

  try {
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency, paymentMethod }),
    });
    const payment = await response.json();
    console.log(payment);
  } catch (err) {
    console.error(err);
  }
});
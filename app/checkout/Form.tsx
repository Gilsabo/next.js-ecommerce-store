'use client';

import { useRouter } from 'next/navigation';
import clearCart from './actions';
import styles from './form.module.css';

export default function Form() {
  const router = useRouter();
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        clearCart();
        router.push('/thankyou');
        event.preventDefault();
      }}
    >
      <label>
        <span>First name</span>
        <input data-test-id="checkout-first-name" required />
      </label>
      <label>
        <span>Last name</span>
        <input data-test-id="checkout-last-name" required />
      </label>
      <label>
        <span>E-mail</span>
        <input type="email" data-test-id="checkout-email" required />
      </label>
      <label>
        <span>Address</span> <input data-test-id="checkout-address" required />
      </label>
      <label>
        <span>City</span> <input data-test-id="checkout-city" required />
      </label>
      <label>
        <span>Postal code</span>
        <input type="number" data-test-id="checkout-postal-code" required />
      </label>
      <label>
        <span>Country</span> <input data-test-id="checkout-country" required />
      </label>
      <label>
        <span>Credit card</span>
        <input type="number" data-test-id="checkout-credit-card" />
      </label>
      <label>
        <span>Expiration date</span>
        <input data-test-id="checkout-expiration-date" required />
      </label>
      <label>
        <span>Security code</span>
        <input type="number" data-test-id="checkout-security-code" required />
      </label>

      <button type="submit" data-test-id="checkout-confirm-order">
        Confirm order
      </button>
    </form>
  );
}

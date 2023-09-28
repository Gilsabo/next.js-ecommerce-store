'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Button() {
  const router = useRouter();
  const [count, setCount] = useState(1);

  return (
    <>
      <button
        data-test-id="product-add-to-cart"
        onClick={() => {
          if (count === 0) {
            return;
          }
          setCount(count - 1);
          router.refresh();
        }}
      >
        -
      </button>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(count + Number(e.target.value));
        }}
      />
      <button
        data-test-id="product-add-to-cart"
        onClick={() => {
          setCount(count + 1);
          router.refresh();
        }}
      >
        +
      </button>
      <button>Add</button>
      <div>{count}</div>
    </>
  );
}

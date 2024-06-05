import { Button } from "@/components/ui/button";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { FormEvent, useState } from "react";

const JobListCheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (stripe == null || elements == null) return;

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/my-listing/order-complete`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  }
  return (
    <form onSubmit={onSubmit}>
      {errorMessage != null && (
        <p className="text-red-500 dark:text-red-900 text-sm mb-4">
          {errorMessage}
        </p>
      )}
      <PaymentElement />
      <Button
        disabled={isLoading || stripe == null || elements == null}
        className="mt-4 w-full"
      >
        Pay {amount}
      </Button>
    </form>
  );
};

export default JobListCheckoutForm;

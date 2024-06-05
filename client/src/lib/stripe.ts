import { env } from "@/constants/config";
import { loadStripe } from "@stripe/stripe-js";
// console.log(env.VITE_STRIPE_PUBLISHABLE_KEY);
export const stripePromise = loadStripe(env.VITE_STRIPE_PUBLISHABLE_KEY);

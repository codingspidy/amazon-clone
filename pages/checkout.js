import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const basketItems = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const {data: session} = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: basketItems,
      email: session.user.email
    })

    // Redirect user to Stripe checkout..
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if(result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <div>
            <Image
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="border-b pb-4 text-3xl">
              {basketItems.length === 0 ? "Empty basket" : "Your basket here."}
            </h1>
            {basketItems.map((item, i) => {
              return (
                <CheckoutItem
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  rating={item.rating}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md ">
          {basketItems.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({basketItems.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="INR" />
                </span>
              </h2>

              <button
                onClick={createCheckoutSession}
                role="link"
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;

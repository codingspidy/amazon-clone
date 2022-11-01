// import { getSession, useSession } from "next-auth/react";
// import Header from "../components/Header";

// const Orders = () => {
//   const { data: session } = useSession();

//   return (
//     <div>
//       <Header />
//       <main className="max-w-screen-lg mx-auto p-10">
//         <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
//           Your Orders
//         </h1>
//         {session ? (
//           <h2>x orders</h2>
//         ) : (
//           <h2>Please sign in to see your orders</h2>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Orders;

// export async function getServerSideProps() {
//   const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//   // Get the users logged in credentials...
//   const { session } = getSession(context);

//   if (!session) {
//     return {
//       props: {},
//     };
//   }

// // Firebas DB
//   const stripeOrders = await db
//     .collection("users")
//     .doc(session.user.email)
//     .collection("orders")
//     .orderBy("timestamp", "desc")
//     .get();

//     // Stripe orders
//     const orders = await
// }

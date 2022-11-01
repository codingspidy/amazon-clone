import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Header from "../components/Header";

const Success = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col bg-white p-10">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thankyou, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thankyou for shopping with us. We will send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) please press the link below.
          </p>
          <button
            className="button mt-8"
            onClick={() => router.push("/")}
          >
            Continue shopping
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;

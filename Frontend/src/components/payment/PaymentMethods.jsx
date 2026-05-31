import React from "react";
import { CreditCard } from "./CreditCard";

export const PaymentMethods = ({ title }) => {
  return (
    <div className="p-2 mb-5">
      {/* Heading */}
      <h3 className="text-base font-semibold text-gray-900 p-2 bg-blue-200 border-r-4 border-blue-900 shadow-lg rounded">
        {title}
      </h3>

      {/* Choose Method */}
      <fieldset className="mt-4">
        <legend className="sr-only">Payment type</legend>

        <div className="flex items-center">
          <input
            name="payment-type"
            id="credit-card"
            type="radio"
            checked
            readOnly
            className="focus:ring-indigo-500 accent-pink-500 h-4 w-4 text-indigo-600 border-gray-200"
          />

          <label
            htmlFor="credit-card"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            Credit card
          </label>
        </div>
      </fieldset>

      <p className="text-xs font-bold my-2 underline text-blue-500">
        *All Payments Methods Are FAKE Just Type Any Values.
      </p>

      {/* Credit Card Inputs */}
      <CreditCard />
    </div>
  );
};
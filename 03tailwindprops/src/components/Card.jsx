import React from "react";

function Card({ productName, btnText="buy now", status="In Stock" }) {
  return (
    <div>
      <>
        <div class="flex font-sans bg-slate-300 p-3">
          <div class="flex-none w-48 relative">
            <img
              src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              class="absolute inset-0 w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <form class="flex-auto p-6">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                {productName}
              </h1>
              <div class="text-lg font-semibold text-slate-500">$110.00</div>
              <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-4">
                {status}
              </div>
            </div>
            
            <div class="flex space-x-4 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <button
                  class="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  {btnText}
                </button>
                <button
                  class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <p class="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </>
    </div>
  );
}

export default Card;

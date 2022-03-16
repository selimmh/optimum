import React from "react";

const Error = () => {
  return (
    <div
      class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-white
    to-blue-400
  "
    >
      <div class="px-40 py-20  bg-gray-800 rounded-md shadow-xl">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-white text-9xl">404</h1>

          <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            Page not found
          </h6>

          <p class="mb-8 text-center text-white md:text-lg">
            The request you’re looking for was not found.
          </p>

          <a
            href="/admin"
            class="px-6 py-2 text-sm font-semibold bg-gray-800 bg-blue-100"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;

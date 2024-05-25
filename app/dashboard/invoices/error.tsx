'use client';

import { useEffect } from 'react';

export default function Error({
  // props to pass to the component
  error,
  reset,
}: {
  // definitions of prop types of props to pass to the component
  error: Error & { digest?: string }; // error is an instanece of the rror class with an optional digest property that is a string that represents the error
  reset: () // reset is a function that takes no arguments and returns void
  => void; // in this instance, a reset function is passed to the component to reset the error state to default
}) {
  useEffect(() => {
    //log the error to the console
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>:
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      ></button>
    </main>
  );
}

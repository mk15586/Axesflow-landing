"use client";

import { useEffect } from "react";
import NotFound from "./not-found";

export default function GlobalError({ error }: { error: Error }) {
  // Optionally, you can log the error or send to analytics here
  useEffect(() => {
    // Log error if needed
    // console.error(error);
  }, [error]);

  // Render the custom 404 page for all errors
  return <NotFound />;
}

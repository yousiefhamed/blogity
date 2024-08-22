"use client"; // Error boundaries must be Client Components
import ErrorMessage from "../components/ErrorMessage";

export default function Error({ error, reset }) {
  return <ErrorMessage messages={[`${error}`]} />;
}

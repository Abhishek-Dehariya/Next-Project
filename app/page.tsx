"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name: any) => {
    router.push(name);
  };
  return (
    <div>
      <h6>This is home page</h6>
      <div>
        <Link href="/login">Go to Login Page</Link>
      </div>
      <div>
        <Link href="/about">Go to About Page</Link>
      </div>
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => navigate("/login")}
      >
        {" "}
        Go to login Page
      </button>
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => navigate("/about")}
      >
        Go to about Page
      </button>
    </div>
  );
}

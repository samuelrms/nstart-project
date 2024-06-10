import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/screens/Home"), {
  loading: () => <p>Loading...</p>,
});

export default async function Home() {
  return <HomePage />;
}

"use client";

import {
  RootState,
  selectDynamicQueryResult,
  useAppSelector,
  useDynamicQuery,
} from "@/lib";

const Home = () => {
  const { data, error, isLoading } = useDynamicQuery({
    path: "public",
  });
  const selectQueryState = selectDynamicQueryResult({
    path: "public",
  });
  const queryState = useAppSelector((state: RootState) =>
    selectQueryState(state)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  // TODO - fetch data Request return using useDynamicQuery
  console.log("fetch data Request return using useDynamicQuery", data);

  // TODO - Status stored in the request store
  console.log("Status stored in the request store", queryState);

  return (
    <div>
      <h2>Data from Store:</h2>
      <pre>{JSON.stringify(queryState?.data, null, 2)}</pre>
    </div>
  );
};

export default Home;

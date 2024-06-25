"use client";

import { Stack, Text } from "@/components";
import { Theme } from "@/components/Theme";
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
    <div className="container">
      <Stack className="items-start flex-col p-8">
        <Stack className="w-full flex justify-end">
          <Theme />
        </Stack>
        <Stack>
          <Text elementType="h2">Data from Store:</Text>
          <Text elementType="pre">
            {JSON.stringify(queryState?.data, null, 2)}
          </Text>
        </Stack>
      </Stack>
    </div>
  );
};

export default Home;

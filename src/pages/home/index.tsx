import { useEffect } from "react";

const HomePage = () => {
  const testFetch = async () => {
    const result = await fetch("/api/test")
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
        return null;
      });
    console.log("resultTest", result);
  };
  useEffect(() => {
    testFetch();
  }, []);
  return (
    <>
      <h2>HomePage</h2>
    </>
  );
};
export default HomePage;

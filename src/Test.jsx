import { useEffect } from "react";

function Test() {
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("test says hi");
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <div>
      <h1>This is test</h1>
    </div>
  );
}

export default Test;

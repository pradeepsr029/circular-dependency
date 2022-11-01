import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));

function App() {
  return (
    <div>
      <h1>dsfdsfds</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;

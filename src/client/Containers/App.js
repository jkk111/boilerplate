import React from "react";

const App = () => {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    const to = setTimeout(() => {
      setState(state + 1);
    }, 500);
    return () => {
      clearTimeout(to);
    };
  }, [state]);

  return <div>{state}</div>;
};

export default App;

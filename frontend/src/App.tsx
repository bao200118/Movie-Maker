import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./containers/Movies";
import AddMovie from "./components/AddMovie";

function App() {
  const [data, setData] = useState([]);

  const updateData = (value: any) => {
    setData(value);
  };

  return (
    <div>
      <Header data={data} setData={updateData} />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default App;

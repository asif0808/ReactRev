import Navbar from "./Navbar";
function App() {
  const user={
    fname:"Aasif",
    role:"Developer"
  };

  return (
    <>
     <h1>Hello World</h1>
     <Navbar user={user}/>
    </>
  )
};

export default App

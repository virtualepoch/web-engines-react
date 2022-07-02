import Header from "./Header";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Cgi from "./pages/Cgi";

function App() {
  let page;
  switch (window.location.pathname) {
    case "/home":
      page = <Home />;
      break;

    case "/tutorials":
      page = <Tutorials />;
      break;

    case "/cgi":
      page = <Cgi />;
      break;
  }
  return (
    <>
      <Header />
      <section className="page-container">{page}</section>
    </>
  );
}

export default App;

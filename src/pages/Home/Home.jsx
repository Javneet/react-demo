import Aside from "../../components/Header/Aside/Aside";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Header/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Header/Footer/Footer";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header title="Home" color="blue" />
      <Navbar />
      <Aside />
      <Main text="Pagina Home" />
      <Footer />
    </div>
  );
};

export default Home;

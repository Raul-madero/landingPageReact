import React from "react";

//include images into your bundle
import bosque from "../../img/bosque.jpg"
import lago from "../../img/lago.jpg";
import monte from "../../img/monte.jpg";

//create your first component
const NavBar = () => {
  return (
    <nav className="navbar bg-dark d-flex justify-content-between">
      <div className="container-fluid w-25 m-0">
        <a className="navbar-brand text-light" href="#">
          Navbar
        </a>
      </div>
      <div>
        <ul className="nav me-2 mb-2 d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const Jumbotron = () => {
  return (
    <div className="container-fluid bg-tertiary w-75 p-4">
      <h1>A Warm Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        commodi, soluta necessitatibus, odit mollitia omnis laborum deserunt
        deleniti, fugit molestias facilis optio iste laboriosam blanditiis ea
        minus accusantium ratione accusamus.
      </p>
      <button className="btn btn-primary">Call to action</button>
    </div>
  );
};
const Cards = (props) => {
  return (
    <div className="card mx-1">
      <img href={props.imagen} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.titulo}</h5>
        <p className="card-text text-center">{props.descripcion}</p>
        <a href="#" className="btn btn-primary align-self-center">
          Go Somewhere
        </a>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="container-fluid w-100 bg-dark">
      <p className="text-light fs-2 text-center">&copy; Your website 2023</p>
    </footer>
  );
};
const Main = () => {
  return (
    <div>
      <Jumbotron />
      <div className="container-fluid w-75 p-4 d-flex g-4 flex-wrap flex-lg-nowrap">
        <Cards
          imagen={bosque}
          titulo="Titulo chido"
          descripcion="
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula et massa dictum congue et ut mi. Nullam ac erat sed augue rutrum posuere ut et nunc. Curabitur turpis neque, vestibulum a porttitor a, lacinia vel arcu. Suspendisse eleifend metus eu ipsum laoreet, at gravida odio lacinia. Sed a ipsum et augue feugiat varius. Ut semper, elit sit amet placerat tempus, mauris erat pulvinar tortor, ac scelerisque enim mauris at turpis. Suspendisse potenti. Vivamus tempus pharetra congue. Nullam vitae metus a odio ornare egestas. Proin vitae lectus justo. Cras pulvinar mi id aliquet aliquam. Integer id mauris arcu. Praesent pharetra augue vitae mauris aliquam pharetra. Fusce ac erat purus. Sed suscipit odio nec finibus bibendum. "
        />
        <Cards
          imagen={lago}
          titulo="Otro Titulo chido"
          descripcion="
		   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula et massa dictum congue et ut mi. Nullam ac erat sed augue rutrum posuere ut et nunc. Curabitur turpis neque, vestibulum a porttitor a, lacinia vel arcu. Suspendisse eleifend metus eu ipsum laoreet, at gravida odio lacinia. Sed a ipsum et augue feugiat varius. Ut semper, elit sit amet placerat tempus, mauris erat pulvinar tortor, ac scelerisque enim mauris at turpis. Suspendisse potenti. Vivamus tempus pharetra congue. Nullam vitae metus a odio ornare egestas. Proin vitae lectus justo. Cras pulvinar mi id aliquet aliquam. Integer id mauris arcu. Praesent pharetra augue vitae mauris aliquam pharetra. Fusce ac erat purus. Sed suscipit odio nec finibus bibendum. "
        />
        <Cards
          imagen={monte}
          titulo="Un Titulo mas chido"
          descripcion="
		   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula et massa dictum congue et ut mi. Nullam ac erat sed augue rutrum posuere ut et nunc. Curabitur turpis neque, vestibulum a porttitor a, lacinia vel arcu. Suspendisse eleifend metus eu ipsum laoreet, at gravida odio lacinia. Sed a ipsum et augue feugiat varius. Ut semper, elit sit amet placerat tempus, mauris erat pulvinar tortor, ac scelerisque enim mauris at turpis. Suspendisse potenti. Vivamus tempus pharetra congue. Nullam vitae metus a odio ornare egestas. Proin vitae lectus justo. Cras pulvinar mi id aliquet aliquam. Integer id mauris arcu. Praesent pharetra augue vitae mauris aliquam pharetra. Fusce ac erat purus. Sed suscipit odio nec finibus bibendum. "
        />
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};
export default Home;

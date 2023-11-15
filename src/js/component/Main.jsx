import React from "react";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import bosque from "../../img/bosque.jpg";
import lago from "../../img/lago.jpg";
import monte from "../../img/monte.jpg";

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
export default Main;

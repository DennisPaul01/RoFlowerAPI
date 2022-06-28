import React from "react";

const EndPointsPage = () => {
  return (
    <div className="endpoints-container">
      <div className="endpoint">
        <h3>GET /flowers</h3>
        <p>Lista cu toate florile in baza de date</p>
        <div className="endpoint-example">
          <p>
            <span> Example: </span>
            <a href="http://localhost:8000/v1/flowers">
              http://localhost:8000/v1/flowers
            </a>
          </p>
          <p>Return:</p>
          <div className="endpoint-response">
            <p>[`Return cu toate florile din baza de date.]</p>
          </div>
        </div>
      </div>

      <div className="endpoint">
        <h3>GET /flowers/:numeFloare</h3>
        <p>Date despre o singura floare.</p>
        <div className="endpoint-example">
          <p>
            <span> Example: </span>
            <a href="http://localhost:8000/v1/flowers/musetel">
              http://localhost:8000/v1/flowers/musetel
            </a>
          </p>
          <p>Return:</p>
          <div className="endpoint-response">
            <p>
              <span>nume:</span> "Musetel", <br />{" "}
              <span>denumirePopulara:</span> "Musetele", <br />{" "}
              <span>image:</span>{" "}
              <a href="https://cdn.pixabay.com/photo/2014/07/25/07/02/flowers-401490_960_720.jpg">
                {" "}
                https://cdn.pixabay.com/photo/2014/07/25/07/02/flowers-401490_960_720.jpg
              </a>
              ,
              <br />
              <span>descriere:</span> "Musetelul (denumit si romanita, romonel
              sau romanica) este o planta erbacee anuala, medicinala, cu frunze
              divizate si cu flori grupate in capitule terminale. Ajunge la o
              inaltime de pana la 60 cm cu multe ramificatii, cu flori grupate
              in capitule terminale. Musetelul este o planta originara din sudul
              si sud-estul Europei, astazi intalnita in aproape intreaga lume.
              In Romania, are o mare arie de raspandire intalnindu-se aproape
              peste tot, de la campie unde apare masiv pe solurile saraturoase,
              pana in toate locurile insorite si mai umede de pe langa drumuri,
              cai ferate, pajisti, fanete, cu predilectie pe solurile nisipoase
              usoare.", <br />
              <span>location:</span> [45.784436, 21.140654]
            </p>
          </div>
        </div>
      </div>

      <div className="endpoint">
        <h3>GET /flowers/:zona</h3>
        <p>Lista cu florile in functie de zona geografica.</p>
        <div className="endpoint-example">
          <p>
            <span> Example: </span>
            <a href="http://localhost:8000/v1/flowers/category/bucegi">
              http://localhost:8000/v1/flowers/category/bucegi
            </a>
          </p>
          <p>Return:</p>
          <div className="endpoint-response">
            <p>
              <span>nume:</span> "Primula longiflora", <br />{" "}
              <span>denumirePopulara:</span> "Anghelina", <br />{" "}
              <span>diviziune:</span> "Magnoliophyta", <br />{" "}
              <span>locatieGeografica:</span> [ "Rodnei", "Bucegi", "Fagaras" ]
              <br></br> <span>zona:</span> În România se găsește prin munții
              Maramureșului, Rodnei, Bucegi, Bîrsei și Făgăraș, de obicei pe
              pășuni, în locuri însorite, dar și prin crăpături umede., <br />{" "}
              <span>image:</span>{" "}
              <a href="https://cdn.pixabay.com/photo/2014/07/25/07/02/flowers-401490_960_720.jpg">
                {" "}
                https://cdn.pixabay.com/photo/2014/07/25/07/02/flowers-401490_960_720.jpg
              </a>
              ,
              <br />
              <span>descriere:</span> "Anghelină (Primula halleri, Primula
              longiflora) este o plantă din genul Primula, familia
              Primulaceae.[1][2][3] Tulpina nu are frunze și peri, are o
              înălțime de 100—300 mm. Frunzele cresc la baza tulpinii în formă
              de lozetă. Frunza are formă eliptică alungită, pe față verde, pe
              dos albă. Frunzele sunt făinoase. Floarea are o culoare
              violet-roșiatic. Florile se găsesc la vârful tulpinii, câte
              trei—șase într-un mănunchi, fiecare cu cinci diviziuni întinse în
              lături și spintecate la vârf. Corola este formată dintr-un tub
              lung și îngust. Anghelina înflorește în luna iunie-iulie. În
              România se găsește prin munții Maramureșului, Rodnei, Bucegi,
              Bîrsei și Făgăraș, de obicei pe pășuni, în locuri însorite, dar și
              prin crăpături umede."", <br />
              <span>location:</span> [45.784436, 21.140654]
            </p>
          </div>
        </div>
      </div>

      <div className="endpoint">
        <h3>GET /flowers/:type</h3>
        <p>Lista cu florile in functie de type / diviziune florala.</p>
        <div className="endpoint-example">
          <p>
            <span> Example: </span>
            <a href="http://localhost:8000/v1/flowers/diviziune/magnoliophyta">
              http://localhost:8000/v1/flowers/diviziune/magnoliophyta
            </a>
          </p>
          <p>Return:</p>
          <div className="endpoint-response">
            <p>[Return cu toate florine in functie de o diviziune florala.]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPointsPage;

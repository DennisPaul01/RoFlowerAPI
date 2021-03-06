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
            <a href="http://roflowerapi.space/v1/flowers">
              http://roflowerapi.space/v1/flowers
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
            <a href="http://roflowerapi.space/v1/flowers/musetel">
              http://roflowerapi.space/v1/flowers/musetel
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
            <a href="http://roflowerapi.space/v1/flowers/category/bucegi">
              http://roflowerapi.space/v1/flowers/category/bucegi
            </a>
          </p>
          <p>Return:</p>
          <div className="endpoint-response">
            <p>
              <span>nume:</span> "Primula longiflora", <br />{" "}
              <span>denumirePopulara:</span> "Anghelina", <br />{" "}
              <span>diviziune:</span> "Magnoliophyta", <br />{" "}
              <span>locatieGeografica:</span> [ "Rodnei", "Bucegi", "Fagaras" ]
              <br></br> <span>zona:</span> ??n Rom??nia se g??se??te prin mun??ii
              Maramure??ului, Rodnei, Bucegi, B??rsei ??i F??g??ra??, de obicei pe
              p????uni, ??n locuri ??nsorite, dar ??i prin cr??p??turi umede., <br />{" "}
              <span>image:</span>{" "}
              <a href="https://cdn.pixabay.com/photo/2014/07/25/07/02/flowers-401490_960_720.jpg">
                {" "}
                https://cdn.pixabay.com/photo/2014/07/25/07/02/flowers-401490_960_720.jpg
              </a>
              ,
              <br />
              <span>descriere:</span> "Anghelin?? (Primula halleri, Primula
              longiflora) este o plant?? din genul Primula, familia
              Primulaceae.[1][2][3] Tulpina nu are frunze ??i peri, are o
              ??n??l??ime de 100???300 mm. Frunzele cresc la baza tulpinii ??n form??
              de lozet??. Frunza are form?? eliptic?? alungit??, pe fa???? verde, pe
              dos alb??. Frunzele sunt f??inoase. Floarea are o culoare
              violet-ro??iatic. Florile se g??sesc la v??rful tulpinii, c??te
              trei?????ase ??ntr-un m??nunchi, fiecare cu cinci diviziuni ??ntinse ??n
              l??turi ??i spintecate la v??rf. Corola este format?? dintr-un tub
              lung ??i ??ngust. Anghelina ??nflore??te ??n luna iunie-iulie. ??n
              Rom??nia se g??se??te prin mun??ii Maramure??ului, Rodnei, Bucegi,
              B??rsei ??i F??g??ra??, de obicei pe p????uni, ??n locuri ??nsorite, dar ??i
              prin cr??p??turi umede."", <br />
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
            <a href="http://roflowerapi.space/v1/flowers/diviziune/magnoliophyta">
              http://roflowerapi.space/v1/flowers/diviziune/magnoliophyta
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

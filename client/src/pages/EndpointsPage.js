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
            <a href="https://nekos.best/api/v2/endpoints">
              https://nekos.best/api/v2/endpoints
            </a>
          </p>
          <p>Return:</p>
          <div className="endpoint-response">
            <p>
              <span>nume:</span> "Tei", <br /> <span>denumirePopulara:</span>{" "}
              "Tilia", <br /> <span>image:</span>{" "}
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lime_tree.jpg/1920px-Lime_tree.jpg">
                {" "}
                https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lime_tree.jpg/1920px-Lime_tree.jpg
              </a>
              ,
              <br />
              <span>descriere:</span> "Frunzele sunt lung-pețiolate, rotunde,
              ascuțite la vârf, iar pe fața inferioară se observă nervuri
              proeminente.Teiul produce flori, în număr de 2–10 pe ram, uneori
              și mai multe, de culoare alb-gălbuie, plăcut mirositoare, așezate
              pe un peduncul comun, concrescut aproape pe jumătatea lungimii
              lui, cu o bractee lungă în formă de limbă, de culoare
              verde-gălbuie. Fiecare floare este formată din 5 sepale care cad
              în momentul înfloririi, 5 petale, numeroase stamine și un ovar
              globulos. Fructul este o nucă de formă sferică sau ovală de
              dimensiuni mici.", <br />
              <span>location:</span> [45.190447, 23.354785]
            </p>
          </div>
        </div>
      </div>

      <div className="endpoint">
        <h3>GET /flowers/:numeFloare</h3>
        <p>Date despre o singura floare</p>
        <div className="endpoint-example">
          <p>
            <span> Example: </span>
            <a href="https://nekos.best/api/v2/endpoints">
              https://nekos.best/api/v2/endpoints
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
        <p>Lista cu florile in functie de zona geografica</p>
        <div className="endpoint-example">
          <p>
            <span> Example: </span>
            <a href="https://nekos.best/api/v2/endpoints">
              https://nekos.best/api/v2/endpoints
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
        <h3>GET /flowers/:type</h3>
        <p>Lista cu florile in functie de type</p>
        <div className="endpoint-example">
          <p>
            <span> Example: </span>
            <a href="https://nekos.best/api/v2/endpoints">
              https://nekos.best/api/v2/endpoints
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
    </div>
  );
};

export default EndPointsPage;

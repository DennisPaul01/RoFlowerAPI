const flowers = [
  {
    nume: "Tei",
    denumirePopulara: "Tilia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lime_tree.jpg/1920px-Lime_tree.jpg",
    zona: "Romania",
    locatieGeografica: "Romania",
    diviziune: "Magnoliophyta",
    descriere:
      "Frunzele sunt lung-pețiolate, rotunde, ascuțite la vârf, iar pe fața inferioară se observă nervuri proeminente.Teiul produce flori, în număr de 2–10 pe ram, uneori și mai multe, de culoare alb-gălbuie, plăcut mirositoare, așezate pe un peduncul comun, concrescut aproape pe jumătatea lungimii lui, cu o bractee lungă în formă de limbă, de culoare verde-gălbuie. Fiecare floare este formată din 5 sepale care cad în momentul înfloririi, 5 petale, numeroase stamine și un ovar globulos. Fructul este o nucă de formă sferică sau ovală de dimensiuni mici.",
    location: [45.190447, 23.354785],
  },
  {
    nume: "Musetel",
    denumirePopulara: "Romanita",
    zona: "Romania",
    locatieGeografica: "Romania",
    diviziune: "Tracheophyta",
    image:
      "https://cdn.pixabay.com/photo/2014/07/25/07/02/flowers-401490_960_720.jpg",
    descriere:
      "Musetelul (denumit si romanita, romonel sau romanica) este o planta erbacee anuala, medicinala, cu frunze divizate si cu flori grupate in capitule terminale. Ajunge la o inaltime de pana la 60 cm cu multe ramificatii, cu flori grupate in capitule terminale. Musetelul este o planta originara din sudul si sud-estul Europei, astazi intalnita in aproape intreaga lume. In Romania, are o mare arie de raspandire intalnindu-se aproape peste tot, de la campie unde apare masiv pe solurile saraturoase, pana in toate locurile insorite si mai umede de pe langa drumuri, cai ferate, pajisti, fanete, cu predilectie pe solurile nisipoase usoare.",
    location: [45.784436, 21.140654],
  },
  {
    nume: "Primula longiflora",
    denumirePopulara: "Anghelina",
    zona: "Romania",
    locatieGeografica: ["Rodnei", "Bucegi", "Fagaras", "Romania"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Primula_halleri.JPG/280px-Primula_halleri.JPG",
    zona: "În România se găsește prin munții Maramureșului, Rodnei, Bucegi, Bîrsei și Făgăraș, de obicei pe pășuni, în locuri însorite, dar și prin crăpături umede.",
    descriere:
      "Anghelină (Primula halleri, Primula longiflora) este o plantă din genul Primula, familia Primulaceae.[1][2][3] Tulpina nu are frunze și peri, are o înălțime de 100—300 mm. Frunzele cresc la baza tulpinii în formă de lozetă. Frunza are formă eliptică alungită, pe față verde, pe dos albă. Frunzele sunt făinoase. Floarea are o culoare violet-roșiatic. Florile se găsesc la vârful tulpinii, câte trei—șase într-un mănunchi, fiecare cu cinci diviziuni întinse în lături și spintecate la vârf. Corola este formată dintr-un tub lung și îngust. Anghelina înflorește în luna iunie-iulie. În România se găsește prin munții Maramureșului, Rodnei, Bucegi, Bîrsei și Făgăraș, de obicei pe pășuni, în locuri însorite, dar și prin crăpături umede.",
    location: [47.48875, 24.511187],
  },
  {
    nume: "Crocus heuffelianus",
    denumirePopulara: "Brandusa de munte",
    zona: "Romania",
    locatieGeografica: ["Apuseni"],
    diviziune: "Asparagales",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Crocus_vernus_bgiu.jpg",
    zona: "Brândușa înflorește din luna aprilie (floarea poate ieși din zăpadă) până în luna mai. Se găsește în pâlcuri dese, începând din zona păduroasă, prin pășuni și alte locuri ierboase deschise. În România este întâlnită în munții Carpați și în munții Apuseni.",
    descriere:
      "Brândușa de munte (Crocus heuffelianus, Crocus vernus) este o plantă scundă din familia Iridaceae. Are o singură tulpină mică, înconjurată la bază de mai multe teci cu două-trei frunze alungite și înguste. La vârful tulpinii se găsește o singură floare violet-deschisă cu o dungă mai întunecată la vârful florii. Floarea are formă de tub la început, după care ia forma unei cupe de 50–60 mm care are șase diviziuni. Uneori la vârf sunt două flori. În mijlocul corolei sunt trei stamine și un stigmat galben trifurcat.",
    location: [46.507122, 23.004512],
  },
  {
    nume: "Primula elatior",
    denumirePopulara: "Ciubotica cucului de munte",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Primula_elatior_170405a.jpg",
    zona: "Carpati",
    descriere:
      "Ciuboțica cucului de munte (Primula elatior) este o plantă din familia Primula. Tulpina este păroasă și fără frunze. Tulpina are 100–200 mm. Frunzele sunt la baza tulpinei. Florile de culoare galben-deschis sunt așezate în mănunchi la vârful tulpinei. Ciuboțica cucului înflorește în luna aprilie-iunie. În România se găsește în munții Carpați, la margini de păduri.",
    location: [46.507122, 23.004512],
  },
  {
    nume: "Soldanella pusilla",
    denumirePopulara: "Degetarutul pitic",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Primula_elatior_170405a.jpg",
    zona: "Romania",
    descriere:
      "Degetăruțul pitic (Soldanella pusilla, Sin.: Soldanella alpicola) este o plantă erbacee scundă din familia Primulaceae, genul Soldanella. Are o înălțime de 30-60 mm. La vârful tulpinei este o floare aplecată, de culoare liliachiu deschis, roșiatic, cu corola în formă de clopot alungit. Frunzele sunt la baza tulpinii, sunt mici și rotunde, cu codițe subțiri. Degetăruțul pitic înflorește în luna mai-iunie, chiar și sub zăpadă.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Soldanella montana",
    denumirePopulara: "Degetarut",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Soldanella_montana.jpg",
    zona: "Romania",
    descriere:
      "este o plantă erbacee din familia Primulaceae. Tulpina este fără frunze și are maxim 150 mm înălțime. Frunzele, aproape rotunde, cresc numai la baza tulpinii. Înflorește în lunile mai-iunie.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Primula minima",
    denumirePopulara: "Ochiul gainii",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Primula_minima-01-Kaernten-2008-Thomas_Huntke.jpg",
    zona: "Romania",
    descriere:
      "Ochiul găinii (Primula minima) este o plantă foarte scundă din genul Primula, familia Primulaceae.[1][2][3] Tulpina are 20-40 mm și are frunze doar la bază. Frunzele mici, fără codiță, lucioase, lățite la vârf, stau în formă de rozetă. Ochiul găinii înflorește în lunile aprilie-iunie.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Gentiana verna",
    denumirePopulara: "Ghintura",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Gentiana_verna_%281%29.JPG",
    zona: "Gentiana verna este una dintre cele mai răspândite din genul Gentiana, se găsește pe pajiștile alpine însorite din toată Eurasia, din Irlanda până în Rusia.",
    descriere:
      "Ghințura este foarte scundă, cu o tulpină de 20–50 mm, cu câteva perechi de frunze mici. Tulpina poartă la vârf o singură floare. Floarea este de un albastru viu (uneori roșu-purpuriu sau foarte rar albă) și are diametrul de 10–20 mm. Ghințura înflorește de la sfârșitul primăverii până la începutul verii (din mai până în august) în funcție de altitudine. Caliciul este lung, de cele mai multe ori umflat, cu cinci muchii proeminente, ascuțite și cinci dințișori. Corola este formată dintr-un tub și cinci petale ovale, întinse, late, în stea. Este o plantă meliferă (care atrage fluturii și albinele pentru polenizare). Furnicile sunt cele care îi răspândesc semințele. Frunzele de la baza tulpinii sunt scurte, ovale și îngrămădite în rozetă, cele de pe tulpina sunt rotunde, mai mici și mai rare.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Ranunculus montanus",
    denumirePopulara: "Piciorul cocosului de munte",
    zona: "Romania",
    locatieGeografica: ["Carpati", "Apuseni"],
    diviziune: "Tracheophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Ranunculus_montanus01.jpg",
    zona: "Apuseni",
    descriere:
      "Piciorul cocoșului de munte (Ranunculus montanus Willd, 1799) este o plantă din genul Ranunculus, familia Ranunculaceae.[1][2] Tulpina are maxim 150 mm, de obicei păroasă și poartă una-trei flori galbene, cu cinci petale și numeroase stamine. Înflorește în lunile mai-iulie. Frunzele sunt bazale și aproape rotunde, regulat spintecate în cinci părți adânc dințate.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Adonis vernalis",
    denumirePopulara: "Ruscuta de primavara",
    zona: "Romania",
    locatieGeografica: ["Subcarpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Adonis_vernalis%2C_Ponidzie%2C_spring_2007.jpg",
    zona: "Specia vegetează pe coaste abrupte, în pășuni și fânețe uscate, însorite, de la câmpie până în zona montană. Este o specie ocrotită declarată monument al naturii. În România este răspândită în zonele de podiș și de deal din Subcarpații românești. Este răspândită în Europa centrală și de Sud și în Asia de Vest.",
    descriere:
      "Este o plantă erbacee perenă care prezintă în sol un rizom scurt, tare, gros, din care pornesc rădăcini fibroase. Din rizom se dezvoltă tulpini florifere și sterile de până la 45 cm, cu frunze filiforme și flori solitare la vârful tulpinii cu un diametru de până la 8 cm, de culore galben-aurie, lipicioase cu 5 sepale și 10-20 petale lungi de 2–4 cm și multe stamine. Înflorește din aprilie până în mai și face un fruct de tip poliachenă cu achene scurt-păroase.[2] În scopuri medicinale se întrebuințează numai părțile aeriene, recoltate când planta este în plină floare.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Pulsatilla alba",
    denumirePopulara: "Deditel",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pulsatilla_alpina_%281%29.JPG/1920px-Pulsatilla_alpina_%281%29.JPG",
    zona: "În România crește prin pășunile și locurile pietroase din munții Carpați.",
    descriere:
      "Sisinelul de munte (altă denumire Dedițel) (Pulsatilla alba) este o plantă otrăvitoare din familia Ranunculaceae. Are tulpina păroasă de 100-200 mm. În vârful tulpinii se află o floare ridicată în sus, în formă de clopot la început și apoi se desface în formă de stea. Diametrul florii este de 30-60 mm și are cinci-șase sepale mari. Florile sunt păroase pe dinafară, colorate în alb pe interior și violet-albastru palid la exterior. Înflorește în lunile mai-iunie. După înflorire se formează un fruct păros sub forma unui smoc.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Pulsatilla alba",
    denumirePopulara: "Deditel",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pulsatilla_alpina_%281%29.JPG/1920px-Pulsatilla_alpina_%281%29.JPG",
    zona: "În România crește prin pășunile și locurile pietroase din munții Carpați.",
    descriere:
      "Sisinelul de munte (altă denumire Dedițel) (Pulsatilla alba) este o plantă otrăvitoare din familia Ranunculaceae. Are tulpina păroasă de 100-200 mm. În vârful tulpinii se află o floare ridicată în sus, în formă de clopot la început și apoi se desface în formă de stea. Diametrul florii este de 30-60 mm și are cinci-șase sepale mari. Florile sunt păroase pe dinafară, colorate în alb pe interior și violet-albastru palid la exterior. Înflorește în lunile mai-iunie. După înflorire se formează un fruct păros sub forma unui smoc.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Compositae",
    denumirePopulara: "Arnica",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Arnica_montana_Bl%C3%BCte.jpg",
    zona: "Carpati",
    descriere:
      "Arnica (Arnica montana L.) este o specie de plante din genul Arnica, familia Asteraceae (Compositae),[1][2] ce crește în regiunile de munte, împodobind pășunile cu florile ei galbene-aurii. Poporul o mai numește podbal de munte, carul-pădurilor, cujdă sau carul-zânelor. De la această plantă se folosesc florile - flores arnicae - mai rar planta întreagă și chiar rădăcina.[3] Începând cu secolul al VI-lea, a fost utilizată pentru proprietățile sale calmante în America de Nord, Germania și Rusia.[4] Ele conțin ulei volatil, colina, alcooli triterpenici, substanțe colorante de natură carotinoidică. Din florile acestei plante se prepară un ceai care se folosește sub formă de gargară în laringită.[4]",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Arctium lappa",
    denumirePopulara: "Brusture",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/ArctiumLappa1.jpg",
    zona: "Carpati",
    descriere:
      "Florile sunt tubulate de culoare mov-violet, cu antere și stamine concrescute și grupate în calatidii globulare, care formează un corimb. Acestea apar la mijlocul verii. Calatidiile sunt înconjurate de un involucru format din numeroase bractee, fiecare curbată sub forma unui cârlig, permițând să se agațe de blana animalelor și să fie cărate pe distanțe mari. Fructele sunt achene; cu o lungime de cca 6 mm, comprimate, cu papusuri scurte.",
    location: [45.69581, 25.333482],
  },
  {
    nume: "Hippophae rhamnoides",
    denumirePopulara: "Catina",
    zona: "Romania",
    locatieGeografica: ["Carpati"],
    diviziune: "Magnoliophyta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Hippophae_rhamnoides-01_%28xndr%29.JPG",
    zona: "Carpati",
    descriere:
      "Cătina are efect antioxidant, emolient, depurativ, antiinflamator, cicatrizant, citoprotector, imunostimulator. Este recomandată și în acțiuni terapeutice precum răceli, viroze, pojar, afecțiuni gastroduodenale, urticarii, viroze respiratorii, ulcer gastric ori afecțiuni oculare.",
    location: [45.69581, 25.333482],
  },
];

module.exports = flowers;

// Prošireni podaci za testove - 3 testa po epizodi
const episodeQuizzes = {
    1: {
        title: "Epizoda 1: Osnovi psihologije kao nauke",
        tests: [
            {
                id: "1-1",
                name: "Test 1: Osnove i istorija",
                questions: [
                    {
                        question: "Kada je osnovana prva psihološka laboratorija?",
                        options: [
                            "1879. godine u Lajpcigu",
                            "1905. godine u Parizu", 
                            "1890. godine u Beču",
                            "1875. godine u Berlinu"
                        ],
                        correct: 0
                    },
                    {
                        question: "Ko je osnovao prvu psihološku laboratoriju?",
                        options: [
                            "Sigmund Frojd",
                            "Vilijem Vunt",
                            "Karl Jung",
                            "Džon Votson"
                        ],
                        correct: 1
                    },
                    {
                        question: "Od kojih grčkih reči potiče reč 'psihologija'?",
                        options: [
                            "'Logos' (nauka) i 'antropos' (čovek)",
                            "'Soma' (telo) i 'logos' (nauka)",
                            "'Psiha' (duša) i 'logos' (nauka)",
                            "'Nous' (um) i 'logos' (nauka)"
                        ],
                        correct: 2
                    },
                    {
                        question: "Ko je razlikovao tri vrste duše: vegetativnu, vitalnu i razumsku?",
                        options: [
                            "Platon",
                            "Demokrit",
                            "Dekart",
                            "Aristotel"
                        ],
                        correct: 3
                    },
                    {
                        question: "Ko je tvrdio da je dečiji um pri rođenju 'tabula rasa'?",
                        options: [
                            "Džon Lok",
                            "Dekart",
                            "Aristotel",
                            "Demokrit"
                        ],
                        correct: 0
                    }
                ]
            },
            {
                id: "1-2", 
                name: "Test 2: Struje i zadaci",
                questions: [
                    {
                        question: "Koje su dve glavne struje u psihologiji?",
                        options: [
                            "Kognitivna i socijalna",
                            "Psihoanalitička i biheviorizam",
                            "Humanistička i gestalt",
                            "Eksperimentalna i klinička"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta psihologija proučava?",
                        options: [
                            "Samo psihičke procese",
                            "Samo individualne osobine",
                            "Psihičke procese, individualne osobine i delatnosti",
                            "Samo ljudsko ponašanje"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koji je prvi nivo saznanja u psihologiji?",
                        options: [
                            "Opisivanje psihičkih pojava",
                            "Naučno predviđanje",
                            "Otkrivanje uzročno-posledičnih veza",
                            "Sistematizacija"
                        ],
                        correct: 0
                    },
                    {
                        question: "Ko je smatrao da je duša materijalna, sastavljena od atoma?",
                        options: [
                            "Aristotel",
                            "Demokrit", 
                            "Dekart",
                            "Lok"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta spada u psihičke procese?",
                        options: [
                            "Temperament i karakter",
                            "Oseti, opažaji, pamćenje, mišljenje, mašta",
                            "Postupci i govor",
                            "Sposobnost i konstitucija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Na čemu se zasniva psihoanalitička struja?",
                        options: [
                            "Radovima Votsona",
                            "Eksperimentalnim metodama",
                            "Učenju Frojda, Junga i Adlera",
                            "Bihevioralnim principima"
                        ],
                        correct: 2
                    }
                ]
            },
            {
                id: "1-3",
                name: "Test 3: Grane i primena",
                questions: [
                    {
                        question: "Koja grana psihologije proučava psihički život u uslovima rada?",
                        options: [
                            "Socijalna psihologija",
                            "Psihologija rada",
                            "Klinička psihologija",
                            "Pedagoška psihologija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koliko nivoa saznanja treba proći da bi se utvrdile zakonitosti psihičkog života?",
                        options: [
                            "Četiri",
                            "Pet",
                            "Šest",
                            "Sedam"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta proučava diferencijalna psihologija?",
                        options: [
                            "Razvoj od rođenja do zrelosti",
                            "Individualne razlike",
                            "Psihički život životinja",
                            "Odstupanja od normalnog"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko je razlikovao dušu i telo kao dve supstance?",
                        options: [
                            "Aristotel",
                            "Demokrit",
                            "Dekart",
                            "Lok"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta proučava genetička psihologija?",
                        options: [
                            "Gene i naslednost",
                            "Razvoj od rođenja do zrelosti",
                            "Individualne razlike",
                            "Psihički život životinja"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    2: {
        title: "Epizoda 2: Psihologija rada i organizacije",
        tests: [
            {
                id: "2-1",
                name: "Test 1: Istorijski razvoj",
                questions: [
                    {
                        question: "Ko se smatra osnivačem psihologije rada?",
                        options: [
                            "Frederik Tejlor",
                            "Elton Mejo",
                            "Hugo Minsterberg",
                            "Vilijem Vunt"
                        ],
                        correct: 2
                    },
                    {
                        question: "Ko je osnovao 'naučnu organizaciju rada'?",
                        options: [
                            "Frederik Tejlor",
                            "Hugo Minsterberg",
                            "Elton Mejo",
                            "Kris Argiris"
                        ],
                        correct: 0
                    },
                    {
                        question: "Kada je izveden Hotornski eksperiment?",
                        options: [
                            "1920-1925",
                            "1927-1932",
                            "1935-1940",
                            "1945-1950"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko je sproveo Hotornski eksperiment?",
                        options: [
                            "Frederik Tejlor",
                            "Hugo Minsterberg",
                            "Elton Mejo",
                            "Vilijem Vunt"
                        ],
                        correct: 2
                    },
                    {
                        question: "Hugo Minsterberg je bio učenik koga?",
                        options: [
                            "Sigmunda Frojda",
                            "Vilijema Vunta",
                            "Frederika Tejlora",
                            "Eltona Meja"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "2-2",
                name: "Test 2: Teorije i pristupi",
                questions: [
                    {
                        question: "Šta je bio revolucionarni nalaz Hotornskog eksperimenta?",
                        options: [
                            "Radnici rade bolje uz bolju platu",
                            "Fizički uslovi su najvažniji za produktivnost",
                            "Ponašanje radnika ne zavisi samo od ekonomskih podsticaja i fizičkih uslova",
                            "Osvetljenje je ključno za produktivnost"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je Tejlor verovao o svakom poslu?",
                        options: [
                            "Da postoji 'jedan najbolji način' za obavljanje",
                            "Da ga mogu raditi svi jednako",
                            "Da nije važno kako se radi",
                            "Da je grupni rad najbolji"
                        ],
                        correct: 0
                    },
                    {
                        question: "Koji period karakteriše bolje razumevanje čoveka i priznavanje socijalnih faktora?",
                        options: [
                            "Prvi period",
                            "Drugi period",
                            "Treći period",
                            "Četvrti period"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je dovelo do razvoja škole ljudskih odnosa?",
                        options: [
                            "Tejlorova teorija",
                            "Hotornski eksperiment",
                            "Industrijska revolucija",
                            "Prvi svetski rat"
                        ],
                        correct: 1
                    },
                    {
                        question: "U prvom periodu odnosa nauke prema radu, čovek je bio tretiran kao?",
                        options: [
                            "Najvažniji faktor proizvodnje",
                            "Dodatak mašini",
                            "Partner u proizvodnji",
                            "Kreativni individuum"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je prepoznato kao važno u Hotornskom eksperimentu?",
                        options: [
                            "Samo fizički uslovi",
                            "Samo plata",
                            "Pripadnost, poštovanje i neformalni grupni odnosi",
                            "Samo radno vreme"
                        ],
                        correct: 2
                    }
                ]
            },
            {
                id: "2-3",
                name: "Test 3: Oblasti i zadaci",
                questions: [
                    {
                        question: "Šta je glavni zadatak psihologije rada?",
                        options: [
                            "Povećanje profita kompanije",
                            "Smanjenje troškova proizvodnje",
                            "Usklađivanje psihofizičkih mogućnosti čoveka sa zahtevima radne situacije",
                            "Kontrola radnika"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koje su glavne oblasti psihologije rada?",
                        options: [
                            "Samo personalna psihologija",
                            "Inženjerska, personalna, psihologija međuljudskih odnosa i organizaciona psihologija",
                            "Samo organizaciona psihologija",
                            "Klinička i socijalna psihologija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je predmet psihologije rada?",
                        options: [
                            "Samo pojedinac",
                            "Samo posao",
                            "Uzajamni odnosi pojedinca, posla i uslova rada",
                            "Samo uslovi rada"
                        ],
                        correct: 2
                    },
                    {
                        question: "Čime se bavi inženjerska psihologija?",
                        options: [
                            "Selekcijom kadra",
                            "Optimizacijom sistema čovek-mašina",
                            "Međuljudskim odnosima",
                            "Organizacionom kulturom"
                        ],
                        correct: 1
                    },
                    {
                        question: "Čime se bavi personalna psihologija?",
                        options: [
                            "Optimizacijom mašina",
                            "Selekcijom, obukom i prilagođavanjem ljudi radu",
                            "Dizajnom radnog mesta",
                            "Finansijskim planiranjem"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    3: {
        title: "Epizoda 3: Ličnost, osobine ličnosti i njihovo merenje",
        tests: [
            {
                id: "3-1",
                name: "Test 1: Definicije i karakteristike",
                questions: [
                    {
                        question: "Šta karakteriše ličnost?",
                        options: [
                            "Samo jedinstvenost",
                            "Samo doslednost",
                            "Jedinstvenost i doslednost",
                            "Promenljivost i nepredvidivost"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koje su tri grupe faktora razvoja ličnosti?",
                        options: [
                            "Biološki, psihološki, ekonomski",
                            "Biološki, socijalni, lična aktivnost",
                            "Genetski, sredinski, slučajni",
                            "Porodični, školski, vršnjački"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači da je ličnost jedinstvena?",
                        options: [
                            "Svaka osoba je različita",
                            "Osoba se ponaša uvek isto",
                            "Osoba je sama",
                            "Osoba je nepromenljiva"
                        ],
                        correct: 0
                    },
                    {
                        question: "Koji faktori imaju presudan uticaj na razvoj ličnosti?",
                        options: [
                            "Biološki faktori",
                            "Socijalni faktori",
                            "Lična aktivnost",
                            "Slučajni faktori"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta čini biološke faktore razvoja ličnosti?",
                        options: [
                            "Porodica i škola",
                            "Nervni sistem, endokrini sistem, fizička konstitucija",
                            "Kultura i društvo",
                            "Lične odluke"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je ličnost prema definiciji?",
                        options: [
                            "Samo temperament",
                            "Samo karakter",
                            "Jedinstvo svih osobina i procesa koji se javljaju usklađeno i organizovano",
                            "Samo sposobnosti"
                        ],
                        correct: 2
                    }
                ]
            },
            {
                id: "3-2",
                name: "Test 2: Struktura ličnosti",
                questions: [
                    {
                        question: "Ko je napravio prvu klasifikaciju temperamenata?",
                        options: [
                            "Aristotel",
                            "Platon",
                            "Hipokrat",
                            "Galen"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koja su četiri klasična temperamenta?",
                        options: [
                            "Ekstrovertni, introvertni, ambivalentni, neutralni",
                            "Kolerik, sangvinik, flegmatik, melanholik",
                            "Aktivni, pasivni, reaktivni, proaktivni",
                            "Stabilan, nestabilan, uravnotežen, neuravnotežen"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je temperament?",
                        options: [
                            "Odnos prema moralnim normama",
                            "Način emotivnog reagovanja (jačina, brzina, trajanje)",
                            "Intelektualne sposobnosti",
                            "Fizička građa"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je karakter?",
                        options: [
                            "Način emotivnog reagovanja",
                            "Intelektualne sposobnosti",
                            "Odnos prema moralnim normama i principima društva",
                            "Fizička konstitucija"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koje vrste sposobnosti razlikujemo?",
                        options: [
                            "Samo intelektualne",
                            "Intelektualne, psihosenzorne, psihomotorne",
                            "Samo fizičke",
                            "Samo socijalne"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su intelektualne sposobnosti?",
                        options: [
                            "Fizička snaga",
                            "Snalaženje u novim situacijama, učenje uvidom",
                            "Brzina reakcije",
                            "Socijalne veštine"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "3-3",
                name: "Test 3: Merenje i testiranje",
                questions: [
                    {
                        question: "Ko je kreirao prvi test inteligencije?",
                        options: [
                            "Vunt i Tejlor",
                            "Frojd i Jung",
                            "Bine i Simon",
                            "Veksler i Raven"
                        ],
                        correct: 2
                    },
                    {
                        question: "Kada je kreiran prvi test inteligencije?",
                        options: [
                            "1879. godine",
                            "1890. godine",
                            "1905. godine",
                            "1920. godine"
                        ],
                        correct: 2
                    },
                    {
                        question: "Kako se izračunava IQ?",
                        options: [
                            "(Mentalna starost / Hronološka starost) × 100",
                            "(Hronološka starost / Mentalna starost) × 100",
                            "(Mentalna starost + Hronološka starost) × 50",
                            "(Mentalna starost - Hronološka starost) × 100"
                        ],
                        correct: 0
                    },
                    {
                        question: "Šta znači da je test valjan?",
                        options: [
                            "Da daje iste rezultate pri ponovljenim merenjima",
                            "Da meri tačno ono što treba da meri",
                            "Da može da meri male razlike među ispitanicima",
                            "Da rezultat ne zavisi od ocenjivača"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači da je test pouzdan?",
                        options: [
                            "Da meri ono što treba",
                            "Da daje slične rezultate pri ponovljenim merenjima",
                            "Da je objektivan",
                            "Da je selektivan"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja su tri aspekta zrele ličnosti?",
                        options: [
                            "Fizička, mentalna, socijalna zrelost",
                            "Intelektualna, emocionalna, socijalna zrelost",
                            "Ekonomska, politička, kulturna zrelost",
                            "Biološka, psihološka, duhovna zrelost"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    4: {
        title: "Epizoda 4: Analiza posla",
        tests: [
            {
                id: "4-1",
                name: "Test 1: Osnove analize",
                questions: [
                    {
                        question: "Šta je analiza posla?",
                        options: [
                            "Proces zapošljavanja novih radnika",
                            "Sistematski proces prikupljanja, obrade i organizovanja podataka o određenom poslu",
                            "Merenje produktivnosti radnika",
                            "Ocenjivanje performansi zaposlenih"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja su četiri ključna pitanja analize posla?",
                        options: [
                            "Ko, kada, gde, zašto",
                            "Šta, kako, pod kojim uslovima, kakav radnik",
                            "Koliko, gde, kada, sa kim",
                            "Zašto, koliko dugo, sa kim, gde"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko čini tim za analizu posla?",
                        options: [
                            "Samo menadžeri",
                            "Samo radnici",
                            "Industrijski psiholog, lekar medicine rada, stručnjak za posao, po potrebi inženjeri i ekonomisti",
                            "Samo HR služba"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koje su osnovne pretpostavke analize posla?",
                        options: [
                            "Svi poslovi su isti",
                            "Svaki posao može da se razloži, obučeni ljudi mogu odrediti elemente, poslovi se razlikuju",
                            "Poslovi se ne mogu analizirati",
                            "Samo menadžeri mogu analizirati poslove"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta pitanje 'ŠTA' otkriva u analizi posla?",
                        options: [
                            "Uslove rada",
                            "Šta radnik radi",
                            "Kako radi",
                            "Ko treba da radi"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "4-2",
                name: "Test 2: Hijerarhija i zahtevi",
                questions: [
                    {
                        question: "Šta je najmanji element u hijerarhiji posla?",
                        options: [
                            "Operacija",
                            "Zadatak",
                            "Radni pokret",
                            "Zanimanje"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je operacija?",
                        options: [
                            "Akcija jednog dela tela",
                            "Niz od više radnih pokreta",
                            "Skup srodnih zadataka",
                            "Celo zanimanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je zadatak?",
                        options: [
                            "Jedan radni pokret",
                            "Jedna operacija",
                            "Skup srodnih operacija sa definisanim ciljem",
                            "Radno mesto"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je zanimanje?",
                        options: [
                            "Jedan zadatak",
                            "Jedna operacija",
                            "Serija međusobno povezanih radnih mesta",
                            "Jedan radni pokret"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koje vrste zahteva posla razlikujemo?",
                        options: [
                            "Laki i teški",
                            "Stručni, biofizički, psihički",
                            "Jednostavni i složeni",
                            "Primarni i sekundarni"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su stručni zahtevi posla?",
                        options: [
                            "Fizičke karakteristike",
                            "Potrebna znanja, veštine, iskustvo",
                            "Mentalne sposobnosti",
                            "Osobine ličnosti"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "4-3",
                name: "Test 3: Nivoi zahteva",
                questions: [
                    {
                        question: "Koji su nivoi zahteva posla?",
                        options: [
                            "Niski, srednji, visoki",
                            "Kritični, optimalni, maksimalni",
                            "Minimalni, prosečni, maksimalni",
                            "Osnovni, napredni, ekspertski"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta predstavlja kritični nivo zahteva?",
                        options: [
                            "Idealan nivo koji radnik treba da ima",
                            "Najviši mogući nivo sposobnosti",
                            "Minimum koji radnik mora da poseduje da bi uopšte mogao da obavlja posao",
                            "Prosečan nivo sposobnosti"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je optimalni nivo zahteva?",
                        options: [
                            "Minimum za obavljanje posla",
                            "Interval (donja i gornja granica) za uspešno obavljanje posla",
                            "Maksimum sposobnosti",
                            "Prosek u populaciji"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta se dešava ako radnik prelazi maksimalni nivo zahteva?",
                        options: [
                            "Dobija nagradu",
                            "Napreduje",
                            "Može biti štetno",
                            "Ništa posebno"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta su biofizički zahtevi posla?",
                        options: [
                            "Potrebna znanja",
                            "Fizičke karakteristike (snaga, izdržljivost)",
                            "Mentalne sposobnosti",
                            "Socijalne veštine"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su psihički zahtevi posla?",
                        options: [
                            "Fizička snaga",
                            "Obrazovanje",
                            "Mentalne, senzorne, motoričke sposobnosti, osobine ličnosti",
                            "Radno iskustvo"
                        ],
                        correct: 2
                    }
                ]
            }
        ]
    },
    5: {
        title: "Epizoda 5: Profesionalna orijentacija",
        tests: [
            {
                id: "5-1",
                name: "Test 1: Proces izbora",
                questions: [
                    {
                        question: "Šta karakteriše profesionalni izbor prema modernim teorijama?",
                        options: [
                            "To je jednokratan događaj",
                            "To je razvojni proces koji se sastoji od odluka tokom dužeg perioda",
                            "To je slučajan izbor",
                            "To je izbor koji pravi porodica"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kada se intenzivira proces profesionalnog izbora?",
                        options: [
                            "Između 8 i 10 godina",
                            "Između 13 i 16 godina",
                            "Između 18 i 21 godine",
                            "Posle 25 godina"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su dve ključne karakteristike profesionalnog izbora?",
                        options: [
                            "Brzina i preciznost",
                            "Fleksibilnost i promenljivost",
                            "Nepovratnost i ekskluzivnost",
                            "Jednostavnost i jasnoća"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta znači nepovratnost profesionalnog izbora?",
                        options: [
                            "Ne može se promeniti nikad",
                            "Teže je menjati odluke sa godinama",
                            "Mora se ostati u istoj profesiji",
                            "Nema povratka na školovanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači ekskluzivnost profesionalnog izbora?",
                        options: [
                            "Samo bogati mogu birati",
                            "Postepeno se smanjuju alternative",
                            "Samo jedan izbor je moguć",
                            "Ekskluzivne profesije"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "5-2",
                name: "Test 2: Teorije izbora",
                questions: [
                    {
                        question: "Prema Holandovoj teoriji, koliko postoji tipova ličnosti i radnih okruženja?",
                        options: [
                            "Četiri",
                            "Pet",
                            "Šest",
                            "Osam"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta naglašava Superova teorija?",
                        options: [
                            "Ekonomske faktore",
                            "Značaj 'pojma o sebi'",
                            "Uticaj porodice",
                            "Genetske predispozicije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Prema Ginzbergovoj teoriji, izbor karijere je?",
                        options: [
                            "Jednokratan i povratan",
                            "Razvojni i nepovratan",
                            "Slučajan i promenljiv",
                            "Jednostavan i brz"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta Holandova teorija tvrdi o izboru profesije?",
                        options: [
                            "Ljudi biraju slučajno",
                            "Ljudi biraju profesije koje omogućavaju izražavanje veština i vrednosti",
                            "Svi biraju istu profesiju",
                            "Profesija se nasleđuje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Prema teoriji Ro, šta određuje izbor karijere?",
                        options: [
                            "Sreća",
                            "Individualne potrebe",
                            "Društveni pritisak",
                            "Ekonomska situacija"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "5-3",
                name: "Test 3: Zadaci orijentacije",
                questions: [
                    {
                        question: "Koji su četiri ključna zadatka profesionalne orijentacije?",
                        options: [
                            "Testiranje, selekcija, zapošljavanje, obuka",
                            "Profesionalno informisanje, analiza pojedinca, profesionalno savetovanje, profesionalno praćenje",
                            "Planiranje, organizovanje, vođenje, kontrola",
                            "Regrutovanje, selekcija, socijalizacija, razvoj"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko donosi konačnu odluku u procesu profesionalnog savetovanja?",
                        options: [
                            "Psiholog",
                            "Roditelji",
                            "Kandidat",
                            "Stručni tim"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je profesionalno informisanje?",
                        options: [
                            "Testiranje kandidata",
                            "Pružanje informacija o svetu rada, zanimanjima, uslovima",
                            "Zapošljavanje",
                            "Obuka za posao"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je analiza pojedinca u profesionalnoj orijentaciji?",
                        options: [
                            "Analiza posla",
                            "Pomaganje pojedincu da upozna sebe - sposobnosti, interese, osobine",
                            "Analiza tržišta rada",
                            "Analiza plate"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je profesionalno praćenje?",
                        options: [
                            "Špijuniranje radnika",
                            "Pomaganje kandidatu da se prilagodi školi i radnoj sredini, provera ispravnosti odluke",
                            "Praćenje konkurencije",
                            "Praćenje tržišta"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    6: {
        title: "Epizoda 6: Profesionalna selekcija",
        tests: [
            {
                id: "6-1",
                name: "Test 1: Osnove selekcije",
                questions: [
                    {
                        question: "Šta je profesionalna selekcija?",
                        options: [
                            "Pomoć pojedincu u izboru zanimanja",
                            "Proces izbora među više kandidata koji se prijavljuju za posao",
                            "Obuka novih radnika",
                            "Ocenjivanje performansi zaposlenih"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja su četiri osnovna postulata profesionalne selekcije?",
                        options: [
                            "Svi ljudi su isti, nema razlika, sve je merljivo, sve je predvidivo",
                            "Postoje razlike među ljudima, postoji veza između osobina i uspeha, moguće je merenje, mogu se predvideti buduća ponašanja",
                            "Ljudi se ne razlikuju, veza ne postoji, merenje je nemoguće, predviđanje je slučajno",
                            "Razlike su male, veza je slaba, merenje je neprecizno, predviđanje je teško"
                        ],
                        correct: 1
                    },
                    {
                        question: "Za razliku od profesionalne orijentacije, selekcija polazi od?",
                        options: [
                            "Osobe",
                            "Posla",
                            "Plate",
                            "Kompanije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je prvi postulat profesionalne selekcije?",
                        options: [
                            "Svi ljudi su isti",
                            "Postoje značajne individualne razlike među ljudima",
                            "Nema veze između osobina i uspeha",
                            "Merenje je nemoguće"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta omogućava četvrti postulat selekcije?",
                        options: [
                            "Merenje inteligencije",
                            "Predviđanje budućeg radnog ponašanja na osnovu rezultata testova",
                            "Određivanje plate",
                            "Planiranje karijere"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "6-2",
                name: "Test 2: Kriterijumi uspeha",
                questions: [
                    {
                        question: "Šta znači da kriterijum uspeha mora biti 'čist'?",
                        options: [
                            "Da mora biti jednostavan",
                            "Da mora biti objektivan",
                            "Da meri samo efekte koji proizilaze iz karakteristika samog radnika",
                            "Da mora biti lako merljiv"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta znači da kriterijum mora biti reprezentativan?",
                        options: [
                            "Da predstavlja kompaniju",
                            "Da zaista predstavlja suštinske aspekte posla",
                            "Da je lep",
                            "Da je skup"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači da kriterijum mora biti stabilan?",
                        options: [
                            "Da ne pada",
                            "Da daje iste mere u različitim vremenskim tačkama",
                            "Da je čvrst",
                            "Da je nepomerljiv"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači da kriterijum mora biti diskriminativan?",
                        options: [
                            "Da diskriminiše kandidate",
                            "Da jasno razlikuje uspešne od neuspešnih radnika",
                            "Da je nepravedan",
                            "Da favorizuje određene grupe"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji su zahtevi koje kriterijum uspeha mora da ispuni?",
                        options: [
                            "Lep, skup, moderan, popularan",
                            "Reprezentativan, stabilan, čist, diskriminativan",
                            "Brz, jeftin, jednostavan, lak",
                            "Subjektivan, promenljiv, složen, težak"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "6-3",
                name: "Test 3: Procedure selekcije",
                questions: [
                    {
                        question: "Šta je demonstracioni rad?",
                        options: [
                            "Pokazivanje kandidatu kako se radi",
                            "Kandidat izvršava karakteristične operacije za dati posao",
                            "Prezentacija o kompaniji",
                            "Video snimak radnog procesa"
                        ],
                        correct: 1
                    },
                    {
                        question: "Za koje poslove se koristi audicija kao selekciona procedura?",
                        options: [
                            "Za administrativne poslove",
                            "Za proizvodne poslove",
                            "Za poslove gde dominira verbalna komunikacija ili vizuelni nastup",
                            "Za menadžerske pozicije"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta karakteriše 'holistički pristup' u selekciji?",
                        options: [
                            "Fokus na pojedinačne osobine ličnosti",
                            "Posmatranje ponašanja kao celine",
                            "Korišćenje samo testova inteligencije",
                            "Fokus samo na obrazovanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je probni rad?",
                        options: [
                            "Rad na pola radnog vremena",
                            "Kandidat se angažuje na određeno vreme u realnim uslovima",
                            "Rad od kuće",
                            "Volontiranje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta se smatra dobrim pokazateljem budućeg uspeha prema modernim trendovima?",
                        options: [
                            "Samo IQ",
                            "Radni stil i prethodna dostignuća",
                            "Samo obrazovanje",
                            "Samo godine iskustva"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    7: {
        title: "Epizoda 7: Prilagođavanje radnika radu i rada radniku",
        tests: [
            {
                id: "7-1",
                name: "Test 1: Adaptacija radnika",
                questions: [
                    {
                        question: "Koje su dve ključne dimenzije prilagođavanja radnika radu?",
                        options: [
                            "Fizička i mentalna adaptacija",
                            "Profesionalna i organizaciona adaptacija",
                            "Kratkoročna i dugoročna adaptacija",
                            "Individualna i grupna adaptacija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je profesionalna adaptacija?",
                        options: [
                            "Prilagođavanje plate",
                            "Proces sticanja i razvijanja stručnih znanja i veština",
                            "Prilagođavanje radnog vremena",
                            "Fizička priprema"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji su objektivni pokazatelji profesionalne adaptacije?",
                        options: [
                            "Sreća i zadovoljstvo",
                            "Produktivnost i fluktuacija",
                            "Plate i beneficije",
                            "Radno vreme"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta uključuje organizaciona adaptacija?",
                        options: [
                            "Samo učenje pravila",
                            "Kognitivne, konativne i emotivne komponente",
                            "Samo fizičko prilagođavanje",
                            "Samo finansijsko prilagođavanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je frustracija?",
                        options: [
                            "Osećaj sreće na poslu",
                            "Stanje koje nastaje kada se na putu ka cilju pojave prepreke",
                            "Želja za napredovanjem",
                            "Osećaj umora posle rada"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "7-2",
                name: "Test 2: Odbrambeni mehanizmi",
                questions: [
                    {
                        question: "Koji odbrambeni mehanizam se smatra najzdravijim?",
                        options: [
                            "Racionalizacija",
                            "Projekcija",
                            "Regresija",
                            "Sublimacija"
                        ],
                        correct: 3
                    },
                    {
                        question: "Šta je racionalizacija kao odbrambeni mehanizam?",
                        options: [
                            "Pronalaženje prihvatljivog ali lažnog objašnjenja za ponašanje",
                            "Pripisivanje svojih želja drugima",
                            "Vraćanje na ponašanje iz ranijih uzrasta",
                            "Potiskivanje neprijatnih sadržaja"
                        ],
                        correct: 0
                    },
                    {
                        question: "Šta je projekcija?",
                        options: [
                            "Planiranje budućnosti",
                            "Pripisivanje vlastitih neprihvatljivih želja drugima",
                            "Gledanje filma",
                            "Potiskivanje u nesvesno"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je represija?",
                        options: [
                            "Kazna",
                            "Potiskivanje neprijatnih sadržaja iz svesti",
                            "Napredovanje",
                            "Odmor"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je regresija?",
                        options: [
                            "Napredovanje",
                            "Vraćanje na ponašanje karakteristično za ranije uzraste",
                            "Matematička analiza",
                            "Sublimacija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je sublimacija?",
                        options: [
                            "Potiskivanje",
                            "Projekcija",
                            "Transformacija neprihvatljivih nagona u društveno poželjne aktivnosti",
                            "Racionalizacija"
                        ],
                        correct: 2
                    }
                ]
            },
            {
                id: "7-3",
                name: "Test 3: Prilagođavanje rada radniku",
                questions: [
                    {
                        question: "Koja je optimalna temperatura za rad?",
                        options: [
                            "Između 10-20°C",
                            "Između 15-30°C",
                            "Između 20-35°C",
                            "Između 25-40°C"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kakvi odmori su efikasniji?",
                        options: [
                            "Duži i ređi",
                            "Kraći i učestaliji",
                            "Jedan dugi odmor dnevno",
                            "Odmor samo na kraju radnog dana"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su tri komponente umora?",
                        options: [
                            "Fizička, mentalna, emotivna",
                            "Proizvodna, fiziološka, psihološka",
                            "Akutna, hronična, totalna",
                            "Mišićna, nervna, senzorna"
                        ],
                        correct: 1
                    },
                    {
                        question: "Čime se bavi tehnopsihofizologija rada?",
                        options: [
                            "Selekcijom kadra",
                            "Prilagođavanjem sadržaja posla, oruđa i uslova čoveku",
                            "Motivacijom radnika",
                            "Platama"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji mikroklimatski uslovi utiču na rad?",
                        options: [
                            "Samo temperatura",
                            "Hemijske pare i gasovi, temperatura, osvetljenje, buka i vibracije",
                            "Samo osvetljenje",
                            "Samo buka"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je umor sa proizvodnog aspekta?",
                        options: [
                            "Povećanje produkcije",
                            "Opadanje radnog učinka",
                            "Povećanje motivacije",
                            "Bolje raspoloženje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje vrste odmora razlikujemo?",
                        options: [
                            "Kratki i dugi",
                            "Pasivni i aktivni",
                            "Jutarnji i večernji",
                            "Letnji i zimski"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    8: {
        title: "Epizoda 8: Apsentizam radnika",
        tests: [
            {
                id: "8-1",
                name: "Test 1: Definicija i uzroci",
                questions: [
                    {
                        question: "Šta je apsentizam?",
                        options: [
                            "Planiran odmor radnika",
                            "Neplanirana i samoinicijativna odsutnost sa posla",
                            "Godišnji odmor",
                            "Službeno putovanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su manifestacije apsentizma?",
                        options: [
                            "Samo bolovanje",
                            "Samo kašnjenje",
                            "Kašnjenje, kratka odsutnost tokom radnog dana, višednevna odsutnost",
                            "Samo višednevna odsutnost"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koji su opravdani uzroci apsentizma?",
                        options: [
                            "Nezadovoljstvo poslom",
                            "Bolest, problemi sa prevozom, hitni porodični razlozi",
                            "Loši međuljudski odnosi",
                            "Nedostatak motivacije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji su neopravdani uzroci apsentizma?",
                        options: [
                            "Bolest",
                            "Nezadovoljstvo poslom, loši odnosi, konflikti, nedostatak motivacije",
                            "Saobraćajni problemi",
                            "Porodične obaveze"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše neopravdane uzroke?",
                        options: [
                            "Nisu subjektivnog karaktera",
                            "Vezani su za nezadovoljstvo i lošu adaptaciju",
                            "Potpuno su opravdani",
                            "Ne mogu se predvideti"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "8-2",
                name: "Test 2: Demografski faktori",
                questions: [
                    {
                        question: "Koja grupa radnika češće odsustvuje sa posla?",
                        options: [
                            "Muškarci",
                            "Žene",
                            "Nema razlike",
                            "Zavisi od industrije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Zašto žene češće odsustvuju?",
                        options: [
                            "Manje su posvećene poslu",
                            "Često zbog obaveza vezanih za porodicu i decu",
                            "Slabijeg su zdravlja",
                            "Manje su motivisane"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako mlađi radnici odsustvuju?",
                        options: [
                            "Ređe i duže",
                            "Češće ali kraće",
                            "Nikad ne odsustvuju",
                            "Samo dugo"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako stariji radnici odsustvuju u poređenju sa mlađima?",
                        options: [
                            "Više puta ali kraće",
                            "Ređe ali duže",
                            "Podjednako često",
                            "Nikad ne odsustvuju"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja grupa po obrazovanju češće odsustvuje?",
                        options: [
                            "Visokoobrazovani",
                            "Nižeg obrazovanja",
                            "Srednje obrazovani",
                            "Nema razlike"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "8-3",
                name: "Test 3: Merenje apsentizma",
                questions: [
                    {
                        question: "Kako se izračunava Globalni indeks apsentizma (GIA)?",
                        options: [
                            "(Broj odsutnosti / Broj radnika) × 100",
                            "(Broj radnika / Broj odsutnosti) × 100",
                            "(Broj izgubljenih dana / Broj radnika) × 100",
                            "(Broj radnika / Broj izgubljenih dana) × 100"
                        ],
                        correct: 0
                    },
                    {
                        question: "Šta pokazuje Globalni indeks apsentizma?",
                        options: [
                            "Broj izgubljenih dana",
                            "Učestalost odsustvovanja",
                            "Troškove apsentizma",
                            "Produktivnost"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako se izračunava Indeks gubitka (IG)?",
                        options: [
                            "(Broj odsutnosti / Broj radnika)",
                            "(Broj izgubljenih radnih dana / Broj radnika)",
                            "(Broj radnika / Broj odsutnosti)",
                            "(Broj dana / Broj odsutnosti)"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta pokazuje Indeks gubitka?",
                        options: [
                            "Učestalost odsustvovanja",
                            "Broj izgubljenih radnih dana po radniku",
                            "Troškove",
                            "Produktivnost"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji radnici češće odsustvuju po uslovima rada?",
                        options: [
                            "Dnevna smena",
                            "Noćna smena ili teški uslovi rada",
                            "Kancelarijski radnici",
                            "Menadžeri"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    9: {
        title: "Epizoda 9: Fluktuacija radnika",
        tests: [
            {
                id: "9-1",
                name: "Test 1: Osnove fluktuacije",
                questions: [
                    {
                        question: "Šta je fluktuacija radnika?",
                        options: [
                            "Planirana rotacija radnika",
                            "Neplanirana i neorganizovana cirkulacija radne snage između organizacija",
                            "Napredovanje u karijeri",
                            "Sezonsko zapošljavanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su dve osnovne forme fluktuacije?",
                        options: [
                            "Brza i spora",
                            "Potencijalna i realizovana",
                            "Dobrovoljna i prisilna",
                            "Individualna i grupna"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je potencijalna fluktuacija?",
                        options: [
                            "Stvarno napuštanje organizacije",
                            "Prelazak na drugu poziciju u istoj firmi",
                            "Faza koja prethodi napuštanju posla",
                            "Planirano otpuštanje"
                        ],
                        correct: 2
                    },
                    {
                        question: "Kako se meri potencijalna fluktuacija?",
                        options: [
                            "Brojem odlazaka",
                            "Anketama o stavovima zaposlenih",
                            "Brojem dolazaka",
                            "Platnim listama"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je realizovana fluktuacija?",
                        options: [
                            "Planiranje odlaska",
                            "Stvarno napuštanje organizacije",
                            "Razmišljanje o odlasku",
                            "Interno pomeranje"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "9-2",
                name: "Test 2: Uzroci i faktori",
                questions: [
                    {
                        question: "Koje su četiri kategorije uzroka fluktuacije?",
                        options: [
                            "Ekonomski, politički, socijalni, kulturni",
                            "Opšti društveni, faktori posla, organizacioni, lični",
                            "Interni, eksterni, individualni, kolektivni",
                            "Kratkoročni, dugoročni, privremeni, trajni"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta spada u opšte društvene faktore fluktuacije?",
                        options: [
                            "Tip posla",
                            "Regionalni ekonomski razvoj, stanje na tržištu rada",
                            "Stil rukovođenja",
                            "Godine starosti"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta spada u faktore posla?",
                        options: [
                            "Starost radnika",
                            "Tip posla, težina, složenost, loši uslovi, niska plata",
                            "Regionalni razvoj",
                            "Bračni status"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta spada u organizacione faktore?",
                        options: [
                            "Godine radnika",
                            "Loša organizacija rada, neadekvatan stil rukovođenja, loša oprema",
                            "Tip posla",
                            "Tržište rada"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja starosna grupa ima veću fluktuaciju?",
                        options: [
                            "Stariji radnici",
                            "Sredovečni radnici",
                            "Mlađi radnici",
                            "Nema razlike"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koje osobine ličnosti utiču na fluktuaciju?",
                        options: [
                            "Visina i težina",
                            "Temperament i inteligencija",
                            "Boja očiju",
                            "Pol"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "9-3",
                name: "Test 3: Merenje i posledice",
                questions: [
                    {
                        question: "Kako se izračunava stopa fluktuacije?",
                        options: [
                            "F = (Broj odlazaka / Prosečan broj zaposlenih) × 100",
                            "F = (Prosečan broj zaposlenih / Broj odlazaka) × 100",
                            "F = (Broj dolazaka / Broj odlazaka) × 100",
                            "F = (Broj odlazaka - Broj dolazaka) × 100"
                        ],
                        correct: 0
                    },
                    {
                        question: "Kakva je fluktuacija skupi problem?",
                        options: [
                            "Nije problem",
                            "Jeftin problem",
                            "Skupi problem zbog troškova regrutovanja, selekcije i obuke",
                            "Neutralan problem"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta se gubi kada radnik napusti organizaciju?",
                        options: [
                            "Ništa",
                            "Samo radno mesto",
                            "Znanje i iskustvo",
                            "Samo plata"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je interna fluktuacija?",
                        options: [
                            "Napuštanje organizacije",
                            "Prelazak na drugu poziciju u istoj organizaciji",
                            "Odlazak u drugu kompaniju",
                            "Penzionisanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je eksterna fluktuacija?",
                        options: [
                            "Prelazak na drugu poziciju u istoj firmi",
                            "Napuštanje organizacije za drugu",
                            "Napredovanje",
                            "Degradiranje"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    10: {
        title: "Epizoda 10: Motivacija za rad",
        tests: [
            {
                id: "10-1",
                name: "Test 1: Istorijski razvoj",
                questions: [
                    {
                        question: "Kako je Frederik Tejlor video motivaciju radnika?",
                        options: [
                            "Kao složen psihološki proces",
                            "Kao jednostavan odnos rad-plata",
                            "Kao potrebu za samoostvarenjem",
                            "Kao socijalnu potrebu"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako je Tejlor nazvao radnika?",
                        options: [
                            "Socijalni čovek",
                            "Ekonomski čovek",
                            "Psihološki čovek",
                            "Kompleksni čovek"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je prepoznala škola ljudskih odnosa kao motivatore?",
                        options: [
                            "Samo platu",
                            "Socijalne potrebe i grupne odnose",
                            "Samo fizičke uslove",
                            "Samo radno vreme"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su teorije ličnosti dodale razumevanju motivacije?",
                        options: [
                            "Ništa novo",
                            "Dodatno obogatile razumevanje",
                            "Pojednostavile problem",
                            "Zanemarile socijalne faktore"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako je Tejlor smatrao da treba motivisati radnika?",
                        options: [
                            "Pohvalama",
                            "Isključivo zaradom",
                            "Grupnim radom",
                            "Slobodnim vremenom"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "10-2",
                name: "Test 2: Maslovjeva hijerarhija",
                questions: [
                    {
                        question: "Ko je predložio hijerarhiju potreba?",
                        options: [
                            "Frederik Hercberg",
                            "Frederik Tejlor",
                            "Abraham Maslov",
                            "Daglas Mekgregor"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koji je redosled potreba u Maslovljevoj hijerarhiji od najniže ka najvišoj?",
                        options: [
                            "Sigurnost, fiziološke, pripadanje, poštovanje, samoostvarenje",
                            "Fiziološke, sigurnost, pripadanje i ljubav, poštovanje, samoostvarenje",
                            "Pripadanje, fiziološke, sigurnost, samoostvarenje, poštovanje",
                            "Fiziološke, pripadanje, sigurnost, poštovanje, samoostvarenje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su fiziološke potrebe?",
                        options: [
                            "Potrebe za druženjem",
                            "Hrana, voda, san - osnovno preživljavanje",
                            "Potrebe za poštovanjem",
                            "Potrebe za razvojem"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su potrebe za sigurnošću?",
                        options: [
                            "Potrebe za hranom",
                            "Fizička i ekonomska sigurnost, zaštita od opasnosti",
                            "Potrebe za prijateljstvom",
                            "Potrebe za kreativnošću"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je potreba za samoostvarenjem?",
                        options: [
                            "Potreba za hranom",
                            "Potreba za sigurnošću",
                            "Realizacija sopstvenog potencijala, kreativnost, lični rast",
                            "Potreba za prijateljstvom"
                        ],
                        correct: 2
                    },
                    {
                        question: "Kada se pojavljuju potrebe višeg reda prema Maslovu?",
                        options: [
                            "Uvek su prisutne",
                            "Kada su potrebe nižeg reda zadovoljene",
                            "Nikad",
                            "Samo kod bogataša"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "10-3",
                name: "Test 3: Hercbergova teorija",
                questions: [
                    {
                        question: "Prema Hercbergovoj teoriji, šta su motivatori?",
                        options: [
                            "Faktori čije prisustvo vodi zadovoljstvu i motivaciji",
                            "Faktori čije odsustvo vodi nezadovoljstvu",
                            "Plata i uslovi rada",
                            "Međuljudski odnosi"
                        ],
                        correct: 0
                    },
                    {
                        question: "Šta su higijenski faktori prema Hercbergu?",
                        options: [
                            "Čistoća na radnom mestu",
                            "Faktori čije odsustvo vodi nezadovoljstvu, ali prisustvo ne motiviše",
                            "Faktori koji uvek motivišu",
                            "Zdravstvena zaštita radnika"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji faktori spadaju u motivatore prema Hercbergu?",
                        options: [
                            "Plata, uslovi rada, sigurnost posla",
                            "Uspeh, priznanje, sam posao, odgovornost, napredovanje",
                            "Međuljudski odnosi, politika kompanije",
                            "Radni uslovi, beneficije, status"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji faktori spadaju u higijenske faktore?",
                        options: [
                            "Uspeh i priznanje",
                            "Plata, uslovi rada, međuljudski odnosi, sigurnost posla",
                            "Odgovornost i napredovanje",
                            "Sam posao"
                        ],
                        correct: 1
                    },
                    {
                        question: "Sa kojim potrebama su povezani motivatori?",
                        options: [
                            "Potrebama nižeg reda",
                            "Potrebama višeg reda",
                            "Fiziološkim potrebama",
                            "Sigurnosnim potrebama"
                        ],
                        correct: 1
                    },
                    {
                        question: "Da li su motivacija, produktivnost i zadovoljstvo identični?",
                        options: [
                            "Da, to su sinonimi",
                            "Ne, to su blisko povezane ali ne identične kategorije",
                            "Samo motivacija i produktivnost su identične",
                            "Samo produktivnost i zadovoljstvo su identične"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta tvrdi Hercberg o zadovoljstvu i nezadovoljstvu?",
                        options: [
                            "To su dva kraja istog kontinuuma",
                            "To su dve odvojene dimenzije",
                            "To je isto",
                            "Nema veze između njih"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    11: {
        title: "Epizoda 11: Ličnost i grupa",
        tests: [
            {
                id: "11-1",
                name: "Test 1: Definicije i privlačnost",
                questions: [
                    {
                        question: "Kako se definiše mala socijalna grupa?",
                        options: [
                            "Bilo koji skup ljudi",
                            "Skup pojedinaca u međusobnoj interakciji, svesni jedni drugih i sebe kao dela grupe",
                            "Grupa od tačno 10 ljudi",
                            "Ljudi koji rade u istoj zgradi"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koliko članova obično ima mala grupa?",
                        options: [
                            "Do 10",
                            "Do 30",
                            "Do 50",
                            "Do 100"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je ključni faktor koji privlači ljude grupama?",
                        options: [
                            "Plata",
                            "Obaveza",
                            "Interpersonalna privlačnost",
                            "Pritisak"
                        ],
                        correct: 2
                    },
                    {
                        question: "Na čemu se zasniva interpersonalna privlačnost?",
                        options: [
                            "Samo na fizičkoj lepoti",
                            "Fizička blizina, sličnost stavova, fizička privlačnost, privlačnost aktivnosti",
                            "Samo na bogatstvu",
                            "Samo na moći"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja osobina ličnosti utiče na grupnu klimu kroz težnju za saradnjom?",
                        options: [
                            "Dominacija",
                            "Interpersonalna orijentacija",
                            "Nezavisnost",
                            "Agresivnost"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "11-2",
                name: "Test 2: Tipovi grupa",
                questions: [
                    {
                        question: "Šta su primarne grupe?",
                        options: [
                            "Prve grupe u organizaciji",
                            "Bliske, intimne grupe sa 'licem u lice' odnosima i jakom emotivnom vezom",
                            "Grupe koje se prve formiraju",
                            "Najvažnije grupe u kompaniji"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su referentne grupe?",
                        options: [
                            "Grupe koje daju reference za posao",
                            "Grupe koje služe kao standard poređenja i oblikuju stavove članova",
                            "Grupe koje pišu izveštaje",
                            "Grupe koje kontrolišu rad"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako nastaju neformalne grupe?",
                        options: [
                            "Po nalogu menadžmenta",
                            "Spontano na osnovu zajedničkih interesa i prijateljstava",
                            "Kroz formalni proces selekcije",
                            "Putem glasanja"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su formalne grupe?",
                        options: [
                            "Grupe formirane spontano",
                            "Grupe formirane od strane organizacije za određene zadatke",
                            "Grupe prijatelja",
                            "Porodične grupe"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše formalne grupe?",
                        options: [
                            "Spontanost",
                            "Unapred definisane pozicije, uloge i odnosi",
                            "Neformalnost",
                            "Odsustvo pravila"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su radne grupe?",
                        options: [
                            "Neformalne grupe",
                            "Formalne grupe usmerene na izvršavanje radnih zadataka",
                            "Grupe za odmor",
                            "Sportske grupe"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "11-3",
                name: "Test 3: Struktura grupe",
                questions: [
                    {
                        question: "Kako se zove komunikaciona mreža gde svi komuniciraju sa jednom centralnom osobom?",
                        options: [
                            "Tip kruga",
                            "Tip kvadrata",
                            "Tip zvezde",
                            "Tip linije"
                        ],
                        correct: 2
                    },
                    {
                        question: "Za šta je efikasnija centralizovana mreža tipa 'zvezda'?",
                        options: [
                            "Složene zadatke",
                            "Jednostavne zadatke",
                            "Kreativne zadatke",
                            "Grupne diskusije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Za šta je bolja decentralizovana mreža tipa 'krug'?",
                        options: [
                            "Jednostavne zadatke",
                            "Složene zadatke",
                            "Rutinske poslove",
                            "Brze odluke"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta čini strukturu grupe?",
                        options: [
                            "Samo broj članova",
                            "Sistem pozicija i uloga, status i moć, komunikacione mreže",
                            "Samo komunikacija",
                            "Samo hijerarhija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je uloga u grupi?",
                        options: [
                            "Pozicija u grupi",
                            "Ponašanje vezano za poziciju",
                            "Status",
                            "Moć"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je socijalna senzitivnost kao osobina ličnosti?",
                        options: [
                            "Strah od ljudi",
                            "Sposobnost opažanja i reagovanja na potrebe i emocije drugih",
                            "Dominacija",
                            "Nezavisnost"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    12: {
        title: "Epizoda 12: Ličnost i organizacija",
        tests: [
            {
                id: "12-1",
                name: "Test 1: Osnovna interakcija",
                questions: [
                    {
                        question: "Šta je osnovna karakteristika interakcije ličnosti i organizacije?",
                        options: [
                            "Potpuna harmonija",
                            "Ograničavanje spontanosti ponašanja članova",
                            "Potpuna sloboda pojedinca",
                            "Odsustvo bilo kakvih pravila"
                        ],
                        correct: 1
                    },
                    {
                        question: "Zašto organizacija ograničava spontanost?",
                        options: [
                            "Iz zabave",
                            "Zbog potrebe za predvidivošću i kontrolom radi postizanja ciljeva",
                            "Jer ne voli ljude",
                            "Bez razloga"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kakva tenzija postoji u organizaciji?",
                        options: [
                            "Između rada i odmora",
                            "Između tendencije institucionalizma i tendencije slobode",
                            "Između plata",
                            "Između smena"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su osnovne karakteristike organizacije?",
                        options: [
                            "Jednostavnost i haos",
                            "Složenost, podela rada, koordinacija, formalizacija",
                            "Samo hijerarhija",
                            "Samo pravila"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači formalizacija u organizaciji?",
                        options: [
                            "Formalno oblačenje",
                            "Postojanje unapred definisanih pravila, procedura, hijerarhijske strukture",
                            "Formalni razgovori",
                            "Formalne večere"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "12-2",
                name: "Test 2: Humanistički pristup",
                questions: [
                    {
                        question: "Ko je razvio humanistički pristup odnosu ličnosti i organizacije?",
                        options: [
                            "Frederik Tejlor i Henri Fajol",
                            "Abraham Maslov i Kris Argiris",
                            "Maks Veber i Chester Barnard",
                            "Elton Mejo i Fritz Roethlisberger"
                        ],
                        correct: 1
                    },
                    {
                        question: "Prema humanističkom pristupu, šta zrela ličnost teži?",
                        options: [
                            "Pasivnosti i zavisnosti",
                            "Aktivnosti, nezavisnosti, dugoročnoj perspektivi",
                            "Kratkoročnoj perspektivi i površnim sposobnostima",
                            "Podređenosti i kontroli"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta formalna organizacija zahteva prema humanističkom pristupu?",
                        options: [
                            "Aktivnost i nezavisnost",
                            "Pasivnost, zavisnost, podređenost, kratkoročnu perspektivu",
                            "Kreativnost",
                            "Inovativnost"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kakav je odnos između zrele ličnosti i formalne organizacije prema Argirisu?",
                        options: [
                            "Potpuno kompatibilan",
                            "Fundamentalno nekompatibilan",
                            "Neutralan",
                            "Zavisi od situacije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta humanistički pristup predlaže kao rešenje?",
                        options: [
                            "Stroža kontrola",
                            "Obogaćivanje posla, decentralizacija, participativno upravljanje",
                            "Smanjenje plata",
                            "Povećanje hijerarhije"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "12-3",
                name: "Test 3: Teorije X, Y i Z",
                questions: [
                    {
                        question: "Šta karakteriše Teoriju X prema Mekgregoru?",
                        options: [
                            "Ljudi vole rad i traže odgovornost",
                            "Prosečna osoba ne voli rad, izbegava odgovornost, mora biti kontrolisana",
                            "Rad je prirodan kao igra",
                            "Ljudi su kreativni i motivisani"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše Teoriju Y prema Mekgregoru?",
                        options: [
                            "Ljudi mrze rad",
                            "Ljudi moraju biti primorani da rade",
                            "Rad je prirodan kao igra, ljudi traže odgovornost",
                            "Ljudi izbegavaju odgovornost"
                        ],
                        correct: 2
                    },
                    {
                        question: "Ko je predstavnik klasičnog pristupa odnosu ličnosti i organizacije?",
                        options: [
                            "Abraham Maslov",
                            "Kris Argiris",
                            "Straus",
                            "Daglas Mekgregor"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta klasični pristup tvrdi o većini ljudi?",
                        options: [
                            "Svi žele samoostvarenje",
                            "Samo mali broj ima izraženu potrebu za samoostvarenjem na poslu",
                            "Svi su kreativni",
                            "Svi žele odgovornost"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je Teorija Z?",
                        options: [
                            "Američki model menadžmenta",
                            "Japanski model menadžmenta sa dugoročnim zapošljavanjem i kolektivnom odgovornošću",
                            "Evropski model menadžmenta",
                            "Sovjetski model menadžmenta"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko je razvio Teoriju Z?",
                        options: [
                            "Mekgregor",
                            "Maslov",
                            "Ouči",
                            "Argiris"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta naglašava Teorija Z?",
                        options: [
                            "Individualnu odgovornost",
                            "Dugoročno zapošljavanje, kolektivnu odgovornost, holistički pristup",
                            "Kratkoročne ugovore",
                            "Striktnu hijerarhiju"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    13: {
        title: "Epizoda 13: Psihološki problem rukovođenja",
        tests: [
            {
                id: "13-1",
                name: "Test 1: Definicije i teorije",
                questions: [
                    {
                        question: "Kako se definiše liderstvo?",
                        options: [
                            "Formalna pozicija u hijerarhiji",
                            "Proces uticanja na ponašanje drugih radi postizanja zajedničkih ciljeva",
                            "Kontrola podređenih",
                            "Dodela zadataka"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su tri faze razvoja teorija liderstva?",
                        options: [
                            "Klasične, moderne, postmoderne",
                            "Teorije osobina, teorije stilova, situacione teorije",
                            "Bihevioralne, kognitivne, humanističke",
                            "Individualne, grupne, organizacione"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su pokušale da identifikuju teorije osobina ('teorije velikih ljudi')?",
                        options: [
                            "Najbolje organizacione strukture",
                            "Specifične fizičke, intelektualne i socijalne osobine uspešnih lidera",
                            "Najbolje platne sisteme",
                            "Optimalne radne uslove"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je bio zaključak teorija osobina?",
                        options: [
                            "Postoji univerzalan set osobina",
                            "Nije pronađen univerzalan set osobina koji garantuje uspeh",
                            "Samo inteligencija je važna",
                            "Samo harizma je važna"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je menadžment?",
                        options: [
                            "Isto što i liderstvo",
                            "Aktivnosti lidera (planiranje, organizovanje, kontrola)",
                            "Kontrola radnika",
                            "Samo dodela zadataka"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "13-2",
                name: "Test 2: Stilovi rukovođenja",
                questions: [
                    {
                        question: "Koje su dve osnovne dimenzije liderskog ponašanja?",
                        options: [
                            "Brzina i preciznost",
                            "Briga za proizvodnju (zadatak) i briga za ljude (odnose)",
                            "Inteligencija i harizmatičnost",
                            "Obrazovanje i iskustvo"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji su osnovni stilovi rukovođenja?",
                        options: [
                            "Brzi, spori, umeren",
                            "Autokratski, demokratski, laissez-faire",
                            "Strogi, blagi, neutralan",
                            "Direktan, indirektan, kombinovan"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše autokratski stil?",
                        options: [
                            "Lider uključuje grupu u odlučivanje",
                            "Lider sam donosi odluke i nameće ih grupi",
                            "Lider daje potpunu slobodu",
                            "Nema lidera"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše demokratski stil?",
                        options: [
                            "Lider sam odlučuje",
                            "Lider uključuje grupu u donošenje odluka",
                            "Potpuna sloboda grupe",
                            "Nema odlučivanja"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše laissez-faire stil?",
                        options: [
                            "Stroga kontrola",
                            "Demokratsko odlučivanje",
                            "Lider daje grupi potpunu slobodu",
                            "Autokratija"
                        ],
                        correct: 2
                    },
                    {
                        question: "Na šta su se fokusirale teorije stilova?",
                        options: [
                            "Na to šta lider JESTE",
                            "Na to šta lider RADI",
                            "Na fizički izgled lidera",
                            "Na obrazovanje lidera"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "13-3",
                name: "Test 3: Situacioni pristup i moć",
                questions: [
                    {
                        question: "Prema Fidlerovom modelu, kada je orijentacija na zadatak najefikasnija?",
                        options: [
                            "Samo u povoljnim situacijama",
                            "Samo u nepovoljnim situacijama",
                            "U vrlo povoljnim ili vrlo nepovoljnim situacijama",
                            "U umereno povoljnim situacijama"
                        ],
                        correct: 2
                    },
                    {
                        question: "Kada je orijentacija na ljude efikasnija prema Fidleru?",
                        options: [
                            "U ekstremnim situacijama",
                            "U umereno povoljnim situacijama",
                            "Uvek",
                            "Nikad"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je referentna moć lidera?",
                        options: [
                            "Moć koja proizilazi iz formalne pozicije",
                            "Moć nagrađivanja",
                            "Moć kažnjavanja",
                            "Moć zasnovana na ličnoj privlačnosti i harizmi lidera"
                        ],
                        correct: 3
                    },
                    {
                        question: "Šta je ekspertska moć?",
                        options: [
                            "Moć zasnovana na znanju i stručnosti lidera",
                            "Moć koja dolazi iz hijerarhijske pozicije",
                            "Moć da se nagrađuje željeno ponašanje",
                            "Moć da se kažnjava nepoželjno ponašanje"
                        ],
                        correct: 0
                    },
                    {
                        question: "Šta je legitimna moć?",
                        options: [
                            "Moć koja proizilazi iz formalne hijerarhijske pozicije",
                            "Moć nagrađivanja",
                            "Harizma",
                            "Stručnost"
                        ],
                        correct: 0
                    },
                    {
                        question: "Koje izvore moći lideri koriste?",
                        options: [
                            "Samo legitimnu moć",
                            "Legitimna, nagradna, prinudna, ekspertska, referentna",
                            "Samo harizmu",
                            "Samo znanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta tvrde situacione teorije?",
                        options: [
                            "Postoji jedan najbolji stil",
                            "Ne postoji jedan najbolji stil, uspeh zavisi od interakcije stila i situacije",
                            "Samo osobine su važne",
                            "Samo situacija je važna"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    14: {
        title: "Epizoda 14: Konflikti u organizaciji",
        tests: [
            {
                id: "14-1",
                name: "Test 1: Definicija i tumačenja",
                questions: [
                    {
                        question: "Kako se definiše konflikt?",
                        options: [
                            "Prijateljska diskusija",
                            "Odnos suprotstavljenosti između dve ili više strana zbog neslaganja u ciljevima, interesima ili vrednostima",
                            "Timski rad",
                            "Konstruktivna kritika"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je često psihološka osnova konflikta?",
                        options: [
                            "Zadovoljstvo",
                            "Motivacija",
                            "Frustracija osnovnih potreba ili motiva",
                            "Sreća"
                        ],
                        correct: 2
                    },
                    {
                        question: "Kako škola ljudskih odnosa tumači konflikt?",
                        options: [
                            "Kao poželjnu pojavu",
                            "Kao nepoželjnu pojavu koju treba izbegavati",
                            "Kao neutralnu pojavu",
                            "Kao neizbežnu i korisnu pojavu"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako pluralističko tumačenje vidi konflikt?",
                        options: [
                            "Uvek negativno",
                            "Neizbežan i prirodan, može biti poželjan jer stimuliše promene",
                            "Uvek pozitivno",
                            "Treba ga potpuno eliminisati"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je stav mentalne higijene o konfliktu?",
                        options: [
                            "Konflikt je uvek dobar",
                            "Konflikt je neizbežan ali treba ga izbegavati kad god je moguće",
                            "Konflikt ne postoji",
                            "Konflikt je jedini način rešavanja problema"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "14-2",
                name: "Test 2: Tipovi konflikata",
                questions: [
                    {
                        question: "Koja su dva tipa konflikata po prirodi?",
                        options: [
                            "Brzi i spori",
                            "Interesni i vrednosni",
                            "Lični i profesionalni",
                            "Interni i eksterni"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su interesni konflikti?",
                        options: [
                            "Konflikti oko hotelišta",
                            "Borba za ograničena dobra (novac, pozicije, resursi)",
                            "Konflikti oko radnog vremena",
                            "Konflikti oko godišnjih odmora"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta su vrednosni konflikti?",
                        options: [
                            "Konflikti oko plate",
                            "Sukob oko različitih uverenja, ideologija, principa",
                            "Konflikti oko radnog mesta",
                            "Konflikti oko beneficija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji konflikti su često dublji i teži za rešavanje?",
                        options: [
                            "Interesni",
                            "Vrednosni",
                            "Kratki",
                            "Površni"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše konstruktivne konflikte?",
                        options: [
                            "Oštećuju međuljudske odnose",
                            "Vode traženju boljih rešenja, stimulišu kreativnost i inovacije",
                            "Uvek se izbegavaju",
                            "Energija se troši na međusobne napade"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta karakteriše destruktivne konflikte?",
                        options: [
                            "Vode boljim rešenjima",
                            "Ometaju rad, oštećuju međuljudske odnose, troše energiju na napade",
                            "Povećavaju kreativnost",
                            "Poboljšavaju komunikaciju"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "14-3",
                name: "Test 3: Rešavanje konflikata",
                questions: [
                    {
                        question: "Šta je kompromis kao način rešavanja konflikta?",
                        options: [
                            "Jedna strana pobedi sve",
                            "Rešenje gde svaka strana nešto dobije i nešto izgubi",
                            "Izbegavanje konflikta",
                            "Nametanje rešenja silom"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači uvođenje superordiniranih ciljeva?",
                        options: [
                            "Postavljanje novih menadžera",
                            "Pronalaženje zajedničkog cilja važnijeg od pojedinačnih interesa",
                            "Otpuštanje konfliktnih strana",
                            "Ignorisanje problema"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je uloga arbitra u rešavanju konflikta?",
                        options: [
                            "Da kazni strane",
                            "Angažovanje treće, neutralne strane da pomogne u pronalaženju rešenja",
                            "Da ignoriše problem",
                            "Da favorizuje jednu stranu"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je konfrontacija kao procedura?",
                        options: [
                            "Fizički sukob",
                            "Direktno suočavanje sa problemom radi razjašnjenja pozicija",
                            "Izbegavanje problema",
                            "Kažnjavanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je 'smoothing' (glačanje)?",
                        options: [
                            "Peglanje odeće",
                            "Naglašavanje zajedničkih interesa i smanjivanje razlika",
                            "Forsiranje rešenja",
                            "Povlačenje iz konflikta"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta treba da se radi sa konstruktivnim konfliktima?",
                        options: [
                            "Eliminisati ih",
                            "Upravljati njima",
                            "Ignorisati ih",
                            "Pojačati ih"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    15: {
        title: "Epizoda 15: Proces komuniciranja u organizaciji",
        tests: [
            {
                id: "15-1",
                name: "Test 1: Osnove komunikacije",
                questions: [
                    {
                        question: "Kako se definiše komunikacija?",
                        options: [
                            "Samo razgovor između ljudi",
                            "Proces prenosa informacija i značenja sa jedne osobe na drugu putem razumljivih simbola",
                            "Pisanje izveštaja",
                            "Slanje emailova"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji su osnovni elementi komunikacionog procesa?",
                        options: [
                            "Kompjuter, telefon, email",
                            "Pošiljalac, poruka, kanal, primalac, povratna informacija, percepcija",
                            "Govor, sluh, vid",
                            "Pisanje, čitanje, slušanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je pošiljalac (enkoder)?",
                        options: [
                            "Pošta",
                            "Izvor informacije koji započinje proces",
                            "Primalac poruke",
                            "Kanal komunikacije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je kanal (medijator)?",
                        options: [
                            "TV kanal",
                            "Put kojim se poruka prenosi (govor, pismo, email)",
                            "Poruka",
                            "Pošiljalac"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je povratna informacija?",
                        options: [
                            "Ponavljanje poruke",
                            "Odgovor primaoca koji govori pošiljaocu da li je poruka primljena i kako je shvaćena",
                            "Buka u komunikaciji",
                            "Percepcija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Čemu služi komunikacija u organizaciji?",
                        options: [
                            "Samo zabavi",
                            "Informisanju, motivaciji i upravljanju",
                            "Samo kontroli",
                            "Samo kritici"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "15-2",
                name: "Test 2: Tipovi komunikacije",
                questions: [
                    {
                        question: "Šta su formalne komunikacije?",
                        options: [
                            "Spontani razgovori",
                            "Glasine",
                            "Komunikacije koje se odvijaju unapred utvrđenim, zvaničnim kanalima",
                            "Razgovori na pauzi"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta karakteriše neformalne komunikacije ('glasine')?",
                        options: [
                            "Uvek su tačne",
                            "Odvijaju se izvan formalnih kanala, brže su ali često manje pouzdane",
                            "Uvek su spore",
                            "Samo menadžeri ih koriste"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje vrste formalnih komunikacija postoje?",
                        options: [
                            "Samo vertikalne",
                            "Vertikalne (gore-dole) i horizontalne (između kolega na istom nivou)",
                            "Samo horizontalne",
                            "Samo dijagonalne"
                        ],
                        correct: 1
                    },
                    {
                        question: "Na čemu se zasnivaju neformalne komunikacije?",
                        options: [
                            "Na pravilima kompanije",
                            "Na ličnim kontaktima",
                            "Na hijerarhiji",
                            "Na zakonu"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je prednost neformalnih komunikacija?",
                        options: [
                            "Uvek su tačne",
                            "Brže su",
                            "Pouzdanije su",
                            "Formalne su"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je mana neformalnih komunikacija?",
                        options: [
                            "Previše su spore",
                            "Podložne su iskrivljavanju",
                            "Previše su formalne",
                            "Skupe su"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "15-3",
                name: "Test 3: Mreže i teškoće",
                questions: [
                    {
                        question: "Kako funkcioniše komunikaciona mreža tipa 'zvezda'?",
                        options: [
                            "Svi komuniciraju sa svima",
                            "Svi komuniciraju sa jednom centralnom osobom",
                            "Komunikacija ide u krug",
                            "Nema komunikacije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Za šta je bolja decentralizovana mreža tipa 'krug'?",
                        options: [
                            "Za jednostavne zadatke",
                            "Za složene zadatke, podiže motivaciju i omogućava participaciju",
                            "Za hitne situacije",
                            "Za rutinske poslove"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su organizacione teškoće u komunikaciji?",
                        options: [
                            "Loš vid i sluh",
                            "Nejasna organizaciona struktura, previše hijerarhijskih nivoa",
                            "Nedostatak telefona",
                            "Loše vreme"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su teškoće vezane za formulaciju poruke?",
                        options: [
                            "Loš papir",
                            "Upotreba nejasnih reči, žargona, loše tumačenje neverbalnih znakova",
                            "Loš printer",
                            "Spora pošta"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je aktivno slušanje?",
                        options: [
                            "Slušanje muzike na poslu",
                            "Puna koncentracija na sagovornika, postavljanje pitanja i davanje povratne informacije",
                            "Ignorisanje sagovornika",
                            "Prekidanje sagovornika"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako se mogu otkloniti teškoće u komunikaciji?",
                        options: [
                            "Komplikovanim rečima",
                            "Pojednostaviti strukturu, koristiti jasan jezik, ponavljati ključne delove, razvijati aktivno slušanje",
                            "Ignorisanjem problema",
                            "Povećanjem hijerarhije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta mogu deformisati poruku kod psihološkog profila učesnika?",
                        options: [
                            "Dobro raspoloženje",
                            "Emocije, predrasude, stereotipi, različite percepcije",
                            "Dobra volja",
                            "Koncentracija"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    },
    16: {
        title: "Epizoda 16: Stres u organizaciji",
        tests: [
            {
                id: "16-1",
                name: "Test 1: Definicija i faze",
                questions: [
                    {
                        question: "Kako se definiše stres?",
                        options: [
                            "Osećaj sreće",
                            "Psihofizičko stanje kada je čovek suočen sa zahtevima koje procenjuje kao preteške ili ugrožavajuće",
                            "Normalno stanje organizma",
                            "Želja za radom"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su tri faze reakcije na stres prema Seljeu?",
                        options: [
                            "Početak, sredina, kraj",
                            "Alarm, otpor, iscrpljenost",
                            "Strah, bes, tuga",
                            "Negiranje, prihvatanje, adaptacija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta se dešava u fazi alarma?",
                        options: [
                            "Organizam se odmara",
                            "Organizam se priprema za 'borbu ili beg'",
                            "Organizam spava",
                            "Nema reakcije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta se dešava u fazi otpora?",
                        options: [
                            "Organizam se predaje",
                            "Organizam se aktivno bori sa stresorom i pokušava da se adaptira",
                            "Organizam spava",
                            "Organizam ignoriše problem"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta se dešava u fazi iscrpljenosti?",
                        options: [
                            "Organizam pobedi stres",
                            "Odbrambene snage organizma popuštaju, može doći do bolesti",
                            "Organizam se odmara",
                            "Organizam postaje jači"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko je razvio model tri faze stresa?",
                        options: [
                            "Maslov",
                            "Selje",
                            "Frojd",
                            "Tejlor"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "16-2",
                name: "Test 2: Izvori stresa",
                questions: [
                    {
                        question: "Šta je konflikt uloga kao stresor?",
                        options: [
                            "Jasno definisane uloge",
                            "Suprotstavljeni zahtevi",
                            "Jedna uloga",
                            "Nema uloga"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je nejasnoća uloge?",
                        options: [
                            "Jasno definisane odgovornosti",
                            "Nedostatak informacija o tome šta se očekuje",
                            "Previše jasnih instrukcija",
                            "Detaljni opis posla"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji tip preopterećenosti postoji?",
                        options: [
                            "Samo fizička",
                            "Samo mentalna",
                            "Kvantitativna i kvalitativna",
                            "Samo emotivna"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je kvantitativna preopterećenost?",
                        options: [
                            "Previše težak posao",
                            "Previše posla",
                            "Previše lak posao",
                            "Premalo posla"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je kvalitativna preopterećenost?",
                        options: [
                            "Previše posla",
                            "Posao koji prevazilazi sposobnosti",
                            "Premalo posla",
                            "Lak posao"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji stresori spadaju u prirodu posla?",
                        options: [
                            "Odnosi sa kolegama",
                            "Preopterećenost, rad pod vremenskim pritiskom, česta putovanja",
                            "Napredovanje",
                            "Psihološka klima"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kakva odgovornost je posebno stresna?",
                        options: [
                            "Odgovornost za mašine",
                            "Odgovornost za druge ljude",
                            "Odgovornost za dokumentaciju",
                            "Odgovornost za zgradu"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                id: "16-3",
                name: "Test 3: Posledice i upravljanje",
                questions: [
                    {
                        question: "Šta spada u individualne mere upravljanja stresom?",
                        options: [
                            "Redizajn poslova",
                            "Promena životnog stila, tehnike relaksacije, bolje upravljanje vremenom",
                            "Zapošljavanje novih ljudi",
                            "Promena organizacione strukture"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači promena kognitivne procene u upravljanju stresom?",
                        options: [
                            "Ignorisanje problema",
                            "Učenje da se na stresore gleda kao na izazove, a ne kao na pretnje",
                            "Izbegavanje posla",
                            "Kažnjavanje drugih"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su posledice dugotrajnog stresa po organizaciju?",
                        options: [
                            "Povećana produktivnost",
                            "Povećan apsentizam i fluktuacija, smanjena produktivnost, više grešaka",
                            "Bolja komunikacija",
                            "Veće zadovoljstvo"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta spada u organizacione mere upravljanja stresom?",
                        options: [
                            "Meditacija",
                            "Poboljšanje selekcije, redizajn poslova, jasno definisanje uloga",
                            "Vežbanje",
                            "Pravilna ishrana"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koje su posledice stresa po pojedinca?",
                        options: [
                            "Povećana energija",
                            "Povišen krvni pritisak, anksioznost, depresija, sagorevanje",
                            "Bolje zdravlje",
                            "Veća kreativnost"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je sagorevanje na poslu?",
                        options: [
                            "Fizička povreda",
                            "Posledica dugotrajnog stresa",
                            "Požar na radnom mestu",
                            "Vrsta odmora"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja je najbolja strategija za upravljanje stresom?",
                        options: [
                            "Samo individualne mere",
                            "Kombinacija organizacionih i individualnih mera",
                            "Samo organizacione mere",
                            "Ignorisanje problema"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta uključuje razvijanje socijalne podrške?",
                        options: [
                            "Izolacija",
                            "Razgovor sa prijateljima i porodicom",
                            "Rad prekovremeno",
                            "Ignorisanje problema"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    }
};

// Generisanje sveobuhvatnih testova - isti kod kao ranije
const comprehensiveTests = [];

function generateComprehensiveTests() {
    let allQuestions = [];
    for (let episode in episodeQuizzes) {
        episodeQuizzes[episode].tests.forEach(test => {
            test.questions.forEach(q => {
                allQuestions.push({
                    ...q,
                    episode: episode
                });
            });
        });
    }

    for (let i = 1; i <= 15; i++) {
        let testQuestions = [];
        let usedIndices = new Set();
        
        while (testQuestions.length < 25) {
            let randomIndex = Math.floor(Math.random() * allQuestions.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                testQuestions.push({...allQuestions[randomIndex]});
            }
        }

        comprehensiveTests.push({
            id: i,
            title: `Sveobuhvatni Test ${i}`,
            questions: testQuestions
        });
    }
}

generateComprehensiveTests();
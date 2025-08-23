// Expanded quiz data with 3 tests per episode
const episodeQuizzes = {
    1: {
        title: "Epizoda 1: Osnovi psihologije kao nauke",
        tests: [
            {
                name: "Test 1 - Osnovni podaci i istorija",
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
                        question: "Koje su dve glavne struje u psihologiji?",
                        options: [
                            "Kognitivna i socijalna",
                            "Psihoanalitička i biheviorizam",
                            "Humanistička i gestalt",
                            "Eksperimentalna i klinička"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                name: "Test 2 - Zadaci i definicije",
                questions: [
                    {
                        question: "Šta je osnovni zadatak psihologije?",
                        options: [
                            "Lečenje mentalnih bolesti",
                            "Utvrđivanje zakonitosti psihičkog života",
                            "Podučavanje ljudi",
                            "Upravljanje ponašanjem"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja je prva faza u nivou saznanja psihologije?",
                        options: [
                            "Sistematizacija opisanih pojava",
                            "Opisivanje psihičkih pojava",
                            "Otkrivanje uzročno-posledičnih veza",
                            "Naučno predviđanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Prema Demokritu, od čega je sastavljena duša?",
                        options: [
                            "Od eterričnih supstanci",
                            "Od svetlosti",
                            "Od atoma",
                            "Od vazduha"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je karakteristično za psihoanalitičku struju?",
                        options: [
                            "Fokusira se samo na ponašanje",
                            "Koristi isključivo testove",
                            "Fokusira se na dinamiku uma (svesno-nesvesno)",
                            "Proučava samo decu"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta bihevioralna psihologija koristi kao glavnu metodu?",
                        options: [
                            "Analizu snova",
                            "Eksperimentalne metode u kontrolisanim uslovima",
                            "Introspektivnu analizu",
                            "Slobodne asocijacije"
                        ],
                        correct: 1
                    },
                    {
                        question: "U koju grupu grana psihologije spada psihologija rada?",
                        options: [
                            "Proučavanje pod uticajem fizičkog sveta",
                            "Proučavanje pod uticajem društvenog sveta",
                            "Proučavanje raznovrsnosti psihičkog života",
                            "Proučavanje vezano za praktične aktivnosti"
                        ],
                        correct: 3
                    }
                ]
            },
            {
                name: "Test 3 - Razumevanje koncepata",
                questions: [
                    {
                        question: "Koliko nivoa saznanja mora psihologija da prođe da bi utvrdila zakonitosti?",
                        options: [
                            "Tri nivoa",
                            "Četiri nivoa",
                            "Pet nivoa",
                            "Šest nivoa"
                        ],
                        correct: 3
                    },
                    {
                        question: "Koje grane psihologije proučavaju psihički život pod uticajem fizičkog sveta?",
                        options: [
                            "Socijalna i etnološka psihologija",
                            "Psihofizika, fiziološka i biološka psihologija",
                            "Pedagoška i medicinska psihologija",
                            "Genetička i diferencijalna psihologija"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kako Dekart posmatra odnos duše i tela?",
                        options: [
                            "Kao jednu supstancu",
                            "Kao dve različite supstance",
                            "Telo je važnije od duše",
                            "Duša ne postoji"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači 'tabula rasa' prema Džonu Loku?",
                        options: [
                            "Očišćena tabla",
                            "Neispisan list na kome iskustvo ispisuje utiske",
                            "Bela knjiga",
                            "Prazna glava"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koja vrsta duše prema Aristotelu pripada samo čoveku?",
                        options: [
                            "Vegetativna duša",
                            "Vitalna duša",
                            "Razumska duša",
                            "Emocionalna duša"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koja od navedenih nije jedna od tri glavne oblasti podele psiholoških grana?",
                        options: [
                            "Proučavanje psihičkog života uslovljenog spoljašnjim svetom",
                            "Proučavanje psihičkog života u njegovoj raznovrsnosti", 
                            "Proučavanje psihičkog života vezanog za praktične aktivnosti",
                            "Proučavanje psihičkog života u izmenjenim stanjima svesti"
                        ],
                        correct: 3
                    },
                    {
                        question: "Diferencijalna psihologija se bavi:",
                        options: [
                            "Razvojnim stadijumima",
                            "Individualnim razlikama među ljudima",
                            "Psihičkim životom životinja",
                            "Praktičnim aktivnostima"
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
                name: "Test 1 - Istorijski razvoj",
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
                    }
                ]
            },
            {
                name: "Test 2 - Teorije i pristupi",
                questions: [
                    {
                        question: "Kojim redom su se menjali periodi odnosa nauke prema radu?",
                        options: [
                            "Čovek kao dodatak mašini → prilagođavanje rada čoveku → bolje razumevanje čoveka",
                            "Bolje razumevanje čoveka → čovek kao dodatak → prilagođavanje rada čoveku",
                            "Prilagođavanje rada čoveku → čovek kao dodatak → bolje razumevanje",
                            "Svi periodi su postojali paralelno"
                        ],
                        correct: 0
                    },
                    {
                        question: "Šta je Tejlor smatrao da je jedini motiv za rad?",
                        options: [
                            "Poštovanje",
                            "Novac",
                            "Napredovanje", 
                            "Samoostvarenje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koju školu je pokrenuo Hotornski eksperiment?",
                        options: [
                            "Škola naučnog upravljanja",
                            "Škola međuljudskih odnosa",
                            "Škola sistemske teorije",
                            "Škola kvantitativnog pristupa"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko je bio učenik Vilijema Vunta?",
                        options: [
                            "Frederik Tejlor",
                            "Hugo Minsterberg", 
                            "Elton Mejo",
                            "Abraham Maslov"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je karakteristično za treći period odnosa nauke prema radu?",
                        options: [
                            "Zanemarivanje čoveka",
                            "Fokus samo na efikasnost",
                            "Shvatanje da materijalni stimulans nije jedini motivator",
                            "Tretiranje čoveka kao mašine"
                        ],
                        correct: 2
                    },
                    {
                        question: "Čiji rad je podstakao dalji razvoj psihologije rada?",
                        options: [
                            "Frederik Tejlor",
                            "Hugo Minsterberg",
                            "Abraham Maslov", 
                            "Elton Mejo"
                        ],
                        correct: 2
                    }
                ]
            },
            {
                name: "Test 3 - Oblasti i primena",
                questions: [
                    {
                        question: "Inženjerska psihologija se fokusira na:",
                        options: [
                            "Selekciju radnika",
                            "Optimizaciju sistema čovek-mašina",
                            "Socijalне interakcije",
                            "Organizacionu kulturu"
                        ],
                        correct: 1
                    },
                    {
                        question: "Čime se bavi kadrovska psihologija?",
                        options: [
                            "Dizajnom mašina",
                            "Selekcijom, obukom i prilagođavanjem čoveka radu",
                            "Analizom tržišta",
                            "Finansijskim planiranjem"
                        ],
                        correct: 1
                    },
                    {
                        question: "Predmet psihologije rada su:",
                        options: [
                            "Samo pojedinac",
                            "Samo posao",
                            "Uzajamni odnosi individue, posla i uslova rada",
                            "Samo uslovi rada"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je cilj psihologije rada?",
                        options: [
                            "Povećanje profita",
                            "Smanjenje troškova",
                            "Očuvanje zdravlja, adaptiranosti i zadovoljstva radom",
                            "Kontrola ponašanja"
                        ],
                        correct: 2
                    },
                    {
                        question: "Psihologija organizacije proučava:",
                        options: [
                            "Samo hijerarhiju",
                            "Sve psihičke pojave unutar organizacije kao rezultat interakcije članova",
                            "Samo komunikaciju",
                            "Samo liderstvo"
                        ],
                        correct: 1
                    },
                    {
                        question: "Što je Tejlor verovao o 'najboljem načinu'?",
                        options: [
                            "Da ne postoji najbolji način",
                            "Da postoji više dobrih načina",
                            "Da postoji 'jedan najbolji način' za obavljanje svakog posla", 
                            "Da se način menja dnevno"
                        ],
                        correct: 2
                    }
                ]
            }
        ]
    },
    3: {
        title: "Epizoda 3: Ličnost, osobine ličnosti i njihovo merenje",
        tests: [
            {
                name: "Test 1 - Osnove ličnosti",
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
                    }
                ]
            },
            {
                name: "Test 2 - Merenje i testiranje",
                questions: [
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
                        question: "Šta predstavlja pouzdanost testa?",
                        options: [
                            "Da meri tačno ono što treba da meri",
                            "Da daje iste rezultate pri ponovljenim merenjima",
                            "Da može da razlikuje fine razlike",
                            "Da je lako za primenu"
                        ],
                        correct: 1
                    },
                    {
                        question: "Što je senzitivnost testa?",
                        options: [
                            "Sposobnost merenja malih razlika",
                            "Valjanost merenja", 
                            "Pouzdanost rezultata",
                            "Brzina administracije"
                        ],
                        correct: 0
                    },
                    {
                        question: "Objektivnost testa znači:",
                        options: [
                            "Da je test skup",
                            "Da rezultat ne zavisi od ocenjivača",
                            "Da je test dugačak",
                            "Da test može svako da primeni"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je mentalna starost u IQ formuli?",
                        options: [
                            "Stvarni uzrast deteta",
                            "Prosečan uzrast za postignuće na testu",
                            "Maksimalni mogući uzrast",
                            "Minimalni potrebni uzrast"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                name: "Test 3 - Temperament i osobine",
                questions: [
                    {
                        question: "Koji temperament je po Hipokratu povezan sa žućnim sokom?",
                        options: [
                            "Sangvinik",
                            "Kolerik", 
                            "Flegmatik",
                            "Melanholik"
                        ],
                        correct: 1
                    },
                    {
                        question: "Koji temperament je povezan sa krvlju?",
                        options: [
                            "Sangvinik",
                            "Kolerik",
                            "Flegmatik", 
                            "Melanholik"
                        ],
                        correct: 0
                    },
                    {
                        question: "Flegmatik je povezan sa:",
                        options: [
                            "Krvlju",
                            "Žućnim sokom",
                            "Sluzom",
                            "Crnom žuči"
                        ],
                        correct: 2
                    },
                    {
                        question: "Melanholik je povezan sa:",
                        options: [
                            "Krvlju", 
                            "Žućnim sokom",
                            "Sluzom",
                            "Crnom žuči"
                        ],
                        correct: 3
                    },
                    {
                        question: "Biološki faktori razvoja ličnosti uključuju:",
                        options: [
                            "Samo genetiku",
                            "Nasleđe, konstituciju, hormonalno funkcionisanje",
                            "Samo hormonе",
                            "Samo fizički izgled"
                        ],
                        correct: 1
                    },
                    {
                        question: "Lična aktivnost kao faktor razvoja označava:",
                        options: [
                            "Pasivnu ulogu individue",
                            "Aktivnu ulogu individue u oblikovanju svoje ličnosti",
                            "Samo fizičku aktivnost",
                            "Samo mentalnu aktivnost"
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
                name: "Test 1 - Definicija i osnovni koncepti",
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
                    }
                ]
            },
            {
                name: "Test 2 - Hijerarhija i struktura",
                questions: [
                    {
                        question: "Koji je redosled hijerarhije posla od najvećeg ka najmanем?",
                        options: [
                            "Radni pokret → Operacija → Zadatak → Zanimanje",
                            "Zanimanje → Zadatak → Operacija → Radni pokret",
                            "Operacija → Zadatak → Radni pokret → Zanimanje", 
                            "Zadatak → Zanimanje → Operacija → Radni pokret"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta je operacija u analizi posla?",
                        options: [
                            "Najveća jedinica rada",
                            "Grupa povezanih radnih pokreta",
                            "Pojedinačni pokret",
                            "Celokupno zanimanje"
                        ],
                        correct: 1
                    },
                    {
                        question: "Zadatak predstavlja:",
                        options: [
                            "Jedan radni pokret",
                            "Grupu povezanih operacija",
                            "Celokupan posao",
                            "Najmanji element rada"
                        ],
                        correct: 1
                    },
                    {
                        question: "Zanimanje se sastoji od:",
                        options: [
                            "Samo jednog zadatka",
                            "Grupa povezanih zadataka",
                            "Samo operacija",
                            "Samo radnih pokreta"
                        ],
                        correct: 1
                    },
                    {
                        question: "Optimalni nivo zahteva predstavlja:",
                        options: [
                            "Minimum potreban za posao",
                            "Maksimum mogućih sposobnosti",
                            "Idealan nivo koji radnik treba da ima",
                            "Prosečan nivo sposobnosti"
                        ],
                        correct: 2
                    },
                    {
                        question: "Maksimalni nivo zahteva označava:",
                        options: [
                            "Minimum potreban za obavljanje posla",
                            "Idealan nivo sposobnosti",
                            "Najviši nivo sposobnosti koristan za posao",
                            "Prosečan nivo u populaciji"
                        ],
                        correct: 2
                    }
                ]
            },
            {
                name: "Test 3 - Primena i značaj",
                questions: [
                    {
                        question: "Zašto je važno poznavati kritični nivo zahteva?",
                        options: [
                            "Da bi se povećala plata",
                            "Da bi se identifikovali kandidati koji mogu obavljati posao",
                            "Da bi se smanjio broj radnika",
                            "Da bi se povećale pauzе"
                        ],
                        correct: 1
                    },
                    {
                        question: "Ko treba da učestvuje u analizi posla pored psihologa?",
                        options: [
                            "Samo menadžer",
                            "Lekar medicine rada i stručnjak za posao",
                            "Samo accountant", 
                            "Samo HR služba"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kada se mogu uključiti inženjeri i ekonomisti u analizu posla?",
                        options: [
                            "Uvek",
                            "Nikad",
                            "Po potrebi",
                            "Samo na početku"
                        ],
                        correct: 2
                    },
                    {
                        question: "Šta je jedan od glavnih ciljeva analize posla?",
                        options: [
                            "Smanjivanje broja radnika",
                            "Povećanje plate",
                            "Definisanje zahteva posla za potrebe selekcije",
                            "Povećanje radnih sati"
                        ],
                        correct: 2
                    },
                    {
                        question: "Koji aspekt rada analizira pitanje 'kako'?",
                        options: [
                            "Ko obavlja posao",
                            "Načine i metode obavljanja posla",
                            "Uslove rada",
                            "Karakteristike radnika"
                        ],
                        correct: 1
                    },
                    {
                        question: "Pitanje 'kakav radnik' u analizi posla se odnosi na:",
                        options: [
                            "Pol radnika",
                            "Uzrast radnika", 
                            "Potrebne karakteristike radnika",
                            "Platu radnika"
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
                name: "Test 1 - Osnovni koncepti",
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
                    }
                ]
            },
            {
                name: "Test 2 - Teorije i pristupi",
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
                        question: "Šta je cilj profesionalnog informisanja?",
                        options: [
                            "Testiranje sposobnosti",
                            "Pružanje informacija o zanimanjima i mogućnostima",
                            "Donošenje odluke",
                            "Praćenje karijere"
                        ],
                        correct: 1
                    },
                    {
                        question: "Analiza pojedinca u profesionalnoj orijentaciji uključuje:",
                        options: [
                            "Samo testove inteligencije",
                            "Procenu sposobnosti, interesovanja i osobina ličnosti",
                            "Samo razgovor",
                            "Samo pregled dokumentacije"
                        ],
                        correct: 1
                    },
                    {
                        question: "Profesionalno praćenje se odnosi na:",
                        options: [
                            "Praćenje uspeha u obrazovanju i karijeri",
                            "Kontrolu ponašanja",
                            "Nadzor nad radom",
                            "Evaluaciju psihologa"
                        ],
                        correct: 0
                    }
                ]
            },
            {
                name: "Test 3 - Karakteristike izbora",
                questions: [
                    {
                        question: "Zašto je profesionalni izbor nepovratak?",
                        options: [
                            "Jer se ne može promeniti zanimanje",
                            "Jer utiče na celokupan životni tok",
                            "Jer je skup",
                            "Jer traje kratko"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta znači ekskluzivnost profesionalnog izbora?",
                        options: [
                            "Izbor jednog zanimanja isključuje mnoga druga",
                            "Samo bogati mogu da biraju",
                            "Izbor je tajna",
                            "Samo roditelji biraju"
                        ],
                        correct: 0
                    },
                    {
                        question: "U kom uzrastu se najintenzivnije donose profesionalne odluke?",
                        options: [
                            "Osnovnoškolski uzrast",
                            "Adolescencija",
                            "Rana odrasla doba",
                            "Srednja godina života"
                        ],
                        correct: 1
                    },
                    {
                        question: "Šta Holandova teorija povezuje?",
                        options: [
                            "Tipove ličnosti sa odgovarajućim radnim okruženjima",
                            "Inteligenciju sa uspehom",
                            "Pol sa zanimanjem",
                            "Uzrast sa karijerom"
                        ],
                        correct: 0
                    },
                    {
                        question: "'Pojam o sebi' u Superovoj teoriji se odnosi na:",
                        options: [
                            "Fizički izgled",
                            "Predstavu o vlastitim sposobnostima i karakteristikama",
                            "Društveni status",
                            "Finansijsko stanje"
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
                name: "Test 1 - Osnovi selekcije",
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
                    }
                ]
            },
            {
                name: "Test 2 - Postulati i kriterijumi",
                questions: [
                    {
                        question: "Prvi postulat selekcije tvrdi da:",
                        options: [
                            "Svi ljudi su identični",
                            "Postoje značajne razlike među ljudima",
                            "Razlike su nevažne",
                            "Merenje je nemoguće"
                        ],
                        correct: 1
                    },
                    {
                        question: "Drugi postulat se odnosi na:",
                        options: [
                            "Vezu između osobina ličnosti i radnog uspeha",
                            "Nemogućnost predikcije",
                            "Jednakost svih kandidata",
                            "Subjektivnost merenja"
                        ],
                        correct: 0
                    },
                    {
                        question: "Treći postulat naglašava:",
                        options: [
                            "Nemogućnost merenja",
                            "Mogućnost merenja relevantnih karakteristika",
                            "Slučajnost rezultata",
                            "Nepotrebnost testiranja"
                        ],
                        correct: 1
                    },
                    {
                        question: "Četvrti postulat se odnosi na:",
                        options: [
                            "Mogućnost predikcije budućeg ponašanja",
                            "Nemogućnost planiranja",
                            "Slučajnost selekcije",
                            "Nepredvidivost ljudi"
                        ],
                        correct: 0
                    },
                    {
                        question: "Zašto kriterijum mora biti 'čist'?",
                        options: [
                            "Da bi bio jeftin",
                            "Da bi merio samo ono što zavisi od radnika, a ne od spoljnih faktora",
                            "Da bi bio brz",
                            "Da bi bio lak za razumevanje"
                        ],
                        correct: 1
                    }
                ]
            },
            {
                name: "Test 3 - Postupci i pristupi",
                questions: [
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
                        question: "Intervju kao selekciona procedura je najbolji za procenu:",
                        options: [
                            "Inteligencije",
                            "Komunikacionih veština i ličnosti",
                            "Matematičkih sposobnosti",
                            "Fizičke snage"
                        ],
                        correct: 1
                    },
                    {
                        question: "Psihološki testovi se koriste za procenu:",
                        options: [
                            "Samo inteligencije",
                            "Različitih psiholoških karakteristika",
                            "Samo ličnosti",
                            "Samo sposobnosti"
                        ],
                        correct: 1
                    },
                    {
                        question: "Prednost demonstracionog rada je:",
                        options: [
                            "Jeftino je",
                            "Brzo je",
                            "Direktno pokazuje sposobnost obavljanja konkretnih zadataka",
                            "Ne zahteva pripremu"
                        ],
                        correct: 2
                    },
                    {
                        question: "Audicija se najčešće koristi za selekciju:",
                        options: [
                            "Inženjera",
                            "Prodavca, učitelja, novinara",
                            "Računovođa",
                            "Fizičkih radnika"
                        ],
                        correct: 1
                    }
                ]
            }
        ]
    }
};

module.exports = { episodeQuizzes };
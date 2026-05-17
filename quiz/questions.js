/* ==========================================================
   Baza pytań do egzaminu STS-01 / STS-02
   Każde pytanie:
     { id, category, question, options: [A,B,C,D], correct: index, explanation }
   Kategorie odpowiadają proporcjom egzaminu ULC § 14 ust. 3:
     przepisy 20% | procedury 20% | ryzyko-ziemia 20%
     systemy-bsp 10% | osiagi 10% | ryzyko-powietrze 10%
     czlowiek 5% | meteo 5%
   ========================================================== */
'use strict';

const QUESTIONS = [
  // ========================================================
  // PRZEPISY LOTNICZE (1–34)
  // ========================================================
  { id: 1, category: 'przepisy',
    question: 'Które rozporządzenie UE określa zasady eksploatacji bezzałogowych statków powietrznych (w tym kategorie operacji i scenariusze STS)?',
    options: ['2019/945/UE (delegowane — wymagania techniczne)', '2019/947/UE (wykonawcze — zasady eksploatacji)', '2018/1139/UE (rozporządzenie bazowe EASA)', '785/2004/WE (ubezpieczenia)'],
    correct: 1, explanation: 'Rozporządzenie wykonawcze 2019/947 określa kategorie operacji (otwarta/szczególna/certyfikowana), wymagania pilota i scenariusze STS-01/02. 2019/945 dotyczy wymagań technicznych dronów (klasy C0–C6).' },

  { id: 2, category: 'przepisy',
    question: 'Które rozporządzenie UE określa wymagania techniczne dla dronów (klasy C0–C6)?',
    options: ['2019/947/UE', '2019/945/UE', '376/2014/UE', '2016/679 (RODO)'],
    correct: 1, explanation: '2019/945 to rozporządzenie delegowane Komisji w sprawie projektowania i produkcji BSP — w nim opisane są klasy C0–C6 z wymaganiami technicznymi.' },

  { id: 3, category: 'przepisy',
    question: 'STS-01 dotyczy operacji:',
    options: ['BVLOS nad obszarem słabo zaludnionym, dron klasy C6', 'VLOS nad kontrolowanym obszarem naziemnym w środowisku zaludnionym, dron klasy C5', 'BVLOS nad obszarem zaludnionym, dron klasy C5', 'VLOS nad obszarem słabo zaludnionym, dron klasy C3'],
    correct: 1, explanation: 'STS-01 = VLOS nad kontrolowanym obszarem naziemnym w środowisku ZALUDNIONYM, dronem klasy C5 (lub C3 + accessories kit upodabniający do C5).' },

  { id: 4, category: 'przepisy',
    question: 'STS-02 dotyczy operacji:',
    options: ['BVLOS nad kontrolowanym obszarem naziemnym w środowisku słabo zaludnionym, dron klasy C6', 'BVLOS w obszarze zaludnionym, dron klasy C5', 'VLOS z obserwatorem AO, dron klasy C6', 'VLOS i BVLOS nad strefą wojskową, dowolna klasa'],
    correct: 0, explanation: 'STS-02 = BVLOS z obserwatorami przestrzeni powietrznej nad kontrolowanym obszarem naziemnym w środowisku SŁABO ZALUDNIONYM, dronem klasy C6.' },

  { id: 5, category: 'przepisy',
    question: 'Jaka jest maksymalna wysokość lotu w STS-01 i STS-02?',
    options: ['100 m AGL', '120 m AGL', '150 m AMSL', '500 ft AGL'],
    correct: 1, explanation: 'Zarówno STS-01 jak i STS-02 ograniczają lot do 120 m AGL (mierzone od najbliższego punktu powierzchni Ziemi).' },

  { id: 6, category: 'przepisy',
    question: 'Jaka jest maksymalna prędkość pozioma drona w STS-01 (untethered)?',
    options: ['3 m/s', '5 m/s', '10 m/s', '20 m/s'],
    correct: 1, explanation: 'STS-01 wymaga prędkości względem ziemi < 5 m/s (≈ 18 km/h) — celem jest ograniczenie energii kinetycznej w środowisku zaludnionym.' },

  { id: 7, category: 'przepisy',
    question: 'Jaka jest maksymalna prędkość lotu drona klasy C6 (STS-02)?',
    options: ['25 m/s (90 km/h)', '40 m/s (144 km/h)', '50 m/s (180 km/h)', 'brak limitu'],
    correct: 2, explanation: 'Klasa C6 ma sztywny limit prędkości 50 m/s — jest to istotne przy obliczaniu bufora ryzyka naziemnego (GRB).' },

  { id: 8, category: 'przepisy',
    question: 'W STS-02 bez obserwatora przestrzeni powietrznej maksymalna odległość drona od pilota wynosi:',
    options: ['500 m, lot ręczny', '1 km, dron leci po zaprogramowanej trasie', '2 km, lot ręczny', '5 km, dron leci po zaprogramowanej trasie'],
    correct: 1, explanation: 'Bez AO: max 1 km od pilota, dron MUSI lecieć po wcześniej zaprogramowanym torze lotu (UAS.STS-02.020 pkt 5).' },

  { id: 9, category: 'przepisy',
    question: 'W STS-02 z obserwatorem(-ami) AO obowiązują następujące limity:',
    options: ['Dron max 1 km od pilota, AO max 0.5 km od drona', 'Dron max 2 km od pilota, dron max 1 km od najbliższego AO, AO max 1 km od pilota', 'Dron max 5 km od pilota, AO max 2 km od drona', 'Dron i AO bez limitów odległości'],
    correct: 1, explanation: 'UAS.STS-02.020 pkt 6: dron ≤ 2 km od pilota, dron ≤ 1 km od najbliższego AO, każdy AO ≤ 1 km od pilota.' },

  { id: 10, category: 'przepisy',
    question: 'Jaki jest minimalny wymóg widzialności w locie w STS-02?',
    options: ['1 km', '3 km', '5 km', '10 km'],
    correct: 2, explanation: 'STS-02 wymaga minimalnej widzialności w locie > 5 km (UAS.STS-02.020 pkt 3). To wymóg twardy.' },

  { id: 11, category: 'przepisy',
    question: 'Maksymalna MTOM drona dopuszczonego w STS-01 i STS-02 wynosi:',
    options: ['4 kg', '5 kg', '25 kg', '150 kg'],
    correct: 2, explanation: 'Klasy C5 i C6 są limitowane do MTOM < 25 kg.' },

  { id: 12, category: 'przepisy',
    question: 'Jaką klasę CE musi mieć dron używany w STS-01?',
    options: ['C2 lub C3', 'wyłącznie C5', 'C5 lub C3 + accessories kit upodabniający do C5', 'wyłącznie C6'],
    correct: 2, explanation: 'STS-01 dopuszcza dron klasy C5 LUB klasy C3 z accessories kit, który uzupełnia go o wymagania C5 (FTS, low-speed mode itd.).' },

  { id: 13, category: 'przepisy',
    question: 'Operator chce wykonać operację STS-01. Jaki dokument musi złożyć w ULC, by legalnie operować?',
    options: ['Wniosek o zezwolenie ULC', 'Oświadczenie operatora (Declaration)', 'Indywidualny SORA', 'Certyfikat AOC'],
    correct: 1, explanation: 'STS to scenariusz standardowy — wystarczy oświadczenie operatora składane przez drony.ulc.gov.pl. SORA jest dla operacji poza scenariuszami standardowymi.' },

  { id: 14, category: 'przepisy',
    question: 'Ile wynosi opłata za potwierdzenie kompletności oświadczenia operatora w ULC (za jeden scenariusz STS)?',
    options: ['25 zł', '50 zł', '100 zł', 'bezpłatnie'],
    correct: 1, explanation: 'Od końca lutego 2025 r. — 50 zł za potwierdzenie odbioru i kompletności oświadczenia do jednego scenariusza STS (źródło: taryfa opłat ULC). Każda zmiana w wydanym potwierdzeniu: 10 zł. Oświadczenie nie ma kalendarzowego „terminu ważności" — wygasa, gdy zmieniają się deklarowane okoliczności (sprzęt, pilot, OM, OC) i wymaga wtedy aktualizacji.' },

  { id: 15, category: 'przepisy',
    question: 'Ile lat jest ważny certyfikat wiedzy teoretycznej STS po zdaniu egzaminu?',
    options: ['1 rok', '2 lata', '5 lat', '10 lat'],
    correct: 2, explanation: 'Certyfikat ważny 5 lat. W okresie ważności można przedłużyć przez ponowny egzamin lub szkolenie przypominające.' },

  { id: 16, category: 'przepisy',
    question: 'Czym jest strefa DRA-P w polskiej przestrzeni dronowej?',
    options: ['Informacyjna — wymaga elektronicznego check-in', 'Ograniczona — loty za zgodą i na warunkach PAŻP', 'Zakazana — loty niedozwolone (poza wojskiem/służbami)', 'Szkoleniowa — dla początkujących pilotów'],
    correct: 2, explanation: 'DRA-P (Prohibited) to strefa zakazana. DRA-R (Restricted) jest ograniczona, DRA-T (Traffic) informacyjna z check-in.' },

  { id: 17, category: 'przepisy',
    question: 'Strefa DRA-R w polskiej przestrzeni dronowej:',
    options: ['Jest całkowicie zakazana', 'Pozwala na operacje za zgodą i na warunkach określonych przez PAŻP', 'Jest dostępna tylko dla wojska', 'Jest dostępna tylko dla pilotów BVLOS'],
    correct: 1, explanation: 'DRA-R (Restricted) — operacje możliwe ale wymagają zgody i warunków PAŻP. DRA-P to dopiero "P jak Prohibited".' },

  { id: 18, category: 'przepisy',
    question: 'Od kiedy obowiązuje wymóg aktywnego systemu zdalnej identyfikacji (Remote ID / DRI) dla dronów klasy C1, C2, C3, C5 i C6 w kategorii szczególnej?',
    options: ['1 stycznia 2021', '1 stycznia 2024', '1 marca 2025', '1 stycznia 2026'],
    correct: 1, explanation: 'Od 1 stycznia 2024 r. każdy dron w kategorii szczególnej (i klas C1–C6 poza C4) musi mieć aktywny i zaktualizowany Remote ID.' },

  { id: 19, category: 'przepisy',
    question: 'Które klasy dronów są ZWOLNIONE z obowiązku Remote ID?',
    options: ['C1 i C2', 'C5 i C6', 'C0 i C4', 'wszystkie poza C5'],
    correct: 2, explanation: 'C0 (< 250 g) i C4 ("model klasyczny", brak automatyki) są zwolnione. Pozostałe klasy (C1, C2, C3, C5, C6) wymagają Remote ID.' },

  { id: 20, category: 'przepisy',
    question: 'Co MUSI być widocznie umieszczone na bezzałogowym statku powietrznym?',
    options: ['Numer telefonu pilota', 'Numer rejestracyjny operatora (uzyskany przy rejestracji w ULC)', 'Pełna instrukcja operacyjna', 'Polisa OC'],
    correct: 1, explanation: 'Numer operatora (format POL-XXX-XXXXXXXXXX) musi być trwale i widocznie umieszczony na każdym dronie operowanym przez tego operatora.' },

  { id: 21, category: 'przepisy',
    question: 'Operator drona o MTOM 22 kg planuje operację STS-01. Ubezpieczenie OC:',
    options: ['Jest nieobowiązkowe, można latać bez', 'Jest obowiązkowe (MTOM ≥ 20 kg, rozp. 785/2004)', 'Jest obowiązkowe tylko dla operacji nocnych', 'Wystarcza polisa NNW pilota'],
    correct: 1, explanation: 'Rozporządzenie (WE) 785/2004 wymaga OC dla statków powietrznych ≥ 20 kg. W praktyce każdy operator komercyjny ma OC niezależnie od MTOM.' },

  { id: 22, category: 'przepisy',
    question: 'W jakim terminie należy zgłosić wypadek BSP do PKBWL?',
    options: ['W ciągu 24 godzin', 'Niezwłocznie, max 72 godziny', 'W ciągu 7 dni', 'W ciągu 30 dni'],
    correct: 1, explanation: 'Zgodnie z rozporządzeniem 376/2014/UE wypadki i poważne incydenty zgłaszamy niezwłocznie, max 72 godziny — do PKBWL (Państwowa Komisja Badania Wypadków Lotniczych).' },

  { id: 23, category: 'przepisy',
    question: 'Pilot drona zauważa, że jego operacja stwarza zagrożenie dla podchodzącego do lądowania śmigłowca HEMS. Powinien:',
    options: ['Kontynuować, śmigłowiec ma się dostosować', 'Przerwać lot i ustąpić pierwszeństwa', 'Lecieć wyżej, by go ominąć', 'Zgłosić zdarzenie po locie i kontynuować'],
    correct: 1, explanation: 'Pilot drona ma OBOWIĄZEK przerwać lot, jeżeli operacja stwarza zagrożenie dla innych statków powietrznych. Manned aviation ma bezwzględne pierwszeństwo.' },

  { id: 24, category: 'przepisy',
    question: 'Operator złożył oświadczenie STS-01 w Polsce. Czy może wykonywać operacje na podstawie tego oświadczenia w Niemczech?',
    options: ['Nie, każde państwo wymaga osobnego oświadczenia', 'Tak, ale tylko po notyfikacji państwa docelowego — wzajemne uznawanie w UE', 'Tak, ale dron musi mieć niemiecką rejestrację', 'Tylko jeśli ma certyfikat LUC'],
    correct: 1, explanation: 'Zasada wzajemnego uznawania (UAS.SPEC.040) — oświadczenie z państwa rejestracji obowiązuje w całej UE po notyfikacji państwa docelowego.' },

  { id: 25, category: 'przepisy',
    question: 'Pilot wykonuje operację STS-02. Czy może latać dronem z pickupa jadącego 30 km/h?',
    options: ['Tak, jeśli kierowca jest poinformowany', 'Tak, ale tylko VLOS', 'Nie, w STS-01 i STS-02 obowiązuje zakaz operowania z poruszającego się pojazdu', 'Tylko jeśli pojazd jedzie ≤ 10 km/h'],
    correct: 2, explanation: 'UAS.STS-01.040 pkt 2 lit. e oraz UAS.STS-02.040 pkt 2 lit. d — pilot NIE MOŻE obsługiwać drona z poruszającego się pojazdu w żadnym z tych scenariuszy.' },

  { id: 26, category: 'przepisy',
    question: 'Pilot Adam ukończył lot. Wartownik Bartek (równie wykwalifikowany pilot) chce kontynuować operację swoim kontrolerem. Czy może przejąć drona w STS-01?',
    options: ['Tak, jeśli Bartek ma własny certyfikat STS-01', 'Tak, ale tylko po pełnym lądowaniu i ponownym starcie', 'Nie, w STS-01 nie wolno przekazywać kontroli między stacjami', 'Tak, ale tylko po zgłoszeniu do ULC'],
    correct: 2, explanation: 'UAS.STS-01.040 pkt 2 lit. f — pilot NIE MOŻE przekazywać kontroli innej stacji kierowania. Identycznie w STS-02.' },

  { id: 27, category: 'przepisy',
    question: 'Czy w STS-01 i STS-02 wolno przewozić materiały niebezpieczne (DG)?',
    options: ['Tak, bez ograniczeń', 'Tak, ale tylko z zezwoleniem ULC', 'Nie, bezwzględny zakaz', 'Tylko w obszarach niezaludnionych'],
    correct: 2, explanation: 'Zarówno UAS.STS-01.010 jak i UAS.STS-02.010 zakazują przewozu materiałów niebezpiecznych — to wymóg bezwzględny w obu scenariuszach.' },

  { id: 28, category: 'przepisy',
    question: 'Co to są krajowe scenariusze NSTS (NSTS-01 do NSTS-08)?',
    options: ['Identyczne ze scenariuszami unijnymi STS-01/02', 'Polskie scenariusze przejściowe obowiązujące do 31 grudnia 2025 r.', 'Scenariusze dla operatorów wojskowych', 'Scenariusze dla dronów certyfikowanych'],
    correct: 1, explanation: 'NSTS to polskie scenariusze krajowe (NSTS-01 do NSTS-08) wprowadzone wytycznymi ULC w 2023 r. Obowiązują do 31 grudnia 2025 r., potem zastępują je unijne STS-01/02.' },

  { id: 29, category: 'przepisy',
    question: 'Kategoria szczególna może być realizowana na trzy sposoby. Które z poniższych NIE należy do tych ścieżek?',
    options: ['Scenariusz standardowy STS + oświadczenie operatora', 'PDRA + zezwolenie na podstawie predefiniowanej oceny', 'SORA + indywidualne zezwolenie ULC', 'Egzamin A1/A3 — wystarczy do operacji w kat. szczególnej'],
    correct: 3, explanation: 'A1/A3 to kategoria OTWARTA, nie szczególna. W kat. szczególnej trzeba użyć STS, PDRA lub SORA (lub mieć LUC).' },

  { id: 30, category: 'przepisy',
    question: 'Operator chce latać dronem klasy C3 z accessories kit C5 w STS-01. Czy to jest dopuszczalne?',
    options: ['Nie, w STS-01 dopuszczona jest wyłącznie klasa C5', 'Tak, C3 + kit upodabniający go do C5 jest zgodny z UAS.STS-01.020', 'Tak, ale tylko z dodatkowym zezwoleniem ULC', 'Tak, ale tylko do MTOM < 4 kg'],
    correct: 1, explanation: 'UAS.STS-01.020 pkt 1 lit. f: dron klasy C5 LUB dron klasy C3 + accessories kit. Obie ścieżki są równouprawnione.' },

  { id: 31, category: 'przepisy',
    question: 'Wytyczne nr 1/2025 Prezesa ULC weszły w życie:',
    options: ['1 stycznia 2025', '1 marca 2025', '1 stycznia 2024', '1 lipca 2025'],
    correct: 1, explanation: 'Wytyczne nr 1/2025 z dnia 3 stycznia 2025 r. weszły w życie 1 marca 2025 r. (§ 23 wytycznych).' },

  { id: 32, category: 'przepisy',
    question: 'Operator zarejestrowany w Polsce ma numer operatora typu POL-XXX-... Ważność rejestracji wynosi:',
    options: ['Bezterminowo, raz zarejestrowany', '1 rok — wymaga corocznego odnowienia', '5 lat', '2 lata'],
    correct: 1, explanation: 'Rejestracja operatora ważna 12 miesięcy, wymaga corocznego odnowienia na drony.ulc.gov.pl.' },

  { id: 33, category: 'przepisy',
    question: 'W jakiej odległości od sztucznej przeszkody (np. komina) wyższej niż 105 m można podnieść wysokość operacji w STS-01?',
    options: ['Bez ograniczeń odległości, +30 m powyżej przeszkody', 'W odległości 50 m od przeszkody, do 15 m powyżej (na wniosek właściciela)', 'W odległości 100 m, +50 m powyżej', 'Nie ma takiej możliwości — 120 m to twardy limit'],
    correct: 1, explanation: 'UAS.STS-01.010 pkt 2: w odległości 50 m poziomo od sztucznej przeszkody > 105 m wysokość można zwiększyć max o 15 m powyżej przeszkody, na wniosek podmiotu odpowiedzialnego za przeszkodę.' },

  { id: 34, category: 'przepisy',
    question: 'Maksymalna wysokość przestrzeni operacyjnej (Operational Volume) w STS-01 w terenie płaskim, BEZ korzystania z wyjątku dla wysokich przeszkód, wynosi:',
    options: ['120 m AGL', '125 m AGL', '150 m AGL (120 m max wysokości lotu + 30 m Contingency Volume)', '195 m AGL'],
    correct: 2, explanation: 'Operational Volume = max wysokość lotu (120 m AGL) + Contingency Volume (+30 m w pionie). Z wyjątkiem dla przeszkód > 105 m (UAS.STS-01.010 pkt 2) max wysokość lotu rośnie do „wysokość przeszkody + 15 m", a OV rośnie razem z nią.' },

  // ========================================================
  // PROCEDURY OPERACYJNE (35–66)
  // ========================================================
  { id: 35, category: 'procedury',
    question: 'Co MUSI zrobić operator przed wpuszczeniem osób do kontrolowanego obszaru naziemnego (GRB)?',
    options: ['Tylko sprawdzić ich uprawnienia lotnicze', 'Poinformować o ryzyku, przeszkolić z procedur ostrożności, uzyskać wyraźną zgodę', 'Wystarczy zawrzeć z nimi pisemną umowę o pracę', 'Nic — wystarczy obecność asystenta'],
    correct: 1, explanation: 'UAS.STS-01.030/02.030: trzy warunki — informacja o ryzyku, przeszkolenie z procedur, wyraźna zgoda. Stąd nazwa „kontrolowany obszar naziemny".' },

  { id: 36, category: 'procedury',
    question: 'Co to jest Instrukcja Operacyjna (OM)?',
    options: ['Instrukcja użytkownika drona od producenta', 'Wymagany dokument operatora STS opisujący strukturę, sprzęt, procedury, ERP', 'Plan misji na konkretny lot', 'Dokument PAŻP dla pilota'],
    correct: 1, explanation: 'OM to dokument WYMAGANY (zawartość w Appendix 5 do 2019/947) opisujący operatora, sprzęt, procedury (pre/in/post-flight, awaryjne), plan ERP, polityki itd.' },

  { id: 37, category: 'procedury',
    question: 'Pilot zauważa nagły spadek liczby satelitów GPS z 14 do 4 podczas lotu. Powinien:',
    options: ['Aktywować RTH — system poradzi sobie z 4 satelitami', 'Przejść w tryb manualny (Atti) i ostrożnie sprowadzić drona', 'Wylądować awaryjnie z aktywacją FTS', 'Kontynuować lot — to chwilowy spadek'],
    correct: 1, explanation: 'Lost GPS = przejście w tryb Atti (attitude only, bez pozycjonowania). Pilot manualnie sprowadza drona w bezpieczne miejsce.' },

  { id: 38, category: 'procedury',
    question: 'Co dzieje się przy utracie łącza C2 (lost link) w prawidłowo skonfigurowanym dronie klasy C5?',
    options: ['Dron natychmiast spada', 'Aktywuje się FailSafe — typowo RTH lub auto-land', 'Wybucha bateria', 'Dron leci dalej po ostatnim torze'],
    correct: 1, explanation: 'FailSafe to programowane zachowanie drona po lost link. W STS-01/02 musi działać niezawodnie — najczęściej RTH, czasem auto-land w miejscu utraty.' },

  { id: 39, category: 'procedury',
    question: 'Bateria drona właśnie się zapaliła na ziemi. Czym ją gasić?',
    options: ['Wodą z węża strażackiego', 'Piaskiem, kocem gaśniczym lub proszkiem ABC', 'Tylko gaśnicą śniegową CO₂', 'Pianką gaśniczą wodno-mechaniczną'],
    correct: 1, explanation: 'LiPo gasi się piaskiem, kocem gaśniczym lub proszkiem. WODĄ NIGDY — lit reaguje z wodą, ogień się wzmaga. Ewakuacja, brak gaszenia "twarzą w twarz".' },

  { id: 40, category: 'procedury',
    question: 'Co należy zrobić, gdy osoba postronna wtargnie do kontrolowanego obszaru naziemnego (GRB) podczas operacji?',
    options: ['Natychmiast wylądować dronem w bezpiecznym miejscu i przerwać operację', 'Kontynuować lot, asystent powinien wyprosić osobę', 'Krzyknąć ostrzeżenie i wzlecieć wyżej', 'Zrobić zdjęcie i wezwać policję'],
    correct: 0, explanation: 'Bezpieczeństwo osób trzecich ma pierwszeństwo. Natychmiastowe lądowanie w bezpiecznym miejscu, przerwanie operacji, briefing osoby + zgłoszenie zdarzenia w razie potrzeby.' },

  { id: 41, category: 'procedury',
    question: 'Ile dronów może obsługiwać jeden pilot równocześnie w STS-01 i STS-02?',
    options: ['Maks. 2', 'Maks. 5', 'Maks. 1 (jeden dron na jednego pilota)', 'Bez limitu, jeśli wszystkie są zaprogramowane'],
    correct: 2, explanation: 'UAS.STS-01.040 pkt 2 lit. d i UAS.STS-02.040 pkt 2 lit. c — pilot obsługuje tylko JEDEN dron w danym czasie.' },

  { id: 42, category: 'procedury',
    question: 'Co jest typowo pierwszym priorytetem reakcji pilota w sytuacji awaryjnej?',
    options: ['Ratowanie drona za wszelką cenę', 'Bezpieczeństwo osób trzecich, potem załogi, dopiero potem sprzęt', 'Wykonanie zdjęć awarii do dokumentacji', 'Zgłoszenie sytuacji do ULC'],
    correct: 1, explanation: 'Hierarchia: 1) osoby trzecie, 2) załoga, 3) sprzęt. Sprzęt jest replaceable, ludzie nie.' },

  { id: 43, category: 'procedury',
    question: 'Co musi zawierać Plan Reagowania Awaryjnego (ERP) w Instrukcji Operacyjnej (OM)?',
    options: ['Tylko numery do ULC', 'Plan ograniczenia eskalacji, warunki powiadamiania organów, kryteria identyfikacji sytuacji awaryjnej, podział obowiązków', 'Wzory faktur za szkody', 'Lista pilotów rezerwowych'],
    correct: 1, explanation: 'UAS.STS-01.030 pkt 4 / 02.030 pkt 4 określa, że ERP MUSI zawierać te cztery elementy minimum.' },

  { id: 44, category: 'procedury',
    question: 'Pilot powinien rozpocząć przygotowywanie się do powrotu (RTH) gdy stan baterii wynosi:',
    options: ['10% — wystarczy', '20–30% — zostaw min. 20% rezerwy na powrót i lądowanie', '50% — najlepiej wcześniej', 'Dopóki nie zaświeci się alarm krytyczny'],
    correct: 1, explanation: 'Standardowa praktyka: pierwsze ostrzeżenie ~30%, wymuszony RTH ~15%, krytyczne ~5%. Pilot planuje powrót, by zostawić MIN. 20% rezerwy.' },

  { id: 45, category: 'procedury',
    question: 'Gdzie sprawdzić aktualne NOTAM-y przed operacją drona?',
    options: ['Tylko w prognozie pogody Windy', 'AIS PANSA (ais.pansa.pl) lub aplikacja DroneTower', 'Wystarczy zapytać znajomego pilota', 'Notatki nie dotyczą operacji BSP'],
    correct: 1, explanation: 'NOTAM-y publikuje AIS PANSA. Aplikacje takie jak DroneTower / DroneRadar automatycznie pokazują je dla obszaru operacji.' },

  { id: 46, category: 'procedury',
    question: 'Która część AIP Polska jest najważniejsza dla pilota drona, jeśli chodzi o strefy powietrzne?',
    options: ['AIP-AD (Aerodromes)', 'AIP-GEN (informacje ogólne)', 'AIP-ENR (En-route — strefy i przestrzeń powietrzna)', 'VFR Manual'],
    correct: 2, explanation: 'AIP-ENR zawiera pełną informację o strukturach przestrzeni: CTR, ATZ, TMA, EP R/D/P, TSA/TRA itd. Dla dronów najważniejsza część AIP.' },

  { id: 47, category: 'procedury',
    question: 'Pilot drona planuje operację w terenie. W jakiej kolejności wykonać proces planowania pre-flight?',
    options: ['Najpierw start, potem checklisty', 'Analiza obszaru i stref → pogoda → dokumenty → plan misji → briefing załogi → site survey na miejscu → checklist drona', 'Tylko checklist drona — reszta nieważna', 'Kopia procedury z internetu i lot'],
    correct: 1, explanation: 'Standardowa kolejność: planowanie (strefy, pogoda, dokumenty, plan misji, załoga) → site survey na miejscu → wygrodzenie i briefing → pre-flight checklist → GO/NO-GO.' },

  { id: 48, category: 'procedury',
    question: 'Pre-flight checklist drona powinna zawierać między innymi:',
    options: ['Tylko sprawdzenie poziomu baterii', 'Wizualną kontrolę śmigieł, baterii, kalibrację kompasu (gdy wymagana), test GPS, RTH, FailSafe, Remote ID, hover test', 'Tylko wstępne paryzowanie z kontrolerem', 'Wyłącznie sprawdzenie kamery'],
    correct: 1, explanation: 'Profesjonalny checklist obejmuje wszystkie wymienione elementy. Każdy z osobna może uratować lot.' },

  { id: 49, category: 'procedury',
    question: 'Jak często METAR jest aktualizowany?',
    options: ['Co 5 minut', 'Co 30 minut', 'Co godzinę', 'Co 3 godziny'],
    correct: 1, explanation: 'METAR (regularny) jest publikowany co 30 minut. SPECI (special) między METAR-ami przy znaczących zmianach pogody.' },

  { id: 50, category: 'procedury',
    question: 'Obserwator przestrzeni powietrznej (AO) w STS-02 ma między innymi obowiązek:',
    options: ['Sterować dronem w razie potrzeby', 'Prowadzić obserwację przestrzeni i ostrzegać pilota o zagrożeniach kolizyjnych', 'Tylko obserwować kamerę drona', 'Sporządzać raporty operacyjne'],
    correct: 1, explanation: 'UAS.STS-02.050 definiuje rolę AO: obserwacja przestrzeni, identyfikacja ryzyka kolizji, znajomość pozycji drona, ostrzeganie pilota, pomoc w unikaniu.' },

  { id: 51, category: 'procedury',
    question: 'Co MUSI być zapewnione między pilotem a obserwatorami przestrzeni powietrznej (AO) w STS-02?',
    options: ['Tylko widoczność wzajemna', 'Niezawodne, dwukierunkowe środki łączności', 'Wystarczy gestykulacja', 'Łączność tylko jednostronna (AO słucha pilota)'],
    correct: 1, explanation: 'UAS.STS-02.020 pkt 6 lit. e — niezawodne i skuteczne środki komunikacji DWUKIERUNKOWEJ.' },

  { id: 52, category: 'procedury',
    question: 'Pilot w STS-02 zauważa, że dron może wyjść poza Flight Geography. Powinien:',
    options: ['Kontynuować — to nie problem', 'Zastosować procedury bezpieczeństwa zdefiniowane w OM (kontrybucja)', 'Natychmiast aktywować FTS', 'Tylko zwiększyć wysokość'],
    correct: 1, explanation: 'UAS.STS-02.040 pkt 2 lit. g — przy przesłankach przekroczenia FG stosuje się procedury BEZPIECZEŃSTWA (contingency) z OM. FTS aktywuje się dopiero przy ryzyku przekroczenia Operational Volume.' },

  { id: 53, category: 'procedury',
    question: 'Pilot w STS-02 ma przesłanki, że dron może wyjść poza Operational Volume. Powinien:',
    options: ['Zwolnić i obserwować', 'Aktywować środki służące zakończeniu lotu (FTS) zgodnie z procedurami awaryjnymi OM', 'Wezwać AO do interwencji', 'Tylko ostrzec asystenta'],
    correct: 1, explanation: 'UAS.STS-02.040 pkt 2 lit. h — przy ryzyku przekroczenia Operational Volume stosuje się procedury AWARYJNE z OM, w tym uruchomienie FTS.' },

  { id: 54, category: 'procedury',
    question: 'Co powinien zrobić pilot natychmiast po wylądowaniu drona, w ramach procedur post-flight?',
    options: ['Wyłączenie i zabezpieczenie systemu, przegląd polotowy, rejestracja danych lotu, debriefing załogi', 'Tylko schować drona do plecaka', 'Wszystkie zdjęcia od razu wysłać klientowi', 'Spakować się i wracać do domu'],
    correct: 0, explanation: 'Procedury post-flight to ustrukturyzowane czynności: wyłączenie i zabezpieczenie systemu, inspekcja drona, logi, debriefing, ewentualne zgłoszenia zdarzeń.' },

  { id: 55, category: 'procedury',
    question: 'Pilot widzi nieoczekiwanie zbliżający się samolot rolniczy lecący ok. 30 m AGL. Powinien:',
    options: ['Kontynuować — samolot ma większy zasięg widzenia', 'Natychmiast zniżyć drona i ustąpić pierwszeństwa', 'Wzlecieć powyżej 120 m', 'Aktywować RTH i odejść'],
    correct: 1, explanation: 'Statek załogowy ma bezwzględne pierwszeństwo. Najszybsze rozwiązanie to natychmiastowe zniżenie/lądowanie i ustąpienie drogi.' },

  { id: 56, category: 'procedury',
    question: 'Co należy zrobić, gdy pilot popełni rażące naruszenie procedur, ale nie doszło do wypadku?',
    options: ['Zataić, by uniknąć kary', 'Zgłosić zdarzenie zgodnie z "just culture" — system zachęca do zgłaszania nawet drobnych incydentów', 'Czekać aż znajdą inni', 'Tylko zapisać w prywatnym dzienniku'],
    correct: 1, explanation: 'Zasada "just culture" (376/2014/UE) — zgłoszenie nie skutkuje karą poza rażącym niedbalstwem/umyślnością. Im więcej zgłoszeń, tym bezpieczniejszy system.' },

  { id: 57, category: 'procedury',
    question: 'Co rozporządzenie 2019/947 mówi o alternatywnych miejscach lądowania (alternate landing sites) w STS-02?',
    options: ['Wymaga MINIMUM 2 alternat na każdą trasę', 'Wymaga 1 alternaty co 500 m', 'Nie podaje twardej liczby — operator określa w OM na podstawie analizy ryzyka i charakteru trasy (dobra praktyka: ≥ 2 alternaty)', 'Alternaty są zakazane — dron MUSI wracać do punktu startu'],
    correct: 2, explanation: 'Przepis nie podaje sztywnej liczby — to operator w Instrukcji Operacyjnej (OM) określa procedurę i liczbę alternat odpowiednio do długości trasy, charakteru terenu, klasy drona i pogody. W praktyce branżowej i w dobrych OM przyjmuje się minimum 2 alternaty na każdy odcinek trasy BVLOS.' },

  { id: 58, category: 'procedury',
    question: 'Operator drona zarządzający kilkoma operacjami jednocześnie powinien:',
    options: ['Mieć tylko jednego pilota za wszystko', 'Mieć podział obowiązków zapisany w OM (kierownik odpowiedzialny, kierownik operacji, piloci, AO)', 'Improwizować zależnie od sytuacji', 'Zatrudnić agencję ochrony'],
    correct: 1, explanation: 'OM musi opisać strukturę organizacyjną i podział obowiązków między personelem operacyjnym. To zapewnia jasność ról i odpowiedzialności.' },

  { id: 59, category: 'procedury',
    question: 'Czego NIE wolno robić podczas egzaminu teoretycznego STS w trybie online?',
    options: ['Pić wody', 'Sporządzać notatek na papierze', 'Opuszczać pomieszczenia / wyłączać kamerę / mikrofonu / korzystać z internetu', 'Używać kalkulatora'],
    correct: 2, explanation: '§ 16 Wytycznych nr 1/2025 — zakaz opuszczania pomieszczenia. § 17 — nadzór wymaga włączonej kamery, mikrofonu, udostępniania ekranu. Naruszenie = wynik negatywny.' },

  { id: 60, category: 'procedury',
    question: 'Jakie 3 elementy MUSZĄ zostać ustanowione przed startem w stosunku do osób w obszarze kontrolowanym?',
    options: ['Wynagrodzenie, NDA, polisa', 'Informacja o ryzyku, przeszkolenie z procedur, wyraźna zgoda', 'Tylko zgoda', 'Tylko przeszkolenie'],
    correct: 1, explanation: 'UAS.STS-01.030 pkt 9 / 02.030 pkt 9 wymaga wszystkich trzech elementów łącznie.' },

  { id: 61, category: 'procedury',
    question: 'Co powinien zawierać briefing załogi przed operacją STS-02?',
    options: ['Tylko godziny pracy', 'Role pilota i AO, plan misji, częstotliwości łączności, procedury awaryjne, kryteria abortu', 'Tylko prognozę pogody', 'Tylko mapę stref'],
    correct: 1, explanation: 'Pełen briefing pokrywa: role, plan, łączność, procedury awaryjne, kryteria GO/NO-GO i abortu. CRM w praktyce.' },

  { id: 62, category: 'procedury',
    question: 'Jakie jest minimum sprawdzenia drona w przeglądzie post-flight?',
    options: ['Tylko stan baterii', 'Stan śmigieł, kadłuba, baterii, gimbala, soczewek kamery, ewentualne uszkodzenia', 'Wyłącznie aktualizacja firmware', 'Sprawdzenie tylko logów lotu'],
    correct: 1, explanation: 'Inspekcja polotowa to wzrokowy przegląd całości — to ostatnia szansa, by wyłapać mikrouszkodzenia przed kolejnym lotem.' },

  { id: 63, category: 'procedury',
    question: 'Kto jest odpowiedzialny za posiadanie aktualnej Instrukcji Operacyjnej (OM)?',
    options: ['Producent drona', 'Operator (osoba/firma)', 'PKBWL', 'Pilot indywidualnie'],
    correct: 1, explanation: 'OM to dokument OPERATORA (osoby prawnej/fizycznej, która składa oświadczenie). Pilot ma dostęp do OM, ale to operator nią zarządza i aktualizuje.' },

  { id: 64, category: 'procedury',
    question: 'Pilot wykonuje rutynowy lot, gdy nagle dron zaczyna gwałtownie się oddalać poza Operational Volume i nie reaguje na komendy. Co to za sytuacja?',
    options: ['Lost link — czekaj na FailSafe', 'Fly-away — należy aktywować FTS (np. spadochron)', 'Low battery — RTH', 'Lost GPS — Atti mode'],
    correct: 1, explanation: 'Fly-away to utrata kontroli mimo działającego łącza — kluczowe użycie FTS (np. spadochron klasy C5) by zatrzymać drona w sposób kontrolowany.' },

  { id: 65, category: 'procedury',
    question: 'Pilot w STS-01 chce wystartować z miejsca, w którym wewnątrz wyznaczonego GRB znajduje się ekipa filmowa (5 osób) niezwiązana z operatorem drona. Kierownik produkcji prosi: „lećcie, ekipa się odsunie". Pilot powinien:',
    options: ['Wystartować — ekipa się odsunie', 'Najpierw poinformować ekipę o ryzyku, przeszkolić z procedur ostrożności i uzyskać wyraźną zgodę — dopiero wtedy stają się „osobami uczestniczącymi" i mogą być w GRB', 'Wystartować jeśli ekipa odsunie się o min. 5 m', 'Przerwać operację — w GRB nigdy nie może być nikogo poza pilotem'],
    correct: 1, explanation: 'UAS.STS-01.030 pkt 9: w kontrolowanym obszarze naziemnym mogą się znaleźć WYŁĄCZNIE osoby uczestniczące w operacji, czyli takie, które (1) zostały poinformowane o ryzyku, (2) przeszkolone z procedur ostrożności, (3) wyraźnie wyraziły zgodę. Spełnienie tych trzech warunków „włącza" ekipę do operacji i pozwala na lot.' },

  { id: 66, category: 'procedury',
    question: 'Kiedy aktywuje się Return To Home (RTH)?',
    options: ['Tylko po ręcznej komendzie pilota', 'Pilot ręcznie, automatycznie przy lost link (FailSafe) lub krytycznie niskiej baterii', 'Tylko po 30 min lotu', 'Wyłącznie przy wyładowaniach atmosferycznych'],
    correct: 1, explanation: 'RTH może być wyzwolone na 3 sposoby: ręczny przycisk, FailSafe (lost link), low battery threshold.' },

  // ========================================================
  // RYZYKO NA ZIEMI (67–98)
  // ========================================================
  { id: 67, category: 'ryzyko-ziemia',
    question: 'Minimalny bufor ryzyka naziemnego (GRB) dla drona o MTOM 8 kg lecącego na wysokości 60 m AGL w STS-01 (untethered) wynosi:',
    options: ['10 m', '15 m', '30 m', '45 m'],
    correct: 1, explanation: 'Tabela UAS.STS-01.020: dla wysokości 60 m i MTOM ≤ 10 kg → GRB = 15 m. Dla MTOM > 10 kg byłoby 30 m.' },

  { id: 68, category: 'ryzyko-ziemia',
    question: 'Minimalny GRB dla drona MTOM 15 kg na wysokości 120 m AGL w STS-01:',
    options: ['25 m', '45 m', '60 m', '75 m'],
    correct: 2, explanation: 'Tabela UAS.STS-01.020: dla wysokości 120 m i MTOM > 10 kg → GRB = 60 m.' },

  { id: 69, category: 'ryzyko-ziemia',
    question: 'Minimalny GRB dla drona MTOM 5 kg na wysokości 30 m AGL w STS-01:',
    options: ['10 m', '20 m', '5 m', '15 m'],
    correct: 0, explanation: 'Tabela UAS.STS-01.020: dla wysokości 30 m i MTOM ≤ 10 kg → GRB = 10 m.' },

  { id: 70, category: 'ryzyko-ziemia',
    question: 'Pilot planuje lot dronem 18 kg na wysokości 75 m AGL w STS-01. Jaki minimum GRB powinien wyznaczyć?',
    options: ['30 m', '45 m', '60 m', '20 m'],
    correct: 1, explanation: 'Wysokość 75 m zaokrąglamy w górę do 90 m. Dla MTOM > 10 kg → GRB = 45 m. Zaokrąglanie odległości zawsze "konserwatywnie".' },

  { id: 71, category: 'ryzyko-ziemia',
    question: 'Dron na uwięzi o długości uwięzi 18 m. Jaki promień kontrolowanego obszaru naziemnego w STS-01?',
    options: ['18 m', '23 m (długość uwięzi + 5 m)', '36 m', '50 m'],
    correct: 1, explanation: 'UAS.STS-01.020: dla dronów tethered — promień = długość uwięzi + 5 m, środek w punkcie mocowania.' },

  { id: 72, category: 'ryzyko-ziemia',
    question: 'Co to jest Flight Geography (FG)?',
    options: ['Obszar, w którym dron może się znaleźć po awarii', 'Strefa, w której planowo lata dron', 'Cała przestrzeń powietrzna nad operacją', 'Bufor poza kontrolowanym obszarem'],
    correct: 1, explanation: 'Flight Geography to STREFA PLANOWANEGO LOTU. Otacza ją Contingency Volume (+10 m poziomo, +30 m pionowo), a poza CV jest Ground Risk Buffer.' },

  { id: 73, category: 'ryzyko-ziemia',
    question: 'Granica zewnętrzna Contingency Volume w STS-01 i STS-02:',
    options: ['Pokrywa się z granicą Flight Geography', 'Min. 5 m poza FG', 'Min. 10 m poza Flight Geography', 'Min. 25 m poza FG'],
    correct: 2, explanation: 'Zarówno UAS.STS-01.020 jak i UAS.STS-02.020 wymagają, by zewnętrzna granica Contingency wykraczała co najmniej 10 m poza Flight Geography.' },

  { id: 74, category: 'ryzyko-ziemia',
    question: 'Maksymalna wysokość Operational Volume w STS-01 nad teren płaski wynosi:',
    options: ['100 m AGL', '120 m AGL', '150 m AGL (120 + 30 m Contingency)', '170 m AGL'],
    correct: 2, explanation: 'Max wysokość lotu (Flight Geography) = 120 m, plus 30 m Contingency pionowo = 150 m max Operational Volume.' },

  { id: 75, category: 'ryzyko-ziemia',
    question: 'W STS-02 sposób obliczania GRB jest oparty na:',
    options: ['Stałej tabeli, identycznej jak w STS-01', 'Maksymalnej prędkości drona, czasie reakcji pilota i drodze zatrzymania po aktywacji FTS', 'Wyłącznie MTOM drona', 'Powierzchni Flight Geography'],
    correct: 1, explanation: 'STS-02 nie ma stałej tabeli. Wzór: GRB ≥ V_max × t_reakcji + droga_zatrzymania_FTS (parametry z instrukcji producenta).' },

  { id: 76, category: 'ryzyko-ziemia',
    question: 'Co oznacza wymóg "słabo zaludnione środowisko" w STS-02?',
    options: ['Całkowicie pusty teren', 'Niska gęstość zaludnienia oceniana wg metodyki JARUS/SORA (typowo tereny rolne, leśne)', 'Tereny rezerwatów przyrody', 'Tylko obszary > 50 km od miasta'],
    correct: 1, explanation: 'STS-02 dopuszcza obszary o niskiej gęstości zaludnienia. Mogą być pojedyncze budynki, ale nie centrum miasta.' },

  { id: 77, category: 'ryzyko-ziemia',
    question: 'Kluczowa funkcja FTS (Flight Termination System) w klasach C5 i C6 to:',
    options: ['Zwiększenie zasięgu', 'Mechanizm gwarantujący natychmiastowe zakończenie lotu (np. spadochron, autorotacja)', 'Lepsze obrazowanie kamery', 'Zwiększenie czasu lotu'],
    correct: 1, explanation: 'FTS to "system zakończenia lotu" — niezależny od głównego sterowania mechanizm, który pozwala na natychmiastowe zatrzymanie operacji. Wymagany w klasie C5 (STS-01) i C6 (STS-02).' },

  { id: 78, category: 'ryzyko-ziemia',
    question: 'Czym różni się geo-awareness od geofencing?',
    options: ['To synonimy', 'Geo-awareness = informacja o strefach (świadomość); Geofencing = aktywne ograniczenie (uniemożliwia)', 'Geofencing dotyczy tylko BVLOS', 'Geo-awareness wymaga internetu, geofencing nie'],
    correct: 1, explanation: 'Geo-awareness ostrzega pilota o strefach. Geofencing fizycznie nie pozwala dronowi wyjść poza zaprogramowany obszar (twarde lub miękkie ograniczenie).' },

  { id: 79, category: 'ryzyko-ziemia',
    question: 'Co jest WYMAGANYM elementem dla drona klasy C6 wykorzystywanego w STS-02?',
    options: ['Aktywny system zapobiegający przekroczeniu granic Flight Geography (geocaging)', 'Spadochron ratunkowy zgodny z ASIO', 'Drugi pilot w ramach łącza C2', 'Kamera 4K minimum'],
    correct: 0, explanation: 'UAS.STS-02.020 pkt 8 lit. b — dron MUSI być eksploatowany z aktywnym systemem zapobiegającym przekroczeniu granic Flight Geography (geocaging).' },

  { id: 80, category: 'ryzyko-ziemia',
    question: 'Pilot w STS-01 chce użyć drona z spadochronem ratunkowym. Spadochron jest częścią:',
    options: ['Standardowego wyposażenia C0', 'Wymogu FTS dla klasy C5 (typowy dla wiropłatów)', 'Tylko C3 + kit', 'Wszystkich klas, od C0 do C6'],
    correct: 1, explanation: 'Klasa C5 dla wiropłatów typowo realizuje FTS przez spadochron (np. ParaZero, ASIO). Inna realizacja FTS to autorotacja (helikoptery) lub kontrolowany crash.' },

  { id: 81, category: 'ryzyko-ziemia',
    question: 'Pojęcie "kontrolowany obszar naziemny" oznacza:',
    options: ['Każdy obszar, gdzie operuje dron', 'Obszar, w którym mogą znajdować się tylko osoby uczestniczące w operacji (poinformowane, przeszkolone, wyrażające zgodę)', 'Pole wojskowe', 'Strefa DRA-R'],
    correct: 1, explanation: 'Stąd nazwa "kontrolowany" — operator MUSI zapewnić, że nie ma w nim osób postronnych. To kluczowy element bezpieczeństwa w STS.' },

  { id: 82, category: 'ryzyko-ziemia',
    question: 'Co to są "legacy drones" w kontekście STS-01/02?',
    options: ['Drony zabytkowe z lat 80-tych', 'Istniejące drony bez oznaczenia C5/C6, dla których operator składa oświadczenie z analizą zgodności', 'Drony używane wyłącznie wojskowo', 'Drony klasy C0 sprzed 2020 r.'],
    correct: 1, explanation: 'Wielu operatorów używa profesjonalnych dronów (np. DJI Matrice) bez oznaczenia C5/C6. Można je używać w STS po analizie zgodności i dodatkowych procedurach w OM.' },

  { id: 83, category: 'ryzyko-ziemia',
    question: 'Pilot mierzy wysokość lotu drona w STS-01. Wysokość 120 m jest mierzona:',
    options: ['Od poziomu morza (AMSL)', 'Od najbliższego punktu powierzchni Ziemi pod dronem (AGL)', 'Od punktu startu', 'Od wysokości pilota'],
    correct: 1, explanation: 'UAS.STS-01.010 / 02.010 pkt 1: dron utrzymuje się w odległości 120 m od NAJBLIŻSZEGO PUNKTU POWIERZCHNI ZIEMI. Czyli AGL, śledzące teren.' },

  { id: 84, category: 'ryzyko-ziemia',
    question: 'MTOM oznacza:',
    options: ['Masę pustego drona bez baterii', 'Maximum Take-Off Mass — masa drona z baterią i ładunkiem w gotowości do startu', 'Masę średnią w typowej operacji', 'Maksymalną masę ładunku użytecznego'],
    correct: 1, explanation: 'MTOM to suma masy: rama, elektronika, bateria(e), payload (kamera, gimbal, dodatki) — wszystko, co dron unosi przy starcie.' },

  { id: 85, category: 'ryzyko-ziemia',
    question: 'Klasa C5 wymaga (oprócz innych): aktywny i zaktualizowany system Remote ID. Jakie konsekwencje, jeśli Remote ID jest wyłączony?',
    options: ['Bez znaczenia — to opcjonalne', 'Dron nie spełnia wymogu klasy C5; operacja STS-01 z nim NIE JEST legalna', 'Można latać, ale z mniejszą wysokością', 'Wymaga tylko zgłoszenia po locie'],
    correct: 1, explanation: 'Aktywny Remote ID to TWARDY wymóg STS-01 i STS-02. Bez niego operacja jest niezgodna z wymaganiami klasy i całego scenariusza.' },

  { id: 86, category: 'ryzyko-ziemia',
    question: 'Operator drona musi przed operacją załadować do drona aktualne dane o strefach geograficznych (geo-awareness). Co stanowi podstawę prawną?',
    options: ['Tylko zalecenie producenta', 'UAS.STS-01.030 pkt 7 (i UAS.STS-02.030 pkt 7) — obowiązek wgrania aktualnych informacji do geo-awareness', 'Tylko regulamin DJI', 'Wewnętrzna procedura operatora'],
    correct: 1, explanation: 'To wymóg prawny — operator MUSI wgrać aktualne dane stref geograficznych do drona przed operacją (jeśli funkcja jest dostępna).' },

  { id: 87, category: 'ryzyko-ziemia',
    question: 'Pilot widzi, że osoba postronna może wejść w GRB. Jakie środki redukcji ryzyka są najwłaściwsze ZANIM rozpocznie operację?',
    options: ['Tylko obserwować osoby', 'Wygrodzenie taśmą, oznakowanie, asystenci na obrzeżach, koordynacja z policją w gęstej zabudowie', 'Wykonać lot szybko, zanim ktoś wejdzie', 'Ignorować — to ryzyko mieszkańców'],
    correct: 1, explanation: 'Operator MUSI fizycznie zabezpieczyć GRB. Wygrodzenie + asystenci + jasne oznakowanie + ewentualna współpraca z policją w miastach.' },

  { id: 88, category: 'ryzyko-ziemia',
    question: 'Czas reakcji pilota i prędkość drona są kluczowe przy obliczaniu GRB w:',
    options: ['STS-01 (tabelaryczne wartości)', 'STS-02 (indywidualne obliczenie wg producenta)', 'Tylko PDRA-S02', 'Tylko operacjach SORA'],
    correct: 1, explanation: 'W STS-01 jest tabela (na podstawie wysokości i MTOM). W STS-02 obliczenie dynamiczne na podstawie max V drona × czas reakcji + droga zatrzymania FTS.' },

  { id: 89, category: 'ryzyko-ziemia',
    question: 'Pilot lokalizuje GRB blisko granicy lasu. Czy to dobre miejsce?',
    options: ['Tak, las pochłania ewentualne upadki', 'Nie — krawędzie lasu generują turbulencje mechaniczne, mogą wprowadzić drona w niekontrolowany lot', 'Tak, ale tylko w STS-02', 'Tak, drzewa absorbują uderzenia'],
    correct: 1, explanation: 'Krawędzie lasów, budynków, wzgórz tworzą turbulencje mechaniczne i wind shear. Lepsze są otwarte tereny, bez ostrych krawędzi geometrycznych.' },

  { id: 90, category: 'ryzyko-ziemia',
    question: 'Pole turbulencji za przeszkodą sięga ok.:',
    options: ['1× wysokości przeszkody', '3× wysokości przeszkody (pionowo) i 10× (poziomo)', '50× wysokości przeszkody', 'Bez znaczenia w STS'],
    correct: 1, explanation: 'Reguła kciuka: turbulencje sięgają ok. 3× wysokości przeszkody w pionie i 10× w poziomie z zawietrznej strony.' },

  { id: 91, category: 'ryzyko-ziemia',
    question: 'Pilot wybrał miejsce startu blisko linii wysokiego napięcia. Jakie ryzyko?',
    options: ['Brak ryzyka, linie są bezpieczne', 'EMI (zakłócenia elektromagnetyczne) — wpływ na kompas i łącze C2', 'Tylko estetyczne', 'Linie zwiększają zasięg drona'],
    correct: 1, explanation: 'Linie wysokiego napięcia generują pole elektromagnetyczne mogące zakłócić kompas, GPS i C2 — wskazówka kalibracji, lub lepiej zmiana miejsca startu.' },

  { id: 92, category: 'ryzyko-ziemia',
    question: 'W tabeli GRB dla STS-01: dron 4 kg, lot na wysokości 100 m. GRB =?',
    options: ['10 m', '15 m', '20 m', '25 m'],
    correct: 3, explanation: 'Wysokość 100 m zaokrąglamy w górę do 120 m. MTOM 4 kg ≤ 10 kg → GRB = 25 m.' },

  { id: 93, category: 'ryzyko-ziemia',
    question: 'Maksymalna prędkość lotu klasy C6 (50 m/s = 180 km/h) jest istotna, ponieważ:',
    options: ['Wpływa na czas dotarcia do celu', 'Pozwala obliczyć minimalny GRB w STS-02 (V × t_reakcji + droga zatrzymania)', 'Daje droższe ubezpieczenie', 'Zwiększa wymagania pogodowe'],
    correct: 1, explanation: 'Bez znajomości max V nie da się obliczyć GRB w STS-02. Operator MUSI uwzględnić specyfikację producenta.' },

  { id: 94, category: 'ryzyko-ziemia',
    question: 'Pilot stwierdza, że potencjalne miejsce lądowania awaryjnego znajduje się tylko w terenie bagnistym. Jakie ryzyko dla drona?',
    options: ['Brak — mokro = miękkie lądowanie', 'Uszkodzenia elektroniki przez wilgoć, ryzyko utraty drona w błocie', 'Tylko utrata baterii', 'Spadek dokładności GPS'],
    correct: 1, explanation: 'Większość dronów ma IP0X. Bagniste lądowanie = woda w elektronice, utrata sprzętu. Wybierz teren suchy, równy.' },

  { id: 95, category: 'ryzyko-ziemia',
    question: 'Wszystkie poniższe są częścią kontrolowanego obszaru naziemnego (controlled ground area). Co NIE jest?',
    options: ['Flight Geography (FG)', 'Contingency Volume (CV)', 'Ground Risk Buffer (GRB)', 'Operational Volume (OV)'],
    correct: 3, explanation: 'Operational Volume to przestrzeń powietrzna (Flight Geography + Contingency Volume pionowo). Kontrolowany obszar NAZIEMNY = rzut FG + CV + GRB na powierzchnię Ziemi.' },

  { id: 96, category: 'ryzyko-ziemia',
    question: 'Pilot widzi spadochroniarza opadającego ~200 m od miejsca operacji. Powinien:',
    options: ['Kontynuować — spadochron jest daleko', 'Natychmiast przerwać operację i ustąpić pierwszeństwa', 'Wzlecieć powyżej spadochroniarza', 'Sfilmować, to dobre materiały'],
    correct: 1, explanation: 'Spadochroniarz jest statkiem powietrznym z pierwszeństwem nad BSP. Pilot musi natychmiast przerwać lot i się oddalić.' },

  { id: 97, category: 'ryzyko-ziemia',
    question: 'Maksymalna wysokość lotu nad wzgórzem 50 m w STS-01 wynosi:',
    options: ['170 m AGL (wzgórze + 120 m)', '120 m AGL od najbliższego punktu Ziemi pod dronem', '70 m AGL', '120 m AMSL'],
    correct: 1, explanation: 'Wysokość zawsze AGL — 120 m od najbliższego punktu powierzchni pod dronem. Wzgórze "podnosi" pułap, ale dron śledzi teren.' },

  { id: 98, category: 'ryzyko-ziemia',
    question: 'Co to "Contingency Volume" w STS?',
    options: ['Bufor odporności na ataki cyber', 'Strefa bezpieczeństwa wokół Flight Geography (+10 m poziomo, +30 m pionowo)', 'Czas rezerwy na powrót', 'Magazyn części zamiennych'],
    correct: 1, explanation: 'Contingency Volume = strefa, w której dron może się znaleźć w sytuacji odbiegającej od normy. Granica zewnętrzna ≥ 10 m od FG (poziomo), wysokość +30 m powyżej max wysokości lotu.' },

  // ========================================================
  // SYSTEMY BSP (99–120)
  // ========================================================
  { id: 99, category: 'systemy-bsp',
    question: 'IMU (Inertial Measurement Unit) w dronie zawiera:',
    options: ['Tylko żyroskop', 'Akcelerometr i żyroskop (czasem także magnetometr)', 'Tylko GPS', 'Barometr i magnetometr'],
    correct: 1, explanation: 'IMU to czujnik bezwładnościowy — kombinacja akcelerometru (przyspieszenia liniowe) i żyroskopu (obroty). Czasem zawiera też magnetometr.' },

  { id: 100, category: 'systemy-bsp',
    question: 'Czym różni się GNSS od GPS?',
    options: ['To synonimy', 'GNSS to ogólne pojęcie obejmujące wszystkie konstelacje (GPS, GLONASS, Galileo, BeiDou); GPS to amerykański system', 'GNSS jest dokładniejsze tylko w Europie', 'GPS to nowsze GNSS'],
    correct: 1, explanation: 'GNSS (Global Navigation Satellite System) obejmuje GPS (USA), GLONASS (Rosja), Galileo (UE), BeiDou (Chiny). GPS to tylko amerykańska konstelacja.' },

  { id: 101, category: 'systemy-bsp',
    question: 'Ile minimum satelitów GPS zaleca się przed startem drona?',
    options: ['3', '6', '8 (optymalnie ≥ 12)', '20'],
    correct: 2, explanation: 'Minimum funkcjonalne to 6 satelitów (do triangulacji w 3D). Profesjonalnie zaleca się ≥ 8, optymalnie ≥ 12 z dobrym HDOP < 2.0.' },

  { id: 102, category: 'systemy-bsp',
    question: 'RTK (Real-Time Kinematic) zapewnia dokładność:',
    options: ['Decymetrową (10 cm)', 'Centymetrową (1–3 cm)', 'Metrową', 'Tylko ulepszone GPS, bez liczbowej różnicy'],
    correct: 1, explanation: 'RTK wykorzystuje stację bazową lub sieć (NTRIP, CORS) i poprawki w czasie rzeczywistym — dokładność rzędu 1–3 cm w pozycji poziomej.' },

  { id: 103, category: 'systemy-bsp',
    question: 'Najpopularniejsze pasmo łącza C2 między pilotem a dronem to:',
    options: ['200 MHz', '900 MHz', '2.4 GHz i 5.8 GHz', '24 GHz'],
    correct: 2, explanation: 'Pasma 2.4 GHz (WiFi-like) i 5.8 GHz są standardem dla konsumenckich i profesjonalnych dronów. 900 MHz używane dla długiego zasięgu, niższej przepustowości.' },

  { id: 104, category: 'systemy-bsp',
    question: 'Klasa C4 drona charakteryzuje się tym, że:',
    options: ['Wymaga Remote ID', 'Nie ma automatyki sterowania — klasyczny model RC, tylko ręczne sterowanie', 'Jest tylko dla stałopłatów', 'Ma MTOM < 250 g'],
    correct: 1, explanation: 'C4 to klasyczny "model" RC bez automatyki sterowania (poza stabilizacją). NIE wymaga Remote ID — w odróżnieniu od C1, C2, C3, C5, C6.' },

  { id: 105, category: 'systemy-bsp',
    question: 'Klasa C0 (drony < 250 g) — jakie wymaganie dotyczące prędkości?',
    options: ['Bez limitu', 'Max 19 m/s (≈ 68 km/h)', 'Max 5 m/s', 'Max 50 m/s'],
    correct: 1, explanation: 'C0 i C1 (zarówno) mają limit prędkości poziomej 19 m/s — celem ograniczenie energii uderzenia.' },

  { id: 106, category: 'systemy-bsp',
    question: 'Klasa C6 ma między innymi następujący wymóg:',
    options: ['Sterowanie tylko głosem', 'Max prędkość lotu 50 m/s + programowalna trasa (geocaging) + monitoring pozycji w czasie rzeczywistym', 'Brak limitów technicznych', 'Tylko dla dronów stałopłatowych'],
    correct: 1, explanation: 'C6 ma sztywny limit prędkości 50 m/s, wymóg programowalnej trasy z aktywnym geocagingiem oraz monitoring pozycji — wszystko kluczowe dla BVLOS w STS-02.' },

  { id: 107, category: 'systemy-bsp',
    question: 'PDB (Power Distribution Board) w dronie pełni funkcję:',
    options: ['Stabilizacji obrazu', 'Rozdziału prądu z baterii do regulatorów ESC i innych modułów', 'Komunikacji z GPS', 'Sterowania kamerą'],
    correct: 1, explanation: 'PDB to płytka rozdzielająca napięcie z baterii do ESC, FC, kamery itd. Krytyczna dla zasilania całego systemu.' },

  { id: 108, category: 'systemy-bsp',
    question: 'ESC (Electronic Speed Controller) służy do:',
    options: ['Stabilizacji drona', 'Sterowania prędkością obrotową silnika BLDC na podstawie sygnału z kontrolera lotu', 'Filtracji sygnału z GPS', 'Zarządzania baterią'],
    correct: 1, explanation: 'ESC odbiera sygnał z Flight Controller i moduluje napięcie/prąd do silnika BLDC, kontrolując jego prędkość obrotową.' },

  { id: 109, category: 'systemy-bsp',
    question: 'Kalibrację kompasu w dronie wykonuje się typowo:',
    options: ['Codziennie przed lotem', 'Po zmianie lokalizacji o > 100 km lub przy ostrzeżeniach o zakłóceniach', 'Co tydzień', 'Co rok'],
    correct: 1, explanation: 'Kalibracja kompasu jest wymagana po dużej zmianie lokalizacji geograficznej (zmiana deklinacji magnetycznej) lub gdy system zgłosi anomalie.' },

  { id: 110, category: 'systemy-bsp',
    question: 'Co to jest Vortex Ring State (VRS)?',
    options: ['Tryb fotograficzny gimbala', 'Niebezpieczne zawirowania powietrza przy zbyt szybkim opadaniu pionowym — utrata siły nośnej', 'Specjalny tryb GPS', 'Rodzaj baterii'],
    correct: 1, explanation: 'VRS pojawia się przy szybkim opadaniu pionowym, gdy dron wpada we własne zawirowania (vortex ring). Skutek: utrata ciągu, ryzyko katastrofy. Unikaj — opadaj pod kątem.' },

  { id: 111, category: 'systemy-bsp',
    question: 'Vision Positioning System (VPS) w dronie działa najlepiej:',
    options: ['Nad lustrem wody', 'Na niskiej wysokości (do ~30 m AGL) nad teksturową powierzchnią', 'Na wysokości > 100 m', 'W całkowitej ciemności'],
    correct: 1, explanation: 'VPS używa kamer skierowanych w dół + algorytmów rozpoznawania wzorów — wymaga niskiej wysokości i widocznej tekstury (nie lustro, nie woda).' },

  { id: 112, category: 'systemy-bsp',
    question: 'Co to jest deklaracja zgodności CE drona?',
    options: ['Dokument operatora', 'Dokument wystawiony przez producenta potwierdzający zgodność drona z wymaganiami klasy (C0–C6)', 'Pozwolenie ULC', 'Polisa OC'],
    correct: 1, explanation: 'DoC (Declaration of Conformity) to dokument producenta z odniesieniem do rozp. 2019/945 i klasy. Zawiera numer notyfikowanego organu.' },

  { id: 113, category: 'systemy-bsp',
    question: 'Anteny w łączu C2 najczęściej mają polaryzację:',
    options: ['Wyłącznie kołową prawoskrętną (RHCP)', 'Liniową (pionową lub poziomą) lub kołową (RHCP/LHCP) — zależnie od systemu', 'Tylko poziomą', 'Magnetyczną'],
    correct: 1, explanation: 'Standard to anteny liniowe (np. dipole) lub kołowe (RHCP — Right Hand Circular Polarized). Ważne, by anteny po obu stronach miały zgodną polaryzację.' },

  { id: 114, category: 'systemy-bsp',
    question: 'Dwukierunkowa komunikacja w drogach C2 (Command and Control) obejmuje:',
    options: ['Tylko polecenia pilot → dron', 'Polecenia pilot → dron oraz telemetria dron → pilot', 'Tylko obraz video dron → pilot', 'Tylko sygnał GPS'],
    correct: 1, explanation: 'C2 jest dwukierunkowa: komendy w jedną stronę, telemetria w drugą. Obraz video często leci osobnym kanałem (downlink).' },

  { id: 115, category: 'systemy-bsp',
    question: 'Multirotor vs stałopłat — która charakterystyka jest cechą stałopłata?',
    options: ['Zawis w miejscu', 'Pionowy start (VTOL) bez VTOL hybrid', 'Długi czas lotu (1–3 h), duży zasięg, wymaga pasa startowego lub wyrzutni', 'Brak limitu MTOM'],
    correct: 2, explanation: 'Stałopłat ma długi czas lotu i duży zasięg dzięki skrzydłom generującym siłę nośną, ale nie zawisa (VTOL hybrid to wyjątek) i potrzebuje pasa startowego.' },

  { id: 116, category: 'systemy-bsp',
    question: 'Czy klasa C3 może być używana w kategorii otwartej?',
    options: ['Tak, w podkategorii A1', 'Tak, w podkategorii A3 (z dala od ludzi)', 'Nie, tylko w STS-02', 'Tylko w kategorii certyfikowanej'],
    correct: 1, explanation: 'C3 (MTOM < 25 kg, rozmach < 3 m) w kategorii otwartej trafia do A3 — operacje z dala od stref zaludnionych (min. 150 m).' },

  { id: 117, category: 'systemy-bsp',
    question: 'Co to jest "Kv" silnika BLDC?',
    options: ['Pojemność kondensatora', 'Stosunek obrotów na minutę na jeden volt zasilania (RPM/V)', 'Współczynnik wydajności', 'Maksymalna moc'],
    correct: 1, explanation: 'Kv wyraża, ile RPM osiąga silnik na 1 V (bez obciążenia). Wyższe Kv = większa prędkość, mniejszy moment. Wybór Kv zależy od typu drona.' },

  { id: 118, category: 'systemy-bsp',
    question: 'Pilot widzi w kontrolerze "HDOP 1.2". Co to znaczy?',
    options: ['Bateria w dobrym stanie', 'Horizontal Dilution of Precision — dobra geometria satelitów GPS (im niższe, tym lepiej; < 2.0 OK)', 'Wysokość 1.2 m AGL', 'Brak danych'],
    correct: 1, explanation: 'HDOP to wskaźnik jakości pozycji poziomej z GPS. Niskie wartości (< 2) = dobra geometria satelitów, wysokie (> 5) = słaba.' },

  { id: 119, category: 'systemy-bsp',
    question: 'Niezawodne FailSafe w C5 zapewnia, że przy utracie łącza C2 dron:',
    options: ['Spada na ziemię', 'Wykonuje skonfigurowane działanie (RTH / hover / auto-land) zamiast lecieć dalej niekontrolowanie', 'Wyłącza wszystkie silniki', 'Łączy się z internetem'],
    correct: 1, explanation: 'FailSafe to programowe zachowanie zapewniające, że dron NIE leci dalej niekontrolowanie po utracie łącza. Konfiguracja: RTH (najczęściej), hover, auto-land.' },

  { id: 120, category: 'systemy-bsp',
    question: 'Mavic 3 Multispectral C5 to przykład drona:',
    options: ['Klasy C0 z oznaczeniem niezgodnym', 'Klasy C5 z oficjalnym oznaczeniem CE, dopuszczonego do STS-01', 'Klasa nieistniejąca', 'Modelu wojskowego'],
    correct: 1, explanation: 'DJI ma w ofercie dronów modele z oficjalnymi oznaczeniami C-class (np. Mavic 3 Multispectral C5, Mavic 3 Enterprise C5) — można ich używać w STS-01 bez analizy "legacy".' },

  // ========================================================
  // OSIĄGI W LOCIE (121–142)
  // ========================================================
  { id: 121, category: 'osiagi',
    question: 'Napięcie nominalne pojedynczego ogniwa LiPo wynosi:',
    options: ['1.5 V', '3.0 V', '3.7 V', '4.2 V'],
    correct: 2, explanation: 'Nominalne 3.7 V. Naładowane do 4.2 V/cell. Storage charge ~3.8 V. Krytyczne minimum operacyjne 3.3 V/cell, absolutne 3.0 V.' },

  { id: 122, category: 'osiagi',
    question: 'Bateria LiPo 4S oznacza konfigurację:',
    options: ['4 ogniwa równolegle', '4 ogniwa szeregowo (nominalne 14.8 V)', '4 V napięcie nominalne', '4 typy ogniw mieszane'],
    correct: 1, explanation: '4S = 4 ogniwa w szeregu = 4 × 3.7 V = 14.8 V nominalne. Naładowane 4 × 4.2 V = 16.8 V.' },

  { id: 123, category: 'osiagi',
    question: 'Optymalne napięcie storage charge dla LiPo przechowywanego dłużej niż tydzień to:',
    options: ['3.0 V/cell', '3.8 V/cell (~40–60% pojemności)', '4.2 V/cell', '5.0 V/cell'],
    correct: 1, explanation: 'Storage 3.8 V/cell zapewnia minimalne starzenie chemiczne ogniwa. Przechowywanie w pełni naładowanej (4.2 V) lub całkowicie rozładowanej skraca życie baterii.' },

  { id: 124, category: 'osiagi',
    question: 'Optymalna temperatura ładowania LiPo to:',
    options: ['0–10 °C', '20–25 °C (temperatura pokojowa)', '40–50 °C', '-10–0 °C'],
    correct: 1, explanation: 'Ładowanie w temperaturze pokojowej (20–25 °C, max 0–40 °C). Niższe temperatury zwiększają wewnętrzną rezystancję, wyższe ryzyko thermal runaway.' },

  { id: 125, category: 'osiagi',
    question: 'C-rating baterii oznacza:',
    options: ['Pojemność w mAh', 'Krotność pojemności określającą bezpieczny prąd ciągły rozładowania (np. 25C × 5000 mAh = 125 A)', 'Liczbę ogniw', 'Maksymalne napięcie'],
    correct: 1, explanation: 'C-rating × pojemność = max prąd ciągły. Dla LiPo 5000 mAh 25C: 5 × 25 = 125 A ciągły. Multirotory potrzebują wysokich C (15–35 ciągły).' },

  { id: 126, category: 'osiagi',
    question: 'Spuchnięta bateria LiPo:',
    options: ['Można jeszcze ładować ostrożnie', 'NIE wolno używać, NIE ładować — natychmiast utylizować', 'Można używać w trybie awaryjnym', 'Wystarczy ją "wyprostować"'],
    correct: 1, explanation: 'Spuchnięcie = gazy z degradacji elektrolitu. Bateria nie nadaje się do użytku, jest niebezpieczna. Utylizacja w PSZOK, najlepiej po "odsoleniu" w wodzie z solanką.' },

  { id: 127, category: 'osiagi',
    question: 'W jaki sposób NIE WOLNO gasić palącej się baterii LiPo?',
    options: ['Piaskiem', 'Kocem gaśniczym', 'Wodą — lit reaguje z wodą, ogień się wzmaga', 'Proszkiem ABC'],
    correct: 2, explanation: 'WODĄ NIE GASI SIĘ LiPo. Lit reaguje z wodą tworząc wodór (palny) + ciepło. Bezpieczne: piasek, koc gaśniczy, proszek ABC. Po pożarze: do solanki na 14 dni → PSZOK.' },

  { id: 128, category: 'osiagi',
    question: 'Przy temperaturze -10 °C pojemność baterii LiPo spada typowo o:',
    options: ['Prawie nic', '5–10%', '25–35%', '90–99%'],
    correct: 2, explanation: 'Niskie temperatury zwiększają wewnętrzną rezystancję baterii. Przy -10 °C spadek dostępnej pojemności rzędu 25–35% (przy -20 °C nawet 40–50%).' },

  { id: 129, category: 'osiagi',
    question: 'Co to MTOM?',
    options: ['Maximum Take-Off Mass — masa pełnego drona w gotowości do startu (z baterią, payloadem)', 'Średnia masa drona', 'Masa pustego drona', 'Masa kontrolera'],
    correct: 0, explanation: 'MTOM = masa wszystkich elementów drona ważona przy starcie: rama, elektronika, baterie, gimbal, kamera, payload. Twardy limit producenta.' },

  { id: 130, category: 'osiagi',
    question: 'Reguła kciuka „2/3 max" dla wiatru mówi:',
    options: ['Lataj tylko po 2/3 baterii', 'Lataj tylko jeśli wiatr średni < 2/3 deklarowanej odporności drona na wiatr (max wind resistance)', 'Zostaw 2/3 czasu na powrót', 'Tylko 2/3 zasięgu używaj'],
    correct: 1, explanation: 'Konserwatywna reguła: lataj tylko gdy wiatr średni < 2/3 deklarowanej odporności drona na wiatr (z User Manual, np. Mavic 3: 12 m/s → bezpiecznie do 8 m/s). UWAGA: to NIE jest max prędkość lotu drona — to inna specyfikacja. Porywy uwzględnij osobno, mogą być 2× silniejsze niż średnia.' },

  { id: 131, category: 'osiagi',
    question: 'Rzeczywisty czas lotu w warunkach polowych vs deklarowany przez producenta:',
    options: ['Identyczny', 'Typowo 70–80% deklarowanego (wiatr, payload, manewry skracają)', '150% — można latać dłużej niż napis', '50%'],
    correct: 1, explanation: 'Producent podaje czas w warunkach idealnych (zawis, brak wiatru, 25 °C, no payload). Realnie ok. 70–80% w lekkich warunkach, mniej zimą / w wietrze.' },

  { id: 132, category: 'osiagi',
    question: 'Rezerwa baterii zalecana na powrót i lądowanie w STS:',
    options: ['5%', '10%', '20% minimum (w BVLOS często 30%)', '50%'],
    correct: 2, explanation: 'Pilot zostawia min. 20% na powrót/lądowanie. W STS-02 BVLOS pod wiatrem zaleca się 30% lub więcej.' },

  { id: 133, category: 'osiagi',
    question: 'Wysokość npm (nad poziomem morza) wpływa na osiągi drona ponieważ:',
    options: ['Słońce jest bliżej', 'Gęstość powietrza spada — silniki dają mniejszy ciąg, krótszy czas lotu', 'Magnetyzm Ziemi rośnie', 'Bez znaczenia'],
    correct: 1, explanation: 'Gęstość powietrza spada z wysokością. Mniej molekuł = mniejszy ciąg śmigieł, większe pobory energii do utrzymania lotu.' },

  { id: 134, category: 'osiagi',
    question: 'Energia kinetyczna drona 5 kg lecącego 5 m/s wynosi:',
    options: ['12.5 J', '62.5 J (½ × 5 × 5²)', '125 J', '5000 J'],
    correct: 1, explanation: 'E_kin = ½ × m × v² = 0.5 × 5 × 25 = 62.5 J. Dla porównania ten sam dron lecący 20 m/s ma E = 1000 J — 16× więcej.' },

  { id: 135, category: 'osiagi',
    question: 'Stosunek ciągu do masy (Thrust/Weight, T/W) w zawisie multirotora wynosi:',
    options: ['T/W = 0.5', 'T/W = 1 (ciąg równa się masie)', 'T/W = 5', 'T/W = 10'],
    correct: 1, explanation: 'W zawisie suma ciągów silników = masa drona, czyli T/W = 1. Manewrowy multirotor ma T/W 2.0–2.5 (zapas mocy).' },

  { id: 136, category: 'osiagi',
    question: 'Dodatkowy payload 200 g w typowym dronie multirotor 4 kg:',
    options: ['Nie wpływa na czas lotu', 'Skraca czas lotu o kilka minut, zmienia środek ciężkości', 'Wydłuża czas lotu', 'Zmniejsza zasięg radiowy'],
    correct: 1, explanation: 'Każde +100 g typowo skraca czas lotu o 1–3 min (zależnie od drona). Zmienia też środek ciężkości — wpływ na stabilność.' },

  { id: 137, category: 'osiagi',
    question: 'Transport baterii LiPo w samolocie pasażerskim:',
    options: ['Bagaż rejestrowany — zalecany', 'Bagaż podręczny — do 100 Wh bez ograniczeń, 100–160 Wh za zgodą przewoźnika, > 160 Wh zakaz', 'Bez ograniczeń', 'Tylko z indywidualnym zezwoleniem'],
    correct: 1, explanation: 'IATA/ICAO dopuszcza LiPo tylko w bagażu PODRĘCZNYM (nie rejestrowanym), do 100 Wh swobodnie, 100–160 Wh za zgodą, > 160 Wh tylko CARGO.' },

  { id: 138, category: 'osiagi',
    question: 'Co to "Ground Effect" przy multirotorze?',
    options: ['Efekt magnetyczny ziemi', 'Dodatkowy ciąg przy bardzo niskim locie (< 1× średnica wirnika nad ziemią)', 'Utrata sygnału GPS', 'Wpływ pola elektrostatycznego'],
    correct: 1, explanation: 'Ground effect — gdy dron jest blisko ziemi, powietrze odbija się od powierzchni dając dodatkowy ciąg. Uwaga przy precyzyjnym lądowaniu — dron może "pływać".' },

  { id: 139, category: 'osiagi',
    question: 'Pierwsze ostrzeżenie o niskim poziomie baterii w typowym dronie pojawia się przy:',
    options: ['10%', '~30% (alert pilota)', '50%', '90%'],
    correct: 1, explanation: 'Standardowe progi: ~30% pierwsze ostrzeżenie (alert), ~15% wymuszony RTH, ~5% krytyczne lądowanie w miejscu. Dokładne wartości zależą od producenta.' },

  { id: 140, category: 'osiagi',
    question: 'Cykl życia typowej baterii LiPo to:',
    options: ['10–20 cykli', '50–100 cykli', '200–500 pełnych cykli (dobra eksploatacja)', '5000 cykli'],
    correct: 2, explanation: 'LiPo wytrzymuje 200–300 pełnych cykli typowo, Li-ion DJI Intelligent Battery 200–500. Częściowe rozładowania liczą się ułamkami cyklu.' },

  { id: 141, category: 'osiagi',
    question: 'Pilot zauważa, że dron w wietrze czołowym powoli leci dalej i bateria spada. Powinien:',
    options: ['Lecieć dalej, zawróci sam', 'Zaplanować powrót teraz — pod wiatr lot zużywa znacznie więcej energii', 'Zwiększyć prędkość', 'Wyłączyć GPS'],
    correct: 1, explanation: 'Wiatr czołowy znacznie zwiększa zużycie energii. Zasada: lataj pod wiatr na początku, wracaj z wiatrem (oszczędność) — lub planuj rezerwę uwzględniającą czołowy wiatr.' },

  { id: 142, category: 'osiagi',
    question: 'Limit "Max Operating Altitude" w specyfikacji producenta:',
    options: ['To max wysokość AGL drona', 'To max wysokość AMSL (nad poziomem morza) dla bezpiecznych osiągów', 'Bez znaczenia operacyjnie', 'Tylko dla operacji nocnych'],
    correct: 1, explanation: 'Service ceiling = max wysokość npm. Np. Mavic 3 ma 6000 m AMSL — na Mt. Blanc (4810 m) operuje, na Mt. Everest (8848 m) nie.' },

  // ========================================================
  // RYZYKO W POWIETRZU (143–164)
  // ========================================================
  { id: 143, category: 'ryzyko-powietrze',
    question: 'Czym różni się AGL od AMSL?',
    options: ['To synonimy', 'AGL = nad terenem; AMSL = nad poziomem morza', 'AGL = nad wodą; AMSL = nad lądem', 'AGL = aerodrome level'],
    correct: 1, explanation: 'AGL (Above Ground Level) — wysokość nad ziemią pod dronem. AMSL (Above Mean Sea Level) — nad poziomem morza. Różnica może być setki metrów w terenie górzystym.' },

  { id: 144, category: 'ryzyko-powietrze',
    question: 'W STS wysokość 120 m mierzymy w:',
    options: ['AGL (Above Ground Level)', 'AMSL', 'FL (Flight Level)', 'Stopach (feet)'],
    correct: 0, explanation: 'STS-01/02 wymaga utrzymania drona w odległości 120 m od najbliższego punktu powierzchni Ziemi — czyli wysokość AGL śledząca teren.' },

  { id: 145, category: 'ryzyko-powietrze',
    question: 'CTR (Control Zone) to:',
    options: ['Strefa wokół lotniska kontrolowanego (z ATC)', 'Strefa wojskowa', 'Strefa odpoczynku załogi', 'Strefa CO₂ w atmosferze'],
    correct: 0, explanation: 'CTR to strefa kontrolowana wokół lotniska z czynnym ATC (np. EPWA, EPKK). Od ziemi do określonej wysokości (zwykle 2000 ft AMSL).' },

  { id: 146, category: 'ryzyko-powietrze',
    question: 'ATZ to:',
    options: ['Strefa lotniska niekontrolowanego (zwykle 5 km promień, do 4000 ft AMSL)', 'Strefa zakazana', 'Aerodrome Tower Zone', 'Strefa atomowa'],
    correct: 0, explanation: 'ATZ (Aerodrome Traffic Zone) — strefa wokół lotniska/lądowiska bez ATC. Promień 5 km, do 4000 ft AMSL. Ruch koordynuje informator AFIS.' },

  { id: 147, category: 'ryzyko-powietrze',
    question: 'NOTAM (Notice to Airmen) to:',
    options: ['Stała mapa stref', 'Depesza o czasowych zmianach w przestrzeni powietrznej / infrastrukturze (np. nowa strefa, awaria pomocy nawigacyjnej)', 'Lista pilotów ULC', 'Tylko dla lotnictwa wojskowego'],
    correct: 1, explanation: 'NOTAM-y informują o CZASOWYCH zmianach — nowe strefy, ćwiczenia, imprezy, awarie ILS, otwarcie nowej drogi. Sprawdzaj zawsze przed operacją.' },

  { id: 148, category: 'ryzyko-powietrze',
    question: 'Cykl AIRAC (aktualizacji informacji lotniczej) trwa:',
    options: ['7 dni', '28 dni', '90 dni', '365 dni'],
    correct: 1, explanation: 'AIRAC (Aeronautical Information Regulation And Control) — wszystkie zmiany w AIP publikowane co 28 dni. Standard ICAO.' },

  { id: 149, category: 'ryzyko-powietrze',
    question: 'Kto ma BEZWZGLĘDNE pierwszeństwo nad dronem w przestrzeni powietrznej?',
    options: ['Inny dron BVLOS', 'Statek załogowy (samolot, śmigłowiec) — bezwzględne pierwszeństwo', 'Wojskowy radar', 'Operator z LUC'],
    correct: 1, explanation: 'Statki załogowe (manned aviation) mają BEZWZGLĘDNE pierwszeństwo. Pilot drona ma obowiązek przerwać lot przy zagrożeniu kolizji.' },

  { id: 150, category: 'ryzyko-powietrze',
    question: 'ADS-B In na pokładzie drona służy do:',
    options: ['Komunikacji z innymi dronami', 'Pasywnego odbioru sygnałów z transponderów statków załogowych — system Detect&Avoid', 'Tylko nawigacji GPS', 'Wysyłania zdjęć'],
    correct: 1, explanation: 'ADS-B (Automatic Dependent Surveillance – Broadcast) "In" = odbieranie sygnałów. Większość samolotów komercyjnych ma transpondery ADS-B Out. Funkcja ADS-B In w dronach (np. DJI AirSense) ostrzega pilota.' },

  { id: 151, category: 'ryzyko-powietrze',
    question: 'U-space (pakiet 2021/664, 665, 666) to:',
    options: ['Wirtualna rzeczywistość dla pilotów', 'Pakiet rozporządzeń UE wprowadzający zarządzanie ruchem dronów (UTM)', 'Stacja kosmiczna', 'Mobilna aplikacja DJI'],
    correct: 1, explanation: 'U-space to ekosystem usług zarządzania ruchem dronów: USSP (dostawcy usług), CIS (PAŻP w PL), network identification, traffic information.' },

  { id: 152, category: 'ryzyko-powietrze',
    question: 'Klasa przestrzeni powietrznej ICAO, w której typowo operują drony do 120 m AGL w Polsce:',
    options: ['A', 'C', 'G (niekontrolowana — od GND do FL095, ≈ 2 895 m AMSL w większości obszaru)', 'F'],
    correct: 2, explanation: 'Drony typowo operują w klasie G, która w Polsce rozciąga się od ziemi do FL095 (~2 895 m AMSL). Wyższe poziomy (C) są kontrolowane przez ATC. W obrębie klasy G wycina się jednak strefy CTR/TMA/MCTR wokół lotnisk oraz strefy specjalne (EP R/D/P, TSA/TRA, DRA).' },

  { id: 153, category: 'ryzyko-powietrze',
    question: 'Statki załogowe spotykane poniżej 150 m AGL to między innymi:',
    options: ['Tylko myśliwce wojskowe', 'Śmigłowce ratunkowe HEMS, samoloty rolnicze, paralotnie, motoparalotnie, szybowce w termice', 'Tylko balony meteorologiczne', 'Tylko drony konkurencyjne'],
    correct: 1, explanation: 'Lista jest długa — HEMS, agro samoloty, paralotnie, szybowce, balony, skoczkowie, modele RC. Stała obserwacja przestrzeni to klucz.' },

  { id: 154, category: 'ryzyko-powietrze',
    question: 'Co to NOTAM "trigger NOTAM"?',
    options: ['Notatka o pożarze', 'NOTAM wskazujący na zbliżającą się zmianę AIP', 'NOTAM wojskowy', 'NOTAM z najwyższym priorytetem'],
    correct: 1, explanation: 'Trigger NOTAM informuje o zmianach AIP/AIRAC. To wskazówka, by przeglądnąć szczegóły w AIP zanim NOTAM wygaśnie.' },

  { id: 155, category: 'ryzyko-powietrze',
    question: 'EP P (Polish airspace zone "Prohibited") to:',
    options: ['Strefa szkoleniowa', 'Strefa zakazana, gdzie loty są zakazane lub bardzo ograniczone', 'Strefa parkingowa', 'Strefa pościgowa'],
    correct: 1, explanation: 'EP P — Prohibited (zakazana). Np. nad centrum Warszawy, obiektami rządowymi. EP D — Danger (niebezpieczna, poligony), EP R — Restricted (ograniczona).' },

  { id: 156, category: 'ryzyko-powietrze',
    question: 'Strefa DRA-T w polskiej przestrzeni dronowej:',
    options: ['Zakazana całkowicie', 'Informacyjna — wymaga elektronicznego check-in (np. DroneRadar)', 'Wojskowa', 'Dla początkujących'],
    correct: 1, explanation: 'DRA-T (Traffic) — strefa informacyjna z wymogiem check-in. To NIE jest zakazana ani ograniczona, ale wymaga zgłoszenia operacji.' },

  { id: 157, category: 'ryzyko-powietrze',
    question: 'Operator drona planuje BVLOS w STS-02. Najlepsze narzędzie do sprawdzenia stref + check-in to:',
    options: ['Tylko Google Maps', 'DroneRadar / DroneTower (PAŻP) — strefy + elektroniczny check-in', 'Komunikator WhatsApp', 'Wyłącznie telefoniczna koordynacja'],
    correct: 1, explanation: 'DroneRadar/DroneTower to oficjalna aplikacja PAŻP integrująca strefy DRA, NOTAM, check-in. Dla profesjonalnych operacji często też telefoniczna koordynacja z AMC/TWR.' },

  { id: 158, category: 'ryzyko-powietrze',
    question: 'FL (Flight Level) to wysokość:',
    options: ['Mierzona w metrach AGL', 'Mierzona w setkach stóp przy ciśnieniu standardowym 1013.25 hPa', 'Mierzona w kilometrach', 'Bez jednostki'],
    correct: 1, explanation: 'FL = setki stóp przy QNE 1013.25 hPa (ciśnienie standardowe). FL095 = 9500 ft pressure altitude. Drony nie używają FL, ale warto rozumieć.' },

  { id: 159, category: 'ryzyko-powietrze',
    question: 'W STS-01 nad budynkiem mieszkalnym wysokim 110 m, w odległości 30 m od ściany, max wysokość lotu wynosi:',
    options: ['120 m AGL', '125 m powyżej terenu (bez wyjątku)', 'Można zwiększyć do 125 m powyżej budynku, jeśli ≤ 50 m poziomo i jest zgoda właściciela', 'Nielegalne'],
    correct: 2, explanation: 'UAS.STS-01.010 pkt 2: w 50 m od przeszkody > 105 m, można podnieść lot do 15 m powyżej przeszkody, na wniosek właściciela. Tu: 110 + 15 = 125 m max nad budynkiem.' },

  { id: 160, category: 'ryzyko-powietrze',
    question: 'Co należy zrobić, gdy dron klasy C5 odbierze sygnał ADS-B z samolotu w pobliżu?',
    options: ['Kontynuować, samolot ma się wycofać', 'Pilot powinien zareagować — typowo zniżyć drona, ewentualnie wylądować', 'Dron sam wybierze trasę', 'Nic, ADS-B nie ma znaczenia'],
    correct: 1, explanation: 'ADS-B In to wsparcie, ale decyzję podejmuje pilot. Sygnał = informacja, że samolot jest w okolicy. Reakcja: ustąpić pierwszeństwa, zniżyć/wylądować.' },

  { id: 161, category: 'ryzyko-powietrze',
    question: 'Czy NOTAM-y dla dronów są ważne, jeśli operator lata do 120 m AGL?',
    options: ['Nie, NOTAM-y są tylko dla samolotów', 'Tak — informują o czasowych ograniczeniach, które obowiązują wszystkich użytkowników przestrzeni', 'Tylko dla BVLOS', 'Tylko w obrębie CTR'],
    correct: 1, explanation: 'NOTAM-y dotyczą całej przestrzeni. Mogą informować o ćwiczeniach wojskowych, pokazach lotniczych — to wpływa też na dronów.' },

  { id: 162, category: 'ryzyko-powietrze',
    question: 'Pilot zauważa, że jego dron może spowodować zagrożenie dla nadlatującego samolotu rolniczego ~30 m AGL. Hierarchia odpowiedzi:',
    options: ['Czekać aż samolot się odsunie', 'Natychmiastowe zniżenie / lądowanie + zgłoszenie zdarzenia po locie', 'Wzlecieć powyżej', 'Aktywować FTS'],
    correct: 1, explanation: 'Najszybsza ucieczka — w dół, wylądować. Po locie zgłoszenie incydentu zgodnie z 376/2014.' },

  { id: 163, category: 'ryzyko-powietrze',
    question: 'Co to jest AMC (Airspace Management Cell)?',
    options: ['Aerokompozyt — typ materiałów', 'Komórka PAŻP zarządzająca strefami TSA/TRA i koordynująca przestrzeń', 'Aplikacja meteorologiczna', 'Skrót dla "Air Marshal Command"'],
    correct: 1, explanation: 'AMC w PAŻP koordynuje strefy czasowe (TSA/TRA), zatwierdza wnioski o aktywację stref, pomaga w koordynacji operacji wymagających specjalnego dostępu.' },

  { id: 164, category: 'ryzyko-powietrze',
    question: 'Remote ID innego drona w pobliżu można odebrać:',
    options: ['Tylko specjalnym sprzętem dla policji', 'Aplikacją na telefonie z Bluetooth/WiFi (np. DroneRadar, DJI Aeroscope)', 'Tylko przez SAT', 'Nie da się go odebrać'],
    correct: 1, explanation: 'Remote ID emituje przez Bluetooth 4/5 lub WiFi. Aplikacje na telefonie odbierają sygnał — dzięki temu inni piloci / służby widzą, kto lata w okolicy.' },

  // ========================================================
  // OGRANICZENIA CZŁOWIEKA (165–176)
  // ========================================================
  { id: 165, category: 'czlowiek',
    question: 'Zasada "8 hours bottle to throttle" oznacza:',
    options: ['8 godzin pracy w ciągu dnia', 'Minimum 8 godzin od ostatniego drinka alkoholu do lotu', 'Co 8 godzin nowy pilot', '8 dronów na 1 operatora'],
    correct: 1, explanation: 'Klasyczna zasada lotnictwa: min. 8 h pomiędzy ostatnim alkoholem a lotem. W praktyce, dla pewności, 24 h (zwłaszcza po większej ilości).' },

  { id: 166, category: 'czlowiek',
    question: 'Co znaczy IMSAFE — checklist samooceny pilota?',
    options: ['I Made Some Awesome Flight Errors', 'Illness, Medication, Stress, Alcohol, Fatigue, Emotion', 'International Marshal Safety Flight Evaluation', 'Imagery, Maps, Strategy, Aircraft, Fuel, Equipment'],
    correct: 1, explanation: 'IMSAFE: I — Illness (choroba), M — Medication (leki), S — Stress, A — Alcohol, F — Fatigue (zmęczenie), E — Emotion. Każdorazowa samoocena przed lotem.' },

  { id: 167, category: 'czlowiek',
    question: 'PAVE — model oceny ryzyka przed lotem:',
    options: ['Plane And Vehicle Evaluation', 'Pilot, Aircraft, enVironment, External pressures', 'Polish Aviation Visual Engagement', 'Performance, Altitude, Volume, Energy'],
    correct: 1, explanation: 'PAVE: P — Pilot (gotowy?), A — Aircraft (sprawny?), V — enVironment (pogoda, teren, przestrzeń), E — External pressures (klient, czas).' },

  { id: 168, category: 'czlowiek',
    question: 'Model decyzyjny DECIDE:',
    options: ['Drone Equipment Check In Daylight Evaluation', 'Detect, Estimate, Choose, Identify, Do, Evaluate', 'Direct Evacuation Center In Drone Emergency', 'Tylko anglojęzyczny skrót do nauki'],
    correct: 1, explanation: 'DECIDE: cykl decyzyjny pilota — wykryj problem, oceń wagę, wybierz cel, zidentyfikuj opcje, wykonaj, oceń efekt.' },

  { id: 169, category: 'czlowiek',
    question: 'Najgorszy okres dla koncentracji pilota w ciągu doby (dołek cyrkadianny):',
    options: ['09:00–11:00', '2:00–6:00 (i mniejszy 13:00–15:00)', '17:00–19:00', '12:00–13:00'],
    correct: 1, explanation: 'Rytm okołodobowy: największe ryzyko mikrosnu między 2:00 a 6:00. Drugi dołek popołudniowy 13:00–15:00 ("siesta time").' },

  { id: 170, category: 'czlowiek',
    question: '"Tunel wzroku" (tunnel vision) podczas lotu drona to:',
    options: ['Iluzja perspektywy nad torami', 'Skupienie wzroku tylko na ekranie kontrolera, ignorowanie reszty otoczenia', 'Zaburzenie GPS', 'Zjawisko Coriolisa'],
    correct: 1, explanation: 'Tunel wzroku = utrata świadomości przestrzennej przez nadmierne skupienie na ekranie. Niebezpieczne dla pilota drona. Antidot: regularne odrywanie wzroku i skanowanie.' },

  { id: 171, category: 'czlowiek',
    question: '"Get-there-itis" (plan continuation bias) to:',
    options: ['Choroba lokomocyjna', 'Tendencja do kontynuowania misji mimo pogarszających się warunków', 'Lęk wysokości', 'Zaburzenie GPS'],
    correct: 1, explanation: 'Klasyczna pułapka pilota: "musi się stać, już blisko końca". Antidot: ustal kryteria abortu PRZED startem i ich się trzymaj.' },

  { id: 172, category: 'czlowiek',
    question: 'Antyhistamina przeciw alergii:',
    options: ['Bez wpływu na lot', 'Może powodować senność — sprawdź ulotkę, w razie wątpliwości nie lataj', 'Wręcz pomaga koncentracji', 'Jest dozwolona w lotnictwie wojskowym, więc i cywilnym'],
    correct: 1, explanation: 'Wiele leków przeciwhistaminowych powoduje senność. Reguła: jeśli ulotka mówi "nie prowadź pojazdów" → nie pilotuj.' },

  { id: 173, category: 'czlowiek',
    question: 'Iluzja "autokinetic" to:',
    options: ['Wrażenie że punkt świetlny w nocy się porusza, choć stoi', 'Iluzja prędkości', 'Iluzja związana z autostradą', 'Iluzja związana z autopilotem'],
    correct: 0, explanation: 'Klasyczna iluzja nocna — patrząc w stały punkt świetlny w ciemności wydaje się on dryfować. Może zmylić podczas operacji nocnych.' },

  { id: 174, category: 'czlowiek',
    question: 'Pilot jest po nieprzespanej nocy. Wpływ porównywalny do:',
    options: ['Filiżanki kawy', 'Niskiego stężenia alkoholu w organizmie (~0.5 ‰)', 'Trzech filiżanek herbaty', 'Brak wpływu, młode ciało regeneruje się szybko'],
    correct: 1, explanation: 'Badania pokazują, że 17–18 h ciągłego "nie spania" ma wpływ na koncentrację porównywalny z 0.5‰ alkoholu we krwi. Zmęczenie jest realnym zagrożeniem.' },

  { id: 175, category: 'czlowiek',
    question: 'Five Hazardous Attitudes (5 niebezpiecznych postaw pilota) NIE obejmuje:',
    options: ['Anti-authority (nie mówią mi co mam robić)', 'Macho (jestem najlepszy)', 'Invulnerability (mnie się to nie zdarzy)', 'Curiosity (ciekawość poznawcza)'],
    correct: 3, explanation: 'Klasyczne 5: Anti-authority, Impulsivity, Invulnerability, Macho, Resignation. Curiosity jest pozytywną cechą — nie pułapką.' },

  { id: 176, category: 'czlowiek',
    question: 'Zasada "Sterile Cockpit" oznacza:',
    options: ['Higienę w kontrolerze', 'W krytycznych fazach (start, lądowanie, manewry) tylko rozmowy operacyjne', 'Brak załogi', 'Tylko jedna osoba może być w pomieszczeniu'],
    correct: 1, explanation: 'W lotnictwie zasada zakazu rozmów niezwiązanych z operacją w krytycznych fazach. Dla drona: brak gadania o pogodzie podczas startu/lądowania/manewrów.' },

  // ========================================================
  // METEOROLOGIA (177–188)
  // ========================================================
  { id: 177, category: 'meteo',
    question: 'METAR (regularny raport pogodowy lotniska) jest publikowany:',
    options: ['Co 5 minut', 'Co 30 minut', 'Co godzinę', 'Tylko w nagłych przypadkach'],
    correct: 1, explanation: 'METAR regularny — co 30 minut. Między raportami publikowane są SPECI (special METAR) przy istotnych zmianach pogody.' },

  { id: 178, category: 'meteo',
    question: 'W kodzie METAR "24015KT" oznacza:',
    options: ['Wiatr o sile 240 z prędkością 15 KT', 'Wiatr z kierunku 240° (płd-zach) z prędkością 15 węzłów', 'Wiatr w kierunku 240° z prędkością 15 m/s', 'Temperatura 24 °C, ciśnienie 15 hPa'],
    correct: 1, explanation: 'METAR format: DDDFFKT — kierunek 3 cyfry (skąd wieje!), prędkość 2 cyfry, jednostka KT (węzły). 240° = z południowego zachodu.' },

  { id: 179, category: 'meteo',
    question: 'Cumulonimbus (CB) na drodze lotu drona oznacza:',
    options: ['Pomyślne warunki', 'Burzowa chmura — bezwzględny zakaz lotu w promieniu ok. 20 km', 'Lekkie zachmurzenie', 'Mgła wzniesiona'],
    correct: 1, explanation: 'CB to burzowa chmura — wyładowania, silne podmuchy, microburst, grad. Strefa wpływu ok. 20 km wokół chmury. Lot zakazany.' },

  { id: 180, category: 'meteo',
    question: 'CAVOK w METAR oznacza:',
    options: ['Cumulonimbus active very ominous K-index', 'Ceiling And Visibility OK — VIS ≥ 10 km, brak chmur < 5000 ft, brak istotnych zjawisk', 'Calmly arriving via official knowledge', 'Cold air visible over Kyiv'],
    correct: 1, explanation: 'CAVOK = idealne warunki VFR: widzialność ≥ 10 km, brak istotnych chmur poniżej 5000 ft (1500 m), brak istotnych zjawisk pogody.' },

  { id: 181, category: 'meteo',
    question: 'Minimalna widzialność w locie w STS-02 wynosi:',
    options: ['1 km', '3 km', '5 km', 'CAVOK obowiązkowy'],
    correct: 2, explanation: 'UAS.STS-02.020 pkt 3 — minimalna widzialność > 5 km. Twardy wymóg z przepisu.' },

  { id: 182, category: 'meteo',
    question: 'Wind shear (uskok wiatru) najczęściej powstaje:',
    options: ['Tylko na otwartym morzu', 'Przy krawędziach przeszkód (lasy, budynki, wzgórza), inwersjach termicznych, frontach atmosferycznych', 'Tylko w pustym terenie', 'Tylko w nocy'],
    correct: 1, explanation: 'Wind shear to gwałtowna zmiana wiatru na krótkim dystansie. Krawędzie przeszkód generują turbulencje mechaniczne; fronty i inwersje — termiczne.' },

  { id: 183, category: 'meteo',
    question: 'Warunki sprzyjające oblodzeniu drona:',
    options: ['Mróz -30 °C i sucho', 'Temperatura +5 °C do -15 °C przy wilgotności > 80% (np. w chmurach, mgle)', 'Tylko nad morzem', 'Tylko nocą'],
    correct: 1, explanation: 'Oblodzenie wymaga wilgoci + temperatury w zakresie +5 do -15 °C. Powstaje na śmigłach (utrata symetrii ciągu) i sensorach.' },

  { id: 184, category: 'meteo',
    question: 'Gradient temperatury w atmosferze standardowej:',
    options: ['+1 °C / 100 m (cieplej wyżej)', '-0.65 °C / 100 m (chłodniej wyżej)', '-3 °C / 100 m', 'Brak gradientu'],
    correct: 1, explanation: 'Standardowo temperatura spada średnio o 0.65 °C na każde 100 m wysokości. Inwersja temperatury (odwrotnie) to anomalia, częstsza zimą.' },

  { id: 185, category: 'meteo',
    question: 'Punkt rosy (dewpoint) w METAR "12/08" oznacza:',
    options: ['Temperaturę 12 °C i wiatr 8 KT', 'Temperaturę 12 °C i punkt rosy 8 °C — różnica 4 °C, ryzyko mgły rośnie', '12 m widzialności i 8 km chmury', '12% wilgotność'],
    correct: 1, explanation: 'Format METAR: T/Td (temperatura / dewpoint). Mała różnica → ryzyko mgły. Gdy temperatura osiągnie punkt rosy, woda się skrapla.' },

  { id: 186, category: 'meteo',
    question: 'Marznący deszcz (FZRA) to:',
    options: ['Lekki opad bez znaczenia', 'Bardzo niebezpieczne zjawisko — krople wody zamarzają natychmiast po kontakcie z powierzchnią, pokrywając wszystko lodem', 'Tylko w Tatrach', 'Synonim śniegu'],
    correct: 1, explanation: 'FZRA (Freezing Rain) to jedno z najgorszych zjawisk dla lotnictwa. Krople poniżej 0 °C zamarzają na kontakcie — szybko pokrywają wszystko lodem.' },

  { id: 187, category: 'meteo',
    question: 'BKN040 w METAR oznacza:',
    options: ['Bardzo Krótka Noc', 'Chmury połamane (Broken, 5–7/8 nieba) na wysokości 4000 ft AGL', '40 km widzialność', 'Bagatelne zachmurzenie 40%'],
    correct: 1, explanation: 'Stopnie zachmurzenia: FEW (1–2/8), SCT (3–4/8), BKN (5–7/8), OVC (8/8). Liczba po skrócie = wysokość podstawy w setkach stóp AGL.' },

  { id: 188, category: 'meteo',
    question: 'Porywy wiatru (gusts) w METAR "24015G25KT":',
    options: ['Średnia 15 KT, max chwilowo 25 KT — uważaj, porywy mogą wymagać przerwania lotu', 'Wiatr 15 m/s, kierunek 25°', '24 KT z porywami do 15 KT', 'Numer rejsu samolotu'],
    correct: 0, explanation: 'Format: prędkość średnia + G + porywy. Porywy mogą być 2× silniejsze niż średnia. Reguła: lataj poniżej 80% maks producenta z uwzględnieniem porywów.' },
];

// Export do globalnego zasięgu (script bez modułu)
if (typeof window !== 'undefined') {
  window.QUESTIONS = QUESTIONS;
}

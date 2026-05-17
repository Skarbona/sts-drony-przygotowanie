# Temat 1 — Przepisy lotnicze (20% egzaminu)

> **Waga:** ~8 pytań z 40 (lub 6 z 30, jeśli masz A2).
> **Charakter pytań:** dużo pytań „kazusowych" (jaki scenariusz w jakiej sytuacji), pytania o klasy stref, o ważność dokumentów, o limity (wysokość, odległość, MTOM).

---

## 1.1 Hierarchia prawna

- [ ] **Zapamiętać hierarchię od najwyższego aktu**
  - **Rozporządzenia UE** — bezpośrednio stosowane we wszystkich państwach członkowskich (nie wymagają wdrożenia krajowego)
  - **Ustawa Prawo lotnicze** z 3 lipca 2002 r. (Dz.U. 2023 poz. 2110 z późn. zm.) — przepisy krajowe (rejestracja, kary, kompetencje Prezesa ULC)
  - **Wytyczne Prezesa ULC** — akty wykonawcze (m.in. egzaminy, scenariusze NSTS)
  - **AIP Polska** (Zbiór Informacji Lotniczych) — informacje o przestrzeni
  - **NOTAM** — czasowe ograniczenia

- [ ] **Kluczowe rozporządzenia UE**
  - **2018/1139/UE** — „rozporządzenie bazowe EASA". Tworzy EASA, definiuje wspólne zasady lotnictwa cywilnego, daje podstawę dla rozporządzeń delegowanych/wykonawczych.
  - **2019/947/UE** — *wykonawcze* — **zasady eksploatacji BSP**: kategorie operacji (otwarta/szczególna/certyfikowana), wymagania dla pilota, scenariusze STS-01/02, obowiązki operatora.
  - **2019/945/UE** — *delegowane* — **wymagania techniczne dla BSP**: klasy C0–C6, znakowanie CE, deklaracja zgodności, identyfikacja zdalna (Remote ID).
  - **2020/639/UE** — zmiana 2019/947 wprowadzająca **scenariusze STS-01 i STS-02** (do dziś podstawa).
  - **2021/664/UE, 2021/665/UE, 2021/666/UE** — *pakiet U-space* (zarządzanie ruchem dronów).
  - **785/2004/WE** — obowiązkowe **ubezpieczenie OC** statków powietrznych ≥ 20 kg MTOM.
  - **376/2014/UE** — **zgłaszanie zdarzeń lotniczych** (system ECCAIRS/CZIB).
  - **2016/679 (RODO)** — przetwarzanie danych osobowych (nagrania, zdjęcia z drona).

- [ ] **Wiedzieć, gdzie szukać aktualnych wersji**
  - EUR-Lex (eur-lex.europa.eu)
  - EASA Easy Access Rules for UAS (skonsolidowana wersja w przyjaznym formacie)
  - Dzienniki Urzędowe ULC (edziennik.ulc.gov.pl)

---

## 1.2 Trzy kategorie operacji wg 2019/947

- [ ] **Kategoria OTWARTA (open)**
  - **Ryzyko:** niskie
  - **Wymagania:** rejestracja operatora, brak zezwolenia ani oświadczenia
  - **Limity:** MTOM < 25 kg, **wysokość ≤ 120 m AGL**, VLOS, brak przewozu osób, brak materiałów niebezpiecznych, brak zrzutów
  - **Podkategorie:**
    - **A1** — loty „nad ludźmi" (dron < 250 g klasy C0 lub C1 < 900 g; nigdy nad zgromadzeniami)
    - **A2** — loty „blisko ludzi" (dron C2 < 4 kg, **min. 30 m od osób postronnych**, lub 5 m w trybie low-speed)
    - **A3** — loty „z dala od ludzi" (C3/C4 < 25 kg, **min. 150 m** od stref zaludnionych)

- [ ] **Kategoria SZCZEGÓLNA (specific)**
  - **Ryzyko:** średnie
  - **3 ścieżki uzyskania zgody:**
    1. **Scenariusze standardowe STS-01 / STS-02** → **oświadczenie operatora** (najszybsza droga)
    2. **PDRA** (Pre-Defined Risk Assessment) — np. PDRA-S01, PDRA-S02 → zezwolenie na podstawie predefiniowanej oceny
    3. **SORA** (Specific Operations Risk Assessment) → indywidualne zezwolenie ULC (najdłuższa droga)
  - Alternatywa: **LUC** (Light UAS Operator Certificate) — operator ma własne uprawnienia do autoryzacji operacji
  - **Krajowe NSTS-01..08** — obowiązują **do 31 grudnia 2025 r.**, potem zastępują je STS-01/02

- [ ] **Kategoria CERTYFIKOWANA (certified)**
  - **Ryzyko:** wysokie (porównywalne z lotnictwem załogowym)
  - Dotyczy: przewóz osób, transport materiałów niebezpiecznych, operacje nad zgromadzeniami z dużym BSP
  - Wymaga: certyfikacji typu drona, licencji pilota analogicznej do pilota załogowego, certyfikatu operatora (AOC-like)

---

## 1.3 STS-01 — definicja i limity (UAS.STS-01)

- [ ] **Definicja:** „Operacje VLOS nad kontrolowanym obszarem naziemnym w środowisku zaludnionym"
- [ ] **Limity (UAS.STS-01.010 i .020):**
  - Wysokość max **120 m AGL** (mierzona od najbliższego punktu powierzchni Ziemi — czyli **uwzględnia teren!**)
  - **Wyjątek:** w odległości 50 m poziomo od sztucznej przeszkody > 105 m można podnieść lot **do 15 m powyżej przeszkody** (na wniosek właściciela przeszkody)
  - Maksymalna wysokość *przestrzeni operacyjnej* (operational volume) = wysokość lotu + **30 m** (Contingency Volume)
  - Prędkość pozioma **< 5 m/s** (≈ 18 km/h) względem ziemi
  - **VLOS w każdym momencie** (pilot lub UA Observer)
  - **Klasa drona:** **C5** lub **C3 + accessories kit** podnoszący go do C5
  - **MTOM < 25 kg**
  - **Aktywny + zaktualizowany Remote ID** (DRI)
  - **Brak materiałów niebezpiecznych** (DG)
  - Wykonywane zgodnie z **Instrukcją Operacyjną (OM)** operatora
- [ ] **Pilot musi mieć:**
  - Certyfikat wiedzy teoretycznej (egzamin STS w wyznaczonym podmiocie)
  - **Zaświadczenie ukończenia szkolenia praktycznego STS-01**

---

## 1.4 STS-02 — definicja i limity (UAS.STS-02)

- [ ] **Definicja:** „Operacje BVLOS z udziałem obserwatorów przestrzeni powietrznej nad kontrolowanym obszarem naziemnym w środowisku słabo zaludnionym"
- [ ] **Limity (UAS.STS-02.010 i .020):**
  - Wysokość max **120 m AGL** (z tym samym wyjątkiem przeszkody co STS-01)
  - Operational volume = wysokość lotu + **30 m**
  - **Klasa drona:** **C6**
  - **MTOM < 25 kg**
  - **Minimalna widzialność w locie > 5 km**
  - **Start i lądowanie w VLOS** (chyba że awaryjne)
  - **Brak obserwatora AO:** dystans max **1 km** od pilota, dron **musi lecieć po zaprogramowanej trasie**
  - **Z obserwatorem(-ami) AO:**
    - dron max **2 km** od pilota
    - dron max **1 km** od najbliższego AO
    - AO max **1 km** od pilota
    - dwukierunkowa, **niezawodna łączność** pilot ↔ AO
    - rozmieszczenie AO pokrywa cały obszar bez luk
  - **Aktywny system geofencingu** zapobiegający przekroczeniu granic Flight Geography
  - **Aktywny + zaktualizowany Remote ID**
  - **Brak materiałów niebezpiecznych**

- [ ] **Pilot musi mieć:**
  - Certyfikat wiedzy teoretycznej STS (ten sam egzamin co STS-01)
  - **Zaświadczenie ukończenia szkolenia praktycznego STS-02**
  - W praktyce: najpierw STS-01, potem rozszerzenie do STS-02

---

## 1.5 Oświadczenie operatora (Declaration)

- [ ] **Co to jest:** dokument składany przez operatora do ULC, w którym deklaruje zgodność z wymaganiami STS-01 lub STS-02. Po jego przyjęciu można legalnie wykonywać operacje **bez zezwolenia**.
- [ ] **Format:** generowany w profilu operatora na **drony.ulc.gov.pl**
- [ ] **Podpis:**
  - Profil Zaufany (najczęściej)
  - Podpis kwalifikowany
  - Odręczny (i wysłany pocztą/osobiście)
- [ ] **Wysyłka:** ePUAP / poczta / osobiście w siedzibie ULC
- [ ] **Koszt:** **50 zł** (opłata skarbowa)
- [ ] **Ważność:** **2 lata** (UAS.SPEC.085). Oświadczenie przestaje być kompletne wcześniej, jeśli operacja nie jest prowadzona zgodnie z oświadczeniem, warunki operacji zmienią się tak, że oświadczenie nie spełnia wymagań, albo operator nie zapewni dostępu organowi nadzoru.
- [ ] **Weryfikacja statusu:** drony.ulc.gov.pl/search (publiczna lista przyjętych oświadczeń)
- [ ] **Cross-border:** oświadczenie złożone w Polsce uprawnia do operacji w **całej UE** (po notyfikacji do innego państwa wg sekcji UAS.SPEC.040) — zasada **wzajemnego uznawania**
- [ ] **Aktualizacja:** każda istotna zmiana danych/warunków (np. nowy typ drona, zmiana OM, zmiana zakresu operacji, personelu lub OC) wymaga aktualizacji oświadczenia przed dalszym wykonywaniem operacji.
- [ ] **Operator deklaruje, że:**
  - Posiada OC dla każdego lotu
  - Posiada Instrukcję Operacyjną (OM)
  - Piloci mają wymagane certyfikaty
  - Drony spełniają wymagania klasy (C5/C6)
  - Wdroży procedury awaryjne i ratunkowe (ERP)

---

## 1.6 Strefy geograficzne dla dronów (DRA) — PAŻP

- [ ] **DRA-P (Prohibited)** — strefa **zakazana**. Loty niedozwolone. Wyjątek: wojsko, służby państwowe, służby ratownicze.
  - Przykłady: nad obiektami strategicznymi (rządowymi, wojskowymi, jądrowymi), nad granicą państwa, częściowo nad lotniskami.
- [ ] **DRA-R (Restricted)** — strefa **ograniczona**. Loty **za zgodą i na warunkach** określonych przez PAŻP.
  - Często wokół CTR, ATZ, nad parkami narodowymi, nad miastami w określonych godzinach.
  - **DRA-RH** (Restricted High) — podtyp o podwyższonym ryzyku.
- [ ] **DRA-T (Traffic)** — strefa **informacyjna**, koordynacyjna. Wymaga **check-in** w aplikacji.
- [ ] **DRA-I** — informacyjna (zalecenia).
- [ ] **DRA-U** — strefy **U-space** (gdy zostaną wdrożone w Polsce).

- [ ] **Aplikacje do sprawdzania stref**
  - **DroneRadar / DroneTower** (PAŻP) — strefy + zgłaszanie check-in
  - **PansaUTM** — system zgłoszeń operacji
  - **AMC** (Airspace Management Cell) — koordynacja telefoniczna

- [ ] **Inne struktury przestrzeni powietrznej** (dla świadomości — drony nie mogą tam wlecieć bez koordynacji)
  - **CTR** (Control Zone) — strefa kontrolowana lotniska
  - **TMA** (Terminal Manoeuvring Area) — strefa kontrolowana okołolotniskowa
  - **ATZ** (Aerodrome Traffic Zone) — strefa lotniska niekontrolowanego
  - **MCTR / MATZ / MTMA** — wojskowe odpowiedniki
  - **EP R, EP D, EP P** — strefy ograniczone / niebezpieczne / zakazane (lotnictwo załogowe)
  - **TSA / TRA** — czasowo wydzielone/rezerwowane strefy (głównie wojskowe)
  - **FIR/UIR** — Flight/Upper Information Region (cała Polska = FIR Warszawa, EPWW)

- [ ] **Klasy przestrzeni ICAO obowiązujące w Polsce**
  - **G** — niekontrolowana, **od GND do FL095** (≈ 2 895 m AMSL) w większości obszaru Polski (drony w niej operują, do max 120 m AGL)
  - **C** — kontrolowana, **od FL095 wzwyż** (do FL460/FL660)
  - **D** — kontrolowana, w obrębie niektórych CTR/TMA
  - **Uwaga:** w obrębie klasy G „od dołu" wycinane są strefy kontrolowane (CTR/MCTR lotnisk) oraz strefy specjalne (EP R/D/P, TSA/TRA, DRA) — formalnie należą do innych klas/typów.

---

## 1.7 Remote ID (zdalna identyfikacja) — obowiązkowy od 1.01.2024

- [ ] **Co to jest:** system **lokalnego rozpowszechniania** informacji o eksploatowanym BSP, pozwalający uzyskać dane **bez fizycznego dostępu** do urządzenia. Działa na **Bluetooth 4/5** i/lub **WiFi**.
- [ ] **Co emituje (minimum):**
  - Numer rejestracyjny operatora
  - Numer seryjny BSP
  - Czas, **pozycja i wysokość** BSP
  - Trasa i prędkość
  - **Pozycja pilota lub punkt startu**
  - Wskazanie statusu awaryjnego
- [ ] **Drony objęte wymogiem:** klasy **C1, C2, C3, C5, C6** (czyli wszystkie używane w STS).
- [ ] **Zwolnione:** C0, C4, drony na uwięzi, „legacy drones" wprowadzone przed 1.01.2024 r. (tylko w A1 < 250 g lub A3).
- [ ] **NSTS:** wg stanowiska ULC krajowe scenariusze NSTS **nie wymagały** Remote ID (przepis był w UAS.SPEC.050, a nie .020) — ale to nieaktualne od 2026 r., bo NSTS wygasają z końcem 2025 r.
- [ ] **W praktyce na egzamin:** zawsze pamiętaj — **STS-01 i STS-02 wymagają aktywnego, aktualnego Remote ID**.

---

## 1.8 Rejestracja operatora BSP

- [ ] **Kto musi się zarejestrować:**
  - Każdy operator BSP > 250 g LUB
  - Każdy operator BSP < 250 g, jeśli dron ma **kamerę/czujnik** mogący zbierać dane osobowe (czyli praktycznie wszystkie konsumenckie)
- [ ] **Gdzie:** drony.ulc.gov.pl (Profil Zaufany)
- [ ] **Co dostajesz:** **numer operatora** (format: `POL-XXX-XXXXXXXXXX`) + osobisty kod do drona (CHECK CODE)
- [ ] **Obowiązek:** numer operatora musi być **trwale i widocznie umieszczony na dronie**
- [ ] **Ważność:** **12 miesięcy**, wymagane corocznie odnowienie
- [ ] **Rejestracja jest** **w kraju zamieszkania** (osoby fizyczne) lub siedziby (osoby prawne). Rejestrujesz się **tylko raz w UE**.

---

## 1.9 Kompetencje pilota — różnice między uprawnieniami

| Uprawnienie | Akt prawny | Wymagania | Ważność | Co umożliwia |
|-------------|-----------|-----------|---------|--------------|
| **A1/A3** | UAS.OPEN.020 | szkolenie online + test online (40 pytań, 75%) | 5 lat | Kategoria otwarta A1, A3 |
| **A2** | UAS.OPEN.030 | A1/A3 + samokształcenie + egzamin stacjonarny (30 pytań, 75%) + deklaracja praktyki | 5 lat | Kategoria otwarta A2 |
| **STS-01/02 (teoria)** | UAS.STS-01.020 / UAS.STS-02.020 | A1/A3 + egzamin STS (40 pytań lub 30 z A2, 75%) | **5 lat** | wymóg do certyfikatu STS |
| **STS-01 (praktyka)** | Załącznik A do Rozdziału I | szkolenie + ocena umiejętności w podmiocie wyznaczonym | bezterminowo (do zmiany przepisów) | Operacje STS-01 |
| **STS-02 (praktyka)** | Załącznik A do Rozdziału II | STS-01 + dodatkowe szkolenie BVLOS | bezterminowo | Operacje STS-02 |

- [ ] **Przedłużenie certyfikatu teorii:**
  - **W okresie ważności:** zdanie egzaminu *lub* ukończenie szkolenia przypominającego
  - **Po wygaśnięciu:** ponowne zdanie pełnego egzaminu

---

## 1.10 Ubezpieczenie OC

- [ ] **Rozporządzenie (WE) 785/2004** — obowiązkowe OC dla statków powietrznych
- [ ] **Próg masowy:** **MTOM ≥ 20 kg** — bezwzględny obowiązek OC zgodny z 785/2004
- [ ] **Dla mniejszych dronów:** w praktyce **każdy operator komercyjny** ma OC, bo:
  - Wymaga go większość kontraktów
  - ULC zaleca ubezpieczenie dla operacji w kategorii szczególnej
  - Polskie towarzystwa (np. AeroPolisa, PZU) oferują OC od ok. 200–500 zł/rok dla dronów do 25 kg
- [ ] **OC powinno pokrywać:** szkody na osobach, mieniu, środowisku
- [ ] **Dokumenty:** polisa musi być **dostępna na operacji** (kserokopia/PDF na telefonie)

---

## 1.11 Zgłaszanie zdarzeń lotniczych

- [ ] **Podstawa prawna:** Rozporządzenie (UE) 376/2014 oraz krajowe przepisy
- [ ] **Co zgłaszać:**
  - **Wypadek** — śmierć/poważne obrażenia, zniszczenie drona, szkody mienia
  - **Poważny incydent** — sytuacja bliska wypadkowi
  - **Incydent** — wszelkie nieprawidłowości wpływające na bezpieczeństwo (lost link, fly-away, kolizja itp.)
- [ ] **System:** **ECCAIRS** (European Coordination Centre for Accident and Incident Reporting Systems) lub krajowy **CZIB** (Centrum Zgłaszania Informacji o Bezpieczeństwie)
- [ ] **Termin:** **niezwłocznie**, max **72 godziny** od zdarzenia
- [ ] **Komu zgłaszać:**
  - **PKBWL** (Państwowa Komisja Badania Wypadków Lotniczych) — wypadki i poważne incydenty
  - **ULC** — pozostałe zdarzenia
- [ ] **Zasada „just culture":** zgłoszenie nie skutkuje karą, chyba że doszło do rażącego niedbalstwa lub umyślności
- [ ] **Forma:** elektroniczna (ECCAIRS2) lub papierowa

---

## 1.12 Ochrona danych i prywatności (RODO)

- [ ] **Każdy dron z kamerą = administrator danych osobowych** (jeśli możliwa identyfikacja osób)
- [ ] **Obowiązki operatora:**
  - **Informowanie** o nagrywaniu (tabliczka, oznakowanie strefy)
  - **Minimalizacja danych** — nie nagrywaj więcej niż potrzeba
  - **Bezpieczeństwo** danych (szyfrowanie kart pamięci, kontrola dostępu)
  - **Retencja** — nie przechowuj dłużej niż konieczne
- [ ] **Zakazy fotografowania:**
  - **Art. 23 ustawy Prawo lotnicze** + **rozporządzenie MON** — obiekty wojskowe, infrastruktura krytyczna
  - Granica państwowa, lotniska wojskowe
  - Niektóre więzienia, obiekty rządowe
- [ ] **Konsekwencje:** kary RODO do 20 mln EUR / 4% obrotu; krajowe sankcje karne za fotografowanie obiektów chronionych

---

## 1.13 Materiały niebezpieczne (Dangerous Goods, DG)

- [ ] **Bezwzględny zakaz przewozu DG** w STS-01 i STS-02
- [ ] **Definicja DG:** materiały objęte instrukcjami ICAO Doc 9284 (substancje wybuchowe, gazy, ciecze łatwopalne, materiały trujące, radioaktywne, korozyjne)
- [ ] **Wyjątek:** w kategorii szczególnej z indywidualnym zezwoleniem (np. transport AED) — **nie w STS!**
- [ ] **Uwaga:** zrzut materiałów (nawet bezpiecznych) — wymaga osobnej zgody w kat. szczególnej

---

## 1.14 Mnemoniki i triki egzaminacyjne

- [ ] **Mnemonik STS-01 vs STS-02:**
  - „**1 = VLOS**, **2 = BVLOS**" (cyfra rośnie razem z odległością)
  - „**C5 → STS-01, C6 → STS-02**" (klasa + 4 = numer scenariusza)
- [ ] **Mnemonik kategorii otwartej:**
  - **A1** = „**Above**" (nad ludźmi)
  - **A2** = „**Around**" (blisko ludzi, 30 m)
  - **A3** = „**Away**" (daleko od ludzi, 150 m)
- [ ] **Liczby do zapamiętania na pamięć:**
  - **120** m — max wysokość zarówno STS-01, STS-02, jak i otwartej
  - **30** m — odległość A2 od osób
  - **150** m — odległość A3 od stref zaludnionych
  - **5 m/s** — max prędkość STS-01
  - **5 km** — min widzialność STS-02
  - **1 km / 2 km** — STS-02 bez/z AO
  - **10 m** — Contingency Volume buffer (poza Flight Geography)
  - **30 m** — wysokość Operational Volume powyżej Flight Geography
  - **50 zł / 2 lata** — oświadczenie operatora
  - **75% / 90 s** — egzamin
  - **5 lat** — ważność certyfikatu wiedzy
  - **72 godz.** — termin zgłoszenia zdarzenia

---

## 1.15 Pytania samosprawdzające

1. Czy w STS-01 mogę latać dronem klasy C3? **Tak — pod warunkiem dołączenia accessories kit upodabniającego do C5.**
2. Czy w STS-02 mogę latać bez obserwatora? **Tak, ale tylko do 1 km i tylko po zaprogramowanej trasie.**
3. Ile wynosi ważność oświadczenia operatora? **2 lata.**
4. Co to jest DRA-P? **Strefa zakazana — loty bez zgody niemożliwe (poza wojskiem i służbami).**
5. Czy Remote ID jest wymagany w STS-01? **Tak — aktywny i aktualny system DRI.**
6. Kiedy egzamin teorii STS-01 ma 30, a kiedy 40 pytań? **30 jeśli mam ważne A2, 40 jeśli tylko A1/A3.**
7. Gdzie zgłosić wypadek BSP? **PKBWL niezwłocznie, max 72 godziny.**
8. Jaka jest max wysokość lotu STS-01/02 w pobliżu komina 150 m? **Standardowo 120 m AGL (Operational Volume sięga +30 m = 150 m AGL). Przy zachowaniu odległości ≤ 50 m od przeszkody i za zgodą podmiotu odpowiedzialnego za przeszkodę: max wysokość LOTU = 150 m (komin) + 15 m = 165 m AGL, a Operational Volume sięga wtedy 195 m AGL.**

---

## 1.16 Pułapki egzaminacyjne

- ⚠️ **120 m AGL ≠ 120 m AMSL** — wysokość mierzona od najbliższego punktu powierzchni terenu, więc nad zboczem dron może być wysoko nad poziomem morza!
- ⚠️ **Oświadczenie ≠ zezwolenie** — oświadczenie składasz sam (nie czekasz na decyzję); zezwolenie wydaje ULC po analizie.
- ⚠️ **STS-01 = klasa C5**, ale **C3 + kit** też wystarcza — to popularna pułapka.
- ⚠️ **Rejestracja operatora ≠ rejestracja drona** — w UE rejestrujemy *operatora*, nie drona (z wyjątkiem dronów certyfikowanych).
- ⚠️ **NSTS-01..08 to NIE to samo co STS-01/02** — NSTS to scenariusze **krajowe** (polskie), STS to **unijne**. Od 31.12.2025 r. NSTS wygasają.
- ⚠️ **5 m/s ≈ 18 km/h** — to bardzo mało, w praktyce dron leci „w spacerze".
- ⚠️ Materiały niebezpieczne są **zakazane bezwzględnie** — nie ma warunkowych pozwoleń w STS.

---

**[← Powrót do indeksu](./00_INDEX.md)** | **[Następny: 02 Procedury operacyjne →](./02_Procedury_operacyjne.md)**

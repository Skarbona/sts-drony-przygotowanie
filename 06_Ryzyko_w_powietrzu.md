# Temat 6 — Techniczne i operacyjne środki ograniczające ryzyko w powietrzu (10%)

> **Waga:** ~4 pytania z 40 (lub 3 z 30).
> **Charakter:** klasy przestrzeni, kolizje z lotnictwem załogowym, „detect & avoid", Remote ID, NOTAM, AIP.

---

## 6.1 Świadomość przestrzeni powietrznej (Airspace Awareness)

Polska przestrzeń powietrzna podzielona jest hierarchicznie:

```
FIR Warszawa (EPWW) — cała Polska
├── Klasy ICAO (G, C, D)
├── Strefy kontrolowane: CTR, TMA, MCTR, MTMA, ATZ
├── Strefy specjalne: EP R, EP D, EP P, TSA, TRA
└── Strefy DRA (dla dronów): DRA-P, DRA-R, DRA-T
```

### Klasy przestrzeni powietrznej ICAO obowiązujące w Polsce

| Klasa | Charakter | Drony tu? |
|-------|-----------|-----------|
| **G** | Niekontrolowana, **od GND do FL095** (≈ 2 895 m AMSL) w większości Polski | TAK — operacje BSP zwykle tu (max 120 m AGL) |
| **C** | Kontrolowana — **od FL095 do FL460/FL660** | NIE bez koordynacji |
| **D** | Kontrolowana — w obrębie wybranych CTR/TMA | NIE bez zgody |

> **Uwaga:** „Polska to G + C" to uproszczenie. W obrębie klasy G wycina się strefy kontrolowane wokół lotnisk (CTR/MCTR) oraz strefy specjalne (EP R/D/P, TSA/TRA, DRA dla dronów). Dron lecący do 120 m AGL operuje w klasie G — chyba że wpadnie w jedną z tych „wycinek".

### Struktury przestrzeni dla lotnictwa załogowego (drony muszą znać dla świadomości)

- [ ] **CTR** (Control Zone) — strefa kontrolowana wokół lotniska kontrolowanego (np. EPWA Warszawa-Okęcie)
  - Od ziemi do określonej wysokości (zwykle 2000 ft AMSL)
  - Wymagana zgoda ATC dla wlatujących
- [ ] **TMA** (Terminal Manoeuvring Area) — strefa kontrolowana okołolotniskowa
  - Od określonej wysokości (zwykle 1500–2500 ft AMSL) wzwyż
  - „Trąba" nad lotniskiem
- [ ] **ATZ** (Aerodrome Traffic Zone) — strefa lotniska **niekontrolowanego** (mały aerodrome)
  - Typowo promień ok. 5,5 km (3 NM) i pułap do 4 000 ft AMSL lub 1 200 ft AAL — **wymiary różne dla każdego lotniska**, sprawdź w AIP-AD
  - Brak ATC; ruch koordynuje informator **AFIS** lub piloci sami przez radio
- [ ] **MCTR / MATZ / MTMA** — wojskowe odpowiedniki
- [ ] **EP R** (Restricted) — strefa ograniczona (np. R-1, R-2 nad obiektami strategicznymi)
- [ ] **EP D** (Danger) — strefa niebezpieczna (np. strzelnice, poligony)
- [ ] **EP P** (Prohibited) — strefa zakazana (np. P-1 nad Warszawą-centrum, obiekty rządowe)
- [ ] **TSA** (Temporary Segregated Area) — czasowo wydzielona (wojskowe ćwiczenia)
- [ ] **TRA** (Temporary Reserved Area) — czasowo zarezerwowana

### Strefy DRA — dronowe

- [ ] **DRA-P** — zakazana dla dronów (lokalne)
- [ ] **DRA-R** — ograniczona (zgoda + warunki)
- [ ] **DRA-RH** — ograniczona o wysokim ryzyku (np. wokół CTR)
- [ ] **DRA-T** — informacyjna, check-in
- [ ] **DRA-I** — informacyjna

### Wysokości — terminy

- [ ] **AGL** (Above Ground Level) — **nad terenem** (lokalna wysokość gruntowa). Stosowane w STS!
- [ ] **AMSL** (Above Mean Sea Level) — **nad poziomem morza**. Stosowane w lotnictwie załogowym.
- [ ] **AAL** (Above Aerodrome Level) — nad lotniskiem
- [ ] **FL** (Flight Level) — wysokość barometryczna w setkach stóp od ciśnienia standardowego (FL095 = 9500 ft pressure altitude)
- [ ] **120 m AGL = ok. 394 ft AGL** — w lotnictwie często mówi się „400 ft" dla dronów

---

## 6.2 Ryzyko kolizji z lotnictwem załogowym

### Co lata poniżej 150 m AGL?

- [ ] **Śmigłowce ratunkowe (HEMS)** — Lotnicze Pogotowie Ratunkowe (EC135, H145) — często lecą na 200–500 ft AGL, mogą startować/lądować wszędzie
- [ ] **Śmigłowce policyjne, straży granicznej** — patrole, akcje
- [ ] **Śmigłowce ENERGI / linii energetycznych** — inspekcje
- [ ] **Samoloty rolnicze** (Dromader, AT-502) — opryski na wysokości 5–20 m AGL
- [ ] **Paralotnie i motoparalotnie** — od 50 do 1500 m AGL, często w sportowych dni
- [ ] **Szybowce** — w „termice" mogą krążyć nisko
- [ ] **Balony** — różne wysokości
- [ ] **Skoczkowie spadochronowi** — przy spadochroniarstwie
- [ ] **Inne BSP** — drony rekreacyjne, kurierskie (rosnący ruch)

### Zasada „ustąpienia pierwszeństwa"

- [ ] **BEZWZGLĘDNE PIERWSZEŃSTWO statków załogowych** (manned aviation)
- [ ] **Pilot drona ma OBOWIĄZEK przerwać lot**, jeśli operacja stwarza zagrożenie
- [ ] **W praktyce:** widzisz/słyszysz śmigłowiec → natychmiastowe zniżenie/lądowanie
- [ ] **Zwracaj uwagę na dźwięk** — śmigłowiec słychać kilkaset metrów wcześniej niż go widać

### Statystyki incydentów

- [ ] **W Polsce** zgłoszono w 2024 r. **kilkadziesiąt** zdarzeń z udziałem dronów i statków załogowych (źródło: ULC roczny raport)
- [ ] **Najczęstsze:** drony nad lotniskami, w pobliżu śmigłowców HEMS, nad imprezami masowymi
- [ ] **Konsekwencje:** kary administracyjne (ULC), karne (art. 211 ustawy Prawo lotnicze), cywilne (odszkodowania)

---

## 6.3 „Detect and Avoid" (DAA) — wykrywanie i unikanie

### Tradycyjne metody: VLOS i AO

- [ ] **VLOS** — pilot widzi drona i otaczającą przestrzeń → reaguje wizualnie
- [ ] **AO** (Air Observer) — obserwator z lornetką pomaga w skanowaniu przestrzeni

### Elektroniczne wsparcie

- [ ] **Remote ID (DRI)**
  - Pasywna identyfikacja innych dronów w okolicy
  - Aplikacje (np. DroneRadar) wyświetlają inne BSP w czasie rzeczywistym
- [ ] **ADS-B In** (Automatic Dependent Surveillance – Broadcast)
  - Dron odbiera sygnały z transponderów ADS-B statków załogowych
  - Większość samolotów komercyjnych ma ADS-B Out
  - Lekkie samoloty czasem nie mają (mały zasięg)
  - Niektóre profesjonalne drony (DJI M300) mają wbudowany AirSense (odbiornik ADS-B)
- [ ] **FLARM** (głównie szybowce, paralotnie) — niektóre drony też wspierają
- [ ] **PSR / SSR** (radary pierwotne/wtórne) — używane przez ATC, ale nie przez pilota drona
- [ ] **U-space** — przyszłościowy zarządzany ekosystem ruchu BSP (CIS, network identification, geo-awareness)

### Zasady reakcji

- [ ] **Widzisz/słyszysz statek załogowy** → natychmiastowe zniżenie lub lądowanie
- [ ] **Ostrzeżenie ADS-B** → odsunięcie się od trajektorii statku
- [ ] **Remote ID innego drona blisko** → koordynacja (jeśli możliwa) lub zmiana strefy
- [ ] **Lecący śmigłowiec HEMS** → bezwzględne ustąpienie

---

## 6.4 NOTAM, AIP, briefing przedlotowy

### NOTAM (Notice to Airmen)

- [ ] **Co to:** depesza informująca o **czasowych** zmianach w przestrzeni powietrznej, infrastrukturze, procedurach
- [ ] **Przykłady:**
  - Czasowe zamknięcie strefy (ćwiczenia wojskowe)
  - Pokaz lotniczy, marsz, imprezy masowe
  - Awaria pomocy nawigacyjnej (VOR, ILS)
  - Otwarcie nowej drogi
  - Wycinka drzew, podnoszenie żurawia
- [ ] **Format:** zakodowany, ale aplikacje (DroneTower, AirNav) dekodują automatycznie
- [ ] **Obowiązek:** **sprawdzaj NOTAM-y przed każdą operacją** w obszarze operacji
- [ ] **Czas ważności:** od kilku godzin do kilku miesięcy
- [ ] **Źródła:**
  - AIS (Aeronautical Information Service) — ais.pansa.pl
  - DroneTower — automatyczna integracja
  - Apl. „NOTAM" / NavPlay / SkyDemon

### AIP Polska (Aeronautical Information Publication)

- [ ] **Co to:** **pełny** zbiór informacji lotniczych dla Polski
- [ ] **3 części:**
  - **AIP-GEN** — informacje ogólne (jednostki miary, organizacja przestrzeni)
  - **AIP-ENR** (En-route) — **strefy i przestrzeń powietrzna** (najważniejsze dla dronów!)
  - **AIP-AD** (Aerodromes) — lotniska, procedury podejścia
- [ ] **Format:** PDF, online
- [ ] **Strona:** ais.pansa.pl
- [ ] **Aktualizacja:** wg cyklu AIRAC (co 28 dni)

### VFR Manual

- [ ] **Uproszczona wersja** AIP dla pilotów VFR
- [ ] **Mapy stref** w atrakcyjnym formacie
- [ ] Warto przejrzeć dla zrozumienia, gdzie nie wlatywać

### AIRAC (Aeronautical Information Regulation And Control)

- [ ] **Cykl 28 dni** — regularne aktualizacje informacji lotniczej
- [ ] Wszystkie zmiany publikowane z wyprzedzeniem (5 cykli)

---

## 6.5 Wysokości — interpretacja AGL/AMSL w STS

### Reguła wysokości w STS

> *„Dron utrzymuje się w odległości 120 m od najbliższego punktu powierzchni Ziemi. Pomiar dostosowuje się odpowiednio do cech geograficznych terenu, takich jak równiny, wzgórza, góry."* (UAS.STS-01.010 ust. 1, identycznie STS-02)

### Implikacje

- [ ] **Na równinie:** prosto — 120 m AGL = 120 m nad ziemią pod dronem
- [ ] **W górach / na zboczu:** dron śledzi teren — może być na 800 m AMSL (np. Tatry) ale tylko 80 m AGL
- [ ] **Nad doliną:** dron na 120 m AGL nad jej dnem może być 50 m nad krawędzią doliny — to jest LEGALNE w STS

### Wyjątek przeszkód wysokich

- [ ] **W odległości 50 m poziomo od sztucznej przeszkody > 105 m**, można podnieść lot do **+15 m powyżej przeszkody**
- [ ] **Wymóg:** zgoda właściciela przeszkody (np. operator masztu)
- [ ] **Przykład:** komin elektrowni 200 m wysokości → można lecieć do 215 m AGL w promieniu 50 m

---

## 6.6 Operacje w pobliżu lotnisk

- [ ] **CTR/ATZ lotnisk** — domyślnie strefa DRA-R, lot tylko po koordynacji
- [ ] **Procedura:**
  1. Sprawdź strefę w DroneTower
  2. Złóż **check-in elektroniczny** lub
  3. Skontaktuj się telefonicznie z TWR (Tower) lub AMC
  4. Otrzymaj zgodę z warunkami (np. max wysokość, godziny)
- [ ] **W ATZ niekontrolowanym** często wystarczy zgłoszenie w DroneRadar i powiadomienie informatora AFIS

---

## 6.7 Operacje w polskich strefach „nowych" (po 2022 r.)

W związku z konfliktem za granicą wschodnią:

- [ ] **Strefy NFZ (No-Fly Zones)** wokół granicy wschodniej
- [ ] **Strefy R-129 / R-130** rozszerzone
- [ ] **Strefy P-46 i podobne** w obszarach wojskowych
- [ ] **Częste wojskowe NOTAM-y** zamykające czasowo duże obszary
- [ ] **Praktyka:** zawsze sprawdzaj **dzień operacji** + **godzina** w AIS — sytuacja zmienia się szybko

---

## 6.8 U-space i przyszłościowe systemy

- [ ] **U-space** — pakiet rozporządzeń UE 2021/664, 665, 666 — UTM (Unmanned Traffic Management)
- [ ] **Cel:** umożliwienie zaawansowanych operacji (BVLOS, dostawy, taxi powietrzne) w sposób zarządzany
- [ ] **Komponenty:**
  - **U-space Service Providers (USSP)** — komercyjni dostawcy usług
  - **Common Information Service (CIS)** — wspólna baza informacji
  - **Network Identification** — dynamiczna identyfikacja dronów
  - **Geo-awareness service**
  - **Traffic information service**
- [ ] **W Polsce:** PAŻP jest CIS, trwają prace nad wyznaczeniem stref U-space
- [ ] **DRA-U** — strefy U-space (jeszcze nie aktywne na masową skalę)

---

## 6.9 Komunikacja z PAŻP

### DroneRadar / DroneTower

- [ ] **Mobilna aplikacja** PAŻP, integracja z systemem PansaUTM
- [ ] **Funkcje:**
  - Sprawdzanie stref (DRA, CTR, etc.)
  - **Check-in elektroniczny** — zgłoszenie startu i lądowania
  - Powiadomienia o zmianach w strefach
  - Informacje o aktywnych operacjach innych
- [ ] **Obowiązek check-in:** w niektórych strefach DRA-T konieczny

### Telefoniczna koordynacja

- [ ] **AMC** (Airspace Management Cell) — koordynacja stref TSA/TRA
- [ ] **TWR lotniska** — bezpośrednio dla CTR
- [ ] **FIS** (Flight Information Service) — informacje o ruchu
- [ ] **Numery alarmowe** — PKBWL, ULC, 112

---

## 6.10 Mnemoniki i tipy

- [ ] **„AGL nie AMSL"** — w STS wszystko mierzysz nad ziemią
- [ ] **Mnemonik klas stref ICAO:** „G = Ground (drony tu)"
- [ ] **DRA = Drone Restricted Area** — wszystkie strefy dronowe mają prefiks DRA
- [ ] **„HEMS first"** — śmigłowiec ratunkowy zawsze ma pierwszeństwo
- [ ] **„NOTAM przed startem"** — zawsze sprawdzaj na konkretny dzień operacji

---

## 6.11 Pytania samosprawdzające

1. Jaka klasa przestrzeni ICAO obowiązuje od ziemi do FL095 (~2 895 m AMSL) w większości Polski? **G (niekontrolowana).** Drony operują w niej do 120 m AGL.
2. Co to ATZ? **Aerodrome Traffic Zone — strefa lotniska niekontrolowanego, typowo promień 5 km.**
3. Czy mam pierwszeństwo przed śmigłowcem ratunkowym? **NIE — bezwzględne pierwszeństwo statków załogowych.**
4. Lecisz w dolinie 100 m poniżej krawędzi. Jaką max wysokość AGL możesz mieć? **120 m AGL nad dnem doliny (a nad krawędzią to byłoby ujemne — czyli 20 m powyżej krawędzi).**
5. Co to AIRAC? **Cykl 28 dni regularnych aktualizacji informacji lotniczej.**
6. Czy NOTAM-y są ważne dla pilota drona? **TAK — bezwzględnie. Czasowe zmiany w przestrzeni.**
7. Czy Remote ID innego drona widzę bez specjalnego sprzętu? **TAK, jeśli telefon i aplikacja obsługują odbiór Direct Remote ID / OpenDroneID przez Bluetooth/WiFi.** Dedykowane systemy producentów (np. dawne DJI AeroScope) to osobna kategoria sprzętu, nie zwykła aplikacja mobilna.
8. Co to U-space? **Pakiet rozporządzeń UE dla zarządzania ruchem dronów (UTM).**

---

## 6.12 Pułapki egzaminacyjne

- ⚠️ **AGL ≠ AMSL** — różnica może być setki metrów. STS używa AGL.
- ⚠️ **120 m to twardy limit AGL** — nawet jeśli dron jest na 5000 m AMSL w górach, nie może być więcej niż 120 m nad ziemią pod nim.
- ⚠️ **Wyjątek wysokich przeszkód** wymaga **zgody właściciela** — nie wystarczy, że komin jest 200 m wysoki.
- ⚠️ **Klasy A, B, E, F** istnieją w ICAO, ale **w Polsce stosujemy G, C, D**.
- ⚠️ **Drony zwykle latają w klasie G**, ale CTR/TMA mogą sięgać do ziemi.
- ⚠️ **DRA-T to NIE zakazana** — to informacyjna z check-in. DRA-P to zakazana.
- ⚠️ **„Detect and avoid" jest obowiązkiem pilota** — Remote ID i ADS-B to wsparcie, nie substytut.
- ⚠️ **AIP sprawdza się przed lotem**, nawet w „znanym" miejscu — strefy się zmieniają.

---

## 6.13 Tabela skrótów

| Skrót | Rozwinięcie | Znaczenie |
|-------|-------------|-----------|
| AGL | Above Ground Level | nad terenem |
| AMSL | Above Mean Sea Level | nad poziomem morza |
| AAL | Above Aerodrome Level | nad lotniskiem |
| FL | Flight Level | poziom lotu (setki stóp) |
| CTR | Control Zone | strefa kontrolowana lotniska |
| TMA | Terminal Manoeuvring Area | strefa okołolotniskowa |
| ATZ | Aerodrome Traffic Zone | strefa lotniska niekontrolowanego |
| MCTR/MATZ | Military CTR/ATZ | wojskowe odpowiedniki |
| TSA/TRA | Temporary Segregated/Reserved Area | strefy czasowe |
| EP R/D/P | Restricted/Danger/Prohibited | strefy specjalne PL |
| FIR | Flight Information Region | region informacji powietrznej |
| NOTAM | Notice to Airmen | depesza ostrzegawcza |
| AIP | Aeronautical Information Publication | zbiór informacji lotniczych |
| AIRAC | AI Regulation And Control | cykl aktualizacji 28 dni |
| ADS-B | Automatic Dependent Surveillance Broadcast | identyfikacja samolotów |
| HEMS | Helicopter Emergency Medical Service | ratunkowe |
| AFIS | Aerodrome Flight Information Service | informator lotniska |
| TWR | Tower | wieża kontroli |
| AMC | Airspace Management Cell | komórka zarządzania |
| ATC | Air Traffic Control | kontrola ruchu lotniczego |
| FIS | Flight Information Service | służba informacji powietrznej |

---

**[← Poprzedni: 05 Osiągi w locie](./05_Osiagi_w_locie.md)** | **[Powrót do indeksu](./00_INDEX.md)** | **[Następny: 07 Ograniczenia człowieka →](./07_Ograniczenia_czlowieka.md)**

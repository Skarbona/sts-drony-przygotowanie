# Temat 8 — Meteorologia (5%)

> **Waga:** ~2 pytania z 40 (lub 2 z 30).
> **Charakter:** mniejsza waga, ale konkretne wartości (limity, oznaczenia METAR/TAF, klasyfikacja chmur).

---

## 8.1 Źródła informacji pogodowej

### METAR (Meteorological Aerodrome Report)

- [ ] **Co to:** depesza pogodowa dla danego lotniska, **publikowana co 30 min**
- [ ] **Format:** zakodowany ciąg znaków
- [ ] **Przykład:**
  ```
  METAR EPWA 171430Z 24015G25KT 8000 -RA SCT020 BKN040 12/08 Q1013
  ```
- [ ] **Dekodowanie:**
  - `EPWA` — kod lotniska (Warszawa-Okęcie)
  - `171430Z` — 17. dzień miesiąca, 14:30 UTC
  - `24015G25KT` — wiatr 240°, 15 węzłów, porywy 25 węzłów
  - `8000` — widzialność 8000 m
  - `-RA` — słaby deszcz
  - `SCT020` — chmury rozproszone (Scattered) na 2000 ft AGL
  - `BKN040` — chmury połamane (Broken) na 4000 ft AGL
  - `12/08` — temperatura 12 °C / punkt rosy 8 °C
  - `Q1013` — ciśnienie QNH 1013 hPa
- [ ] **Strona:** ais.pansa.pl, aplikacje (Windy, FlyEFB)

### TAF (Terminal Aerodrome Forecast)

- [ ] **Co to:** **prognoza** pogody dla lotniska, zwykle na **24 lub 30 godzin** wprzód
- [ ] **Format:** podobny do METAR + informacje o zmianach
- [ ] **Przykład:**
  ```
  TAF EPWA 171130Z 1712/1818 23010KT 9999 SCT025 
       BECMG 1715/1717 24015G25KT 
       TEMPO 1720/1724 26020G35KT 4000 TSRA BKN015CB
  ```
  - `BECMG` — zmiana stopniowa (BECoMinG)
  - `TEMPO` — zmiana okresowa (TEMPOrary)
  - `TS` — burza (ThunderStorm)
  - `CB` — Cumulonimbus

### SIGMET / AIRMET / GAMET

- [ ] **SIGMET** (SIGnificant METeorological information) — **istotne zagrożenia** dla lotnictwa (burze, oblodzenie silne, turbulencja silna, popioły wulkaniczne)
- [ ] **AIRMET** (AIRman's METeorological information) — zagrożenia mniej krytyczne (umiarkowane turbulencje, oblodzenie)
- [ ] **GAMET** — prognoza na trasie dla lotów na niskich poziomach (low-level)
- [ ] **Drony:** SIGMET dla burz jest kluczowy — burza = bezwzględne odwołanie operacji

### Aplikacje praktyczne

- [ ] **Windy** (windy.com) — szczegółowy wiatr na różnych wysokościach (10 m, 100 m, 850 hPa)
- [ ] **MeteoBlue** — multi-model, dobre dla rolnictwa
- [ ] **IMGW Meteo** — oficjalne polskie prognozy
- [ ] **DJI Fly / Mavic** — wbudowane prognozy w aplikację drona
- [ ] **Apl. lotnicze:** FlyEFB, SkyDemon, AirNav (z METAR/TAF + NOTAM)
- [ ] **Radary:** meteo.imgw.pl/radary, AirNav radar
- [ ] **Webcamy:** IMGW + lokalne (sprawdzenie warunków „live")

---

## 8.2 Wiatr — kluczowy parametr dla drona

### Charakterystyki wiatru

- [ ] **Prędkość** — w **m/s** (drony) lub **węzłach** (KT, lotnictwo). 1 KT ≈ 0.51 m/s. 1 m/s ≈ 1.94 KT.
- [ ] **Kierunek** — z którego wieje wiatr (skąd, nie dokąd!). 240° = z południowego zachodu.
- [ ] **Porywy (gusts)** — maksymalna chwilowa prędkość. Mogą być **2× silniejsze** niż wiatr średni!
- [ ] **Zmienność** (Variable) — `VRB` w METAR, gdy kierunek niestabilny

### Reguła „2/3 max"

- [ ] **Lataj tylko jeśli wiatr średni < 2/3 maks** prędkości drona
- [ ] **Przykład:** dron z limitem 12 m/s — bezpiecznie do 8 m/s średniego wiatru (zostaw zapas na porywy)

### Wind shear (uskok wiatru)

- [ ] **Co to:** **gwałtowna zmiana** kierunku/prędkości wiatru na krótkim dystansie
- [ ] **Gdzie:**
  - **Krawędzie lasów, budynków, wzgórz** (granica turbulencji)
  - **Inwersje termiczne** (warstwa zimnego powietrza nad ciepłym lub odwrotnie)
  - **Fronty atmosferyczne**
- [ ] **Skutek dla drona:** nagły znos, „upadek" w martwy obszar, trudność w utrzymaniu pozycji
- [ ] **Reagowanie:** unikaj lotu blisko krawędzi przeszkód

### Efekt Venturiego

- [ ] **Co to:** przyspieszenie wiatru w **wąskim przejściu** (np. między budynkami, w kanionie)
- [ ] **Przykład:** wiatr z ulicy 5 m/s może być 12 m/s w wąskim przejściu między blokami
- [ ] **Reagowanie:** lataj na otwartym terenie, omijaj wąskie przejścia

### Turbulencje mechaniczne

- [ ] **Powstają za przeszkodami** (budynki, las, wzgórza) z **drugiej strony niż wiatr**
- [ ] **Reguła 10×:** turbulencje sięgają do **10× wysokości przeszkody** w poziomie i **3× w pionie** za nią
- [ ] **Przykład:** budynek 30 m wysoki — turbulencje do 300 m za nim
- [ ] **Reagowanie:** podchodź do lądowania **pod wiatr**, nie z wiatrem

### Termika

- [ ] **Co to:** prądy wstępujące ciepłego powietrza nad nasłonecznionym terenem
- [ ] **Występuje:** wiosna–lato, godziny 10:00–17:00, nad polami, parkingami, dachami
- [ ] **Siła:** 1–5 m/s w górę
- [ ] **Skutek dla drona:** niespodziewane „wzlecenie" w górę, znos, niespokojny lot
- [ ] **Wykorzystanie:** szybowce korzystają, drony — raczej unikają

### Lokalne wiatry

- [ ] **Bryza morska** (rano–popołudnie) — od morza w głąb lądu
- [ ] **Bryza lądowa** (wieczór–noc) — od lądu w morze
- [ ] **Wiatry górskie** — fenowe (halny), zmiana po południu
- [ ] **Föhn (halny)** — silny, ciepły, suchy wiatr — uważaj w Tatrach, Beskidach

---

## 8.3 Widzialność

### Definicje

- [ ] **VIS** (Visibility) — pozioma odległość, z której można rozpoznać znany obiekt (np. drzewo, budynek)
- [ ] **VMC** (Visual Meteorological Conditions) — warunki dla VFR (Visual Flight Rules)
- [ ] **IMC** (Instrument Meteorological Conditions) — warunki tylko dla IFR (Instrument Flight Rules)
- [ ] **CAVOK** (Ceiling And Visibility OK) — w METAR oznacza: VIS ≥ 10 km, brak chmur < 5000 ft, brak zjawisk istotnych

### Wymagania widzialności

- [ ] **STS-01 (VLOS):** widzialność powinna pozwolić na VLOS — w praktyce ≥ **5 km** zalecane (brak twardego wymogu w przepisach)
- [ ] **STS-02:** **wymagana widzialność > 5 km** (UAS.STS-02.020 ust. 3) — twardy wymóg!
- [ ] **VLOS w mgle/zamgleniu** = niemożliwy → lot przerwany

### Mgła i zamglenie

- [ ] **Mgła** (FG — Fog) — widzialność < 1 km
- [ ] **Zamglenie** (BR — Mist) — widzialność 1–5 km
- [ ] **Typy mgieł:**
  - **Radiacyjna** — w pogodne noce, kotliny, jesień
  - **Adwekcyjna** — gdy ciepłe wilgotne powietrze nad zimnym terenem
  - **Frontowa** — przy frontach atmosferycznych
- [ ] **Reagowanie:** brak operacji w mgle, natychmiastowe lądowanie przy nadejściu

---

## 8.4 Chmury

### Klasyfikacja (rodzaje)

- [ ] **Piętro niskie (do 2 km):**
  - **Stratus (St)** — warstwa szara, mgła wzniesiona
  - **Stratocumulus (Sc)** — warstwa z cumulus
  - **Cumulus (Cu)** — kłębiaste, „watki"
  - **Cumulonimbus (Cb)** — **burzowe**, sięgają do 12 km!
- [ ] **Piętro średnie (2–7 km):**
  - **Altostratus (As)** — szara warstwa
  - **Altocumulus (Ac)** — kłębki w średnich wysokościach
- [ ] **Piętro wysokie (5–13 km):**
  - **Cirrus (Ci)** — pierzaste
  - **Cirrocumulus (Cc)** — drobne kłębki wysokie
  - **Cirrostratus (Cs)** — przezroczysta zasłona

### Pułap chmur (cloud base, ceiling)

- [ ] **Co to:** wysokość podstawy najniższej warstwy chmur „Broken" (BKN) lub „Overcast" (OVC) w METAR
- [ ] **Stopnie zachmurzenia (METAR):**
  - **SKC** (Sky Clear) / **CLR** — bezchmurnie
  - **FEW** — 1–2/8 nieba pokryte
  - **SCT** (Scattered) — 3–4/8
  - **BKN** (Broken) — 5–7/8
  - **OVC** (Overcast) — 8/8 (pełne)
- [ ] **Reguła:** zachowaj **min. 50 m poniżej podstawy chmur** (zalecenie, w praktyce więcej)
- [ ] **VMC dla dronów:** brak chmur na trasie lotu, podstawa wysoko nad nami

### Cumulonimbus (Cb) — bezwzględne zagrożenie

- [ ] **Charakterystyka:**
  - Wysokie (do 12 km+)
  - Wyładowania atmosferyczne (pioruny)
  - **Silne prądy zstępujące** (do 20+ m/s) — porwą drona
  - **Grad**
  - **Microburst** (gwałtowne prądy zstępujące)
  - **Strefa wpływu:** do 20 km od chmury!
- [ ] **Reagowanie:** **bezwzględny zakaz lotu**, gdy CB w odległości < 20 km. Natychmiastowe lądowanie.

---

## 8.5 Opady

- [ ] **Oznaczenia METAR:**
  - **RA** — deszcz (Rain)
  - **SN** — śnieg (Snow)
  - **DZ** — mżawka (DriZzle)
  - **SH** — przelotne (SHower) — przed innym, np. SHRA
  - **TS** — burza (ThunderStorm), np. TSRA
  - **GR** — grad (≥ 5 mm)
  - **GS** — krupy (< 5 mm)
  - **FZRA** — marznący deszcz (Freezing Rain) — bardzo niebezpieczny!
  - **+ / -** — intensywność (silny / słaby)
- [ ] **Wpływ na drona:**
  - **Większość dronów ma IP0X** (brak ochrony) → zakaz lotu w opadach
  - **Profesjonalne (IP43, IP54)** — można w lekkim deszczu (ale ryzyko)
  - **Soczewki kamery** — krople = obraz nieczytelny
  - **Śnieg** — wilgoć + zimno + ciężar na ramie
  - **Grad** — fizyczne uszkodzenie drona
- [ ] **Reagowanie:** opady = natychmiastowe lądowanie

---

## 8.6 Temperatura i ciśnienie

### Temperatura

- [ ] Wpływ na baterię (patrz Temat 5)
- [ ] **Limit operacyjny producenta:** zwykle -10 do +40 °C
- [ ] **Gradient temperatury:** średnio **-0,65 °C / 100 m wysokości** (czyli wyżej zimniej)
- [ ] **Inwersja temperatury:** **odwrócenie** — wyżej cieplej, niżej zimno. Kumuluje smog, mgły. Rzadkie w lecie, częste zimą.

### Ciśnienie

- [ ] **QNH** — ciśnienie redukowane do poziomu morza (ustawiane na wysokościomierzu, by pokazywał wysokość AGL przy starcie)
- [ ] **QFE** — ciśnienie na poziomie lotniska
- [ ] **QNE / Pressure Altitude** — wysokość przy 1013.25 hPa
- [ ] **Standard:** 1013.25 hPa / 15 °C / 0% wilgotności
- [ ] **Drony używają GPS** → nie zależą od QNH, ale **barometr** w dronie wymaga kalibracji ciśnieniowej

### Punkt rosy

- [ ] **Co to:** temperatura, przy której para wodna zaczyna się skraplać
- [ ] **Mała różnica temp/punkt rosy:** mgła możliwa, kondensacja możliwa
- [ ] **W METAR:** `12/08` = temp. 12 °C, punkt rosy 8 °C → różnica 4 °C, ryzyko mgły rośnie

---

## 8.7 Zjawiska niebezpieczne

### Burza (Thunderstorm)

- [ ] **Wytwarza Cumulonimbus** z piorunami
- [ ] **Strefa wpływu:** **20 km** wokół CB
- [ ] **Zjawiska towarzyszące:**
  - Wyładowania atmosferyczne
  - Silne podmuchy (microburst)
  - Grad
  - Tornada (rzadko w Polsce, ale możliwe)
- [ ] **Reagowanie:** **ZAWSZE odwołaj lot przy burzy w pobliżu**

### Oblodzenie (icing)

- [ ] **Warunki:** temp. **+5 °C do -15 °C** + wilgotność > 80%
- [ ] **Skutek:** lód na śmigłach → niesymetryczna praca, drgania, utrata ciągu
- [ ] **Lód na czujnikach** — błędne odczyty
- [ ] **W kategorii dronów:** rzadko spotykane (operujemy nisko), ale **w chmurach lub mgłach przy 0 °C** możliwe
- [ ] **Reagowanie:** unikaj wilgotnych chmur w temperaturach 0..-10 °C

### Mgła (znów — z naciskiem)

- [ ] Pojawia się **szybko** (rano, wieczorem, po opadach)
- [ ] **Sprawdzaj webcamy + temperaturę/punkt rosy** w prognozie
- [ ] **Lokalne mgły** w kotlinach, nad rzekami

### Silny wiatr i porywy

- [ ] **Wiatr średni > limitu producenta** = nie lataj
- [ ] **Porywy** mogą być 2× silniejsze niż średnia — zostaw zapas

### Pyły, dym, smog

- [ ] **Pył** (np. sahara, pożary) — obniża widzialność i zapycha silniki
- [ ] **Dym z pożarów** — ograniczona widzialność, ryzyko sił
- [ ] **Smog miejski** — głównie obniża widzialność

### Wyładowania elektrostatyczne

- [ ] Burze nasycają powietrze ładunkiem
- [ ] **Drony nie są zabezpieczone** przed bezpośrednim uderzeniem pioruna
- [ ] Nawet wyładowanie 5 km od drona może wpłynąć na elektronikę

---

## 8.8 Stabilność atmosfery

- [ ] **Atmosfera stabilna** — pionowe ruchy stłumione, dobra widzialność, czasem mgły niskie
- [ ] **Atmosfera niestabilna** — gwałtowne prądy, kumulusy → burze
- [ ] **Wskaźniki niestabilności:**
  - Pionowy rozwój cumulusów
  - Szybkie zmiany temperatury
  - Wzrost wilgotności

---

## 8.9 Praktyczne progi „GO/NO-GO" dla pilota drona

| Parametr | GO | OSTRZEŻENIE | NO-GO |
|----------|----|----|----|
| Wiatr średni | < 60% max producenta | 60–80% max | > 80% max |
| Porywy | < 80% max | 80–100% max | > 100% max |
| Widzialność (STS-01) | > 5 km | 3–5 km | < 3 km |
| Widzialność (STS-02) | > 5 km | — | < 5 km (zakaz) |
| Pułap chmur | > 200 m nad lotem | 100–200 m | < 100 m |
| Temperatura | -5 do +35 °C | -10 do -5 / +35 do +40 °C | poza limitem producenta |
| Opady | brak | mżawka (przy IP4X+) | jakiekolwiek (przy IP0X) |
| Burze | brak w promieniu 20 km | w promieniu 20–50 km | w promieniu < 20 km |
| Oblodzenie | temp. > +5 °C lub < -15 °C | temp. +5..-15 °C + wilg. > 80% | temp. 0..-5 °C + chmury/mgła |

---

## 8.10 Mnemoniki i tipy

- [ ] **„CB w 20 km = NO-GO"** (Cumulonimbus = burza, strefa wpływu 20 km)
- [ ] **„2/3 wiatru"** — limit operacyjny
- [ ] **„CAVOK = ideał"** — Ceiling And Visibility OK
- [ ] **„Skąd wieje" wiatr** — kierunek to skąd, nie dokąd
- [ ] **Reguła 5/5/5:** 5 km widzialności, 50 m od chmur, 500 ft pułap rezerwy
- [ ] **Konwencja stopni zachmurzenia (oktanty):**
  - SKC = 0
  - FEW = 1-2
  - SCT = 3-4
  - BKN = 5-7
  - OVC = 8

---

## 8.11 Pytania samosprawdzające

1. Co znaczy `24015G25KT` w METAR? **Wiatr 240°, 15 węzłów średnio, porywy 25 węzłów.**
2. Co to CAVOK? **Ceiling And Visibility OK — widzialność ≥ 10 km, brak chmur < 5000 ft, brak istotnych zjawisk.**
3. Jakie chmury oznaczają burzę? **Cumulonimbus (CB).**
4. Jaka minimalna widzialność w locie STS-02? **> 5 km (twardy wymóg z UAS.STS-02.020 ust. 3).**
5. Czy mogę latać dronem IP43 w mżawce? **Technicznie tak (ochrona przed bryzgami), ale ryzykownie — soczewki, kalibracja kompasu.**
6. Co to wind shear i gdzie powstaje? **Uskok wiatru — przy krawędziach przeszkód, fronty, inwersje.**
7. Jaki jest gradient temperatury z wysokością? **Średnio -0,65 °C na 100 m.**
8. Czy lecę pod wiatr czy z wiatrem przy powrocie? **Pod wiatr — dlatego planuj rezerwę baterii dla powrotu pod wiatr.**

---

## 8.12 Pułapki egzaminacyjne

- ⚠️ **Kierunek wiatru** = z którego wieje, NIE dokąd!
- ⚠️ **Cumulonimbus = burza** — strefa wpływu **do 20 km** od chmury.
- ⚠️ **CB ≠ Cumulus zwykły** — uważaj na odpowiedzi.
- ⚠️ **STS-02 ma TWARDY wymóg widzialności > 5 km** — STS-01 nie ma tego twardo (ale VLOS de facto wymaga).
- ⚠️ **Porywy mogą być 2× silniejsze** niż wiatr średni — pamiętaj o zapasie.
- ⚠️ **Oblodzenie** dotyczy też dronów (chmury w temp. 0 do -10 °C).
- ⚠️ **METAR jest co 30 min**, nie co godzinę — drobny szczegół, ale pyt. częste.
- ⚠️ **Słaba mgła (BR)** to widzialność 1–5 km — może uniemożliwić VLOS!
- ⚠️ **Marznący deszcz (FZRA)** to **najgorsze warunki** — natychmiastowe wszystko pokrywa lodem.

---

## 8.13 METAR/TAF — szybki cheatsheet

```
Wiatr:        DDDFFGGGKT          (DDD=kierunek, FF=prędkość, G=porywy, KT=węzły)
Widzialność:  4 cyfry [m]         (9999 = ≥ 10 km, 9000 = 9 km, itp.)
Zjawiska:     RA, SN, DZ, FG, BR  (z + lub -)
Chmury:       FEW/SCT/BKN/OVC + 3 cyfry × 100 ft AGL
Temperatura:  T/Td                (T=temp, Td=dewpoint)
Ciśnienie:    Q1013 / A2992       (Q=hPa, A=cale Hg)
Specjalne:    CAVOK, NSC, NOSIG, BECMG, TEMPO, PROB30/40
```

---

**[← Poprzedni: 07 Ograniczenia człowieka](./07_Ograniczenia_czlowieka.md)** | **[Powrót do indeksu](./00_INDEX.md)** | **[Następny: 09 Organizacja egzaminu →](./09_Organizacja_egzaminu.md)**

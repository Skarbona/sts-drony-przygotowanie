# Temat 3 — Techniczne i operacyjne środki ograniczające ryzyko na ziemi (20%)

> **Waga:** ~8 pytań z 40 (lub 6 z 30).
> **Charakter:** dużo pytań **liczbowych** (tabele GRB, odległości, prędkości), pytań o klasy C5/C6, o systemy bezpieczeństwa drona.

---

## 3.1 Filozofia: dlaczego GRB w ogóle istnieje

Założenie EASA: nawet najbezpieczniejszy dron może wykonać niezaplanowany manewr przed aktywacją FTS. Trzeba więc zarezerwować na ziemi obszar, w którym **żadna osoba postronna nie powinna się znaleźć**, by w najgorszym scenariuszu nikt nie ucierpiał.

```
                              ┌────────────────────────────────┐
                              │       GROUND RISK BUFFER       │ ← obszar dla "worst case"
                              │  ┌──────────────────────────┐  │
                              │  │   CONTINGENCY VOLUME     │  │ ← min +10 m od FG
                              │  │  ┌────────────────────┐  │  │
                              │  │  │  FLIGHT GEOGRAPHY  │  │  │ ← planowana trasa
                              │  │  └────────────────────┘  │  │
                              │  └──────────────────────────┘  │
                              └────────────────────────────────┘
```

- **Flight Geography (FG)** — gdzie *planowo* lata dron
- **Contingency Volume (CV)** — strefa, w której dron może się znaleźć w sytuacji *odbiegającej od normy* (np. lekki znos wiatrem). **Granica zewnętrzna CV ≥ 10 m od FG** (zarówno STS-01 jak i STS-02). Wysokość: **+30 m** powyżej max wysokości lotu.
- **Ground Risk Buffer (GRB)** — strefa, w której dron może się znaleźć **po aktywacji FTS** w najgorszym przypadku. **W tej strefie nie może być osób postronnych.**

---

## 3.2 Obliczanie GRB w STS-01 (untethered)

**Wzór tabelaryczny** z UAS.STS-01.020 lit. c):

| Maks. wysokość lotu | MTOM ≤ 10 kg | MTOM > 10 kg |
|---------------------|--------------|--------------|
| **30 m**            | **10 m**     | **20 m**     |
| **60 m**            | **15 m**     | **30 m**     |
| **90 m**            | **20 m**     | **45 m**     |
| **120 m**           | **25 m**     | **60 m**     |

- [ ] **Interpretacja:** GRB to **odległość poza Contingency Volume** (czyli liczona od jego granicy zewnętrznej, nie od trasy lotu).
- [ ] **Dla wysokości pośrednich** (np. 75 m) — zaokrąglaj w górę do najbliższego wiersza (tu: 90 m).
- [ ] **Reguła:** wyższy lot + cięższy dron = większy GRB.
- [ ] **Łatwy mnemonik:** dla MTOM ≤ 10 kg GRB ≈ wysokość ÷ 5 (z zaokrągleniem). Dla > 10 kg ≈ wysokość ÷ 2.

### Dron na uwięzi (tethered) — STS-01

- [ ] GRB = okrąg o promieniu = **długość uwięzi + 5 m**, środek = punkt mocowania uwięzi.
- [ ] Wynika z fizycznego ograniczenia uwięzi — dron nie może oddalić się dalej.

### Przykład praktyczny

> Lecisz dronem 8 kg na wysokości 100 m (zaokrąglone w górę do 120 m). Trasa to linia długa 50 m, szerokości brak (lot po linii).
> - FG: 50 × 1 m
> - CV: 50 + 2×10 = **70 × 21 m** (poszerzone o 10 m w każdym kierunku)
> - GRB: 70 + 2×25 = **120 × 71 m** (poszerzone o 25 m w każdym kierunku — dla 120 m i MTOM ≤ 10 kg)
> - **Cały kontrolowany obszar naziemny = 120 × 71 m ≈ 8 520 m²**

---

## 3.3 Obliczanie GRB w STS-02 (untethered)

W STS-02 EASA nie podała sztywnej tabeli — **GRB liczy się indywidualnie**:

> *"Bufor ryzyka naziemnego obejmujący odległość co najmniej równą odległości, którą najprawdopodobniej pokona bezzałogowy statek powietrzny po aktywacji środków służących zakończeniu lotu wskazanej przez producenta systemu… z uwzględnieniem warunków operacyjnych przy ograniczeniach określonych przez producenta."*

- [ ] **Praktyczna metoda obliczania:**

  ```
  GRB ≥ V_max × t_reakcji + droga_zatrzymania_FTS
  ```

  gdzie:
  - **V_max** — maks. prędkość drona (dla C6: ≤ 50 m/s = 180 km/h)
  - **t_reakcji** — czas od wykrycia odchylenia do aktywacji FTS (1–3 s)
  - **droga_zatrzymania_FTS** — podana przez producenta (np. 30 m dla spadochronu z 120 m)

- [ ] **Przykład:** dron C6, V_max = 30 m/s, t_reakcji 2 s, dystans FTS 40 m:
  ```
  GRB ≥ 30 × 2 + 40 = 100 m
  ```

- [ ] **Środowisko słabo zaludnione** — to dodatkowy wymóg STS-02. Gęstość zaludnienia jest oceniana wg map JARUS (SORA 2.0 metodyka):
  - **Sparsely populated:** < ~10 osób/km² aktywnych w godzinie operacji
  - W praktyce: tereny rolne, leśne, niezabudowane

---

## 3.4 Środki redukcji ryzyka naziemnego — operacyjne

### Wygrodzenie i oznakowanie

- [ ] **Taśma ostrzegawcza** biało-czerwona, pachołki, ogrodzenia tymczasowe
- [ ] **Tablice**: „Operacja BSP — wstęp wzbroniony", numer tel. operatora
- [ ] **Asystenci** na obrzeżach GRB — informują osoby postronne, kierują ruchem
- [ ] **Koordynacja z policją / strażą miejską** przy operacjach miejskich (w STS-01 typowo)

### Briefing osób uczestniczących

- [ ] **Wymagane przez 2019/947** (zarówno STS-01 jak STS-02):
  1. **Informacja o ryzyku** operacji
  2. **Przeszkolenie z procedur ostrożności** (gdzie stać, co robić przy alarmie)
  3. **Wyraźna zgoda** na uczestnictwo
- [ ] **Forma:** ustna + zapis (lista uczestników z podpisami)

### Ograniczenie prędkości i wysokości

- [ ] **STS-01:** twardy limit 5 m/s — ograniczenie energii kinetycznej (E = ½mv²)
- [ ] **Niższy lot** = mniejsza energia upadku (E = mgh) — ale za to większe ryzyko kolizji z ludźmi/przeszkodami

### Wybór miejsca startu i lądowania

- [ ] **HLS** (Helicopter Landing Site analogia):
  - Równe podłoże, brak luźnych przedmiotów (kurz, drobiazgi w śmigła)
  - Z dala od linii energetycznych, anten
  - Odległość od osób postronnych zgodna z GRB
  - Łatwy dostęp dla załogi
- [ ] **Plan B** — alternatywne miejsce lądowania na trasie

### Plan ewakuacji

- [ ] **Drogi ewakuacyjne** dla załogi (gdyby dron leciał w naszą stronę)
- [ ] **Punkt zborny** załogi
- [ ] **Kontakty awaryjne** zawsze przy sobie (numery tel., adres operacji)

---

## 3.5 Wymagania techniczne klasy C5 (dla STS-01)

Z **Części 16 załącznika do 2019/945**:

- [ ] **MTOM < 25 kg**
- [ ] **NIE jest stałopłatem** (czyli wirnikowiec lub helikopter, ewentualnie convertiplane)
- [ ] **Wyłączenie spod tego wymogu:** drony na uwięzi (tethered)
- [ ] **Wymagania szczegółowe:**
  1. **Niskie napięcie operacyjne** zabezpieczone (Low Voltage protection)
  2. **System zakończenia lotu (FTS)** — niezależny od głównego systemu sterowania:
     - **Spadochron ratunkowy** (najpopularniejsze), lub
     - **Autorotacja** (helikoptery), lub
     - inne środki zmniejszające energię uderzenia
  3. **Niezależny tryb low-speed** ograniczający prędkość do 5 m/s
  4. **System geo-awareness** (świadomość stref)
  5. **System geofencingu** ograniczający operational volume
  6. **Niezawodne łącze C2** z mechanizmem FailSafe
  7. **Aktywny system Remote ID (DRI)**
  8. **Czytelne oznaczenie klasy C5** (sztywna naklejka/grawer)
  9. **Deklaracja zgodności CE** + numer notyfikowanego organu
- [ ] **Alternatywa:** dron klasy C3 + **accessories kit** (zestaw upodabniający do C5)

---

## 3.6 Wymagania techniczne klasy C6 (dla STS-02)

Z **Części 17 załącznika do 2019/945**:

- [ ] **MTOM < 25 kg**
- [ ] **Maks. prędkość lotu ≤ 50 m/s** (180 km/h) — kluczowa do obliczeń GRB
- [ ] **Wymagania szczegółowe:**
  1. **Programowalna przestrzeń lotu** (geocaging) — uniemożliwia wyjście poza Flight Geography
  2. **Monitoring pozycji w czasie rzeczywistym** (transmisja telemetrii do stacji)
  3. **System geo-awareness**
  4. **FTS** (jak w C5)
  5. **Aktywny Remote ID**
  6. **Łącze C2 z FailSafe** (działa BVLOS!)
  7. **Czytelne oznaczenie C6**
  8. **Deklaracja zgodności CE**
- [ ] **Nie wymaga:** trybu low-speed (bo dron leci szybko po trasie BVLOS)

---

## 3.7 Funkcje bezpieczeństwa drona — wszystkie szczegóły

### Geo-awareness

- [ ] **Co to:** baza danych stref geograficznych ładowana do drona, dzięki czemu **dron wie, gdzie nie wolno** mu lecieć
- [ ] **Aktualizacja:** operator MA OBOWIĄZEK wgrywać aktualne mapy stref przed operacją (UAS.STS-01.030 ust. 7)
- [ ] **Realizacja w DJI:** baza „GeoZones", aktualizowana automatycznie przy podłączeniu do internetu
- [ ] **Akcja:** ostrzeżenie pilota / automatyczne ograniczenie

### Geofencing / Geocaging

- [ ] **Geofencing (potoczne)** — ogólne ograniczenie programowe, gdzie dron może latać:
  - **Soft fence** — tylko ostrzeżenie + ograniczenie sterowania
  - **Hard fence** — automatyczne zatrzymanie / RTH
- [ ] **Geocaging (termin techniczny z 2019/945 Aneks Część 17 dla C6)** — „system that limits the airspace volume" — **twardy** system uniemożliwiający wyjście drona poza zaprogramowaną przestrzeń lotu (Flight Geography). To wymóg klasy C6.
- [ ] **W STS-02 OBOWIĄZKOWY:** dron klasy C6 musi mieć aktywny geocaging utrzymujący lot w granicach Flight Geography (UAS.STS-02.020 pkt 8 lit. b). „Soft" geofencing nie wystarczy.

### RTH (Return To Home)

- [ ] **Co to:** automatyczna procedura powrotu drona do punktu startu
- [ ] **Wyzwalacze:**
  - Pilot ręcznie (przycisk RTH)
  - Lost link C2 (FailSafe)
  - Krytycznie niska bateria
- [ ] **Konfiguracja przedlotowa:**
  - **Punkt Home** — zwykle pozycja startu lub kontrolera
  - **Wysokość RTH** — wystarczająca, by ominąć przeszkody na trasie
- [ ] **Niebezpieczeństwa:** dron może wystartować przed pełnym zlokalizowaniem Home, leci wtedy w losowe miejsce

### FailSafe

- [ ] **Co to:** zachowanie drona po **utracie łącza C2**
- [ ] **Tryby:**
  - **Hover** — zawis w miejscu
  - **RTH** — powrót do Home (najczęstsze)
  - **Auto-land** — lądowanie w miejscu utraty łącza
- [ ] **W STS-01/02:** FailSafe **musi działać** — bez tego dron nie jest zgodny z wymaganiami klasy

### Low battery warning

- [ ] **Poziomy:**
  - Pierwsze ostrzeżenie: ~30% — ostrzega pilota
  - Drugie ostrzeżenie: ~15% — wymusza RTH
  - Krytyczne: ~5% — wymusza lądowanie w miejscu
- [ ] **Rezerwa:** **planuj zawsze min. 20% baterii na powrót i lądowanie**

### Spadochron ratunkowy

- [ ] **Wymagany w klasie C5** (i często C6) jako element FTS
- [ ] **Aktywacja:**
  - Ręczna (pilot)
  - Automatyczna (anomaly detection — sztuczna inteligencja w spadochronie typu ParaZero, ASIO)
- [ ] **Wysokość minimalna otwarcia:** zwykle 20–30 m (poniżej spadochron może nie zdążyć)
- [ ] **Obsługa:** regularny serwis, kontrola pirotechnicznych elementów (jeśli są)

### Remote ID (DRI)

- [ ] **Obowiązkowy w STS-01/02** (klasa C5 i C6 z wymogu rozporządzenia 2019/945)
- [ ] **Aktywacja:** **przed każdym lotem** sprawdź, czy działa i emituje aktualne dane
- [ ] **Pilot odpowiada za:**
  - Numer operatora w systemie zgodny z rzeczywistym
  - Pozycja pilota zgodna z punktem startu (GPS RC)

### Autorotacja (helikoptery)

- [ ] **Co to:** awaryjne lądowanie helikoptera bez napędu, wykorzystując energię obrotową wirnika
- [ ] **Wymaga:** odpowiedniej konstrukcji wirnika i wysokości min. (zwykle > 30 m AGL)
- [ ] **W BSP:** rzadko stosowane (helikoptery BSP mniej popularne niż multirotory)

---

## 3.8 Klasy dronów C0–C6 — porównanie pełne

| Klasa | MTOM | Max wysokość poziomu energii | Max prędkość | Kategoria/Scenariusz | Wymagany Remote ID |
|-------|------|------------------------------|--------------|----------------------|--------------------|
| **C0** | < 250 g | brak (78 J przy uderzeniu) | 19 m/s | A1 (open) | NIE |
| **C1** | < 900 g | 80 J energii uderzenia | 19 m/s | A1 (open) | TAK |
| **C2** | < 4 kg | — | bez limitu | A2 (open) — min. 30 m od ludzi lub 5 m low-speed | TAK |
| **C3** | < 25 kg | wymiar < 3 m | bez limitu | A3 (open) — min. 150 m od stref | TAK |
| **C4** | < 25 kg | brak automatyki, model | — | A3 (open), tylko ręczne | NIE |
| **C5** | < 25 kg | (jak C3 + dodatki) | low-speed mode | **STS-01** | TAK |
| **C6** | < 25 kg | — | **≤ 50 m/s** (180 km/h) | **STS-02** | TAK |

- [ ] **Klasa NIE jest tożsama z kategorią operacji** — kategoria zależy od scenariusza, klasa od urządzenia.

---

## 3.9 Podmioty zwolnione z obowiązku klasy C5/C6 (legacy drones)

- [ ] **Sytuacja przejściowa:** wielu operatorów używa istniejących dronów (np. DJI Matrice, M300) **bez oficjalnego oznaczenia klasy C5/C6**
- [ ] **Możliwość:** **oświadczenie do STS-01/02 dla podmiotów zwolnionych** — wymaga dodatkowej analizy ryzyka w OM
- [ ] **W praktyce:**
  - Operator deklaruje, że dron technicznie spełnia wymagania C5/C6 (mimo braku oznaczenia)
  - Dołącza analizę zgodności i dodatkowe procedury awaryjne
  - ULC akceptuje takie oświadczenia
- [ ] **Trend:** producenci aktywnie certyfikują nowe modele jako C5/C6 (np. DJI Mavic 3 Multispectral C5, Mavic 3 Enterprise C5)

---

## 3.10 Kontrolowany obszar naziemny — definicja prawna

Wg 2019/947: „obszar, na którym wykonywana jest operacja z użyciem systemu bezzałogowego statku powietrznego i w obrębie którego operator może zapewnić, że obecne są tylko **osoby uczestniczące w operacji**".

- [ ] **Konsekwencja:** w GRB **nie ma prawa być osoby postronnej** (która nie wyraziła zgody i nie została przeszkolona)
- [ ] **Jak to zapewnić:**
  - Wygrodzenie + asystenci
  - Współpraca z policją (zamknięcie ulicy, parku)
  - Wybór terenu prywatnego za zgodą właściciela
  - Operacja w godzinach, gdy nie ma ludzi (np. wczesny ranek)
- [ ] **W STS-02:** wymóg „słabo zaludnionego środowiska" oznacza, że nawet **poza GRB** populacja jest niska — to dodatkowy bezpiecznik

---

## 3.11 Mnemoniki i tipy

- [ ] **GRB dla MTOM ≤ 10 kg** — „dziel przez 5":
  - 30 m → 6 m → zaokrąglone do **10 m**
  - 60 m → 12 m → **15 m**
  - 90 m → 18 m → **20 m**
  - 120 m → 24 m → **25 m**
- [ ] **GRB dla MTOM > 10 kg** — „dziel przez 2":
  - 30 m → 15 m → **20 m** (z bezpieczeństwem)
  - 60 m → 30 m → **30 m**
  - 90 m → 45 m → **45 m**
  - 120 m → 60 m → **60 m**
- [ ] **Tethered = uwięź + 5 m** (zawsze, niezależnie od wysokości i masy)
- [ ] **CV = FG + 10 m** (poziomo), **+30 m** (pionowo)

---

## 3.12 Pytania samosprawdzające

1. Lecisz dronem 12 kg na wysokości 70 m. Jaki minimum GRB? **Zaokrąglone w górę do 90 m, MTOM > 10 kg → 45 m.**
2. Co to jest Flight Geography? **Strefa, w której planowo lata dron.**
3. Co to jest Contingency Volume i jaka jego minimalna granica? **Strefa "bufora bezpieczeństwa", granica zewnętrzna ≥ 10 m od FG; wysokość +30 m.**
4. Czy DJI Mavic 3 (ok. 900 g) bez oznaczenia C5 może być użyty w STS-01? **W teorii — jeśli operator dołączy do oświadczenia analizę zgodności (jako "legacy drone"). W praktyce sprawdź aktualny status — DJI ma wersję C5.**
5. Co MUSI zrobić operator przed wpuszczeniem 3 osób na GRB? **Poinformować o ryzyku, przeszkolić z procedur, uzyskać wyraźną zgodę.**
6. Czy C4 ma Remote ID? **NIE — to klasa "model klasyczny" bez automatyki.**
7. Jaka jest max prędkość drona klasy C6? **50 m/s (180 km/h).**
8. Czy spadochron ratunkowy musi być w klasie C5? **W praktyce TAK — jako element FTS dla wiropłatów.**

---

## 3.13 Pułapki egzaminacyjne

- ⚠️ **GRB nie zawiera Flight Geography ani Contingency Volume** — to **dodatkowa odległość poza CV**.
- ⚠️ **Tabela GRB STS-01** dotyczy **untethered**. Tethered ma inny wzór (uwięź + 5 m).
- ⚠️ **STS-02 NIE MA tabeli** GRB — liczy się indywidualnie wg producenta i parametrów lotu.
- ⚠️ **„Słabo zaludnione" w STS-02** ≠ pusta przestrzeń. Mogą być pojedyncze osoby/budynki, ale gęstość niska.
- ⚠️ **Geo-awareness ≠ Geofencing**:
  - Geo-awareness = informacja o strefach (świadomość)
  - Geofencing = aktywne ograniczenie (uniemożliwia)
- ⚠️ **Klasa C3 + kit może być używana w STS-01** — to nie jest „tylko C5".
- ⚠️ **MTOM = max takeoff mass**, czyli masa drona **w pełni załadowanego** (z baterią, kamerą, ładunkiem) — nie pusta masa.

---

## 3.14 Tabela pełna do druku — GRB w STS-01

```
                    MTOM ≤ 10 kg    MTOM > 10 kg
Wysokość lotu       GRB             GRB
─────────────────────────────────────────────
do 30 m             10 m            20 m
do 60 m             15 m            30 m
do 90 m             20 m            45 m
do 120 m            25 m            60 m
─────────────────────────────────────────────
Tethered (uwięź)    długość uwięzi + 5 m
```

Wskazówka: jeśli wysokość nie jest „okrągła" (np. 75 m), zaokrąglij **w górę** do najbliższej (tu: 90 m).

---

**[← Poprzedni: 02 Procedury](./02_Procedury_operacyjne.md)** | **[Powrót do indeksu](./00_INDEX.md)** | **[Następny: 04 Systemy BSP →](./04_Systemy_BSP.md)**

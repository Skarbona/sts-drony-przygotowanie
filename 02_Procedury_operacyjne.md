# Temat 2 — Procedury operacyjne (20% egzaminu)

> **Waga:** ~8 pytań z 40 (lub 6 z 30).
> **Charakter:** sporo pytań sytuacyjnych („co zrobisz, gdy…"), pytania o kolejność czynności, o zawartość OM, o role w załodze, o procedury awaryjne.

---

## 2.1 Trzy fazy operacji

```
PRE-FLIGHT   →   IN-FLIGHT   →   POST-FLIGHT
(planowanie)     (lot)            (rozliczenie)
```

Każda faza ma własną checklistę i własne obowiązki pilota.

---

## 2.2 Procedury PRZED LOTEM (pre-flight)

### Etap 1 — Planowanie (dzień–tydzień przed)

- [ ] **Analiza miejsca operacji**
  - Topografia (równina, wzgórza, miasto, las)
  - **Wysokość terenu** (n.p.m.) — wpływa na gęstość powietrza, osiągi
  - Przeszkody: linie wysokiego napięcia, kominy, anteny, dźwigi, budynki
  - **Źródła zakłóceń elektromagnetycznych:** stacje bazowe GSM/5G, radary, transformatory
  - Najbliższe lotniska/lądowiska (sprawdź w AIP / aplikacji)
  - Strefy DRA-P/R w okolicy
- [ ] **Sprawdzenie stref geograficznych**
  - Aplikacja **DroneRadar / DroneTower** (PAŻP)
  - **AIP Polska** (aip.pansa.pl)
  - **NOTAM-y** dla obszaru operacji
- [ ] **Briefing pogodowy**
  - **METAR/TAF** najbliższego lotniska
  - **Windy**, **MeteoBlue** — wiatr na wysokości 10 m i 100 m
  - Prognoza opadów, mgieł, burz na 2–3 dni
  - **GAMET/SIGMET/AIRMET** — ostrzeżenia
- [ ] **Skompletowanie dokumentacji**
  - Oświadczenie operatora (potwierdzenie z ULC)
  - **Instrukcja Operacyjna (OM)** operatora
  - Certyfikat wiedzy teoretycznej + zaświadczenie praktyki pilota
  - Dowód rejestracji operatora
  - Polisa OC
  - Instrukcja użytkownika drona (UA Manual producenta)
  - Deklaracja zgodności CE (C5/C6)
  - **Checklisty** przedlotowe/awaryjne
- [ ] **Plan misji**
  - Trasa, waypoints, wysokości, prędkości
  - **Punkty awaryjnego lądowania (alternates)** — co najmniej 2
  - Strefa startu i lądowania (HLS-like)
  - **Wyznaczenie Flight Geography, Contingency Volume, Ground Risk Buffer**
- [ ] **Przygotowanie załogi**
  - Pilot (RP — Remote Pilot)
  - **Obserwator(-rzy) AO** (jeśli STS-02 lub OM tego wymaga)
  - **UAS Observer (UAO)** — opcjonalnie wspierający pilota w VLOS (STS-01)
  - Asystenci na ziemi
  - **Każdy musi znać swoje role i procedury awaryjne**

### Etap 2 — Site survey (na miejscu, przed startem)

- [ ] **Inspekcja terenu**
  - Czy strefa zaplanowana w kabinie zgadza się z rzeczywistością?
  - Czy w GRB są osoby postronne?
  - Czy widzialność rzeczywista ≥ planowana?
- [ ] **Wyznaczenie i oznakowanie strefy**
  - Taśma ostrzegawcza, pachołki
  - Tablice „Operacja drona — wstęp wzbroniony"
  - **Asystenci na obrzeżach** (gdy strefa otwarta dla osób postronnych)
- [ ] **Briefing osób na strefie**
  - **OBOWIĄZEK z 2019/947:** osoby obecne w GRB muszą:
    - być **poinformowane o ryzyku**
    - być **przeszkolone z procedur ostrożności**
    - **wyraźnie wyrazić zgodę** na udział w operacji
  - (Osoby postronne nie mogą znajdować się w GRB!)
- [ ] **Pomiar wiatru** (anemometr, aplikacja, obserwacja)
- [ ] **Briefing załogi** — role, częstotliwości radia, procedury awaryjne

### Etap 3 — Pre-flight checklist drona (na miejscu)

Typowa checklista (różni się producent, ale wzorzec uniwersalny):

- [ ] **Wzrokowy przegląd drona**
  - **Kadłub/rama** — czy nie ma pęknięć, luzów
  - **Śmigła** — czy nie wyszczerbione, dobrze dokręcone, **zgodne z kierunkiem obrotu** (CW/CCW)
  - **Silniki** — czy obracają się swobodnie, bez chrobotu
  - **Anteny** — sprawdź mocowanie, kierunek
  - **Gimbal/kamera** — wolny ruch, soczewki czyste
- [ ] **Bateria**
  - Wizualna kontrola (czy nie spuchnięta!)
  - Napięcie/poziom naładowania (zwykle > 95% na start)
  - Temperatura (idealnie 20–40 °C)
  - Solidne wpięcie w korpus
- [ ] **Kontroler (RC)**
  - Naładowany
  - Sparowany z dronem
  - Drążki w pozycji neutralnej
  - Dolny ekran/telefon — bateria, łączność, aktualne mapy
- [ ] **Test systemów**
  - Akwizycja GPS (zwykle ≥ 12 satelitów)
  - Kalibracja kompasu (gdy wymagana — np. zmiana lokalizacji o > 100 km)
  - **Test geo-awareness** (czy aplikacja widzi strefy)
  - **Test Remote ID** (czy aktywny, czy emituje)
  - **Test RTH** (Return To Home) — ustaw wysokość i punkt
  - **Test FailSafe** — co dron zrobi przy lost link?
- [ ] **Hover test** (5–10 s w zawisie na ~2 m) — czy stabilny, czy nie znosi
- [ ] **„Go/No-Go" decision** — pilot ma prawo i obowiązek odwołać lot

---

## 2.3 Procedury W TRAKCIE LOTU (in-flight)

- [ ] **Utrzymanie VLOS / współpraca z AO**
  - STS-01: pilot VLOS lub UA Observer pomagający
  - STS-02: AO obserwuje przestrzeń powietrzną, pilot operuje w stacji
- [ ] **Stała obserwacja przestrzeni powietrznej**
  - Statki załogowe poniżej 150 m AGL: śmigłowce ratunkowe, samoloty rolnicze, paralotnie
  - Inne BSP w okolicy (Remote ID na drugim ekranie)
  - **Pilot ma obowiązek przerwać lot, gdy operacja stwarza zagrożenie dla innych statków, ludzi, zwierząt, środowiska lub mienia**
- [ ] **Monitoring telemetrii**
  - **Bateria** (% lub V)
  - **GPS** (liczba satelitów, HDOP)
  - **Siła sygnału** C2 i video
  - **Wysokość, dystans, prędkość**
  - **Temperatura** silników/baterii
- [ ] **Komunikacja z AO/asystentami**
  - **Frazeologia:** krótka, jednoznaczna, np. „Drone ascending 60 metres", „Bird at 11 o'clock"
  - **Dwukierunkowa, niezawodna łączność** (radio + zapasowy kanał)
- [ ] **Reakcja na osoby/pojazdy wchodzące w strefę**
  - Asystenci kierują/informują
  - Pilot **ląduje awaryjnie** w bezpiecznym miejscu, jeśli osoba weszła w GRB
- [ ] **Ograniczenia operacyjne (z 2019/947):**
  - **1 dron na 1 pilota** w danym czasie
  - **Nie operuj z poruszającego się pojazdu** (zakaz w STS!)
  - **Nie przekazuj kontroli** innej stacji kierowania (STS-01/02)
  - **Brak materiałów niebezpiecznych**

### Manewry wymagane w szkoleniu praktycznym STS-01

Z UAS.STS-01 załącznika A:
- [ ] Zawis w miejscu (dla wiropłatów)
- [ ] Przejście z zawisu do lotu poziomego
- [ ] Wznoszenie i zniżanie z lotu poziomego
- [ ] Zakręty w locie poziomym
- [ ] Kontrola prędkości w locie poziomym
- [ ] Czynności po **awarii silnika/układu napędowego**
- [ ] **Manewry omijania** w celu uniknięcia kolizji
- [ ] Lot w trybie **manualnym/bez GPS** (jeśli dron to obsługuje)

---

## 2.4 Procedury AWARYJNE (emergency)

### Typowe scenariusze i reakcje

| Sytuacja | Wskaźnik | Reakcja |
|----------|----------|---------|
| **Lost link C2** | komunikat, brak telemetrii | **FailSafe** → automatyczny RTH lub lądowanie w miejscu |
| **Lost GPS** | spadek satelitów < 6, komunikat | przejście w **Atti mode** → ręczne, ostrożne lądowanie |
| **Low battery** | alert 30% → krytyczny 15% | **natychmiastowy RTH**, lądowanie awaryjne |
| **Fly-away** (dron leci niekontrolowanie) | utrata kontroli mimo komend | aktywacja **FTS** (klasa C5/C6); ostatecznie odcięcie zasilania |
| **Pożar baterii** | dym/płomień przed startem | **piasek / koc gaśniczy / proszek**, ewakuacja; nie polewaj pakietu punktowo wodą z bliska jako podstawową metodą gaszenia |
| **Wtargnięcie osoby** | osoba w GRB | natychmiastowe lądowanie w bezpiecznym miejscu; przerwanie operacji |
| **Statek załogowy w pobliżu** | obserwacja, ADS-B | **ustąpienie pierwszeństwa**, lądowanie / oddalenie się |
| **Pogarsza się pogoda** | wzrost wiatru, mgła, opady | natychmiastowe lądowanie |
| **Geofencing alert** | sygnał z drona | natychmiastowa zmiana trajektorii w kierunku Flight Geography |
| **Przeciążenie kontrolera** | brak reakcji | reset RC; jeśli nie pomaga — FailSafe |

### Zasady ogólne reakcji

- [ ] **3 priorytety (jak w lotnictwie):**
  1. **Bezpieczeństwo osób trzecich**
  2. **Bezpieczeństwo załogi**
  3. Ratowanie sprzętu (najmniej ważne)
- [ ] **Procedura "PAN-PAN" / "MAYDAY":** w komunikacji z PAŻP (gdy operacja koordynowana)
- [ ] **Po incydencie:** **nie ruszać sprzętu**, zabezpieczyć miejsce, zrobić zdjęcia, zgłosić zdarzenie (72h)

### Flight Termination System (FTS)

- [ ] **Czym jest:** mechanizm gwarantujący natychmiastowe zakończenie lotu na żądanie pilota lub automatycznie (np. wyjście poza Operational Volume)
- [ ] **Realizacja:**
  - **Spadochron ratunkowy** (wiropłaty klasy C5)
  - **Autorotacja** (helikoptery)
  - **Kontrolowany crash** (stałopłaty z funkcją „dive into ground")
  - **Odcięcie zasilania silników** (wynik = upadek)
- [ ] **Wymagany w klasie C5 (STS-01) i C6 (STS-02)** — to nie opcja
- [ ] **Test FTS** — element pre-flight checklisty

### Plan reagowania awaryjnego (ERP — Emergency Response Plan)

Operator MUSI mieć w OM:
- [ ] Plan **ograniczenia eskalacji** skutków
- [ ] **Warunki powiadamiania** organów (kogo, kiedy, jak)
  - PKBWL: tel. dyżurny 22 520 73 03 (24/7)
  - ULC: tel. dyżurny / e-mail
  - Najbliższy organ ATC, jeśli operacja koordynowana
  - 112 / Straż Pożarna / Pogotowie (gdy osoby ranne)
- [ ] **Kryteria identyfikacji** sytuacji awaryjnej
- [ ] **Jasny podział obowiązków** między pilotem a personelem

---

## 2.5 Procedury PO LOCIE (post-flight)

- [ ] **Wyłączenie i zabezpieczenie systemu**
  - Wyłącz drona przed kontrolerem
  - Wyjmij baterię (jeśli nie startuje wkrótce ponownie)
  - Zabezpiecz drona przed wiatrem (paski, pokrowiec)
- [ ] **Inspekcja polotowa**
  - Stan śmigieł (mikrouszkodzenia, pyłki)
  - Temperatura silników, baterii
  - Stan kamery/gimbala
  - Wilgoć/kondensacja
- [ ] **Rejestracja danych lotu**
  - Logi z drona (DJI Care/Mavic Sync, lub eksport CSV)
  - **Książka lotów drona** (data, miejsce, pilot, czas, MTOM, zdarzenia)
  - **Książka czasu pracy pilota** (zmęczenie!)
- [ ] **Debriefing załogi**
  - Co poszło dobrze, co nie?
  - Czy ktoś jest zmęczony (i nie powinien już dziś latać)?
  - Czy są obserwacje, które trzeba dodać do OM?
- [ ] **Zgłaszanie zdarzeń**
  - **Wypadek / poważny incydent** → **PKBWL niezwłocznie, do 72h**
  - **Inne incydenty** → ULC / system ECCAIRS
  - Nawet drobny lost link warto zalogować w wewnętrznym systemie
- [ ] **Konserwacja drona**
  - Czyszczenie soczewek, sensorów
  - Sprawdzenie torque dokręcenia silników (po 50 cyklach)
  - Aktualizacja firmware (przed/po sezonie)

---

## 2.6 Instrukcja Operacyjna (Operations Manual — OM)

**WYMAGANY dokument dla każdego operatora STS-01/STS-02.** Zawartość określa **Appendix 5 do 2019/947**.

- [ ] **Struktura OM (typowa):**

  1. **Strona tytułowa** — operator, wersja, data, podpis odpowiedzialnego
  2. **Spis treści**
  3. **Wstęp** — cel, zakres, system aktualizacji
  4. **Struktura organizacyjna** operatora — kierownik odpowiedzialny, kierownik operacji, piloci
  5. **Wykaz sprzętu** — drony (typ, klasa, S/N), kontrolery, akcesoria
  6. **Wykaz personelu** — piloci i ich kwalifikacje
  7. **Procedury operacyjne:**
     - Pre-flight (planowanie, site survey, checklisty)
     - In-flight (komunikacja, monitoring, ograniczenia)
     - Post-flight (debriefing, logi, konserwacja)
  8. **Procedury awaryjne i ratunkowe (ERP)**
  9. **Zarządzanie ryzykiem** (ocena ryzyka dla typowych operacji)
  10. **Polityka pogodowa** (limity wiatru, widzialności, opadów)
  11. **System zgłaszania zdarzeń**
  12. **System zarządzania jakością** (przeglądy OM, audyty)
  13. **Załączniki:** checklisty, wzory raportów, mapy stref, kontakty

- [ ] **Aktualizacja:** OM jest **żywym dokumentem** — przy każdej zmianie (nowy dron, nowy pilot, nowe doświadczenia) trzeba aktualizować i informować załogę.

- [ ] **Dystrybucja:** każdy pilot ma dostęp do aktualnej wersji OM (papier lub plik).

---

## 2.7 Planowanie misji szczególnie dla STS-02 (BVLOS)

- [ ] **Określenie trasy** (waypoints)
  - Wysokości na każdym segmencie
  - Prędkości
  - **Maksymalna odległość 1 km bez AO / 2 km z AO**
- [ ] **Obszary kontyngencji**
  - **Flight Geography** = rzeczywista trasa + margines
  - **Contingency Volume** = +10 m poziomo, +30 m pionowo
  - **GRB** = obliczony wg klasy C6 (max prędkość, czas reakcji, FTS)
- [ ] **Alternaty** (punkty awaryjnego lądowania) co kilkaset metrów
- [ ] **Sprawdzenie pokrycia AO**
  - Każdy AO max 1 km od drona
  - **Brak luk** w pokryciu
  - Każdy AO ma łączność z pilotem
  - **Widzialność na trasie ≥ 5 km**
- [ ] **NOTAM-y** dla obszaru operacji (sprawdź dla całego korytarza)
- [ ] **Coordination z PAŻP** w razie potrzeby (DroneRadar check-in)
- [ ] **Krajowy System Informacji Dronowej (KSID)** — gdy zostanie wdrożony, plan misji się tam zgłasza

---

## 2.8 Rola obserwatora przestrzeni powietrznej (AO) — STS-02

Z **UAS.STS-02.050:**
- [ ] **Obowiązki AO:**
  1. **Dokładny przegląd przestrzeni powietrznej** otaczającej drona w celu identyfikacji ryzyka kolizji ze statkami załogowymi
  2. **Stała znajomość pozycji drona** (wzrok lub elektronika)
  3. **Ostrzeganie pilota** w razie wykrycia zagrożenia
  4. **Pomoc w unikaniu** / minimalizowaniu skutków
- [ ] **Wymagania dla AO:**
  - Brak formalnego certyfikatu, ale przeszkolony zgodnie z OM
  - **Łączność dwukierunkowa** z pilotem (radio krótkofalówkowe, telefon w trybie głośnomówiącym)
  - Wyposażenie pomocnicze: **lornetka**, **kompas**, opcjonalnie **planszet ze strefami**
- [ ] **Rozmieszczenie:**
  - Tak, aby pokryć całą trasę bez luk
  - W odległości max 1 km od drona w każdym momencie
  - Max 1 km od pilota
  - **Widoczność niezasłonięta** (uwzględnić budynki, drzewa)

---

## 2.9 Frazeologia i komunikacja w załodze

- [ ] **Zasady:**
  - **Krótko, jednoznacznie, po polsku lub angielsku**
  - **Potwierdzaj** otrzymanie informacji (read-back)
  - **Liczby cyfrowo**: „height six zero" zamiast „sześćdziesiąt"
- [ ] **Przykładowe wywołania:**
  - `"Pilot to Observer One, drone ascending to 80 metres."` → `"Observer One, copy."`
  - `"Manned aircraft 3 o'clock low, distance approximately 500 m."` → `"Pilot copy, descending."`
  - `"Battery 25%, returning to home."` → `"Observer One, copy, monitoring landing zone."`
- [ ] **Wywołanie awaryjne:** `"MAYDAY, MAYDAY, MAYDAY — drone fly-away, activating FTS."`

---

## 2.10 NOTAM, AIP, sprawdzanie ograniczeń

- [ ] **NOTAM** (Notice to Airmen) — krótkie powiadomienia o czasowych ograniczeniach przestrzeni:
  - Nowe strefy (np. ćwiczenia wojskowe)
  - Imprezy masowe (zamknięcie przestrzeni)
  - Awarie pomocy nawigacyjnych
  - **Sprawdzaj** w AIP Polska lub aplikacji **DroneTower**
- [ ] **AIP Polska** (Aeronautical Information Publication) — pełna informacja:
  - **AIP-AD** — lotniska
  - **AIP-ENR** — trasy i przestrzeń (tam są wszystkie strefy DRA, EP R/D/P)
  - **AIP-GEN** — informacje ogólne
- [ ] **VFR Manual** — uproszczona wersja dla pilotów VFR (warto przejrzeć dla zrozumienia stref)

---

## 2.11 Pułapki egzaminacyjne

- ⚠️ **Operator vs Pilot** — to **dwa różne podmioty** (formalnie, mimo że często ta sama osoba):
  - **Operator** — odpowiada za sprzęt, OM, oświadczenie, rejestrację
  - **Pilot** — wykonuje lot, ma certyfikat wiedzy
- ⚠️ **Lost link ≠ Lost GPS** — różne procedury awaryjne (FailSafe vs Atti mode).
- ⚠️ **W STS-01 i STS-02 NIE WOLNO** latać z poruszającego się pojazdu.
- ⚠️ **W STS-01 i STS-02 NIE WOLNO** przekazywać kontroli między stacjami kierowania (tylko 1 pilot na 1 drona).
- ⚠️ **Osoby w GRB** muszą **wyraźnie wyrazić zgodę** — to oznacza, że osoby postronne (które nie wyraziły zgody) nie mogą być w GRB. **Stąd nazwa „kontrolowany" obszar naziemny**.
- ⚠️ **OM jest WYMAGANY**, nie opcjonalny. Brak OM = brak prawa do wykonywania operacji STS.
- ⚠️ **AO musi być max 1 km od drona** — to częsta pułapka, że ktoś myśli „2 km z AO" oznacza, że AO też ma 2 km. NIE — to dystans pilot–dron.
- ⚠️ **Reakcja na statek załogowy = bezwzględne pierwszeństwo manned aviation**.

---

## 2.12 Pytania samosprawdzające

1. Co zrobisz, gdy zauważysz spadek liczby satelitów GPS z 14 do 4? **Przejście w tryb manualny (Atti), ostrożne zniżanie i lądowanie.**
2. Co to jest FailSafe i kiedy się aktywuje? **Procedura automatyczna drona przy utracie łącza C2 — typowo RTH lub lądowanie w miejscu.**
3. Czy mogę latać z dachu poruszającego się pickupa? **NIE w STS-01/02. Operowanie z poruszającego się pojazdu jest zabronione.**
4. Kogo zawiadomić po wypadku drona z poszkodowanym? **112 (pogotowie/policja), następnie PKBWL niezwłocznie, max 72h. ULC i ubezpieczyciel później.**
5. Czy ojciec z dzieckiem (przypadkowy spacerowicz) może być w GRB? **NIE. GRB to "kontrolowany obszar naziemny" — tylko osoby uczestniczące, poinformowane i które wyraziły zgodę.**
6. Co znajdziesz w OM? **Strukturę organizacyjną, wykaz sprzętu, procedury, ERP, polityki, checklisty.**
7. Ile AO potrzebujesz na trasę 1,8 km z dronem na 60 m? **Tyle, by każdy był max 1 km od drona w każdej chwili — minimum 1, częściej 2.**

---

## 2.13 Checklista uniwersalna — do wydruku

```
□ Pogoda OK (METAR/TAF, wiatr < 80% limitu drona)
□ Strefy DRA sprawdzone (DroneRadar)
□ NOTAM-y sprawdzone
□ Dokumenty na miejscu (OC, oświadczenie, certyfikaty)
□ OM dostępna dla załogi
□ Strefa GRB wyznaczona i oznakowana
□ Osoby w GRB poinformowane i wyrażają zgodę
□ Briefing załogi przeprowadzony
□ Dron — przegląd wizualny (rama, śmigła, silniki, gimbal)
□ Bateria sprawdzona (nie spuchnięta, > 95%)
□ GPS — co najmniej 12 satelitów
□ Kompas skalibrowany (jeśli nowa lokalizacja)
□ Geo-awareness aktywne
□ Remote ID aktywny i emituje
□ RTH ustawione (wysokość, punkt)
□ FailSafe skonfigurowany
□ FTS przetestowany (jeśli wymagane)
□ Łączność RC i video stabilna
□ Hover test 5 s OK
□ GO/NO-GO decision — GO
```

---

**[← Poprzedni: 01 Przepisy](./01_Przepisy_lotnicze.md)** | **[Powrót do indeksu](./00_INDEX.md)** | **[Następny: 03 Ryzyko na ziemi →](./03_Ryzyko_na_ziemi.md)**

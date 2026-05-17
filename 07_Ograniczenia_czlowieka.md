# Temat 7 — Ograniczenia możliwości człowieka (5%)

> **Waga:** ~2 pytania z 40 (lub 2 z 30).
> **Charakter:** mniejsza waga, ale **łatwe punkty do zdobycia** — pytania zdroworozsądkowe, znane z medycyny lotniczej.

---

## 7.1 Filozofia: dlaczego ten temat istnieje

EASA i ULC chcą, by pilot drona rozumiał, że **człowiek jest najsłabszym ogniwem** systemu. Większość wypadków lotniczych ma przyczyny **human factors**, nie techniczne. Pilot drona ma:
- ograniczoną percepcję
- ograniczoną uwagę
- ulega zmęczeniu
- ulega emocjom i presji
- mylne wrażenia (iluzje)

---

## 7.2 Czynniki fizjologiczne

### Zmęczenie

- [ ] **Wpływ:**
  - Wydłużony **czas reakcji**
  - Pogorszona **ocena sytuacji**
  - Większe ryzyko błędu
  - Mikrosen — zaśnięcie na ułamek sekundy
- [ ] **Przyczyny:**
  - Niedobór snu (< 7–8 h)
  - Wysiłek fizyczny
  - Stres
  - Długie operacje
- [ ] **Zarządzanie:**
  - **Przerwy** co 60–90 min lotu
  - **Rotacja** pilotów na długich operacjach
  - **Limit czasu pracy** w OM operatora (typowo 6–8 h dziennie, max 10)
  - **Hydratacja, posiłki, kawa**

### Rytm okołodobowy (cyrkadianny)

- [ ] **Naturalne dołki wydajności:**
  - **2:00–6:00** — najgorszy okres (ryzyko mikrosnu)
  - **13:00–15:00** — popołudniowy spadek (siesta time)
- [ ] **Szczyty:**
  - **9:00–12:00** — najlepsza koncentracja
  - **17:00–20:00** — dobry stan psychofizyczny
- [ ] **Operacje nocne** — wymagają specjalnej oceny i wyposażenia drona w oświetlenie

### Alkohol i środki psychoaktywne

- [ ] **Zasada „8 hours bottle to throttle"** — minimum 8 godzin od ostatniego drinka do lotu
- [ ] **Limit alkoholu w lotnictwie:** 0,2‰ (w Polsce w lotnictwie: 0,1‰ wg ULC)
- [ ] **W praktyce:** **0,0‰** — zero tolerancji
- [ ] **Narkotyki:** **bezwzględny zakaz**
- [ ] **Marihuana medyczna:** zakaz w pracy pilota, mimo legalności w niektórych przypadkach
- [ ] **Konsekwencje:** odpowiedzialność karna (art. 211 ustawy Prawo lotnicze) + utrata uprawnień

### Leki

- [ ] **Antyhistaminy** (na alergie) — mogą powodować senność
- [ ] **Leki przeciwbólowe** (kodeina, opioidy) — wpływ na koncentrację
- [ ] **Leki uspokajające, nasenne** — zakaz
- [ ] **Antybiotyki** — sprawdź ulotkę, wpływ indywidualny
- [ ] **Zasada:** jeśli ulotka mówi „nie prowadź pojazdów" → **nie pilotuj drona**
- [ ] **Konsultacja z lekarzem** w razie wątpliwości

### Choroba

- [ ] **Przeziębienie, grypa** — pogorszona koncentracja, gorączka, zmęczenie → nie lataj
- [ ] **Migrena** — światłowstręt, zaburzenia widzenia → nie lataj
- [ ] **Choroba serca, cukrzyca niewyrównana** — konsultacja medyczna
- [ ] **Ból zębów, ucha** — wpływa na koncentrację

### Hipoksja (niedotlenienie)

- [ ] W operacjach BSP **rzadziej istotna** (operujemy zwykle < 200 m AGL), ale:
  - **Wysokość npm > 2500 m** — początki objawów
  - **Wysokość npm > 4000 m** — wyraźna hipoksja
- [ ] **Objawy:** zawroty głowy, nudności, niewyraźne widzenie, euforia, spadek koncentracji
- [ ] **Ratunek:** zejście niżej, tlen
- [ ] **Dla pilota drona w górach** (np. Tatry) — czynnik istotny

### Hiperwentylacja

- [ ] **Co to:** zbyt szybki, płytki oddech (zwykle przy stresie)
- [ ] **Objawy:** mrowienie palców, zawroty głowy, panika
- [ ] **Ratunek:** **powolne, głębokie oddychanie**, oddychanie do papierowej torby (zwiększa CO2)

---

## 7.3 Percepcja i orientacja

### Percepcja wzrokowa w VLOS

- [ ] **Problem:** dron staje się punktem już na 100–200 m
- [ ] **Wzrokowa ocena dystansu** — niedokładna na dużych odległościach
- [ ] **Wzrokowa ocena wysokości** — bardzo niepewna (brak punktów odniesienia)
- [ ] **Wzrokowa ocena prędkości** — niemal niemożliwa wzrokowo (tylko z telemetrii)
- [ ] **Najmniejszy widoczny rozmiar:** dron o gabarycie 25 mm = max ~150 m wizualnie (dla osoby z 20/20 vision)
- [ ] **VLOS — definicja praktyczna:** odległość, w której pilot widzi orientację (przód/tył, kierunek) drona

### Iluzje wzrokowe

- [ ] **Iluzja tła** — dron na tle nieba/słońca trudno zobaczyć
- [ ] **Iluzja odległości** — dron na tle gór wydaje się bliższy
- [ ] **Iluzja perspektywy** — pochyłość terenu daje fałszywe wrażenie wysokości
- [ ] **Iluzja słońca** — światło wprost w oczy = utrata orientacji
- [ ] **Iluzja autokinetic** — fixacja wzroku na małym obiekcie w nocy → wydaje się, że się porusza

### Świadomość sytuacyjna (Situational Awareness, SA)

- [ ] **3 poziomy SA (model Endsley):**
  1. **Percepcja** — co widzę/słyszę
  2. **Zrozumienie** — co to znaczy
  3. **Przewidywanie** — co będzie za chwilę
- [ ] **Utrata SA** — częsta przyczyna wypadków
- [ ] **Budowanie SA:**
  - **Skanowanie** przestrzeni (180° co 5–10 s)
  - **Słuchanie** otoczenia (śmigłowiec)
  - **Monitorowanie telemetrii**
  - **Komunikacja** z AO

### Efekt tunelu wzroku (tunnel vision)

- [ ] **Co to:** skupienie wzroku na małym wycinku (ekran kontrolera) → ignorowanie reszty
- [ ] **Przyczyny:** stres, koncentracja na detalu (np. kadr)
- [ ] **Przeciwdziałanie:** **regularne odrywanie wzroku** od ekranu i skanowanie przestrzeni; rola AO

### Operacje nocne

- [ ] **Adaptacja do ciemności:** 20–30 min
- [ ] **Widzenie obwodowe** (peryferyjne) — lepsze w nocy niż centralne
- [ ] **Patrz „obok" obiektu** — nie wprost (centralna plamka jest „ślepa" w nocy)
- [ ] **Iluzje nocne:**
  - **Autokinetic** (patrz wyżej)
  - **False horizon** — brak wyraźnego horyzontu
- [ ] **Wymagania prawne:** dron z **oświetleniem** (LED zielone i czerwone z odpowiedniej strony, blink white na ogonie)
- [ ] **Reflektor** często potrzebny dla orientacji i wizualnej kontroli

---

## 7.4 Zarządzanie obciążeniem (workload)

### Workload management

- [ ] **Workload:** ile rzeczy pilot musi monitorować + na ile szybko reagować
- [ ] **Saturacja:** zbyt wiele zadań = błędy, opóźnienia
- [ ] **Zarządzanie:**
  - **Delegowanie** — AO obserwuje przestrzeń, asystent obserwuje GRB
  - **Automatyzacja** — pre-programowane trasy zamiast ręcznego sterowania
  - **Priorytety:** lot najpierw, kamera potem
  - **Czas na zadanie:** nie spiesz się — bezpieczeństwo > tempo

### CRM (Crew Resource Management)

- [ ] **Co to:** zarządzanie zasobami załogi — komunikacja, podział ról, podejmowanie decyzji
- [ ] **Zasady:**
  - **Każdy ma głos** (asertywność)
  - **Każdy słucha** (otwartość)
  - **Cross-check** — drugi pilot/AO sprawdza
  - **Briefing przedlotowy** — wszyscy znają cel i plan
  - **Debriefing polotowy** — wyciąganie wniosków
- [ ] **Five Hazardous Attitudes** (FAA — model klasyczny):
  1. **Anti-authority** („nie mówią mi, co mam robić") — antidot: stosuj procedury
  2. **Impulsivity** („musi się stać teraz!") — antidot: pomyśl chwilę
  3. **Invulnerability** („mnie się to nie zdarzy") — antidot: każdemu się może
  4. **Macho** („jestem najlepszy, zrobię to") — antidot: pokorne podejście do ryzyka
  5. **Resignation** („nic nie zrobię, i tak nie wyjdzie") — antidot: nie jestem bezradny

---

## 7.5 Eliminowanie czynników rozpraszających

- [ ] **Telefon** w trybie samolotowym (oprócz aplikacji niezbędnej — DroneTower, navigation)
- [ ] **Wyłączyć powiadomienia** w aplikacjach
- [ ] **Wyznaczona strefa wokół pilota** — kontrola dostępu (rodzina, zwierzęta, dziennikarze)
- [ ] **Briefing osób postronnych** — niech wiedzą, że nie należy zagadywać pilota
- [ ] **Sterylna kabina** (Sterile Cockpit) — w fazach krytycznych (start, lądowanie, manewry) tylko rozmowy operacyjne

---

## 7.6 Stres i procesy decyzyjne

### Stres

- [ ] **Eustres** — pozytywny, motywuje, zwiększa wydajność
- [ ] **Distres** — negatywny, paraliżuje, prowadzi do błędów
- [ ] **Krzywa Yerkesa-Dodsona** — wydajność rośnie ze stresem do pewnego punktu, potem spada
- [ ] **Objawy:** drżenie rąk, suchość w ustach, błądzenie myślami, wybiórcza uwaga
- [ ] **Strategie radzenia:**
  - Głębokie oddychanie
  - Mówienie procedur na głos
  - Skupienie na najbliższym kroku (nie na końcu misji)

### Get-there-itis (continuation bias)

- [ ] **Co to:** dążenie do ukończenia misji **mimo pogarszających się warunków**
- [ ] **Przyczyny:** termin, presja klienta, ambicja, „już prawie skończone"
- [ ] **Konsekwencje:** ryzykowne loty w pogarszającej się pogodzie, niepełne checklisty
- [ ] **Antidotum:** **wcześniej wyznaczyć kryteria abortu** i ich się trzymać

### Plan continuation error / Anchoring bias

- [ ] **Co to:** kotwiczenie poznawcze — trzymanie się pierwotnego planu mimo zmiany okoliczności
- [ ] **Antidotum:** **regularna re-ewaluacja** planu (co 15–30 min)

### Confirmation bias

- [ ] Wybieranie informacji potwierdzających to, w co już wierzymy
- [ ] Pilot wierzy, że pogoda będzie OK → ignoruje sygnały zmiany
- [ ] Antidotum: aktywnie szukaj informacji **przeczących** swojej hipotezie

### Modele decyzyjne

#### DECIDE

- [ ] **D**etect — wykryj zmianę/problem
- [ ] **E**stimate — oceń wagę
- [ ] **C**hoose — wybierz cel działania
- [ ] **I**dentify — zidentyfikuj opcje
- [ ] **D**o — wykonaj
- [ ] **E**valuate — sprawdź efekt

#### PAVE — pre-flight risk assessment

- [ ] **P**ilot — czy ja jestem gotowy (IMSAFE — patrz niżej)?
- [ ] **A**ircraft — czy dron jest gotowy (checklist)?
- [ ] **enVironment — pogoda, teren, przestrzeń**
- [ ] **External pressures** — czy presja klienta wpływa na decyzję?

#### IMSAFE — self-assessment pilota

- [ ] **I**llness — choroba
- [ ] **M**edication — leki
- [ ] **S**tress — stres
- [ ] **A**lcohol — alkohol (8h)
- [ ] **F**atigue — zmęczenie
- [ ] **E**motion / Eating — emocje / jedzenie

---

## 7.7 Komunikacja interpersonalna

- [ ] **Asertywność** — mów, jeśli widzisz problem
- [ ] **Aktywne słuchanie** — read-back, parafraza
- [ ] **Konflikty** — rozwiązuj na ziemi, nie w locie
- [ ] **Hierarchia:** pilot ma ostatnie słowo, ale każdy ma prawo zgłosić ryzyko (Stop Work Authority)
- [ ] **Skargi po locie** — dokumentuj, omów w debriefingu

---

## 7.8 Specyfika operatora drona

- [ ] **Sieliska** — pilot zwykle stoi, czasem długo w pozycji niewygodnej (zadarta głowa)
- [ ] **Wzrok zmieniający dystans** — od bliskiego (ekran) do dalekiego (dron) — zmęczenie mięśni oka (akomodacja)
- [ ] **Ergonomia:** statyw, kontroler z paskiem na szyję, składane krzesło na długie operacje
- [ ] **Hydratacja, jedzenie** — pilot często zapomina (skupienie na operacji)

---

## 7.9 Mnemoniki

- [ ] **IMSAFE** — Illness, Medication, Stress, Alcohol, Fatigue, Emotion (samoocena)
- [ ] **PAVE** — Pilot, Aircraft, enVironment, External pressures (ocena lotu)
- [ ] **DECIDE** — model decyzyjny
- [ ] **„8 hours bottle to throttle"** — alkohol
- [ ] **„5 P":** Plan, Plane, Pilot, Passengers, Programming — codzienne pre-flight assessment

---

## 7.10 Pytania samosprawdzające

1. Ile godzin musi upłynąć od alkoholu do lotu? **Minimum 8 godzin (w praktyce 24, dla pewności).**
2. Co to autokinetic? **Iluzja nocna — fiksowany punkt świetlny wydaje się poruszać.**
3. Co znaczy IMSAFE? **Illness, Medication, Stress, Alcohol, Fatigue, Emotion — checklist pre-flight pilota.**
4. Co to get-there-itis? **Dążenie do ukończenia misji mimo pogarszających się warunków.**
5. Czy mogę latać po wzięciu antyhistaminy? **Sprawdź ulotkę — większość powoduje senność, więc NIE.**
6. Co to sterile cockpit? **Zasada: w fazach krytycznych tylko rozmowy operacyjne.**
7. Jaki jest model decyzyjny DECIDE? **Detect, Estimate, Choose, Identify, Do, Evaluate.**
8. Najgorsze godziny dla pilota? **2:00–6:00 (dołek cyrkadianny) i 13:00–15:00 (popołudniowy).**

---

## 7.11 Pułapki egzaminacyjne

- ⚠️ **„8 godzin od alkoholu" to MINIMUM**, w praktyce 24 h (zwłaszcza po większej ilości).
- ⚠️ **Lek przepisany przez lekarza ≠ bezpieczny do lotu** — sprawdź ulotkę i skonsultuj z lekarzem.
- ⚠️ **Hipoksja** — temat z lotnictwa załogowego, ale na egzaminie BSP też się pojawia (np. operacje w górach).
- ⚠️ **Tunel wzroku** to **realne zagrożenie** dla pilotów drona — kamera staje się magnesem dla wzroku.
- ⚠️ **Zmęczenie** ma podobny wpływ na percepcję jak alkohol — niedospana noc = jak 0,5‰ alkoholu w organizmie.
- ⚠️ **„Plan continuation error"** to NIE upór, to znana pułapka poznawcza — bądź gotów anulować lot.

---

## 7.12 Praktyczne wskazówki do codziennej pracy

- [ ] Przed każdą operacją wykonaj **IMSAFE** w głowie (10 sekund)
- [ ] **Ustal kryteria abortu** PRZED startem (np. „przy wietrze > 10 m/s wracam")
- [ ] **Telefon w trybie samolotowym** poza aplikacjami niezbędnymi
- [ ] **Hydratacja + przekąska** na długie operacje
- [ ] **Notuj sobie** uwagi i błędy — analiza tygodniowa
- [ ] **Symulator** — trenuj sytuacje awaryjne w bezpiecznym środowisku

---

**[← Poprzedni: 06 Ryzyko w powietrzu](./06_Ryzyko_w_powietrzu.md)** | **[Powrót do indeksu](./00_INDEX.md)** | **[Następny: 08 Meteorologia →](./08_Meteorologia.md)**

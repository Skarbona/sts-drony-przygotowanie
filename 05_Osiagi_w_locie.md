# Temat 5 — Osiągi systemu BSP w locie (10%)

> **Waga:** ~4 pytania z 40 (lub 3 z 30).
> **Charakter:** wpływ czynników atmosferycznych na drona, baterie LiPo, kalkulacja czasu lotu, limity producenta.

---

## 5.1 Czynniki wpływające na osiągi drona

### Masa startowa (MTOM — Maximum Take-Off Mass)

- [ ] **MTOM** = masa pustego drona + bateria + ładunek payload
- [ ] **Wpływ na lot:**
  - Większa masa → silniki pracują na wyższych obrotach → większy pobór prądu → **krótszy czas lotu**
  - Większa masa → mniejszy zapas mocy do manewrów (np. przy wietrze)
  - Większa masa → większa energia uderzenia (gorsze konsekwencje wypadku)
- [ ] **Zasada:** „każde +100 g zwykle skraca czas lotu o 1–3 min" (zależnie od modelu)
- [ ] **MTOM jest twardym limitem** producenta — przekroczenie = utrata gwarancji + ryzyko awarii

### Temperatura otoczenia

- [ ] **Niska temperatura (< 0 °C):**
  - **Spadek pojemności baterii** o 20–50% (wewnętrzna rezystancja rośnie)
  - **Spadek napięcia** pod obciążeniem
  - **Sztywnienie** tworzyw, większe ryzyko pęknięć
  - **Kondensacja** na elektronice przy zmianach temperatury
  - **Mniejsza gęstość powietrza** (paradoks: chłodne powietrze ma większą gęstość, więc lepsze osiągi aerodynamiczne — ALE bateria traci więcej)
- [ ] **Wysoka temperatura (> 35 °C):**
  - **Przegrzewanie ESC, silników, baterii**
  - **Termiczne uszkodzenia** elektroniki
  - **Większe ryzyko ucieczki termicznej (thermal runaway)** baterii LiPo
  - **Niższa gęstość powietrza** → mniejszy ciąg → krótszy czas lotu
- [ ] **Optymalna temperatura pracy:** 5–30 °C dla większości dronów konsumenckich
- [ ] **Zalecenie:** rozgrzej baterię przed lotem (np. trzymając ją pod kurtką) w zimie

### Wysokość nad poziomem morza (gęstość powietrza)

- [ ] **Gęstość powietrza** spada z wysokością (i temperaturą)
- [ ] **Konsekwencje wysoko npm:**
  - Silniki pracują na wyższych obrotach (mniejsza efektywność)
  - **Mniejszy ciąg** śmigieł (rozrzedzone powietrze)
  - Krótszy czas lotu
  - Trudniejsze manewry (większy promień zakrętu, dłuższe hamowanie)
- [ ] **W praktyce:** dron pracujący nad nizinami (0–500 m npm) — niemal nominalne osiągi; w Tatrach (2000+ m npm) — wyraźnie gorsze
- [ ] **Service ceiling** producenta — max wysokość npm operacji (np. DJI Mavic 3: 6000 m npm)

### Wiatr

- [ ] **Wpływ na czas lotu:**
  - **Pod wiatr** — większe zużycie energii, dłuższy czas dotarcia
  - **Z wiatrem** — szybciej, mniejsze zużycie, ale **uwaga przy powrocie**!
- [ ] **Reguła kciuka:** **planuj powrót pod wiatr** — zostaw zapas baterii
- [ ] **Wind shear** — uskok wiatru przy przeszkodach, krawędziach lasu — może rzucić dronem
- [ ] **Limity producenta — „wind resistance" / „max wind speed resistance":** typowo 8–12 m/s dla konsumenckich dronów; profesjonalne (M30, M300, M350) — 15 m/s. Wartość znajdziesz w User Manual drona.
- [ ] **Reguła 2/3 (konserwatywna):** lataj tylko gdy **wiatr średni < 2/3 deklarowanej odporności drona na wiatr**. Np. dla Mavica 3 (12 m/s) → bezpiecznie do 8 m/s średniego wiatru.
- [ ] **NIE myl** „odporności na wiatr" z „max prędkością lotu" — to dwie różne specyfikacje (max V poziomy = jak szybko leci dron, wind resistance = jaki wiatr utrzyma w zawisie).
- [ ] **Porywy (gusts):** mogą być 2× silniejsze niż wiatr średni — uwzględnij je oddzielnie (porywy ≤ deklarowanej odporności).

### Wilgotność i opady

- [ ] **Wpływ na elektronikę:**
  - Większość dronów konsumenckich ma **IP0X** (brak ochrony przed wodą)
  - **Niektóre profesjonalne:** IP43, IP54 (DJI Matrice 30T, Mavic 3 Enterprise)
- [ ] **Kondensacja** przy zmianie temperatury (np. dron z ciepłego auta na zimne powietrze) — krople wody na elektronice
- [ ] **Soczewki kamery** — zaparowanie obniża jakość obrazu
- [ ] **Reguła:** brak lotu w deszczu/śniegu (chyba że dron ma certyfikat IP4X+)

---

## 5.2 Baterie LiPo — kompletne kompendium

### Budowa i parametry

- [ ] **LiPo** (Lithium Polymer) — najczęstszy typ; dobry stosunek pojemność/masa, wysoki C-rating
- [ ] **Li-ion** — większa gęstość energii, mniejszy C-rating, dłuższa żywotność (DJI często używa)
- [ ] **Solid State** — przyszłość (więcej bezpieczeństwa, więcej energii)

#### Napięcia

- [ ] **Napięcie nominalne ogniwa LiPo:** **3.7 V** (Li-ion: 3.6–3.7 V)
- [ ] **Maks. naładowane:** **4.2 V/cell**
- [ ] **Min. bezpieczne (przy obciążeniu):** **3.3 V/cell**
- [ ] **Krytyczne minimum (storage):** **3.0 V/cell**
- [ ] **Storage (przechowywanie):** **3.8 V/cell** (~40–60% pojemności)
- [ ] **Konfiguracje:**
  - **3S** = 3 ogniwa szeregowo = 11.1 V nominal
  - **4S** = 14.8 V
  - **6S** = 22.2 V
  - **12S** (M300/M350) = 44.4 V

#### Pojemność

- [ ] **mAh** (mili-amperogodziny) — np. 5000 mAh = przy poborze 5 A wystarczy na ~1h (teoretycznie)
- [ ] **Wh** (wato-godziny) = mAh × V / 1000 — bardziej uniwersalne
- [ ] **Większa pojemność = większa waga** (trade-off!)

#### C-rating

- [ ] **C-rating** — krotność pojemności, którą bateria może bezpiecznie wydać
- [ ] **Przykład:** 5000 mAh, 25C → max prąd ciągły = 5 × 25 = **125 A**
- [ ] **Multirotory** — wymagają wysokich C (15–35C ciągły, do 60C peak)
- [ ] **DJI** zwykle używa Li-ion o niższym C (5–10C) z elektroniką ograniczającą

### Cykle życia

- [ ] **LiPo:** 200–300 pełnych cykli przy dobrej eksploatacji
- [ ] **Li-ion (DJI Intelligent Battery):** 200–500 cykli
- [ ] **Każdy cykl** = pełne rozładowanie + pełne naładowanie. Częściowe rozładowanie = ułamek cyklu.
- [ ] **Wskaźnik zużycia:** spadek pojemności i wzrost rezystancji wewnętrznej

### Bezpieczeństwo eksploatacji

- [ ] **Zakresy temperatur:**
  - **Ładowanie:** 0–40 °C (optymalnie 20–25 °C)
  - **Rozładowanie (operacyjne):** 0–45 °C
  - **Przechowywanie:** -10 do +25 °C (sucho, chłodno)
- [ ] **Zasady kardynalne:**
  1. **NIGDY** nie ładuj spuchniętej baterii — wymień natychmiast
  2. **NIGDY** nie ładuj bez nadzoru w pierwszych godzinach
  3. **NIGDY** nie używaj w temp. > 45 °C
  4. **Używaj LiPo-bag** lub metalowego pojemnika do ładowania/transportu
  5. **Nie ładuj zaraz po locie** — daj ostygnąć (15+ min)
  6. **Storage** przy 3.8 V/cell jeśli > 1 tydzień nie używana
- [ ] **Pożar baterii LiPo (thermal runaway):**
  - **Objawy:** wzdęcie, ciepło, dym, syk, biały dym/jasny ogień
  - **Reakcja:** **piasek**, **koc gaśniczy**, **proszek ABC**; ewakuacja na zewnątrz
  - **Nie polewaj punktowo pakietu wodą z bliska jako podstawową metodą gaszenia** — w małej operacji BSP priorytetem jest izolacja pakietu, ograniczenie rozprzestrzeniania ognia i ewakuacja. Straż pożarna może używać dużych ilości wody głównie do chłodzenia otoczenia i ograniczenia propagacji.
  - **Bateria po pożarze** — bezpieczne zabezpieczenie i utylizacja zgodnie z lokalnymi zasadami / PSZOK

### Transport

- [ ] **Lotniczy:**
  - **Bagaż podręczny** — TAK (do 100 Wh bez ograniczeń, 100–160 Wh za zgodą przewoźnika, > 160 Wh zakaz)
  - **Bagaż rejestrowany** — ZAKAZ baterii LiPo
- [ ] **Drogowy:**
  - Stabilne mocowanie
  - Storage charge
  - LiPo-bag lub pudełko metalowe

### Konserwacja

- [ ] **Balansowanie** — ładowanie w trybie „balance" wyrównuje napięcia ogniw
- [ ] **Wymiana ogniw** — w DJI praktycznie niemożliwa; w klasycznych LiPo można wymienić uszkodzone
- [ ] **Inspekcja** przed każdym lotem (wzdęcia, pęknięcia, korozja styków)

---

## 5.3 Kalkulacja czasu lotu

### Czas teoretyczny

```
t_lot [min] = (C × η) / (P_średnia / V_baterii) × 60
```
gdzie:
- C — pojemność baterii [Ah]
- η — sprawność systemu (0.8–0.9)
- P_średnia — średnia moc pobierana [W]
- V_baterii — napięcie nominalne [V]

### Czas praktyczny

- [ ] **Producent podaje czas „idealny"** (zawis, brak wiatru, 25 °C, MTOM bez payload)
- [ ] **Rzeczywisty czas:** **70–80% deklarowanego**
- [ ] **Czynniki skracające czas:**
  - Wiatr (+20–30% zużycia)
  - Payload (np. dodatkowa kamera)
  - Niska temperatura (-30–50%)
  - Manewry (zakręty, zmiany wysokości)
  - Słabsza bateria (po wielu cyklach)

### Rezerwa baterii

- [ ] **Minimum:** **20% baterii** na powrót do Home + lądowanie
- [ ] **W STS-02 (BVLOS):** zalecane **30% rezerwy** (większe ryzyko, dłuższy dystans powrotu)
- [ ] **Przy lotach BVLOS pod wiatr:** rezerwa **+10%** na ewentualne wzmocnienie wiatru

### Wpływ chłodu — konkretne wartości

- [ ] **0 °C:** pojemność spada o ~10–15%
- [ ] **-10 °C:** spadek o 25–35%
- [ ] **-20 °C:** spadek o 40–50% (granica eksploatacji)
- [ ] **Praktyka:** w zimie planuj loty na **50% deklarowanego czasu**

---

## 5.4 Limity operacyjne drona — co czytać w instrukcji

Każdy dron ma w User Manual:

- [ ] **Max wind resistance** — np. 12 m/s
- [ ] **Max operating altitude (AMSL)** — np. 6000 m
- [ ] **Max takeoff weight (MTOM)**
- [ ] **Max flight time** — w warunkach idealnych
- [ ] **Operating temperature range** — np. -10 do +40 °C
- [ ] **Max ascent/descent speed**
- [ ] **Max horizontal speed**
- [ ] **IP rating** (ochrona przed pyłem/wodą) — np. IP43 = ochrona przed pyłem + bryzgi wody
- [ ] **Max transmission range** (z optymalnymi warunkami) — np. 15 km, w mieście realnie 1–3 km

---

## 5.5 Wpływ ładunku użytecznego (payload)

- [ ] **Każde +100 g** skraca czas lotu o **1–3 min** (zależy od drona)
- [ ] **Zmienia środek ciężkości** — wpływ na stabilność, zwłaszcza w zawisie
- [ ] **Aerodynamika** — wystający payload zwiększa opór
- [ ] **Kalibracja** — po dodaniu payloadu warto zrobić test hover, sprawdzić, czy dron nie znosi
- [ ] **Sztywne mocowanie** vs **gimbal** — gimbal ma własną wagę i zużywa energię (motory gimbala)
- [ ] **Limity:** producent podaje **max payload** (np. DJI M300: 2.7 kg). Przekroczenie = przekroczenie MTOM = nielegalne i niebezpieczne

---

## 5.6 Ciąg, masa, moc — zależności fizyczne

### Stosunek ciągu do masy (T/W ratio)

- [ ] **Dron w zawisie:** **T/W = 1** (ciąg = masa, dron unosi się w miejscu)
- [ ] **Manewrowy multirotor:** T/W = **2.0–2.5** (zapas mocy do zwrotów, akcelaracji)
- [ ] **Fotograficzny multirotor:** T/W = **1.5–2.0** (mniej dynamiki, więcej stabilności)
- [ ] **Stałopłaty:** **T/W < 1** (skrzydła generują siłę nośną)

### Energia upadku

- [ ] **Energia kinetyczna:** E = ½ m v²
  - Dron 5 kg lecący 5 m/s: E = ½ × 5 × 5² = **62.5 J** (bezpieczne dla człowieka)
  - Dron 5 kg lecący 20 m/s: E = ½ × 5 × 20² = **1000 J** (poważne obrażenia)
- [ ] **Energia potencjalna (upadek):** E = m × g × h (g = 9.81 m/s²)
  - Dron 5 kg z 120 m: E = 5 × 9.81 × 120 = **5886 J** (śmiertelne)
- [ ] **Dlatego:** w STS-01 ograniczenie do **5 m/s** redukuje energię kinetyczną; w STS-02 (BVLOS) GRB jest **większy**

---

## 5.7 Aerodynamika śmigła

- [ ] **Ciąg śmigła** zależy od:
  - **Średnicy** (większa = większy ciąg, mniejsza efektywność na wysokich RPM)
  - **Skoku (pitch)** — kąt łopaty (większy = większy ciąg na RPM, większe zużycie)
  - **Liczby łopat** (2–5)
  - **Profilu aerodynamicznego**
  - **Gęstości powietrza**
- [ ] **Efekt naziemny (ground effect):** przy lądowaniu/zawisie blisko ziemi (< 1× średnica wirnika), dron ma **dodatkowy ciąg** — uwaga przy precyzyjnym lądowaniu!
- [ ] **Vortex Ring State (VRS):** przy szybkim **zniżaniu pionowym** dron może wpaść we własne zawirowania powietrza → utrata siły nośnej → katastrofa. **Reguła:** zniżaj pod kątem, nie pionowo

---

## 5.8 Mnemoniki i tipy

- [ ] **„20-80 rule":**
  - Startujemy z **80–100% baterii**
  - Zostawiamy **min. 20% rezerwy** na powrót
- [ ] **„Wind 2/3":** lataj tylko jeśli wiatr średni < 2/3 deklarowanej odporności drona na wiatr (max wind resistance)
- [ ] **„Cold = -50%":** w zimie planuj na 50% czasu lotu deklarowanego
- [ ] **„Storage 3.8":** przechowuj LiPo przy 3.8 V/cell
- [ ] **Reguła „2-2-2" do bezpiecznego LiPo:**
  - Max **2 minuty** ładowania na monitor
  - Max **2** baterie ładowane jednocześnie
  - Min. **2 metry** od materiałów łatwopalnych

---

## 5.9 Pytania samosprawdzające

1. Jakie napięcie nominalne ma 4S LiPo? **4 × 3.7 V = 14.8 V.**
2. Co to thermal runaway? **Niekontrolowana reakcja termiczna baterii prowadząca do pożaru/wybuchu.**
3. Czy spadek temperatury z 20 °C na -10 °C wpływa na czas lotu? **TAK, czas lotu może spaść o 30–35%.**
4. Czym gasić palącą się baterię LiPo? **Piasek, koc gaśniczy, proszek ABC; odsuń ludzi i zabezpiecz otoczenie. Wody nie używaj punktowo z bliska jako podstawowej metody ręcznego gaszenia pakietu.**
5. Jak przechowywać LiPo na zimę? **Przy storage charge 3.8 V/cell, w chłodnym, suchym miejscu, w LiPo-bag.**
6. Co to VRS i jak go uniknąć? **Vortex Ring State — zawirowania przy szybkim opadaniu pionowym. Zniżaj pod kątem.**
7. Czy mogę startować z 50% baterii? **Można, ale niezalecane — startuj z 95–100%, zostaw rezerwę.**
8. Co to MTOM? **Maximum Take-Off Mass — masa drona z baterią i ładunkiem w gotowości do startu.**

---

## 5.10 Pułapki egzaminacyjne

- ⚠️ **3.7 V to napięcie NOMINALNE** ogniwa — naładowane ma 4.2 V, rozładowane 3.0 V.
- ⚠️ **Storage to NIE pełne naładowanie** — 3.8 V (~40–60%).
- ⚠️ **Spuchnięta bateria = NIE używać, NIE ładować**, tylko utylizacja.
- ⚠️ **Wodą NIE gasimy LiPo** — to częsta pułapka. Tylko piasek, koc, proszek.
- ⚠️ **„20% rezerwy" to MINIMUM** — w BVLOS i przy wietrze zostaw więcej.
- ⚠️ **MTOM uwzględnia BATERIĘ i PAYLOAD** — nie pusta masa drona.
- ⚠️ **Wysokość npm wpływa na osiągi** — nie tylko temperatura.
- ⚠️ **Vortex Ring State** — niebezpieczne dla wszystkich multirotorów, nie tylko helikopterów.

---

**[← Poprzedni: 04 Systemy BSP](./04_Systemy_BSP.md)** | **[Powrót do indeksu](./00_INDEX.md)** | **[Następny: 06 Ryzyko w powietrzu →](./06_Ryzyko_w_powietrzu.md)**

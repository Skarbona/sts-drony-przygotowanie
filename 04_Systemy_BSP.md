# Temat 4 — Ogólna wiedza o systemach bezzałogowych statków powietrznych (10%)

> **Waga:** ~4 pytania z 40 (lub 3 z 30).
> **Charakter:** pytania o budowę drona, czujniki, łącza radiowe, klasy dronów, dokumentację.

---

## 4.1 Definicje wprowadzające

- [ ] **BSP / UA** (Bezzałogowy Statek Powietrzny / Unmanned Aircraft) — sam latający obiekt.
- [ ] **SBSP / UAS** (System Bezzałogowego Statku Powietrznego / Unmanned Aircraft System) — **BSP + stacja kierowania + łącza** = pełen system.
- [ ] **Pilot (RP — Remote Pilot)** — osoba kierująca lotem (drążki, programowanie misji).
- [ ] **Operator (UAS Operator)** — podmiot odpowiedzialny prawnie (osoba/firma).
- [ ] **Stacja Kierowania (CS — Control Station / GCS — Ground Control Station)** — sprzęt naziemny (RC + telefon/tablet/laptop).

---

## 4.2 Typy bezzałogowych statków powietrznych

### Multirotor (wielowirnikowiec, MR)

- [ ] **Budowa:** rama centralna + ramiona z silnikami; najczęściej 4 (quad), 6 (hexa), 8 (octa) silników
- [ ] **Zalety:**
  - Stabilny zawis
  - Pionowy start/lądowanie (VTOL)
  - Prosty w sterowaniu
  - Najpopularniejszy typ w STS-01 i STS-02
- [ ] **Wady:**
  - Krótki czas lotu (15–40 min)
  - Mała prędkość maks. (zwykle do 20 m/s)
  - Mały zasięg
- [ ] **Przykłady:** DJI Mavic, DJI Matrice, Autel EVO, Skydio

### Stałopłat (fixed-wing, A)

- [ ] **Budowa:** klasyczny samolot — skrzydła generują siłę nośną, silnik napędowy z przodu/z tyłu
- [ ] **Zalety:**
  - Duży zasięg (kilkadziesiąt km)
  - Długi czas lotu (1–3 h+)
  - Duża prędkość (do 30 m/s)
  - Wydajność energetyczna
- [ ] **Wady:**
  - Brak VTOL (potrzeba pasa startowego lub wyrzutni)
  - Nie zawisa
  - Trudniejszy w pilotażu
- [ ] **Przykłady:** WingtraOne (VTOL hybrid), senseFly eBee, Parrot Disco
- [ ] **W STS:** rzadko (STS-01/02 raczej multirotor, ale możliwy)

### Helikopter (rotorcraft, H)

- [ ] **Budowa:** jeden duży wirnik nośny + śmigło ogonowe
- [ ] **Zastosowanie:** specjalistyczne (duży udźwig, długi lot)
- [ ] **Przykłady:** Yamaha RMAX (rolnictwo), Schiebel Camcopter

### Convertiplane / VTOL Hybrid

- [ ] **Budowa:** start jak multirotor, lot jak stałopłat
- [ ] **Wykorzystanie rosnące** w STS-02 (duży zasięg + VTOL)

---

## 4.3 Budowa multirotora (kluczowy typ na egzaminie)

```
                 ┌─────────────┐
                 │   PAYLOAD   │ ← kamera, gimbal, czujniki
                 └─────────────┘
                       │
   ┌──────────────────────────────────────────┐
   │     FLIGHT CONTROLLER (FC) + GPS + IMU   │ ← "mózg"
   │              + COMPASS + BARO             │
   └──────────────────────────────────────────┘
   │     │              │              │     │
   ESC   ESC            ESC           ESC   ESC
   │     │              │              │     │
   M     M              M             M     M
   │     │              │              │     │
   ─śmigła CW/CCW (4, 6 lub 8 sztuk)─────────

      Łącze C2 ←→ Kontroler (RC) + ekran
      Łącze video ←→ Kontroler / monitor
```

### Komponenty szczegółowo

- [ ] **Rama (frame)** — najczęściej włókno węglowe, ABS, magnez. Sztywność i waga są kluczowe.
- [ ] **Silniki BLDC** (Brushless DC) — bezszczotkowe, sprawność ~85%. Parametr **Kv** (RPM/V).
- [ ] **ESC** (Electronic Speed Controller) — sterownik silnika. Bierze sygnał z FC i moduluje napięcie.
- [ ] **Śmigła (propellers)** — typy:
  - **CW** (clockwise) / **CCW** (counterclockwise) — naprzemiennie
  - **Pitch** (skok) — wpływa na ciąg i hałas
  - **Kompozytowe** vs plastikowe
  - **Składane** (DJI Mavic) — kompaktowe transportowanie
- [ ] **Bateria** (LiPo / Li-ion / Solid State) — szczegóły w temacie 5
- [ ] **Power Distribution Board (PDB)** — rozdziela prąd z baterii do ESC

### Flight Controller (FC) — „mózg" drona

- [ ] **Funkcje:**
  - Odczytuje czujniki
  - Decyduje, jaki sygnał wysłać do ESC
  - Realizuje algorytmy stabilizacji (PID)
  - Wykonuje misję (waypoints, RTH, FailSafe)
- [ ] **Popularne FC:** DJI A3/N3, Pixhawk, Cube Orange, Matek
- [ ] **Firmware:** DJI proprietary, PX4, ArduPilot, Betaflight (dla FPV)

### Czujniki na pokładzie

| Czujnik | Co mierzy | Wykorzystanie |
|---------|-----------|---------------|
| **IMU** (Inertial Measurement Unit) | przyspieszenia + obroty | stabilizacja, attitude |
| **Akcelerometr** | przyspieszenia liniowe XYZ | część IMU |
| **Żyroskop** | prędkość obrotowa XYZ | część IMU |
| **Magnetometr (kompas)** | pole magnetyczne | orientacja w kierunkach geograficznych |
| **Barometr** | ciśnienie atmosferyczne | wysokość bezwzględna |
| **GNSS** (GPS/GLONASS/Galileo/BeiDou) | pozycja XYZ | nawigacja |
| **Czujniki optyczne (VPS)** | obraz w dół | stabilizacja przy braku GPS, low-altitude |
| **Czujniki ToF / sonar** | odległość pionowa | unikanie kolizji, lądowanie |
| **Kamery omijające** (obstacle avoidance) | obraz 360° | unikanie przeszkód |
| **Czujniki radiowe ADS-B In** | sygnały statków załogowych | „Detect & Avoid" |

### Kalibracja czujników

- [ ] **Kompas** — kalibracja po **zmianie lokalizacji** o > 100 km lub przy zakłóceniach (linie wysokiego napięcia)
- [ ] **IMU** — typowo automatyczna; ręczna w razie ostrzeżeń
- [ ] **Gimbal** — po wymianie/serwisie

---

## 4.4 GNSS (Global Navigation Satellite System)

- [ ] **Główne konstelacje:**
  - **GPS** (USA) — 31 satelitów aktywnych, najstarszy
  - **GLONASS** (Rosja) — 24 satelity
  - **Galileo** (UE) — 28 satelitów; **najwyższa dokładność**
  - **BeiDou** (Chiny) — 35 satelitów
- [ ] **Multi-GNSS** — większość nowoczesnych dronów odbiera wszystkie 4 konstelacje równocześnie
- [ ] **Dokładność standardowa:** ~2–5 m pozioma, ~5–10 m pionowa
- [ ] **RTK / PPK** (Real-Time Kinematic / Post-Processed Kinematic) — dokładność **centymetrowa** (cm), wymaga stacji bazowej / serwisu CORS/NTRIP
- [ ] **Minimum dla bezpiecznego lotu:** **≥ 8 satelitów**, HDOP < 2.0; w STS zalecane ≥ 12 sat.
- [ ] **HDOP** (Horizontal Dilution of Precision) — wskaźnik jakości pozycji
- [ ] **GPS lock** — komunikat „GPS Ready" przed startem

### Vision Positioning System (VPS)

- [ ] **Co to:** kamery skierowane w dół + processing, pozycjonowanie z obrazu
- [ ] **Działa:** na niskiej wysokości (do ~10–30 m AGL), w pomieszczeniach, przy słabym GPS
- [ ] **Limity:** wymaga widocznej powierzchni (nie nad wodą/lustrami)

---

## 4.5 Łącza radiowe

### C2 — Command and Control

- [ ] **Funkcja:** dwukierunkowa komunikacja pilot ↔ dron (sterowanie + telemetria)
- [ ] **Pasma najczęściej:**
  - **2.4 GHz** (WiFi-like) — najpopularniejsze, dobry zasięg, kolizje z WiFi
  - **5.8 GHz** — szybsze, krótszy zasięg, mniej zakłóceń
  - **900 MHz** (FHSS) — długi zasięg (kilkadziesiąt km), niska przepustowość
- [ ] **Technologie:**
  - **OcuSync 2/3/4** (DJI) — adaptacyjny wybór częstotliwości
  - **Lightbridge** (starszy DJI)
  - **TBS Crossfire / ELRS** (FPV, długi zasięg)
- [ ] **Modulacja:** typowo OFDM, FHSS
- [ ] **Moc nadajnika:** ograniczona przepisami CEPT/UKE (typowo 100 mW EIRP w 2.4 GHz dla CE)

### Video downlink

- [ ] **Funkcja:** transmisja obrazu z kamery drona do ekranu pilota
- [ ] **Typowo w tym samym łączu C2** (DJI OcuSync) lub osobne (analog FPV)
- [ ] **Opóźnienie:** 50–200 ms zwykle

### Zakłócenia łącza C2

- [ ] **Źródła:**
  - WiFi (2.4/5 GHz) — gęsta zabudowa
  - Bluetooth, urządzenia IoT
  - Sieci komórkowe (5G na 3.5 GHz nie przeszkadza, ale stacje bazowe wytwarzają szum)
  - **Wojskowe zagłuszanie (jamming)** — pojawiło się masowo w Polsce po 2022 r.
  - Linie wysokiego napięcia, transformatory
  - Radary lotnicze i meteorologiczne
- [ ] **Objawy:** drgania obrazu, zerwane sterowanie, RTH bez ostrzeżenia
- [ ] **Reakcja pilota:** zmiana lokalizacji, podniesienie wysokości anteny, RTH

### Anteny

- [ ] **Anteny dipolowe** — wzór dookolny (omnidirectional)
- [ ] **Anteny kierunkowe** (yagi, patch) — większy zasięg w jednym kierunku
- [ ] **Polaryzacja:** liniowa (vertical/horizontal), kołowa (RHCP/LHCP)
- [ ] **Ustawienie:** anteny dipoli pionowo, ekran obrócony w kierunku drona

---

## 4.6 Klasy dronów C0–C6 — pełne wymagania (rozp. 2019/945)

### C0 — < 250 g

- [ ] Max prędkość pozioma **19 m/s**
- [ ] Max wysokość **120 m AGL** (jeśli dron z GPS)
- [ ] Brak ostrych krawędzi
- [ ] Energia uderzenia **< 79 J** (potencjalna w upadku z 120 m)
- [ ] **NIE wymaga Remote ID** (zbyt mały)
- [ ] Przykłady: DJI Mini 2/3/4 Pro (< 250 g)

### C1 — < 900 g

- [ ] Energia uderzenia **< 80 J**
- [ ] Max prędkość pozioma **19 m/s**
- [ ] Max wysokość **120 m**
- [ ] **System Remote ID** wymagany
- [ ] **Geo-awareness** wymagany
- [ ] **Identyfikacja zdalna**
- [ ] **Sygnał niskiej baterii**
- [ ] Przykłady: DJI Mini 4 Pro (z modułem C1), Mavic 3 Classic

### C2 — < 4 kg

- [ ] Max wysokość **120 m**
- [ ] **Tryb low-speed** (5 m/s) — wymagany do A2
- [ ] System geo-awareness
- [ ] Remote ID
- [ ] Brak ostrych krawędzi
- [ ] Przykłady: DJI Mavic 3 Pro, Mavic 3 Cine

### C3 — < 25 kg

- [ ] Max wymiar (rozmach) **< 3 m**
- [ ] Max wysokość **120 m**
- [ ] Remote ID
- [ ] Geo-awareness
- [ ] Przykłady: DJI Inspire 3, Matrice 30T

### C4 — < 25 kg

- [ ] **Brak automatyki sterowania** (poza stabilizacją)
- [ ] Klasyczny modelarski sprzęt (RC airplane, helikopter modelarski)
- [ ] **NIE wymaga Remote ID** (model klasyczny)
- [ ] Tylko ręczny pilotaż

### C5 — < 25 kg (dla STS-01)

- [ ] Wymagania jak C3 + dodatkowo:
  - **FTS** (spadochron / autorotacja / inne)
  - **Niskie napięcie operacyjne** zabezpieczone
  - **Tryb low-speed**
  - Dodatkowe oznaczenie C5
- [ ] **Lub: C3 + accessories kit upodabniający do C5**
- [ ] Remote ID wymagany
- [ ] Przykłady: DJI Mavic 3 Multispectral C5, M3E C5

### C6 — < 25 kg (dla STS-02)

- [ ] Max prędkość lotu **≤ 50 m/s** (180 km/h)
- [ ] **Programowalne tory lotu (geocaging)**
- [ ] Monitoring pozycji w czasie rzeczywistym
- [ ] FTS
- [ ] Remote ID
- [ ] Przykłady: profesjonalne stałopłaty BVLOS, niektóre VTOL hybrid

---

## 4.7 Dokumentacja drona

- [ ] **Deklaracja zgodności CE** (DoC — Declaration of Conformity)
  - Wystawia producent
  - Odniesienie do rozp. 2019/945 + klasy (np. „Class C5")
  - **Numer notyfikowanego organu** (4-cyfrowy)
- [ ] **Instrukcja użytkownika (UA Manual)**
  - Limity operacyjne (wiatr, temperatura, wysokość)
  - Procedury kalibracji
  - Lista FailSafe i co dron robi
  - Konserwacja
- [ ] **Numer seryjny** — fizycznie umieszczony na dronie + w dokumentacji
- [ ] **Naklejka klasy** (C5/C6) — trwała, czytelna
- [ ] **Naklejka numeru operatora** — trwała, czytelna (operator dorabia sam)

---

## 4.8 Kompatybilność elektromagnetyczna i bezpieczeństwo

- [ ] **EMC** (Electromagnetic Compatibility) — dron nie zakłóca i nie jest zakłócany
- [ ] **EMI** (Electromagnetic Interference) — zakłócenia. Linie wysokiego napięcia, transformatory, radary mogą wpłynąć na kompas i C2.
- [ ] **Strefy zakazane przez producenta** (DJI GeoZones) — baza stref aktualizowana automatycznie, może być bardziej restrykcyjna niż prawo (np. blokada nad lotniskami).
- [ ] **Test pre-flight** zawsze obejmuje sprawdzenie sygnału.

---

## 4.9 Stacja kierowania (Ground Control Station, GCS)

- [ ] **Najprostsza:** kontroler radiowy + telefon/tablet (DJI RC, Smart Controller)
- [ ] **Zaawansowana:** laptop z oprogramowaniem (QGroundControl, Mission Planner) — częste w STS-02
- [ ] **Funkcje:**
  - Wyświetlanie telemetrii
  - Sterowanie drążkami
  - Programowanie waypointów (misji)
  - Wyświetlanie obrazu z kamery
  - Logi
- [ ] **Wymagania:** czytelny ekran na słońcu, długi czas pracy baterii, niezawodność

---

## 4.10 Ładunek użyteczny (payload)

- [ ] **Kamera + gimbal** — najpopularniejszy payload (4K/8K wideo, RAW foto)
- [ ] **Termowizja** — kamera FLIR (inspekcje termiczne, ratownictwo)
- [ ] **Multispektralne** — rolnictwo, ocena upraw (NDVI)
- [ ] **LiDAR** — chmury punktów, geodezja
- [ ] **Megafon** — ratownictwo, ostrzeżenia
- [ ] **Reflektor** — operacje nocne
- [ ] **Mechanizm zrzutu** — agro, dostawy

**Wpływ payloadu na drona:**
- [ ] Zwiększenie **MTOM** — może wprowadzić w inną klasę
- [ ] Zmiana **środka ciężkości**
- [ ] Skrócenie **czasu lotu** (większe zużycie energii)
- [ ] Większy **opór aerodynamiczny**

---

## 4.11 Mnemoniki i tipy

- [ ] **Mnemonik klas:** „**0–4 to otwarta, 5–6 to szczególna**":
  - C0, C1, C2, C3, C4 → kategoria otwarta
  - C5 → STS-01
  - C6 → STS-02
- [ ] **Czujniki nawigacji „GIMBAL":**
  - **G**PS → pozycja
  - **I**MU → orientacja
  - **M**agnetometr → kierunek
  - **B**arometr → wysokość
  - **A**kcelerometr → przyspieszenia
  - **L**iDAR / VPS → wsparcie wizualne

---

## 4.12 Pytania samosprawdzające

1. Co to jest IMU i co zawiera? **Inertial Measurement Unit — akcelerometr + żyroskop (czasem magnetometr).**
2. Ile minimum satelitów GPS przed startem? **≥ 8, optymalnie ≥ 12.**
3. Czym różni się GNSS od GPS? **GNSS to ogólne pojęcie obejmujące GPS + GLONASS + Galileo + BeiDou. GPS to amerykański system.**
4. Jakie pasmo najczęściej do łącza C2? **2.4 GHz i 5.8 GHz.**
5. Co to FailSafe? **Zachowanie drona po utracie łącza C2 (RTH / hover / land).**
6. Czy dron klasy C4 musi mieć Remote ID? **NIE — to klasa "model klasyczny" bez automatyki.**
7. Max prędkość drona klasy C6? **50 m/s = 180 km/h.**
8. Co to PDB? **Power Distribution Board — rozdzielacz prądu z baterii do ESC.**

---

## 4.13 Pułapki egzaminacyjne

- ⚠️ **Multirotor ≠ stałopłat** — różne ograniczenia, różne procedury awaryjne (np. autorotacja tylko helikopter, FTS różny).
- ⚠️ **GPS to nie wszystko** — GNSS obejmuje 4 konstelacje. Dron nowoczesny używa wszystkich.
- ⚠️ **Klasa CE to nie klasa stref powietrznych** — C5 to klasa drona, klasa G to przestrzeń powietrzna ICAO.
- ⚠️ **Naklejka klasy musi być na dronie** — jej brak = niezgodność.
- ⚠️ **Kalibracja kompasu** — wymagana po zmianie lokalizacji > 100 km, NIE codziennie.
- ⚠️ **Mavic 3 (900 g) bez modułu C5** to dron bez klasy CE → kategoria otwarta z dodatkową analizą; **z modułem C5 → STS-01**.

---

**[← Poprzedni: 03 Ryzyko na ziemi](./03_Ryzyko_na_ziemi.md)** | **[Powrót do indeksu](./00_INDEX.md)** | **[Następny: 05 Osiągi w locie →](./05_Osiagi_w_locie.md)**

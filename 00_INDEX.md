# Przygotowanie do egzaminu STS-01 / STS-02 — Indeks

> **Źródła:** Wytyczne Prezesa ULC nr 1/2025 (Dz. Urz. ULC 2025 poz. 2), Rozporządzenie wykonawcze (UE) 2019/947 (z poprawkami M1/2020/639), Rozporządzenie delegowane (UE) 2019/945, EASA Easy Access Rules for UAS (rev. lipiec 2024), materiały PAŻP, kursnadrony.pl, swiatdronow.pl, dronydlafirmy.pl, dlapilota.pl, klasterlotniczy.pl, drones24.info.
> **Stan na:** maj 2026 — wytyczne ULC obowiązują od 1 marca 2025 r.

---

## ▶ [Test próbny online](./quiz/)

Baza 188 pytań, losowanie 30/40/60/80 zgodnie z proporcjami egzaminu, tryb egzaminacyjny i nauki, historia podejść — wszystko w `localStorage`, działa offline po pierwszym otwarciu.

---

## Lista TODO — tematy do nauki

Każdy temat to osobny plik markdown. **Zacznij od tematów o największej wadze (20%)**, potem pomniejsze.

- [ ] **[01 — Przepisy lotnicze (20%)](./01_Przepisy_lotnicze.md)**
  - Rozporządzenia UE 2019/947 i 2019/945, ustawa Prawo lotnicze, kategorie operacji, scenariusze STS, oświadczenia operatora, strefy DRA, Remote ID, ubezpieczenia, RODO, zgłaszanie zdarzeń.
- [ ] **[02 — Procedury operacyjne (20%)](./02_Procedury_operacyjne.md)**
  - Procedury przed/in/po locie, awaryjne (lost link, low battery, fly-away), Instrukcja Operacyjna (OM), planowanie misji, NOTAM, koordynacja z PAŻP, dokumenty na operację, rola obserwatora.
- [ ] **[03 — Techniczne i operacyjne środki ograniczające ryzyko na ziemi (20%)](./03_Ryzyko_na_ziemi.md)**
  - Flight Geography, Contingency Volume, Ground Risk Buffer (tabele, wzory), wymagania klas C5/C6, FTS, spadochron, geo-awareness, geofencing, ograniczenie populacji.
- [ ] **[04 — Ogólna wiedza o systemach BSP (10%)](./04_Systemy_BSP.md)**
  - Budowa multirotor vs stałopłat vs helikopter, czujniki (IMU, GNSS, baro), łącza C2 i video, klasy C0–C6, kompatybilność elektromagnetyczna, dokumentacja CE.
- [ ] **[05 — Osiągi BSP w locie (10%)](./05_Osiagi_w_locie.md)**
  - Wpływ masy, temperatury, gęstości powietrza i wiatru; baterie LiPo (napięcia, C-rating, storage), kalkulacja czasu lotu, limity producenta, ładunek użyteczny.
- [ ] **[06 — Techniczne i operacyjne środki ograniczające ryzyko w powietrzu (10%)](./06_Ryzyko_w_powietrzu.md)**
  - Klasy przestrzeni powietrznej, statki załogowe < 150 m, "detect & avoid", Remote ID / ADS-B / U-space, NOTAM/AIP, AGL vs AMSL, rola Air Observer.
- [ ] **[07 — Ograniczenia możliwości człowieka (5%)](./07_Ograniczenia_czlowieka.md)**
  - Fizjologia (zmęczenie, alkohol, leki), percepcja (iluzje, VLOS), stres, CRM, modele decyzyjne (DECIDE, PAVE), get-there-itis, hipoksja, rytm okołodobowy.
- [ ] **[08 — Meteorologia (5%)](./08_Meteorologia.md)**
  - METAR/TAF/SIGMET, wiatr i porywy, widzialność, chmury i ich klasyfikacja, opady, oblodzenie, burze (CB), zjawiska lokalne (bryza, termika, inwersja).

## Dodatkowe pliki

- [ ] **[09 — Organizacja egzaminu](./09_Organizacja_egzaminu.md)**
  - Struktura egzaminu, koszt, formy zdawania, wymagania wstępne, procedura odwoławcza, lista podmiotów wyznaczonych.
- [ ] **[10 — Plan nauki i źródła](./10_Plan_nauki_i_zrodla.md)**
  - 6-tygodniowy plan, polecane kursy, aplikacje, fora, symulatory, materiały do powtórki.

---

## Klucz do zapamiętania (cheatsheet)

| Parametr | STS-01 | STS-02 |
|----------|--------|--------|
| **Reżim lotu** | VLOS | BVLOS (start/lądowanie VLOS) |
| **Klasa drona** | C5 (lub C3 + kit) | C6 |
| **MTOM** | < 25 kg | < 25 kg |
| **Wysokość max** | 120 m AGL | 120 m AGL |
| **Prędkość pozioma** | < 5 m/s | brak (max ≤ 50 m/s wg klasy C6) |
| **Otoczenie** | zaludnione (controlled ground area) | słabo zaludnione |
| **Odległość pilot–dron** | VLOS (typowo ~500 m) | 1 km bez AO / 2 km z AO |
| **Obserwator AO** | nie wymagany | wymagany do 2 km |
| **Remote ID** | wymagany (aktywny + aktualny) | wymagany (aktywny + aktualny) |
| **FTS** | wymagany (cecha klasy C5) | wymagany (cecha klasy C6) |
| **Materiały niebezpieczne** | zakaz | zakaz |
| **Ważność certyfikatu wiedzy** | 5 lat | 5 lat |
| **Ważność oświadczenia operatora** | 2 lata | 2 lata |
| **Koszt oświadczenia** | 50 zł | 50 zł |

| Egzamin | Wartość |
|---------|---------|
| Liczba pytań (bez A2) | **40** |
| Liczba pytań (z A2) | **30** |
| Czas na pytanie | **90 s** |
| Próg zdania | **75%** |
| Pauza po niezdaniu | **3 dni** |
| Termin odwołania | **7 dni** |

---

## Jak korzystać z tych materiałów

1. Zacznij od pliku **[09_Organizacja_egzaminu.md](./09_Organizacja_egzaminu.md)** — zrozum format egzaminu.
2. Otwórz **[10_Plan_nauki_i_zrodla.md](./10_Plan_nauki_i_zrodla.md)** — zaplanuj sobie tygodnie.
3. Przerabiaj tematy 01–08 zgodnie z planem; każdy plik ma na końcu sekcję **„Pytania samosprawdzające"** i **„Pułapki egzaminacyjne"**.
4. Co tydzień rób mini-test z przerobionych tematów.
5. W ostatnim tygodniu — pełen test próbny w wybranym podmiocie wyznaczonym.

**Powodzenia!**

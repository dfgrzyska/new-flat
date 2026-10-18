# new-flat

Mobilna apka (w stylu iOS) do ogarnięcia zakupu i urządzenia mieszkania:
checklista w kategoriach z postępem, terminy i budżet.
Stan trzymany jest w `localStorage` przeglądarki (bez backendu).

**Wersja online:** https://dfgrzyska.github.io/new-flat/

## Co jest w środku

- **Start** – ogólny postęp, „Na teraz” (w trakcie + terminy w ciągu 14 dni i po terminie),
  kategorie w dwóch sekcjach: *Zakup mieszkania* i *Urządzanie*, wyszukiwarka.
- **Kategoria** – lista do odhaczania (kółko), zrobione i pominięte zwijają się na dół,
  szybkie dodawanie pozycji, edycja nazwy, ikony, koloru i sekcji.
- **Szczegóły pozycji** – status (*Do zrobienia / W trakcie / Zrobione / Nie dotyczy*;
  dla zakupów: *Do kupienia / Zamówione / Kupione*), termin, kwota planowana i wydana,
  link, notatka, przeniesienie do innej kategorii, podpowiedź do domyślnych pozycji.
- **Terminy** – wszystko, co ma datę, po miesiącach; osobno to, co jest po terminie.
- **Budżet** – wydane, plan, prognoza, opcjonalny limit, podział na kategorie, największe pozycje.
  Kategorię można wyłączyć z sum (Edytuj → „Licz w budżecie”).
- **Więcej** – nazwa mieszkania, link do [Planera mieszkania](https://dfgrzyska.github.io/home-planner/),
  eksport / import kopii, przywracanie usuniętych pozycji domyślnych.

„Nie dotyczy” wyłącza pozycję z postępu – przydaje się dla podpowiedzi, które Ciebie nie dotyczą
(np. wypowiedzenie najmu).

| Plik | Co zawiera |
|---|---|
| `data.js` | domyślne kategorie i pozycje z podpowiedziami |
| `app.js` | logika i widoki |
| `styles.css` | wygląd |
| `sw.js` | działanie offline |

## Zmiana domyślnej listy

Pozycje dopisane w `data.js` (nowe `id`) pojawią się u użytkownika przy następnym otwarciu,
w miejscu wynikającym z kolejności w pliku. Pozycje, które użytkownik usunął, nie wracają
(chyba że użyje „Przywróć usunięte pozycje domyślne”). Podpowiedzi (`hint`) są czytane
z `data.js` na bieżąco, więc ich poprawki widać od razu.

## Hosting (GitHub Pages)

Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.

### iPhone

Safari → Udostępnij → „Do ekranu początkowego” i otwieraj apkę tylko z ikony:

- Safari kasuje dane stron nieodwiedzanych przez 7 dni; apka z ekranu
  początkowego nie podlega temu limitowi.
- Apka z ekranu początkowego ma **osobne** dane niż Safari.
- „Eksportuj kopię” (Więcej) otwiera arkusz udostępniania („Zachowaj w Plikach”),
  „Importuj kopię” wczytuje plik JSON z Plików.
- `sw.js` pozwala otworzyć apkę bez internetu (po pierwszym uruchomieniu).

## Lokalnie

```bash
python -m http.server 8124
```

# Moment4_2

En frontend-webbplats som använder Fetch API för att konsumera moment4 autentiserings-webbtjänst med JWT-tokens.

## Projektbeskrivning

Detta projekt är en webbplats som visar hur man kan använda Fetch API för att konsumera en autentiserings-webbtjänst. Webbplatsen har funktionalitet för användarregistrering, inloggning och åtkomst till skyddade resurser med JWT-autentisering.

## Funktioner

- **Användarregistrering** - Skapa nya användarkonton
- **Inloggning** - Autentisering med e-post och lösenord
- **JWT-hantering** - Automatisk hantering av JWT-tokens i sessionStorage
- **Skyddad dashboard** - Åtkomst till skyddade resurser
- **API-integration** - Hämtning av användarprofil och skyddad data
- **Responsiv design** - Fungerar på olika enheter

## Teknologier

- **HTML5** - Semantisk markup
- **CSS3** - Responsiv styling
- **JavaScript ** - JavaScript med async/await
- **Fetch API** - HTTP-anrop till webbtjänst
- **JWT** - JSON Web Tokens för autentisering
- **SessionStorage** - Lagring av autentiseringsdata

## Installation och körning

### Alternativ 1: Testa direkt på Netlify (Rekommenderat)

- **Gå till:** [https://dt207g-moment4-2.netlify.app/](https://dt207g-moment4-2.netlify.app/)
- **Fungerar direkt** - ingen installation behövs
- **Alla funktioner tillgängliga** - registrering, inloggning, dashboard

### Alternativ 2: Lokal utveckling

1. **Klona eller ladda ner projektet**
2. **Välj en metod:**

   **Ag) Enkel metod (kan ha CORS-problem):**

   - Öppna `index.html` direkt i webbläsaren

   **B) Lokal server:**

   ```bash
   # Python 3
   python3 -m http.server 8080

   # Python 2
   python -m SimpleHTTPServer 8080

   # Node.js
   npx http-server
   ```

   - Gå till `http://localhost:8080`

### Varför välja lokal server?

- Löser CORS-problem om API:er blockerar file:// protokollet
- Ger samma miljö som Netlify (http:// istället för file://)

## API-integration

Webbplatsen använder följande API-endpoints:

- **Base URL:** `https://dt207g-moment4-1-p1ry.onrender.com`
- **Registrering:** `POST /api/auth/register`
- **Inloggning:** `POST /api/auth/login`
- **Skyddad data:** `GET /api/protected`
- **Användarprofil:** `GET /api/protected/profile`

### JWT-autentisering

Webbplatsen använder Bearer token-autentisering:

```
Authorization: Bearer <jwt_token>
```

## Användning

### 1. Registrering

- Gå till registreringssidan
- Fyll i användarnamn, e-post och lösenord
- Bekräfta lösenordet
- Klicka på "Registrera"

### 2. Inloggning

- Gå till inloggningssidan
- Ange e-post och lösenord
- Klicka på "Logga in"

### 3. Dashboard

- Efter lyckad inloggning omdirigeras du till dashboard
- Visa användarinformation
- Hämta skyddad data från API:et
- Hämta användarprofil

### 4. Utloggning

- Klicka på "Logga ut" i menyn
- Alla autentiseringsdata rensas

## Säkerhet

- **JWT-tokens** lagras i sessionStorage (rensas vid stängning av webbläsaren)
- **Validering** av lösenord (minst 6 tecken, matchning vid registrering)
- **Felhantering** med tydliga meddelanden
- **Automatisk omdirigering** vid utloggning

## Testning

### Manuell testning

1. **Registrera** ett nytt konto
2. **Logga in** med kontot
3. **Kontrollera** att dashboard visas
4. **Testa** att hämta skyddad data
5. **Logga ut** och kontrollera att åtkomst nekas

### Browser Developer Tools

- Öppna F12 för att inspektera nätverkstrafik
- Kontrollera att JWT-tokens skickas korrekt
- Verifiera API-svar och felhantering

## Teknisk dokumentation

### AuthService-klass

Huvudklass för hantering av autentisering:

- `register(username, email, password)` - Registrera ny användare
- `login(email, password)` - Logga in användare
- `getProtectedData()` - Hämta skyddad data
- `getUserProfile()` - Hämta användarprofil
- `logout()` - Logga ut användare

### SessionStorage

Autentiseringsdata lagras som:

- `jwt_token` - JWT-token för API-anrop
- `user` - Användarinformation (JSON)

## Felsökning

### Vanliga problem

- **"Failed to fetch"** - Kontrollera API-URL och nätverksanslutning
- **CORS-fel** - Kör från lokal server istället för file://
- **Token expired** - Logga in igen för nytt token

### Debug-tips

- Använd Browser Developer Tools (F12)
- Kontrollera Network tab för API-anrop
- Verifiera att JWT-tokens skickas korrekt

## Länkar

- **Live Demo:** [https://dt207g-moment4-2.netlify.app/](https://dt207g-moment4-2.netlify.app/)
- **GitHub Repository:** [https://github.com/ellenliden/DT207G_moment4_2.git](https://github.com/ellenliden/DT207G_moment4_2.git)
- **API-webbtjänst:** [https://dt207g-moment4-1-p1ry.onrender.com](https://dt207g-moment4-1-p1ry.onrender.com)

## Kontakt

Ellen Lidén

elli1807@student.miun.se

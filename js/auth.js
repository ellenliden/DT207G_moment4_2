//API-konfiguration
const API_BASE_URL = "https://dt207g-moment4-1-49ck.onrender.com";

// Autentiseringsklass för hantering av användarautentisering
class AuthService {
  constructor() {
    this.token = sessionStorage.getItem("jwt_token");
    this.user = JSON.parse(sessionStorage.getItem("user") || "null");
  }

  // kontrollerar om användaren är autentiserad
  isAuthenticated() {
    return !!this.token;
  }

  // hämta aktuell användare
  getCurrentUser() {
    return this.user;
  }

  // Hämta autentiseringstoken
  getToken() {
    return this.token;
  }

  // Sätt autentiseringsdata
  setAuth(token, user) {
    this.token = token;
    this.user = user;
    sessionStorage.setItem("jwt_token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  // Rensa autentiseringsdata
  clearAuth() {
    this.token = null;
    this.user = null;
    sessionStorage.removeItem("jwt_token");
    sessionStorage.removeItem("user");
  }

  // Registrera ny användare
  async register(username, email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        this.setAuth(data.token, data.user);
        return { success: true, data };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: "Nätverksfel: " + error.message };
    }
  }

  // Logga in användare
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        this.setAuth(data.token, data.user);
        return { success: true, data };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: "Nätverksfel: " + error.message };
    }
  }

  // Hämta skyddad data
  async getProtectedData() {
    if (!this.isAuthenticated()) {
      throw new Error("Användaren är inte inloggad");
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/protected`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        return { success: true, data };
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw new Error("Fel vid hämtning av skyddad data: " + error.message);
    }
  }

  // Hämta användarprofil
  async getUserProfile() {
    if (!this.isAuthenticated()) {
      throw new Error("Användaren är inte inloggad");
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/protected/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        return { success: true, data };
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw new Error("Fel vid hämtning av användarprofil: " + error.message);
    }
  }

  //Logga ut
  logout() {
    this.clearAuth();
    window.location.href = "index.html";
  }
}

//Skapa global autentiseringsinstans
const auth = new AuthService();

// Huvudapplikationslogik
document.addEventListener("DOMContentLoaded", function () {
  updateAuthStatus();
  updateNavigation();
});

// Uppdatera autentiseringsstatus
function updateAuthStatus() {
  const authStatus = document.getElementById("auth-status");

  if (auth.isAuthenticated()) {
    const user = auth.getCurrentUser();
    authStatus.innerHTML = `
            <p>Välkommen, ${user.username}!</p>
            <p>Du är inloggad som ${user.email}</p>
        `;
  } else {
    authStatus.innerHTML = "<p>Du är inte inloggad.</p>";
  }
}

// Uppdatera navigation baserat på autentiseringsstatus
function updateNavigation() {
  const loginLink = document.getElementById("login-link");
  const registerLink = document.getElementById("register-link");
  const dashboardLink = document.getElementById("dashboard-link");
  const logoutBtn = document.getElementById("logout-btn");

  if (auth.isAuthenticated()) {
    // Användaren är inloggad
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    dashboardLink.style.display = "inline-block";
    logoutBtn.style.display = "inline-block";
  } else {
    // Användaren är inte inloggad
    loginLink.style.display = "inline-block";
    registerLink.style.display = "inline-block";
    dashboardLink.style.display = "none";
    logoutBtn.style.display = "none";
  }
}

// Logga ut-funktionalitet
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "logout-btn") {
    auth.logout();
  }
});

// Kontrollera om användaren är autentiserad för skyddade sidor
function requireAuth() {
  if (!auth.isAuthenticated()) {
    alert("Du måste vara inloggad för att komma åt denna sida.");
    window.location.href = "login.html";
    return false;
  }
  return true;
}

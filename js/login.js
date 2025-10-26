// Inloggningslogik
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const messageDiv = document.getElementById("message");

  // Hantera inloggningsformulär
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Visa laddningsmeddelande
    showMessage("Loggar in...", "info");

    try {
      const result = await auth.login(email, password);

      if (result.success) {
        showMessage("Inloggning lyckades! Omdirigerar...", "success");
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1500);
      } else {
        showMessage(`Inloggning misslyckades: ${result.error}`, "error");
      }
    } catch (error) {
      showMessage(`Fel vid inloggning: ${error.message}`, "error");
    }
  });

  // Visa meddelanden
  function showMessage(text, type) {
    messageDiv.innerHTML = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = "block";
  }
});

// Registreringslogik
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  const messageDiv = document.getElementById("message");

  // Hantera registreringsformulär
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validera lösenord
    if (password !== confirmPassword) {
      showMessage("Lösenorden matchar inte!", "error");
      return;
    }

    if (password.length < 6) {
      showMessage("Lösenordet måste vara minst 6 tecken långt!", "error");
      return;
    }

    // Visa laddningsmeddelande
    showMessage("Registrerar användare...", "info");

    try {
      const result = await auth.register(username, email, password);

      if (result.success) {
        showMessage("Registrering lyckades! Omdirigerar...", "success");
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1500);
      } else {
        showMessage(`Registrering misslyckades: ${result.error}`, "error");
      }
    } catch (error) {
      showMessage(`Fel vid registrering: ${error.message}`, "error");
    }
  });

  // Visa meddelanden
  function showMessage(text, type) {
    messageDiv.innerHTML = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = "block";
  }
});

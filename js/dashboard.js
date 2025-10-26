// Dashboard-logik
document.addEventListener("DOMContentLoaded", function () {
  // Kontrollera autentisering
  if (!requireAuth()) {
    return;
  }

  // Visa användarinformation
  displayUserInfo();

  // Event listeners för knappar
  setupEventListeners();
});

// Visa användarinformation
function displayUserInfo() {
  const user = auth.getCurrentUser();

  if (user) {
    document.getElementById("username").textContent = user.username;
    document.getElementById("email").textContent = user.email;
    document.getElementById("user-id").textContent = user.id;
  }
}

// Sätt upp event listeners
function setupEventListeners() {
  const loadDataBtn = document.getElementById("load-data-btn");
  const loadProfileBtn = document.getElementById("load-profile-btn");

  loadDataBtn.addEventListener("click", loadProtectedData);
  loadProfileBtn.addEventListener("click", loadUserProfile);
}

// Ladda skyddad data
async function loadProtectedData() {
  const contentDiv = document.getElementById("protected-content");

  try {
    contentDiv.innerHTML = "Laddar skyddad data...";

    const result = await auth.getProtectedData();

    contentDiv.innerHTML = `
      <h4>Skyddad data från API:</h4>
      <pre>${JSON.stringify(result.data, null, 2)}</pre>
    `;
  } catch (error) {
    contentDiv.innerHTML = `
      <p style="color: red;">Fel vid hämtning av skyddad data: ${error.message}</p>
    `;
  }
}

// Ladda användarprofil
async function loadUserProfile() {
  const contentDiv = document.getElementById("profile-content");

  try {
    contentDiv.innerHTML = "Laddar användarprofil...";

    const result = await auth.getUserProfile();

    contentDiv.innerHTML = `
      <h4>Användarprofil från API:</h4>
      <pre>${JSON.stringify(result.data, null, 2)}</pre>
    `;
  } catch (error) {
    contentDiv.innerHTML = `
      <p style="color: red;">Fel vid hämtning av användarprofil: ${error.message}</p>
    `;
  }
}

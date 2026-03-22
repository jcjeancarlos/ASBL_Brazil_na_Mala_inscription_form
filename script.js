document.querySelector(".form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        telephone: document.getElementById("telephone").value,
        email: document.getElementById("email").value,
        langue: document.getElementById("langue").value
    };

    const response = await fetch("https://script.google.com/macros/s/AKfycbwGJ2g2YfOspoxHBEkT0_bLz3QqTQAKaAVkjy12ZKXAuo9llXZ7IhGVF_gtHbHF5RnH/exec", {
        method: "POST",
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.status === "success") {
        alert("Votre inscription a été envoyée avec succès !");
        document.querySelector(".form").reset();
    } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
    }
});

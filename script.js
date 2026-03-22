document.querySelector(".form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        telephone: document.getElementById("telephone").value,
        email: document.getElementById("email").value,
        langue: document.getElementById("langue").value
    };

    const response = await fetch("https://script.google.com/macros/s/AKfycbyIX-mlm07TSGH1iXSA7-BHv8CsB0s-8O820qss5n8hnVjtMycWW1f-fhHC9deIPS9j/exec", {
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

document.getElementById("checkDisease").addEventListener("click", function() {
    const symptoms = document.getElementById("symptoms").value.toLowerCase();
    let disease = "";
    let remedies = "";

    // Mock disease prediction logic
    if (symptoms.includes("fever") && symptoms.includes("cough")) {
        disease = "Flu";
        remedies = "Stay hydrated, rest, and take paracetamol.";
    } else if (symptoms.includes("headache") && symptoms.includes("nausea")) {
        disease = "Migraine";
        remedies = "Avoid bright lights, take pain relievers.";
    } else {
        disease = "Unknown disease. Please consult a doctor.";
    }

    // Show the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>Possible Disease:</strong> ${disease}</p>
        <p><strong>Remedies:</strong> ${remedies}</p>
        <button id="consultButton">Consult a Doctor</button>
    `;

    // Add event listener for consultation button
    document.getElementById("consultButton").addEventListener("click", function() {
        window.location.href = "consultation.html";
    });
});

document.getElementById('checkDisease').addEventListener('click', () => {
    const symptomsInput = document.getElementById('symptoms').value.trim();
    const resultDiv = document.getElementById('result');

    if (!symptomsInput) {
        resultDiv.textContent = "Please enter your symptoms.";
        resultDiv.style.color = "red";
        return;
    }

    const symptoms = symptomsInput.toLowerCase();
    let resultMessage = "";
    let resultColor = "black";
    let consultationButtonHTML = ""; // For storing the consultation button HTML

    if (symptoms.includes("fever")) {
        resultMessage = "It may be a sign of flu or infection. Consult a doctor.";
        resultColor = "orange";
        consultationButtonHTML = '<button onclick="window.location.href=\'consultation.html\'">Consult a Doctor</button>';
    } 
    else if (symptoms.includes("headache")) {
        resultMessage = "Could be a sign of stress, dehydration, or a viral infection. Consider seeing a healthcare provider.";
        resultColor = "yellow";
        consultationButtonHTML = '<button onclick="window.location.href=\'consultation.html\'">Consult a Doctor</button>';
    } 
    else if (symptoms.includes("cough")) {
        resultMessage = "This could indicate a cold, flu, or respiratory issue. If persistent, consult a doctor.";
        resultColor = "blue";
        consultationButtonHTML = '<button onclick="window.location.href=\'consultation.html\'">Consult a Doctor</button>';
    } 
    else if (symptoms.includes("fatigue")) {
        resultMessage = "Fatigue may be a symptom of many conditions such as stress or poor sleep. If persistent, seek medical advice.";
        resultColor = "green";
        consultationButtonHTML = '<button onclick="window.location.href=\'consultation.html\'">Consult a Doctor</button>';
    } 
    else {
        resultMessage = "No specific match. Please consult a healthcare professional for a more accurate diagnosis.";
        resultColor = "gray";
    }

    resultDiv.innerHTML = resultMessage + consultationButtonHTML; // Add the consultation button to the result
    resultDiv.style.color = resultColor;
});

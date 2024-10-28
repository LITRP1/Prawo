function authenticate() {
    const role = document.getElementById("roleSelect").value;
    const password = document.getElementById("password").value;

    const passwords = {
        "adwokat": "adwokat123",
        "prokurator": "prokurator123",
        "sedzia": "sedzia123"
    };

    if (password === passwords[role]) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("formSection").style.display = "block";
    } else {
        alert("Niepoprawne hasło. Spróbuj ponownie.");
    }
}

function toggleForm() {
    const documentType = document.getElementById("documentType").value;
    document.getElementById("warrantForm").style.display = documentType === "nakaz" ? "block" : "none";
    document.getElementById("appealForm").style.display = documentType === "apelacja" ? "block" : "none";
}

function generateWarrant() {
    const courtName = document.getElementById("courtName").value;
    const issueDate = document.getElementById("issueDate").value;
    const issuePlace = document.getElementById("issuePlace").value;
    const suspectName = document.getElementById("suspectName").value;
    const suspectCitizenship = document.getElementById("suspectCitizenship").value;
    const caseSignature = document.getElementById("caseSignature").value;
    const rulingType = document.getElementById("rulingType").value;
    const legalBasis = document.getElementById("legalBasis").value;
    const penaltyRange = document.getElementById("penaltyRange").value;
    const caseDescription = document.getElementById("caseDescription").value;
    const consequences = document.getElementById("consequences").value;

    const warrant = `N A K A Z\n\nOrgan wydający: ${courtName}\n\nData i miejsce wydania: ${issueDate}, ${issuePlace}\n\nOsoba ścigana: ${suspectName}\nObywatelstwo: ${suspectCitizenship}\n\nSygnatura sprawy: ${caseSignature}\nRodzaj orzeczenia: ${rulingType}\nKwalifikacja prawna czynu: ${legalBasis}\nGórna granica kary: ${penaltyRange}\n\nOpis sprawy: ${caseDescription}\nNastępstwa czynu: ${consequences}`;

    document.getElementById("documentOutput").textContent = warrant;
}

function generateAppeal() {
    const appealDate = document.getElementById("appealDate").value;
    const appealCourt = document.getElementById("appealCourt").value;
    const appealCaseSignature = document.getElementById("appealCaseSignature").value;
    const appealScope = document.getElementById("appealScope").value;
    const appealCharges = document.getElementById("appealCharges").value;
    const appealRequest = document.getElementById("appealRequest").value;
    const appealJustification = document.getElementById("appealJustification").value;
    const appealAttachments = document.getElementById("appealAttachments").value;

    const appeal = `A P E L A C J A\n\nData wyroku: ${appealDate}\nOrgan wydający: ${appealCourt}\nSygnatura akt: ${appealCaseSignature}\nZakres zaskarżenia: ${appealScope}\n\nZarzuty:\n${appealCharges}\n\nŻądanie:\n${appealRequest}\n\nUzasadnienie:\n${appealJustification}\n\nZałączniki:\n${appealAttachments}`;

    document.getElementById("documentOutput").textContent = appeal;
}

function downloadDocument(type) {
    const output = document.getElementById("documentOutput").textContent;
    if (output) {
        const blob = new Blob([output], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${type}.txt`;
        link.click();
    } else {
        alert("Brak treści do pobrania!");
    }
}

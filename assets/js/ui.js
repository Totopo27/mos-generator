// UI interaction logic
let currentMOS = null;

function calculateMOS() {
    const period = parseInt(document.getElementById('period').value);
    const generator = parseInt(document.getElementById('generator').value);
    
    if (period <= 0 || generator <= 0) {
        alert("Por favor, introduce valores positivos para Período y Generador");
        return;
    }
    
    if (generator >= period) {
        alert("El generador debe ser menor que el período");
        return;
    }
    
    currentMOS = makeMos(period, generator);
    renderMOSTable(currentMOS);
    document.getElementById('secondary-mos-results').innerHTML = '';
}

// Include all your UI rendering functions here
async function runPrediction() {
  const smiles = document.getElementById("smiles").value;

  const res = await fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ smiles })
  });

  const data = await res.json();

  displayResults(data);
  drawChart(data.dose);
}

function displayResults(data) {
  document.getElementById("results").innerHTML = `
    <p>IC50: ${data.ic50} µM</p>
    <p>Cell Line: ${data.cellLine}</p>
  `;
}

function drawChart(dose) {
  const ctx = document.getElementById("doseChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: dose.map(d => d.conc),
      datasets: [{
        label: "Viability %",
        data: dose.map(d => d.viability)
      }]
    }
  });
}
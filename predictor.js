function random(seed) {
  return Math.abs(Math.sin(seed)) % 1;
}

function predict(smiles) {
  const seed = smiles.length;

  const ic50 = (1 + random(seed) * 50).toFixed(2);

  const dose = [0.01, 0.1, 1, 10, 50].map(c => ({
    conc: c,
    viability: (100 / (1 + c / ic50)).toFixed(2)
  }));

  return {
    smiles,
    ic50,
    cellLine: "MCF-7",
    dose
  };
}

module.exports = { predict };
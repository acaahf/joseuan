function validar(valores) {
  return valores.every(v => v !== "" && !isNaN(v));
}

function calcularVelocidad() {
  const d = parseFloat(document.getElementById("d1").value);
  const t = parseFloat(document.getElementById("t1").value);
  if (!validar([d, t]) || t === 0) return alert("Datos inválidos");
  document.getElementById("res1").textContent = `v = ${d / t} m/s`;
}

function calcularAceleracion() {
  const dv = parseFloat(document.getElementById("dv2").value);
  const dt = parseFloat(document.getElementById("dt2").value);
  if (!validar([dv, dt]) || dt === 0) return alert("Datos inválidos");
  document.getElementById("res2").textContent = `a = ${dv / dt} m/s²`;
}

function calcularFuerza() {
  const m = parseFloat(document.getElementById("m3").value);
  const a = parseFloat(document.getElementById("a3").value);
  if (!validar([m, a])) return alert("Datos inválidos");
  document.getElementById("res3").textContent = `F = ${m * a} N`;
}

function calcularTrabajo() {
  const F = parseFloat(document.getElementById("f4").value);
  const d = parseFloat(document.getElementById("d4").value);
  const θ = parseFloat(document.getElementById("theta4").value);
  if (!validar([F, d, θ])) return alert("Datos inválidos");
  const rad = θ * Math.PI / 180;
  document.getElementById("res4").textContent = `W = ${F * d * Math.cos(rad)} J`;
}

function calcularEnergiaCinetica() {
  const m = parseFloat(document.getElementById("m5").value);
  const v = parseFloat(document.getElementById("v5").value);
  if (!validar([m, v])) return alert("Datos inválidos");
  document.getElementById("res5").textContent = `K = ${0.5 * m * v ** 2} J`;
}

function calcularEnergiaPotencial() {
  const m = parseFloat(document.getElementById("m6").value);
  const h = parseFloat(document.getElementById("h6").value);
  const g = 9.81;
  if (!validar([m, h])) return alert("Datos inválidos");
  document.getElementById("res6").textContent = `U = ${m * g * h} J`;
}

function calcularDensidad() {
  const m = parseFloat(document.getElementById("m7").value);
  const V = parseFloat(document.getElementById("v7").value);
  if (!validar([m, V]) || V === 0) return alert("Datos inválidos");
  document.getElementById("res7").textContent = `ρ = ${m / V} kg/m³`;
}

function calcularPresion() {
  const F = parseFloat(document.getElementById("f8").value);
  const A = parseFloat(document.getElementById("a8").value);
  if (!validar([F, A]) || A === 0) return alert("Datos inválidos");
  document.getElementById("res8").textContent = `P = ${F / A} Pa`;
}

function calcularCarga() {
  const I = parseFloat(document.getElementById("i9").value);
  const t = parseFloat(document.getElementById("t9").value);
  if (!validar([I, t])) return alert("Datos inválidos");
  document.getElementById("res9").textContent = `q = ${I * t} C`;
}

function calcularOhm() {
  const I = parseFloat(document.getElementById("i10").value);
  const R = parseFloat(document.getElementById("r10").value);
  if (!validar([I, R])) return alert("Datos inválidos");
  document.getElementById("res10").textContent = `V = ${I * R} V`;
}

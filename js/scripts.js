function calculator() {
    let e = parseFloat(document.getElementById("e").value);
    let i = parseFloat(document.getElementById("i").value);
    let r = parseFloat(document.getElementById("r").value);
  
    let result = convert(e, i, r);
  
    document.getElementById("result").textContent = result;
  }
  
  function convert(e, i, r) {
    if (i && r) {
      e = i * r;
      return e;
    } else if (e && r) {
      i = e / r;
      return i;
    } else if (e && i) {
      r = e / i;
      return r;
    }
  }
  
  function reset() {
    document.getElementById("e").value = "";
    document.getElementById("i").value = "";
    document.getElementById("r").value = "";
    document.getElementById("output").innerHTML = "";
  }
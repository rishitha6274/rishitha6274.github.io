function getresult() {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  
  const addition = n1 + n2;
  const subtraction = n1 - n2;
  const multiplication = n1 * n2;
  const division = n1 / n2;

  document.getElementById('output').innerHTML = `
        Addition: ${addition}<br>
        Subtraction: ${subtraction}<br>
        Multiplication: ${multiplication}<br>
        Division: ${division}
      `;
    }
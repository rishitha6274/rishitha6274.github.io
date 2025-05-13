let resultHTML = ''; 

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

const getresult = () => {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);

   resultHTML = `
      Addition: ${addition(n1, n2)}<br>
      Subtraction: ${subtraction(n1, n2)}<br>
      Multiplication: ${multiplication(n1, n2)}<br>
      Division: ${division(n1, n2)}
    `;
  

  document.getElementById('output').innerHTML = '';
};

const dispResult = () => {
  document.getElementById('output').innerHTML = resultHTML;
};

const hideResult = () => {
  document.getElementById('output').innerHTML = '';
};
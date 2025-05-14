
const daySelect = document.getElementById('dob-day');
for (let i = 1; i <= 31; i++) {
  daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}


const monthSelect = document.getElementById('dob-month');
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
months.forEach((month, i) => {
  monthSelect.innerHTML += `<option value="${i + 1}">${month}</option>`;
});


const yearSelect = document.getElementById('dob-year');
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1950; i--) {
  yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}




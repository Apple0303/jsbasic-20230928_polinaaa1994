function sumSalary(salaries) {
  let result = 0;
for (let key in salaries) {
  if (isFinite(salaries[key]))
 result = result+(salaries[key]);
}
  return (result)
}
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

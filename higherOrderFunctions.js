const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  { name: "Company Ten", category: "Finance", start: 1970, end: 2011 }
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// for loop
// for(let i = 0; i < companies.length; i++){
//   console.log(companies[i])
// }
// forEach - takes in a synchronous callback function. The following can be passed to the function; iterator, index and/or the entire array.
// companies.forEach(function(company) {
//   console.log(company)
// })

// filter - used to filter things out from an array. Does not return a new array

// get 21 and over
// let canDrink = []
//  for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21){
//     canDrink.push(ages[i])
//   }
//  }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true
//   }
// })

// arrow function
const canDrink = ages.filter(age => age >= 21)


// filter retail companies.
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true
//   }
// })

const retailCompanies = companies.filter(company => company.category === 'Retail')

// get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))

// get companies that have lasted 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))


// map - iterates through an array and returns a new array with the specified attributes.
// create an array of company names.
const companyNames = companies.map(function(company) {
  return company.name
})

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`
// })
// arrow function
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// having multiple maps.
const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2)
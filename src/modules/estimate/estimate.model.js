const { fetchData, fetchRow } = require('../../utils/postgres')


const new_estimate = `
INSERT INTO estimate(name, number, email, location, message) VALUES($1, $2, $3, $4, $5);
`

const all_estimates = `
SELECT * from estimate;
`

const addEstimate = (name, number, email, location, message) => fetchRow(new_estimate, name, number, email, location, message)
const allEstimates = () => fetchData(all_estimates)

module.exports = {
  addEstimate,
  allEstimates
}
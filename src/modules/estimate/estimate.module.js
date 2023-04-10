const model = require("./estimate.model")

module.exports = {
  POST: async(req, res) => {
    try {
        const { name , number, email, location, message} = req.body

        console.log(name , number, email, location, message);

        const newEstimate = await model.addEstimate(name, number, email, location, message)

        if(newEstimate) {
            return res.status(201).json({
                message: "New Estimate has been added",
                data: newEstimate
            })
        }
    } catch(err) {
        console.log(err.message)
    }
  },
  GET: async(_, res) => {
    try {
        res.json(await model.allEstimates())
    } catch(err) {
        console.log(err.message)
    }
  },
}
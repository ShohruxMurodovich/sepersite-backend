const express = require('express')
const router = express.Router()
const estimateModule = require("../modules/estimate/estimate.module")

router
      .post('/estimate/add', estimateModule.POST)
      .get('/estimate', estimateModule.GET)

module.exports = router
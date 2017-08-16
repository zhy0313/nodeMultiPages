const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.json({code:'ok',data:[{country:'中国',capital:'北京'},{country:'日本',capital:'东京'}]});
})

router.get('/abc', (req,res) => {
  res.json({code:'ok',data:[{country:'美国',capital:'华盛顿'},{country:'英国',capital:'伦敦'}]});
})

module.exports = router
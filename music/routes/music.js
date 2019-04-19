// 处理的post 请求
const Router = require('koa-router')
const router =  new Router()
const musicController=require('../controller/musicController')
router.post('/music/add-music',musicController.addMusic)
.put('/api/update-music',musicController.uploadMusic)
.delete('/api/delete-music',musicController.deleteMusic)
module.exports = router;
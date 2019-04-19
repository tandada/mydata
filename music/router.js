// 主路由；路由分支
const Router = require('koa-router')
const router = new Router()
const userController = require("./controller/userController")
const musicController = require('./controller/musicController')

router.get('/user/register',userController.showRegister)
.get('/user/login',userController.showLogin)
.get('/music/index',musicController.showIndex)

.get('/music/add',musicController.showAdd)
.get('/music/edit-music',musicController.showEdit)
.get('/',async(ctx,next)=>{
    if(ctx.request.url==='/'){
        ctx.request.url='/user/login'
    }
})

module.exports = router
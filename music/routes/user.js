const Router = require('koa-router')
const userRouter = new Router()
const userController = require('../controller/userController')


// 路由：1：提规则；2;做什么
// 验证用户是否存在
userRouter.post('/user/check-username',userController.checkUser)
// 注册
.post('/user/do-resgiter',userController.doResgiter)

// 登录
.post('/user/do-login',userController.dologin)
.get('/user/get-pic',userController.getpic)

module.exports = userRouter
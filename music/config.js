const path=require('path')
module.exports={
    host:'3000',
    staticBase:path.join(__dirname),
    staticDir:'./public',
    renderROot:path.join(__dirname,'views'),
    uploadDir:path.resolve('./public/music')
}
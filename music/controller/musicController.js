const musicModel=require('../modules/musicModel')
const path=require('path')
function uploadMusic(ctx){    
   let {
    title,singer,time
}=ctx.request.body;
let savesingobj= {
 title,singer,time
}
let {file,filelrc}=ctx.request.files
if(file){
    savesingobj.file= '/public/files/' +path.parse(file.path).base
}else{
 ctx.throw('歌曲必须上传')
 return
}
 if(filelrc){
     savesingobj.filelrc=path.parse(filelrc.path).base
 }

 savesingobj.uid=1

  return savesingobj
}
module.exports = {
    showIndex:async(ctx,next)=>{
        let uid=1
        let musics=await musicModel.findUserById(uid)
        ctx.render('index',{
            musics
        })
    },
    showAdd: async(ctx,next)=>{
        ctx.render('add')
    },
    showEdit:async(ctx,next)=>{
        let id=ctx.query.mid
        console.log(id)
       let music= await musicModel.findMusicById(id)
       console.log(music.mid)
        ctx.render('edit',{music})
    }
    ,
    addMusic :async (ctx,next)=>{
  let savesingobj= uploadMusic(ctx)
  console.log(savesingobj)
      let result=await musicModel.addMusic(savesingobj)
    if( result.affectedRows==1){
        ctx.body='成功'
       
    }
    },
    uploadMusic : async(ctx,next)=>{
            let opts=uploadMusic(ctx)
            let id=ctx.request.body.mid
            Object.assign(opts,{id})
            let result=await musicModel.uploadMusic(opts)
           if( result.lenght!==0){
                 ctx.body='更新成功'
           }
        
    },
    deleteMusic:async(ctx,next)=>{
       
      let opts=ctx.request.body
    let result=await musicModel.deleteMusic(opts)
    if( result.affectedRows !==0){
        ctx.body='删除成功'
        return
  }
  ctx.body='删除失败'
    }
}
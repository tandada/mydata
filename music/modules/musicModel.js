const db =require('./db')
module.exports={
    addMusic:async(musics)=>{
        let result=await db.p('insert into music (title,singer,time,file,filelrc,uid) values(?,?,?,?,?,?)',
        Object.values(musics)
        )
        return result
    },
    uploadMusic: async (opts)=>{
        let result=await db.p('update  music  set title=?,singer=?,time=?,file=?,filelrc=?,uid=? where mid=?',
        Object.values(opts)
        )
        return result
    },
    deleteMusic:async (opts)=>{
        let result=await db.p('delete from  music where mid=? and uid=?',
        Object.values(opts)
        )
        return result
    }, 
    findMusicById:async (mid) => {
        // 用请求参数username 作为查询条件
        let result = await db.p('select * from music where mid=?', [mid]) 
        return result[0]
    },
    findUserById:async (uid) => {
        // 用请求参数username 作为查询条件
        let result = await db.p('select * from music where uid=?', [uid]) 
        return result
    }

}
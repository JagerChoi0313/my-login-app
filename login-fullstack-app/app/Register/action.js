"use server"

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

const registerUser = async(formData)=>{
    //1.把前端的传过来的邮箱和密码拿出来
    const {email,password}=formData;

    try{
        console.log("后端收到注册请求：",email);
        //关键操作：去User里找这个email
        const userExists = await prisma.user.findUnique({
            where:{email:email}
        })

        //如果userExists真的有东西（不是null）
        if(userExists){
            return{success:false,message:"该邮箱已被注册"}
        }

        //执行真正的新用户入库操作
        const newUser = await prisma.user.create({
            data:{
                email:email,
                password:password //暂时先存明文
            }
        })

        //存好了给前端发个喜报
        return {success:true,message:"注册成功"}

    }catch(error){
        //如果数据库连接失败或者代码报错，会跑到这里
        return{success:false,message:"服务器内部错误"};
    }
};


export default registerUser

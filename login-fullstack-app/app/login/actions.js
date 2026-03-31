//后端的行动指令
//这是一个专门处理“登录/注册”逻辑的后端函数
//在Next.js中这叫Server Action

"use server"
//这一行非常重要，它告诉Next.js这段代码必须在服务器上运行，保证你的数据库不被浏览器直接攻击

//把刚才创建的“指挥官”引入进来
import prisma from '@/Lib/prisma'


//编写异步函数去接收参数loginUser
const loginUser = async(formData)=>{
    //等待查取数据库的过程

    //JS的解构赋值：
    //原理：假设 formData 是 { email: '123@qq.com', password: '111' }。
    // 这一行代码会自动从盒子里把这两个值掏出来，分别存进同名的变量里。
    const {email,password}=formData;

    //因为这个函数运行在后端，所以点击登录时这个log不会出现在控制台，而是出现在终端
    console.log("正在尝试登录",email)

    //准备接受数据库返回的的结果，如果找到了user就是那个人的信息；如果没找到，user就是空的
    //await:等在程序把数据库的结果拿回来，再继续执行
    const user = await prisma.user.findUnique({
        //Prisma就是lib/prisma.js里定义的那个指挥官
        //.user指的是你在schema.user里定义的那个User模型（也就是DataGrip里的那张表）
        //.findUnique()是Prisma专门提供的一个方法，意思是：根据唯一标识找一个且仅找一个
    
        where:{email:email}
        //第一个email表示数据库表里的列名
        //第二个email表示你刚从formData里解构出来的变量
    });

    //做判断：到底有没有找到这个人
    console.log("查询结果：",user)

    //1.如果没找到用户
    if(!user)
    {
        return{success:false,message:"用户不存在，请先注册"}
    }

    //2.如果找到了用户，就比对密码
    if(user.password===password){
        return{success:true,message:"登录成功！"};
    }else{
        return {success:false,message:"密码错误，请重试"}
    }

};


export default loginUser
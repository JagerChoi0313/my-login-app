"use client"
//申明这是一个客户端的组件，告诉Next.js这是个可以在浏览器内交互的组件
//Next.js 默认所有组件都是 服务器组件 (Server Components)。服务器组件像个“冷冰冰的模版”，
// 它不认识浏览器的 window、document，也不支持点击事件。
// 加上 "use client"，就是告诉 Next.js：“请把这个组件下载到用户的浏览器里去运行，因为它需要交互。”

import useLogin from './useLogin'


const Loginpage=()=>{
    //从自定义hook中获取数据
    const {formData,handleChange,handleSubmit,loading}=useLogin();

    return(
        <form style={{display:'flex',
                      flexDirection:'column',
                      gap:'10px',
                      maxWidth:'300px',
                      margin:'50px auto'}}
                      onSubmit={handleSubmit}>
            <h1>用户登录</h1>
            <input
                name="email"
                type="email"
                placeholder="邮箱"
                value={formData.email}
                onChange={handleChange}//绑定监听函数
            />
            <input
                name="password"
                type="password"
                placeholder="密码"
                value={formData.password}
                onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
                {loading? "正在登录":"立即登录"}
            </button>
        </form>
    )
}

export default Loginpage
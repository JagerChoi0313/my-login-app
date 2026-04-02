"use client"

import useRegister from './useRegister'


const RegisterPage=()=>{

    const{formData,handleChange,handleSubmit,loading}=useRegister();
    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            maxWidth:'300px',
            margin:'50px auto'
        }}>

            <h1>用户注册</h1>
            <input
                name="email"    //这里的名字必须和useRegister中的key一样
                type="email"    //浏览器会自动检查格式是不是邮箱
                placeholder="请输入邮箱"    
                value={formData.email}     //返回实时内容
                onChange={handleChange}     //只要用户打字，就触发那个监听器
            />

            <input
                name="password"
                type="password"
                placeholder="设置密码"
                value={formData.password}
                onChange={handleChange}
            />

            <input
                name="confirmPassword"
                type="password"
                placeholder="确认密码"
                value={formData.confirmPassword}
                onChange={handleChange}
            />

            <button type="submit" disable={loading} onClick={handleSubmit}>
                    {loading?"提交中":"立即注册"}
            </button>
        </div>
    )
}

export default RegisterPage

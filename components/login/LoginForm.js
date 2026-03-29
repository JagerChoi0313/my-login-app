//放可复用附件
//比如登录页里的表单，我们不想全塞到页面文件里，就单独拆出去


const LoginForm=()=>{
    return(
        <form className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg">
           <h1 className="text-2xl font-bold text-center mb-6"> 
            登录
           </h1>
           <div className="mb-4">

            <label className="block mb-2 text-sm font-medium">
                用户名
            </label>

            <input type="text" className="w-full 
            border 
            border-gray-300 
            rounded-lg 
            px-4 py-2"
            placeholder="请输入用户名"
            />
           </div>

           <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
                密码
            </label>

             <input type="password" className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4 py-2"
                placeholder="请输入密码"
                />
           </div>
           
            <button type="submit"
                    className="
                    w-full
                    bg-blue-600
                    text-white
                    py-2
                    rounded-lg
                    hover:bg-blue-700
                    transition">
                    登录
                </button>
        
        </form>
    )
}

export default LoginForm

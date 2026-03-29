//登录页面
//以后登录login就显示它

//第一步：导入LoginForm
// import {LoginForm} from '@/components/login/loginForm';
//不可以写成：import {LoginForm} from '@/components/login/loginForm';
//如果LoginForm.js里写的是默认导出，那就不需要加：{}
//如果LoginForm.js里写的是命名导出，就需要加：{}

//因此要写成
import LoginForm from '@/components/login/LoginForm';


//第二步：定义一个叫LoginPage的组件
const LoginPage=()=>{
    return(
        //第三步：在组件里return一段JSX，在容器中渲染LoginForm
        <div className="min-h-screen flex items-center justify-center">
            <LoginForm/>
        </div> 
    )
}

export default LoginPage;




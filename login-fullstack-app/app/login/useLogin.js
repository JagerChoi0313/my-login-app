import {useState} from 'react'
import loginUser from './actions'
import {useRouter} from 'next/navigation'

const useLogin=()=>{

    //定义一个加载状态
    const [loading,setLoading]=useState(false)

    //路由跳转函数
    const router = useRouter();

    //定义的状态：数据的源头
    const[formData,setFormData]=useState({
        email:'',
        password:''
    });

    //定义“修改数据的工具”函数
    const handleChange=(e)=>{
        //e是e.target代表触发事件的HTML元素（也就是Input）
        //我们通过拿到它的name（区分是email还是password）和value（用户输入的内容）
        const {name,value}=e.target;

    //更新状态
        setFormData({
            ...formData,   //先用展开运算符复制一份假数据
            [name]:value   //使用[name]这种动态key只覆盖当前改变的那一项
        })
    };

    //定义提交处理函数
    const handleSubmit=async(e)=>{
        e.preventDefault(); //阻止浏览器默认刷新
        setLoading(true);//开始进入加载状态

        //调用后端函数，把结果存入result
        const result = await loginUser(formData)
        setLoading(false);//拿到数据了，结束加载状态

        console.log("准备发送给后端的数据：",result)
        
        //用弹窗告诉用户结果
        if(result.success)
        {
            alert("OK"+result.message)
            //关键代码命令导航员开车去首页
            router.push('/')
            //router:你定义的路由导航员
            //push('/'):意思是把新地址推入浏览器的历史记录，‘/’代表根目录（即你的首页app/page.js)
            //如果你想跳到个人中心，可以写/profile
        }else{
            alert("NO"+result.message)
            //登录失败，只把密码清空，保留邮箱，方便用户重新输入
            setFormData({
                ...formData,
                password:""
            });
        }
    };
    return{
        formData,
        handleChange,
        handleSubmit
    };
}

export default useLogin;

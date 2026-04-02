import {useState} from 'react'
import registerUser from './action'

const useRegister=()=>{

    //设置一个加载状态，记录是否在“转圈圈”发送数据
    const[loading,setLoading]=useState(false)

    

    //注册页面要用到的三个对象：邮箱，密码，确认密码
    const [formData,setFormData] =useState({
        email:'',
        password:'',
        confirmPassword:''
    });

    //监听器，获取用户的输入
    const handleChange=(e)=>{
        const{name,value}=e.target  //e代表事件,e.target表示用户输入的东西

        //保留旧数据，更新获取到的内容
        setFormData({
            ...formData,//展开旧数据
            [name]:value//更新内容
        })
    }

    //设置提交逻辑处理函数
    //核心功能：需要在前端判断用户有没有乱填
    const handleSubmit=async(e)=>{
        //阻止浏览器的默认刷新行为
        e.preventDefault()

        //逻辑校验
        if(formData.password!==formData.confirmPassword)
        {
            alert("两次输入密码不一致");
            return;
        }

        //如果一致：准备开始发送数据
        setLoading(true)

        //调用后端函数并拿回结果
        const result = await registerUser(formData);
        if(result.success){
            alert("恭喜，注册成功")
            setFormData({
                email:'',
                password:'',
                confirmPassword:''
            })
        }else{
            alert(result.message)
        }
        setLoading(false)

        console.log("准备注册的数据：",formData)

        //模拟结束
        
    }
    return{
        formData,
        handleChange,
        handleSubmit,
        loading
    }
}

export default useRegister

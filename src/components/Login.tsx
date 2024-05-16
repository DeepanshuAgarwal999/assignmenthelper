import React, { useEffect, useState } from 'react';
import loginImg from "/assets/images/login.svg";
import logo from '/assets/icons/logo.svg';
import chevronLeft from '/assets/icons/chevron-left.svg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import TextField from './inputs/TextField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { boolean, z } from 'zod';
import GradientButton from './inputs/GradientButton';
import Button from './inputs/Button';
import google from '/assets/icons/Google.svg'
import { useGoogleLogin } from '@react-oauth/google';
import { axiosInstance } from './utils/axios.instance';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setCredentials } from '../redux/slices/user.slice';
import Loader from './shared/Loader';
import { toast } from 'react-toastify';


// Define Zod schema for form data
const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password length must be greater than 6"),
});
type FormFields = z.infer<typeof LoginSchema>

const Login = () => {
    const navigate = useNavigate();
    const { state: prevState } = useLocation();
    const dispatch = useDispatch();
    const { userDetails } = useSelector(selectCurrentUser)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (userDetails) {
            navigate('/')
        }
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(LoginSchema), // Use Zod resolver for form validation
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: FormFields) => {
        console.log('Form Data:', data);
        console.log(JSON.stringify(data))
        setIsLoading(true)
        try {
            const resdata = await fetch("https://2nhv2211-8080.inc1.devtunnels.ms/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data),
                }
            )
            console.log(resdata)
            const res = await resdata.json()
            console.log(res)
            if (res.data && res.data.token) {
                dispatch(setCredentials(res.data))
                toast.success("Login Successfully")
            }
            // console.log(res.status)
        }
        catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
        finally {
            setIsLoading(false)
        }

    };
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const data = await fetch("https://2nhv2211-8080.inc1.devtunnels.ms/auth/google-verification",
                    {
                        method: "POST",
                        headers: {
                            "Authorization": 'Bearer ' + tokenResponse.access_token
                        }
                    }
                )
                const res = await data.json()
                console.log(res)
                console.log(tokenResponse)
                toast.success("Login successfully")
                navigate(prevState || '/')
            }
            catch (err) {
                console.log(err)
                toast.error("Something went wrong")
            }
        },
        // todo: implement toast functionality 
        onError: () => {
            toast.error("Something went wrong")
        }
    })
    if (isLoading) {
        return <div className='flex items-center justify-center h-screen'>
            <Loader state={isLoading} />
        </div>
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-8 xl:grid-cols-12 gap-10 min-h-screen relative '>

            <div className='col-span-1 lg:col-span-3 xl:col-span-3 flex justify-center flex-col  max-sm:px-10 max-md:px-20 md:pl-10 gap-8 mx-auto w-full mt-10 '>
                <Link to={'/'} className='absolute top-5 left-5'><img src={chevronLeft} alt="" className='w-10 cursor-pointer' /></Link>
                <div className='flex gap-2 max-md:justify-center'>
                    <img src={logo} alt="" />
                    <h1 className='text-xl lg:text-2xl text-[#1F1F1F] font-medium'>AssignmentHelper</h1>
                </div>
                <h1 className='text-2xl font-medium lg:text-3xl max-md:text-center text-nowrap'>
                    Welcome back,<br /> <span className='gradient-text'>Login in</span>
                </h1>
                <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
                    <TextField placeholder='Email' {...register('email')} type='email' error={errors.email?.message} />
                    <TextField placeholder='Password' {...register('password')} type="password" error={errors.password?.message} />
                    <GradientButton className='w-full' bgClassName='h-11 text-lg md:text-xl' type="submit">Log in</GradientButton>
                </form>
                <Button className='flex items-center gap-2 justify-center border-2 p-2 rounded-2xl border-black' onClick={() => handleGoogleLogin()}><img src={google} alt="" /><p className=' text-base sm:text-[15px] lg:text-lg text-nowrap  text-black font-medium'>Sign in with Google</p></Button>
                <p className='text-center text-[#0000007D]'><span className='text-nowrap'>Don’t have an account ?</span> <Link to={'/signup'} className='text-black hover:underline text-nowrap'>Sign up</Link></p>

            </div>
            <div className=' md:col-span-2 lg:col-span-5 xl:col-span-9  m-3 rounded-br-[4rem] rounded-tl-[4rem] overflow-hidden relative bg-primary_100 p-[1px] hidden md:block'>
                <div className='h-full w-full bg-white rounded-br-[3.91rem] rounded-tl-[3.91rem] flex flex-col justify-around items-center '>
                    <img src={loginImg} alt="" className='mx-auto w-[40vw]' />
                    <h1 className='gradient-text text-2xl lg:text-3xl font-medium text-center'>&quot;Empowering academic success,<br /> one assignment at a time.&quot;</h1>
                </div>
            </div>
        </section>
    );
};

export default Login;

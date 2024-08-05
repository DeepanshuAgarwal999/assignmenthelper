import React, { useRef, useState } from 'react'
import loginImg from "/assets/images/login.svg";
import logo from '/assets/images/logo.jpg';
import chevronLeft from '/assets/icons/chevron-left.svg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import TextField from './inputs/TextField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import GradientButton from './inputs/GradientButton';
import { toast } from 'react-toastify';
import Loader from './shared/Loader';
import { getNewAccessToken, getRefreshToken } from './utils/TokenConfig';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/slices/user.slice';

const RegisterSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6, "Password length must be greater than 6"),
});
type FormFields = z.infer<typeof RegisterSchema>
const SignUp = () => {
    const { state } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(RegisterSchema), // Use Zod resolver for form validation
    });
    const navigate = useNavigate();
    const { state: prevState } = useLocation();
    const dispatch = useDispatch();

    const saveAuthDetails = (response: any) => {
        dispatch(setCredentials({ token: response.access_token, refresh_token: response.refresh_token, userType: "google_user" }))
    }
    const saveAccessToken = (token: string) => {
        dispatch(setCredentials({ token, userType: "google_user" }))
    }

    const onSubmit = async (data: FormFields) => {
        setIsLoading(true)
        try {
            const resdata = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/customer/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data),
                }
            )
            if (resdata.status === 400) {
                toast.error("User already exist")
                navigate('/login')
                return
            }
            else if (resdata.status === 201) {
                toast.success("SignUp Successfully")
                navigate('/login')
                return
            }
            else {
                toast.error("Invalid Credentials")
            }
            // console.log(res.status)
        }
        catch (error) {
            toast.error("Internal server error")
        }
        finally {
            setIsLoading(false)
        }

    };

    // const handleGoogleLogin = useGoogleLogin({
    //     flow: 'auth-code',
    //     onSuccess: async (codeResponse) => {
    //         try {
    //             (codeResponse);

    //             if (codeResponse.scope.includes('https://mail.google.com/')) {

    //                 const refreshToken = await getRefreshToken(codeResponse, saveAuthDetails);

    //                 const newAccessToken = await getNewAccessToken(refreshToken, saveAccessToken);

    //                 if (newAccessToken) {
    //                     setIsLoading(true)
    //                     const data = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/google-verification`, {
    //                         method: "POST",
    //                         headers: {
    //                             "Authorization": 'Bearer ' + newAccessToken
    //                         }
    //                     });
    //                     if (data.ok) {
    //                         toast.success("Login successfully");
    //                         navigate(prevState || '/');
    //                     } else {
    //                         toast.error('Verification failed');
    //                     }
    //                 } else {
    //                     toast.error('Failed to retrieve new access token');
    //                 }
    //             } else {
    //                 toast.error('Please give required permission to read emails!');
    //             }
    //         } catch (err) {
    //             toast.error("Something went wrong");
    //         }
    //         finally {
    //             setIsLoading(false)
    //         }
    //     },
    //     // todo: implement toast functionality 
    //     onError: () => navigate('/')
    // })
    return (
        <section className='flex justify-between gap-8  relative h-screen '>

            <div className='mx-auto w-full lg:w-[360px] '>
                <Link to={state || '/'} className='mt-6 mb-6 inline-block max-sm:px-10 max-md:px-20 md:pl-10'><img src={chevronLeft} alt="" className='w-10 cursor-pointer' /></Link>
                <div className=' flex justify-center flex-col  max-sm:px-10 max-lg:px-20 md:pl-10 gap-8 mx-auto w-full'>
                    <div className='flex gap-2 max-lg:justify-center'>
                        <img src={logo} alt="" className='w-44' />
                        {/* <h1 className='text-xl lg:text-2xl text-[#1F1F1F] font-medium'>AssignmentHelper</h1> */}
                    </div>
                    <h1 className='text-2xl font-medium xl:text-3xl max-lg:text-center text-nowrap '>
                        Create an account<br /> <span className='gradient-text'>Sign up</span>
                    </h1>
                    <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
                        <div><TextField placeholder='Name' className='' {...register('name')} />
                            {errors.email && <p className="text-red-500 mt-2 text-sm">Name cannot be less than 3 words</p>}
                        </div>
                        <div><TextField placeholder='Email' className='' {...register('email')} />
                            {errors.email && <p className="text-red-500 mt-2 text-sm">Invalid email.</p>}</div>
                        <div>
                            <TextField placeholder='Password' className='' {...register('password')} type="password" />
                            {errors.password && <p className="text-red-500 mt-2 text-sm">Password must be at least 6 characters long.</p>}
                        </div>
                        <GradientButton className='w-full' bgClassName='text-lg md:text-xl mt-2' type="submit">Create account</GradientButton>
                    </form>
                    {/* <Button className='flex items-center gap-2 justify-center h-12 border-2 p-2 rounded-2xl border-black w-full active:scale-95 ease-in-out duration-150' onClick={() => handleGoogleLogin()}><img src={google} alt="" className='w-8 h-8' /><p className='text-base sm:text-[15px] lg:text-lg text-nowrap text-black font-medium'>SignUp with Google</p></Button> */}
                    <p className='text-center text-[#0000007D] pb-2'><span className=''>Already have an account ? </span><Link to={'/login'} className='text-black hover:underline text-nowrap'>Log in</Link></p>

                </div>
            </div>
            <div className='flex-1  m-3 rounded-br-[4rem] rounded-tl-[4rem] overflow-hidden relative bg-primary_100 p-[1px] hidden lg:block '>
                <div className='h-full w-full bg-white rounded-br-[3.91rem] rounded-tl-[3.91rem] flex flex-col justify-around items-center py-10'>
                    <img src={loginImg} alt="" className='mx-auto h-[450px]' />
                    <h1 className='gradient-text text-2xl lg:text-3xl font-medium text-center mt-8'>&quot;Empowering academic success,<br /> one assignment at a time.&quot;</h1>
                </div>
            </div>
            {isLoading && <Loader />}
        </section>
    )
}

export default SignUp
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GradientButton from './inputs/GradientButton'
import logo from '/assets/images/logo.jpg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { axiosInstance } from './utils/axios.instance'
import { toast } from 'react-toastify'

const resetPasswordSchema = z.object({
    email: z.string().email(),
    // password: z.string().min(6, "Password length must be greater than 6"),
    password: z.string().min(5, "Password length must be greater than 5").optional()
});
type FormFields = z.infer<typeof resetPasswordSchema>

const ResetPassword = () => {
    const [emailVerified, setEmailVerified] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const VerifyEmail = async (email: string) => {
        try {
            const res = await axiosInstance.get(`/auth/send-otp?email=${email}`)
            if (res.status === 200) {
                toast.success("otp sent")
                setEmailVerified(true);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async (values: FormFields) => {
        console.log(values)
        if (!emailVerified) {
            VerifyEmail(values.email)
        }
        else {
            try {
                setIsLoading(true)
                const { data } = await axiosInstance.patch(`/auth/reset-password`, {
                    email: values.email,
                    password: values.password,
                    otp: otp
                });
                if (data) {
                    reset();
                    setEmailVerified(false);
                    toast.success("Password change successfully")
                    navigate('/login')
                }
                else {
                    setError("Please try again later")
                }
            } catch (error) {
                console.error("Error:", error);
            }
            finally {
                setIsLoading(false)
            }
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                    alt="AssignmentNest"
                />
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Reset your password
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white bg-gradient-to-r from-purple-100 to-white/90 px-6 py-12 shadow sm:rounded-lg sm:px-12">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none px-2"
                                    {...register("email")}
                                    name="email"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                        </div>


                        <>{
                            emailVerified && <><div>
                                <label htmlFor="otp" className="block text-sm font-medium leading-6 mb-4 text-gray-900">
                                    Enter otp
                                </label>
                                <InputOTP maxLength={6} value={otp} onChange={(val) => setOtp(val)}>
                                    <InputOTPGroup className='flex justify-center w-full gap-2'>
                                        <InputOTPSlot index={0} className='shad-otp-slot' />
                                        <InputOTPSlot index={1} className='shad-otp-slot' />
                                        <InputOTPSlot index={2} className='shad-otp-slot' />
                                        <InputOTPSlot index={3} className='shad-otp-slot' />
                                        <InputOTPSlot index={4} className='shad-otp-slot' />
                                        <InputOTPSlot index={5} className='shad-otp-slot' />
                                    </InputOTPGroup>
                                </InputOTP>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                            </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Enter password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            {...register("password")}
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 sm:text-sm sm:leading-6 outline-none"
                                        />
                                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                                    </div>
                                </div></>
                        }
                        </>


                        <div>
                            <GradientButton
                                type="submit"
                                className='w-full mt-4'
                                disabled={isSubmitting}
                            >
                                {emailVerified ? "Reset Password" : "Verify Email"}
                            </GradientButton>
                        </div>
                    </form>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    <Link to={'/change-password'} className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                        Change Password
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default ResetPassword

import React from 'react'
import user from '/assets/images/abhinav.svg'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectCurrentUser } from '@/redux/slices/user.slice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { KeyRoundIcon } from 'lucide-react'
import { generateColor } from '../utils/generateColor'

const DashNavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logOut())
        toast.success("Logout Successfully")
        navigate('/')
    }
    const { userInfo } = useSelector(selectCurrentUser)
    const userName = userInfo?.name
    return (
        <div className='max-lg:hidden fixed xl:pl-56 py-4 w-full border-b border-gray-200 bg-white px-6 z-40'>
            <div className='flex items-center gap-2 justify-end '>
                <p>{userInfo?.name}</p>
                <article className='h-8 w-8 rounded-full flex items-center justify-center text-white' style={{ backgroundColor: generateColor(userName!.length) }}>
                    {userName![0]}
                </article>
                <Popover>
                    <PopoverTrigger><ChevronDownIcon className={'text-gray-800  size-4 shrink-0'} />
                    </PopoverTrigger>
                    <PopoverContent className='mr-2 mt-4 w-56'>
                        <div className='flex flex-col gap-2'>
                            <button onClick={handleLogout} className='flex items-center gap-2 active:text-red-500 ease-in-out duration-150'><ArrowLeftEndOnRectangleIcon className='size-5' />Log Out</button>
                            <button onClick={() => navigate('/change-password')} className='flex items-center gap-2 active:text-yellow-500 ease-in-out duration-150'><KeyRoundIcon className='size-5' />Change password</button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default DashNavBar
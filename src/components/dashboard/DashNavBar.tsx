import React from 'react'
import user from '/assets/images/abhinav.svg'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { logOut } from '@/redux/slices/user.slice'
import { toast } from 'react-toastify'

const DashNavBar = () => {
    const dispatch =useDispatch();
   const handleLogout=()=>{
       dispatch(logOut())
       toast.success("Logout Successfully")
   }
    return (
        <div className='max-lg:hidden fixed xl:pl-72 py-4 w-full border-b border-gray-200 bg-white px-6'>
            <div className='flex items-center gap-2 justify-end '>
                <p>Jack</p>
                <img src={user} className='rounded-full size-8' />
                <Popover>
                    <PopoverTrigger><ChevronDownIcon className={'text-gray-800  size-4 shrink-0'} />
                    </PopoverTrigger>
                    <PopoverContent className='mr-2 mt-4 w-40'>
                        <div className='flex flex-col'>
                            <button onClick={handleLogout} className='flex items-center gap-2 active:text-red-500 ease-in-out duration-150'><ArrowLeftEndOnRectangleIcon className='size-5' />Log Out</button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default DashNavBar
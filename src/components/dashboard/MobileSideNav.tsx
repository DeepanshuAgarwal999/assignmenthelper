import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { navigation, teams } from '../../constants/dashboard/navigation'
import { classNames } from './LeftSidebar'
import { ArrowLeftEndOnRectangleIcon, Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '/assets/images/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectCurrentUser } from '@/redux/slices/user.slice'
import { toast } from 'react-toastify'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { KeyRoundIcon } from 'lucide-react'
import { generateColor } from '../utils/generateColor'


const MobileSideNav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logOut())
        toast.success("Logout Successfully")
        navigate('/')
    }
    const { userInfo } = useSelector(selectCurrentUser)
    const userName = userInfo?.name
    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-[240px] flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-4">
                                        <button type="button" className="-m-3.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                    <div className="flex h-14 shrink-0 items-center  pt-4">
                                        <Link to='/dashboard'><img src={Logo} alt="assignmentHelper" className='w-28' /></Link>
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <NavLink
                                                                to={item.href}
                                                                end={item.href === '/dashboard'}
                                                                className={({ isActive }) =>
                                                                    classNames(
                                                                        isActive ? 'bg-gray-50 text-purple-500' : 'text-gray-700 hover:text-purple-500 hover:bg-gray-50',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )
                                                                }
                                                            >
                                                                {({ isActive }) => (
                                                                    <>
                                                                        <item.icon
                                                                            className={classNames(
                                                                                isActive ? 'text-purple-500' : 'text-gray-400 group-hover:text-purple-500',
                                                                                'h-6 w-6 shrink-0'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                        {item.name}
                                                                    </>
                                                                )}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            {/* <li>
                                                <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                                <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                    {teams.map((team) => (
                                                        <li key={team.name}>
                                                            <a
                                                                href={team.href}
                                                                className={classNames(
                                                                    team.current
                                                                        ? 'bg-gray-50 text-purple-500'
                                                                        : 'text-gray-700 hover:text-purple-500 hover:bg-gray-50',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                )}
                                                            >
                                                                <span
                                                                    className={classNames(
                                                                        team.current
                                                                            ? 'text-purple-500 border-purple-500'
                                                                            : 'text-gray-400 border-gray-200 group-hover:border-purple-500 group-hover:text-purple-500',
                                                                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                                    )}
                                                                >
                                                                    {team.initial}
                                                                </span>
                                                                <span className="truncate">{team.name}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="sticky top-0 z-40 flex items-center gap-x-2 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
                <p className='text-sm'>{userName}</p>
                <article className='h-8 w-8 rounded-full flex items-center justify-center text-white' style={{ backgroundColor: generateColor(userName!.length) }}>
                    {userName![0]}
                </article>
                <Popover >
                    <PopoverTrigger><ChevronDownIcon className={'text-gray-800  size-4 shrink-0'} />
                    </PopoverTrigger>
                    <PopoverContent className='mr-2 mt-4 w-56 lg:hidden'>
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

export default MobileSideNav
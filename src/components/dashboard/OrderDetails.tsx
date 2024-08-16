import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { OrderStatus, TypeOrderDetails, formatDate } from '../table/DashboardOrderTable';
import { Textarea } from '../ui/textarea';
import { convertTimestampToDate } from '@/lib/utils';
import DashboardLoader from '../shared/DashboardLoader';

import { axiosInstance } from '../utils/axios.instance';
import TimeLine from './TimeLine';
import PaymentDetails from './PaymentDetails';
import Solution from './Solution';

const OpenQuery = () => {
    const { customerId, id } = useParams()
    const navigate = useNavigate();
    const [query, setQuery] = useState<TypeAssignment | null>(null)
    const [order, setOrder] = useState<TypeOrderDetails | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!id || !customerId) {
            navigate('/dashboard')
            return;
        }
        else {
            (async () => {
                try {
                    setIsLoading(true)
                    const { data } = await axiosInstance.get(`/customer/${customerId}/get-query/${id}`)
                    if (data) {
                        setQuery(data.data)
                    }
                } catch (error) {
                    console.log(error)
                }
                finally {
                    setIsLoading(false)
                }
            })()
        }
        (async () => {
            try {
                setIsLoading(true)
                const { data } = await axiosInstance.get(`/customer/${id}/get-order/${customerId}`)
                if (data) {
                    setOrder(data.data)
                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        })()
    }, [])
    console.log(query)

    if (isLoading) {
        return <DashboardLoader />
    }


    return (
        <section className='bg-gray-50'>
            <div className='flex justify-between gap-6 flex-col md:flex-row  p-4'>
                <div className="-mx-4 px-4 py-8 flex-1 shadow-sm ring-1 bg-white ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
                    <h2 className="text-lg font-semibold leading-6 text-gray-900">Order Details</h2>
                    <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                        <div className="sm:pr-4">
                            <dt className="inline text-gray-500">Created on</dt>{' '}
                            <dd className="inline text-gray-700">
                                <time dateTime="2023-23-01">{query?.create_time && convertTimestampToDate(query?.create_time)}</time>
                            </dd>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:pl-4">
                            <dt className="inline text-gray-500">Deadline</dt>{' - '}
                            <dd className="inline text-gray-700">
                                <time dateTime="2023-31-01">{query?.deadline && formatDate(query?.deadline)}</time>
                            </dd>
                        </div>
                        <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                            <dt className="font-semibold text-gray-900">Subject</dt>
                            <dd className="mt-2 text-gray-500">
                                name - {query?.subject}
                                <br />
                                <span>{query?.type}</span> - {query?.pageOrWord}
                                <br />
                                Reference - {query?.reference}
                                <br />
                                {query?.file_name && <p>file - </p> && query?.file_name}
                            </dd>
                        </div>
                        <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6 text-gray-900">
                            <dt className="font-semibold text-gray-900">Contact Details</dt>
                            <dd className="mt-2 truncate">
                                <span className="font-medium ">Phone - </span>
                                {query?.phone}
                                <br />
                                Email - {query?.customer_email}
                            </dd>
                        </div>
                    </dl>
                    <Textarea value={query?.description} readOnly className='outline-none mt-8 border-gray-100 focus:border-gray-50 min-h-[100px]' />

                </div>
                <div className='w-80 mx-auto flex flex-col gap-4'>
                    {order && <PaymentDetails order={order} />}
                    {order?.order_status === 'COMPLETED' && <Solution order={order} />}
                </div>
            </div>
            {order && <TimeLine order={order} />}
        </section>
    )
}

export default OpenQuery
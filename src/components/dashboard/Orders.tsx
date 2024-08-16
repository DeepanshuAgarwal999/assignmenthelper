import React from 'react'
import { DashBoardOrderTable } from '../table/DashboardOrderTable'
import useGetOrders from '../hooks/useGetOrders'
import DashboardLoader from '../shared/DashboardLoader';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

    const { isLoading, response: orders } = useGetOrders();
    const navigate = useNavigate()
    console.log(orders)
    if (isLoading) {
        return <DashboardLoader />
    }
    return (
        <>
            {/* <DashBoardOrderTable data={orders} /> */}
            <section className='max-w-5xl mx-auto'>
                <h1 className='text-xl font-semibold'>Your Orders</h1>
                <p className='font-light text-gray-500 text-sm'>Check the status of recent orders</p>
                <div className='space-y-10 max-h-[460px] custom-scrollbar overflow-y-auto pr-5 rounded-md  mt-8'>
                    {
                        orders.length !== 0 && orders.map((order) => (
                            <article key={order.order_id} >
                                <header className='flex items-center gap-6 justify-between pb-2'>
                                    <div className='flex items-center gap-6'>
                                        <h1 className=''>Order #{order.order_id}
                                        </h1>
                                        <p className='text-gray-500 text-sm'>Ordered on {new Date(order.order_datetime * 1000).toDateString()}</p>
                                    </div>
                                    <div>
                                        <button className='text-purple-500 font-medium text-sm' onClick={() => navigate(`/dashboard/customer/${order.customer_id}/order/${order.query_id}`)}>View details</button>
                                    </div>
                                </header>
                                <hr />
                                <div className='mt-2  flex justify-between'>
                                    <p className='text-sm'> Order Status - {order.order_status}</p>
                                    <p>Total Amount - ${order.amount}.00</p>
                                </div>


                            </article>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Orders
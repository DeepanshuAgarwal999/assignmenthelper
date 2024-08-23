import React, { useEffect, useState } from 'react'
import { TypeOrderDetails } from '../table/DashboardOrderTable'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { axiosInstance } from '../utils/axios.instance';
import { Button } from '../ui/button';
import { fetchService } from '../utils/fetch.service';

declare interface Payment {
    id: string;
    paypalId: string;
    amount: number;
    active: boolean;
    payment_status: 'PAYER_ACTION_REQUIRED' | 'COMPLETED' | 'PENDING' | 'FAILED';
    payment_date: Date | null;
    approve_link: string;
    capture_link: string;
    payer_id: string | null;
    create_time: number;
    update_time: number;
}

const PaymentDetails = ({ order }: { order: TypeOrderDetails }) => {
    const [payment, setPayment] = useState<Payment[] | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axiosInstance.get(`customer/${order.customer_id}/get-payments/${order.order_id}`)
                setPayment(data.data)
            } catch (error) {

            }
        })()
    }, [])
   

    const handlePayment = async (paymentId: string) => {
        try {
            await axiosInstance.get(`/customer/pay-now/${paymentId}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card >
            <CardHeader>
                <CardTitle>
                    Billing Summary
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:px-6 lg:gap-x-8 lg:px-8 lg:py-8">


                        <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
                            <div className="flex items-center justify-between pb-4">
                                <dt className="text-gray-600">Subtotal</dt>
                                <dd className="font-medium text-gray-900">${order?.amount}</dd>
                            </div>


                            <div className="flex items-center justify-between pt-4">
                                <dt className="font-medium text-gray-900">Order total</dt>
                                <dd className="font-medium text-purple-600">${order?.amount}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='flex justify-center gap-4'>
                {payment && payment.length !== 0 && payment.map((item) => (
                    <div key={item.id}>
                        <Button className='disabled:bg-emerald-500 disabled:pointer-events-none disabled:text-white' variant={'outline'} onClick={() => handlePayment(item.id)} disabled={!item.active}>Pay ${item.amount}</Button>
                    </div>
                ))}
            </CardFooter>
        </Card>
    )
}

export default PaymentDetails
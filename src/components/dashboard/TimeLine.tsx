import React from 'react'
import { TypeOrderDetails } from '../table/DashboardOrderTable'
import { cn } from '../utils/cn'

const TimeLine = ({ order }: { order: TypeOrderDetails }) => {
    enum OrderStatus {
        UNQUOTED = 0,
        QUOTED = 1,
        CREATED = 2,
        PROCESSING = 3,
        ASSIGNED = 4,
        UPLOADED = 5,
        COMPLETED = 6,
        REWORK = 7,
        CANCELLED = 8,
        REFUNDED = 9,
    }
    const currentStatus = OrderStatus[order.order_status];
    return (
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
            <h4 className="sr-only">Status</h4>
            <p className="text-sm font-medium text-gray-900">
                Order placed on <time dateTime={new Date(order.order_datetime * 1000).toDateString()}>{new Date(order.order_datetime * 1000).toDateString()}</time>
            </p>
            <div className="mt-6" aria-hidden="true">
                {![OrderStatus.CANCELLED, OrderStatus.REFUNDED, OrderStatus.REWORK].includes(currentStatus) && <div className="overflow-hidden rounded-full bg-gray-200">
                    <div
                        className="h-2 rounded-full bg-purple-600"
                        style={{ width: `calc((${currentStatus} * 2 + 1) / 13 * 100%)` }}// add logic here
                    />
                </div>}
                {currentStatus === OrderStatus.CANCELLED && <p>Your order has been Cancelled</p>}
                {currentStatus === OrderStatus.REFUNDED && <p>Your order has been Refunded</p>}
                {currentStatus === OrderStatus.REWORK && <p>Your order is in Rework</p>}

                {![OrderStatus.CANCELLED, OrderStatus.REFUNDED, OrderStatus.REWORK].includes(currentStatus) &&
                    <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                        <div className="text-purple-600">Query created</div>
                        <div className={cn(currentStatus >= OrderStatus.QUOTED ? 'text-purple-600' : '', 'text-center')}>
                            Order placed
                        </div>
                        <div className={cn(currentStatus >= OrderStatus.ASSIGNED ? 'text-purple-600' : '', 'text-right')}>
                            Writer assigned
                        </div>

                        <div className={cn(currentStatus === OrderStatus.COMPLETED ? 'text-purple-600' : '', 'text-right')}>
                            Completed
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default TimeLine
import React from 'react'
import { DashBoardOrderTable } from '../table/DashboardOrderTable'
import useGetOrders from '../hooks/useGetOrders'
import DashboardLoader from '../shared/DashboardLoader';

const Orders = () => {

    const { isLoading, response } = useGetOrders();
    console.log(response)
    if (isLoading) {
        return <DashboardLoader />
    }
    return (
        <>
            <DashBoardOrderTable data={response} />
        </>
    )
}

export default Orders
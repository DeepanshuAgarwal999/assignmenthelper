import React, { useEffect, useState } from 'react'
import DataTableBase from '../table/DataTableBase'
import { TableColumn } from 'react-data-table-component';
import { axiosInstance } from '../utils/axios.instance';
import Loader from '../shared/Loader';
import GradientButton from '../inputs/GradientButton';
import Modal from '../inputs/Modal';
import CreatePayment from './CreatePayment';
import { Link } from 'react-router-dom';

type DataRow = {
    orderId: string,
    description: string,
    order_name: string,
    customer_id: string,
    order_type: string,
    order_status: string,
    order_datetime: string,
    modification_datetime: string
}
const OrderTable = () => {
    const columns: TableColumn<DataRow>[] = [
        {
            name: "orderId",
            // selector: (row) => row.orderId,
            sortable: true,
            cell: (row) => <button className='h-10 text-sm px-2 my-2 w-fit text-nowrap'><Link to={`/admin/order-payment/${row.orderId}`}>{row.orderId}</Link></button>,
            ignoreRowClick: false,
            allowOverflow: true,
        },
        {
            name: "description",
            // width: "10%",
            selector: (row) => row.description,
            sortable: true,
        },
        {
            name: "order_name",
            selector: (row) => row.order_name,
            sortable: true,
        },
        // {
        //     name: "customer_id",
        //     width: "10%",
        //     selector: (row) => row.customer_id,
        //     sortable: true,
        // },
        {
            name: "order_type",
            selector: (row) => row.order_type,
            sortable: true,

        },

        {
            name: "order_datetime",
            selector: (row) => row.order_datetime,
            sortable: true,
        }, {
            name: "order_status",
            selector: (row) => row.order_status,
            sortable: true,
        },
        // {
        //     name: "modification_datetime",
        //     selector: (row) => row.modification_datetime,
        //     sortable: true,
        // },
        {
            name: 'Actions',
            grow: 1,
            cell: (row) => <GradientButton className='h-10 text-sm px-2 my-2 w-fit text-nowrap' onClick={() => createPayment(row.orderId)}>Create Payment</GradientButton>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "15%"
        },
    ];
    const [isOrderModal, setIsOrderModal] = useState<boolean>(false)
    const setOrderModalOpen = () => setIsOrderModal(true)
    const setOrderModalClose = () => setIsOrderModal(false)
    const [orders, setOrders] = useState([])
    const [pending, setPending] = useState<boolean | undefined>(false)
    const [paymentId, setPaymentId] = useState<string>("")

    const createPayment = (id: string): void => {
        if (id) {
            setPaymentId(id)
            setOrderModalOpen()
        }
    }


    useEffect(() => {
        console.log(orders);

        const fetchUsersWithQuery = async () => {
            setPending(true)
            try {
                const { data } = await axiosInstance.get('/order/get')
                if (data) {
                    console.log(data);
                    setOrders(data.data)
                }
                console.log(data);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setPending(false)
            }
        }
        fetchUsersWithQuery()
    }, [])

    if (pending) {
        return <Loader />
    }
    if (orders.length === 0) {
        return <div className='flex items-center justify-center text-3xl font-semibold h-screen'>No orders to display</div>
    }
    return (
        <div className='px-4'>
            <h1 className='gradient-text text-3xl sm:text-4xl font-semibold py-10 text-center tracking-wider'>All Orders</h1>
            <DataTableBase
                columns={columns}
                data={orders}
                // actions={actionsMemo}
                progressPending={pending}
                progressComponent={<Loader />}
                responsive={true}
                striped
                fixedHeaderScrollHeight='100px'
            />
            <Modal isOpen={isOrderModal} onClose={setOrderModalClose}>
                <CreatePayment id={paymentId} />
            </Modal>
        </div>
    )
}

export default OrderTable
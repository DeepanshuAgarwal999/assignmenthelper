import React, { useEffect, useState } from 'react'
import Stepper from './Stepper'
import Modal from '../inputs/Modal'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../utils/axios.instance'

const ViewStatus = ({ orderId }: { orderId: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const navigate = useNavigate();

    const modalClose = () => {
        setIsOpen(false)
        navigate('/dashboard')
    }
    if (!orderId) {
        navigate('/dashboard');
        return null
    }
    useEffect(() => {
        const getStatus = async () => {
            const { data } = await axiosInstance.get("/")
            
        }
    }, [orderId])
    return (
        <Modal isOpen={isOpen} onClose={modalClose}>
            <div className='p-10'>
                <Stepper />
            </div>
        </Modal>
    )
}

export default ViewStatus
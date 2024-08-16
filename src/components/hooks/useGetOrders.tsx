// useData.ts
import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axios.instance';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/slices/user.slice';
import { TypeOrderDetails } from '../table/DashboardOrderTable';

const useGetOrders = () => {
    const [response, setResponse] = useState<TypeOrderDetails[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { userInfo } = useSelector(selectCurrentUser);
    useEffect(() => {

        (async () => {
            try {
                setIsLoading(true);
                const { data } = await axiosInstance.get(`/customer/get-orders/${userInfo?.accountId}`);
                if (data) {
                    setResponse(data.data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })()
    }, []);

    return { response, isLoading };
};

export default useGetOrders;

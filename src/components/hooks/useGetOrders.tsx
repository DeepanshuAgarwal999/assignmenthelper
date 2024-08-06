// useData.ts
import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axios.instance';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/slices/user.slice';
import { RootState } from '@/redux/Store';
import { setOrders } from '@/redux/slices/query.slice';
import { TypeOrderDetails } from '../table/DashboardOrderTable';

const useGetOrders = () => {
    const [response, setResponse] = useState<TypeOrderDetails[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { userInfo } = useSelector(selectCurrentUser);
    const { allOrders } = useSelector((state: RootState) => state.queries)
    const dispatch = useDispatch()
    useEffect(() => {
        if (allOrders && allOrders.length !== 0) {
            setResponse(allOrders)
        }
        else {
            (async () => {
                try {
                    setIsLoading(true);
                    const { data } = await axiosInstance.get(`/customer/get-orders/${userInfo?.accountId}`);
                    if (data) {
                        setResponse(data.data);
                        dispatch(setOrders(data.data))
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            })()
        }
    }, []);

    return { response, isLoading };
};

export default useGetOrders;

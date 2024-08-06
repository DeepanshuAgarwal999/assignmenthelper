// useData.ts
import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axios.instance';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/slices/user.slice';
import { RootState } from '@/redux/Store';
import { toast } from 'react-toastify';
import { setQueries } from '@/redux/slices/query.slice';

const useGetQueries = () => {
    const [response, setResponse] = useState<TypeAssignment[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { userInfo } = useSelector(selectCurrentUser);
    const { allQueries } = useSelector((state: RootState) => state.queries)
    const dispatch = useDispatch()
    useEffect(() => {
        if (allQueries && allQueries.length !== 0) {
            setResponse(allQueries)
        }
        else {
            (async () => {
                try {
                    setIsLoading(true);
                    const { data } = await axiosInstance.get(`/customer/get-queries/${userInfo?.accountId}`);
                    if (data) {
                        setResponse(data.data);
                        dispatch(setQueries(data.data))
                    }
                } catch (error) {
                    console.log(error);
                    toast.error("User id missing or invalid")
                } finally {
                    setIsLoading(false);
                }
            })()
        }
    }, []);

    return { response, isLoading };
};

export default useGetQueries;

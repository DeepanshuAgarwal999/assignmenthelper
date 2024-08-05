import React, { useEffect, useState } from 'react';
import { DashBoardTable } from '../table/DashBoardTable';
import { axiosInstance } from '../utils/axios.instance';
import { selectCurrentUser } from '@/redux/slices/user.slice';
import { useSelector } from 'react-redux';
import DashboardLoader from '../shared/DashboardLoader';
import { useSearchParams } from 'react-router-dom';
import ViewStatus from './ViewStatus';

const Student = () => {
  const [response, setResponse] = useState<TypeAssignment[] | []>([]);
  const { userInfo } = useSelector(selectCurrentUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParam] = useSearchParams();
  const status = searchParam.get("view_status")
  const orderId = searchParam.get("orderId")

  useEffect(() => {
    if (!userInfo?.accountId || response.length > 0) {
      return;
    }

    const getQuery = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(`/customer/get-queries/${userInfo?.accountId}`);
        if (data) {
          setResponse(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getQuery();
  }, [userInfo?.accountId, response.length]);
  console.log(response)

  if (isLoading) {
    return <DashboardLoader />;
  }


  return (
    <div className='w-full'>
      <DashBoardTable data={response} />
      {status && orderId && <ViewStatus orderId={orderId} />}
    </div>
  );
};

export default Student;

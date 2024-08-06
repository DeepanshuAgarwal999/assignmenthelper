import React, { useEffect, useState } from 'react';
import DashboardLoader from '../shared/DashboardLoader';
import { useSearchParams } from 'react-router-dom';
import ViewStatus from './ViewStatus';
import { DashBoardTable } from '../table/DashBoardQueryTable';
import useGetQuery from '../hooks/useGetQueries';

const Student = () => {

  const [searchParam] = useSearchParams();
  const status = searchParam.get("view_status")
  const orderId = searchParam.get("orderId")
  const [studentQuery, setStudentQuery] = useState<TypeAssignment | null>(null);

  const { response: queries, isLoading } = useGetQuery();

  console.log(queries)
  if (isLoading) {
    return <DashboardLoader />;
  }


  return (
    <>
      <DashBoardTable data={queries} />
      {/* {status && orderId && <ViewStatus orderId={orderId} />} */}
    </>
  );
};

export default Student;

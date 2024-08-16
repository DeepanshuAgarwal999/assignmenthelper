import DashboardLoader from '../shared/DashboardLoader';
import useGetQuery from '../hooks/useGetQueries';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const Student = () => {

  const { response: queries, isLoading } = useGetQuery();
  console.log(queries)
  if (isLoading) {
    return <DashboardLoader />;
  }

  return (
    <section>
      <h1 className='text-xl font-semibold pb-4'>
        Quoted
      </h1>
      <div className='space-y-4 max-h-[500px] custom-scrollbar overflow-y-auto p-3 rounded-md border'>
        {/* <DashBoardTable data={queries} /> */}
        {
          queries.length !== 0 && queries.map((assignment) => (
            <div key={assignment.id} >
              <Card className='hover:shadow-lg rounded-md p-2 text-sm  transition-all ease-in-out duration-300 '  >
                <CardTitle className='capitalize flex items-center justify-between'>
                  <p>{assignment.assignment_name}</p>
                  <p>Deadline - {new Date(assignment.deadline).toDateString()}</p>
                </CardTitle>
                <div className='p-2 flex items-center justify-between text-gray-500 gap-4'>
                  <div>
                    <p>Subject - <span className='capitalize text-gray-900'>{assignment.subject}</span></p>
                    <p>
                      {assignment.type} - <span className='text-gray-900'>{assignment.pageOrWord}</span>
                    </p>
                    <p>
                      Reference - <span className='text-gray-900'>{assignment.reference}</span>
                    </p>

                  </div>
                  <div>
                    <p className='text-gray-500'>Issued at - <span className='text-gray-900'>{new Date(assignment.create_time * 1000).toLocaleString()}</span></p>
                  </div>
                </div>
              </Card>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Student;

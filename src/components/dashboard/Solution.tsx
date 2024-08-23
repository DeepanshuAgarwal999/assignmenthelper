import React, { useState } from 'react'
import { fetchService } from '../utils/fetch.service';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import GradientButton from '../inputs/GradientButton';
import { TypeOrderDetails } from '../table/DashboardOrderTable';
import { axiosInstance } from '../utils/axios.instance';

const Solution = ({ order }: { order: TypeOrderDetails }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleFileDownload = async () => {
        // if (!fileName) return;
        try {
            setIsLoading(true)
            const response = await axiosInstance.get(`/customer/download-solution/${order.order_id}`, {
                responseType: "blob"
            })


            const blob = response.data;
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'query.pdf'; // You can set the file name here
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(downloadUrl);
            // console.log(data)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }

    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Solution
                </CardTitle>
            </CardHeader>
            <CardContent className='text-sm italic '>
                &quot; Thank you for choosing us! We’re grateful for your support and hope you enjoy your experience. &quot;
            </CardContent>
            <CardFooter>
                <GradientButton className='w-full' onClick={handleFileDownload} disabled={isLoading} bgClassName='disabled:opacity-65' >Download Solution</GradientButton>
            </CardFooter>
        </Card>
    )
}

export default Solution
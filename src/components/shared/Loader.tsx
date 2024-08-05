import React, { useEffect } from 'react'
import { cn } from '../utils/cn'

const Loader = ({ className }: { className?: string }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = "none"
        // document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.pointerEvents = "auto"

        };
    }, []);
    return (
        <div className={cn('fixed flex justify-center items-center h-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-white   z-[1000] w-full', className)}>
            <div className={"loader z-50"}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>

    )
}

export default Loader
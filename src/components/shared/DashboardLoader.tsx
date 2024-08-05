import React from 'react'

const DashboardLoader = () => {
    return (
        <div className='fixed inset-0 flex items-center justify-center w-full left-16  '><div className={"loader z-50"}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div></div>
    )
}

export default DashboardLoader
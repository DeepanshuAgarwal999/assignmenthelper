import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bgClassName?: string;
    children?: React.ReactNode;
    className?: string
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, bgClassName, className, ...props }) => {
    return (
        <button
            className={cn(`bg-primary_100 hover:bg-none h-12 group px-4 rounded-xl duration-300 ease-in transition-all text-primary shadow-btn_shadow hover:shadow-none hover:border border-primary-100 active:scale-95 disabled:pointer-events-none disabled:bg-gray-300 disabled:animate-none`, bgClassName)}
            {...props}
        >
            <span className={cn(`group-hover:text-transparent group-hover:bg-clip-text duration-200 ease-in group-hover:bg-primary_100 ${className}`)}>{children}</span>
        </button>
    );
};

export default GradientButton;

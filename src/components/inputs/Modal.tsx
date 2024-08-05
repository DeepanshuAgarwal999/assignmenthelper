import React, { useEffect, ReactNode } from 'react';
import './Modal.css';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <article className="modal-overlay">
            <div className="modal-content ">
                <button className="close-button text-secondary-foreground active:scale-95" onClick={onClose}><X /></button>
                {children}
            </div>
        </article>
    );
};

export default Modal;

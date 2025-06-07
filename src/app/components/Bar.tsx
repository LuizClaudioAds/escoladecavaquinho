import React from 'react';

interface NotificationBarProps {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    onClose?: () => void;
}

const typeColors = {
    success: '#4caf50',
    error: '#f44336',
    info: '#2196f3',
    warning: '#ff9800',
};

export const NotificationBar: React.FC<NotificationBarProps> = ({
    message,
    type = 'info',
    onClose,
}) => {
    return (
        <div
            style={{
                background: typeColors[type],
                color: '#fff',
                padding: '12px 24px',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            role="alert"
        >
            <span>{message}</span>
            {onClose && (
                <button
                    onClick={onClose}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        fontSize: '20px',
                        cursor: 'pointer',
                        marginLeft: '16px',
                    }}
                    aria-label="Fechar notificação"
                >
                    &times;
                </button>
            )}
        </div>
    );
};

export default NotificationBar;
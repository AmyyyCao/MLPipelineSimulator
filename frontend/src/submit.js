// submit.js
import React, { useState } from 'react';

export const SubmitButton = ({ onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            await onSubmit();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button type="submit" onClick={handleSubmit} disabled={isLoading} style={{
            cursor: 'pointer', backgroundColor: '#343541',
            borderRadius: '5px',
            color: '#fff',
            fontSize: '10px'
        }}>
            {isLoading ? 'Submitting...' : 'Submit'}
        </button>
    );
}

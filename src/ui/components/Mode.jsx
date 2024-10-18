import React, { useState, useEffect } from 'react'; 

const Mode = () => {
    //hooks
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black'; 
        document.body.style.color = theme === 'light' ? 'black' : 'white';
    }, [theme]); 
//funciones
    const activateLightMode = () => {
        setTheme('light'); 
    };

    const activateDarkMode = () => {
        setTheme('dark'); 
    };

    return (
        <div>
            <button 
                onClick={activateLightMode} 
                style={{
                    padding: '10px', 
                    marginRight: '10px', 
                    backgroundColor: '#f0f0f0',
                    color: '#333', 
                    border: '1px solid #333', 
                    borderRadius: '5px', 
                    cursor: 'pointer'
                }}
            >
                Modo Claro
            </button>
            <button 
                onClick={activateDarkMode} 
                style={{
                    padding: '10px', 
                    backgroundColor: '#333', 
                    color: '#f0f0f0', 
                    border: '1px solid #fff',
                    borderRadius: '5px',
                }}
            >
                Modo Oscuro
            </button>
        </div>
    );
};

export default Mode; 

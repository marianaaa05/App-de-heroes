import { Link, NavLink, useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import Mode from './Mode'; 
import Avatar from './Avatar'; 

export const Navbar = () => {

    //hook avatar
    const [selectedAvatar, setSelectedAvatar] = useState('/avatar1.png');
    const navigate = useNavigate(); 
    
    //evento de logout
    const onLogout = () => {
        navigate('/login', { replace: true }); 
    };

    return (
        <nav
            className="navbar navbar-expand-sm"
            style={{
                background: 'linear-gradient(45deg, #EE0E0E, #6CB6F4)',
                padding: '35px', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.9)', 
            }}
        >
            {/* titulo */}
            <Link
                className="navbar-brand" 
                to="/" 
                style={{ 
                    fontSize: '28px', 
                    fontFamily: 'rozha one', 
                    color: '#fff', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    marginRight: '20px',
                     
                }}
            >
                <img
                    src="public/heroes.png" 
                    alt="Imagen Super Heroes"
                    style={{
                        width: '150px', 
                        marginRight: '20px',
                    }}
                />
                Héroes de Marvel y DC
            </Link>

             {/* enlaces de navegación */}
            <div className="navbar-collapse bg-light " style={{borderRadius:'10px', marginLeft: '40px'}}> {/* Contenedor para los elementos de la navbar */}
                <div className="navbar-nav ">
            
                    {['marvel', 'dc', 'hero'].map((route) => (
                        <NavLink
                            key={route} 
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} // Clases condicionales para el enlace activo
                            to={`/${route}`} 
                            style={{ color: '#f43', fontFamily: '-moz-initial', margin: '15px', marginLeft: '30px', fontSize: '20px', height: '10px', width: '100px' }} // Estilo de los enlaces
                        >
                            {route.charAt(0).toUpperCase() + route.slice(1)} 
                        </NavLink>
                    ))}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto" style={{ display: 'flex', alignItems: 'center' }}>

                    {/*componente Avatar*/}
                    <Avatar selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar} />
                     
                     {/* logout */}
                    <button
                        className='nav-item nav-link btn' 
                        onClick={onLogout} 
                        style={{
                            color: '#fff', 
                            backgroundColor: '#e63946', 
                            border: '1px solid #fff', 
                            borderRadius: '5px', 
                            transition: 'background-color 0.3s', 
                            marginRight: '50px', 
                        }}
                    >
                        Salir
                    </button>

                    <Mode /> 

                </ul>
                
            </div>
            
        </nav>
        
    );
};

const avatars = [
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png',
    '/avatar4.png',
    '/avatar5.png',
    '/avatar6.png',
];
//recibe props
const Avatar = ({ selectedAvatar, setSelectedAvatar }) => {
    // actualizar
    const handleAvatarChange = (avatar) => {
        setSelectedAvatar(avatar);
    };

    return (
        <div className="dropdown" style={{ marginRight: '20px' }}>
            <button
                className="btn btn-secondary dropdown-toggle" 
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Elige tu avatar
            </button>

            {/* configura menu */}
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {avatars.map((avatar, index) => (
                    <li key={index}>
                        <button className="dropdown-item" onClick={() => handleAvatarChange(avatar)}>
                            Avatar {index + 1} 
                        </button>
                    </li>
                ))}
            </ul>

            {/* mostrar */}
            <img
                src={selectedAvatar} 
                alt="elige un avatar"
                style={{
                    borderRadius: '50%', 
                    width: '50px', 
                    height: '50px',
                    marginLeft: '10px',
                }}
            />
        </div>
    );
};

export default Avatar; 

import { CiLogout } from "react-icons/ci";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
    const { loading, logout } = useLogout(); // Destructure correctly

    return (
        <div className='mt-auto'>
            {!loading ? (
                <CiLogout 
                    className='w-10 h-10 mb-5 text-white cursor-pointer'
                    onClick={logout}
                />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    );
};

export default LogoutButton;

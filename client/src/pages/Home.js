import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = ( { isLoggedIn, path } ) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn) navigate('/login');
    }, [isLoggedIn, navigate])
    
}

export default Home;
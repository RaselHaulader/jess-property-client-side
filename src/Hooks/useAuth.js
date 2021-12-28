import useFirebase from '../Hooks/useFirebase';

const useAuth = () => {
    const allAuth = useFirebase()
    return allAuth
};

export default useAuth;
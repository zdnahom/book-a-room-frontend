import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// if the user is in the redux store, then they can access the component
// if the user is not in the redux store, then they are redirected to the login page

const Protected = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (user.user) {
    return children;
  }
  return <Navigate to="/login" />; // can use useNavigate() hook as well
};

export default Protected;

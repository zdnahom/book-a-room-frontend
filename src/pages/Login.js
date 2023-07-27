import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../redux/reducers/user';

const Login = () => {
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (user.user) {
      navigate('/');
    }
  }, [user]);

  if (user.loading) {
    return (
      <section className="vh-100 bg-white animate-pulse flex justify-center items-center w-full">
        <div className="container h-[70vh] bg-slate-400 rounded-2xl" />
      </section>
    );
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleLogin}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          src="/logo_transparent.png"
                          alt="login form"
                          className=" w-48 h-48 md:hidden"
                        />
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="text-black p-2 border border-slate-300/50 rounded-md w-full"
                          value={email}
                          placeholder="Enter your email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="text-black p-2 border border-slate-300/50 rounded-md w-full"
                          value={password}
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="hover:text-white font-thin text-center p-2 shadow-lg w-full rounded-md hover:bg-black"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Don&apos;t have an account?
                        <Link to="/signup" className="mx-1">
                          Register here
                        </Link>
                      </p>
                      <a href="#!" className="small text-muted mx-1">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted mx-1">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

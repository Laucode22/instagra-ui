import { useContext, useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';
import { loginSchema } from './login.schema';
import './Login.scss';
import camera from './camera.jpg';
import { UserService } from '../services/user.service';
import { UserContext } from '../user-context';

function Login() {
	const history = useHistory();
	const { setUser } = useContext(UserContext);
	const [showError, setShowError] = useState(false);

	async function submit(values) {
		setShowError(false);

		const res = await UserService.login(values);
		 if (res.status !== 200){
			 setShowError(true);
			 return;
		 }
		 const json = await res.json();
		 Cookies.set('instagram-user', json.token, { expires: 30 });
		 const user = await UserService.me();
		 setUser(user);
         history.push('/');
	}
	return (
		<div className="Login d-flex justify-content-center align-items-center text-start container-login">
			<div className="photo-register">
                <img className="camera"src={camera} alt="camera"/>
            </div>
			<div className="login">
				<h2>Login</h2>
				<Formik
					initialValues={{username: '', password: ''}}
					validationSchema={loginSchema}
					onSubmit={submit}>
					{({ isSubmitting }) => (
						<Form noValidate>
							{ showError && <div className="alert alert-danger">
								Invalid username or password
							</div> }
							<div className="form-group my-3">
								<label htmlFor="username">Username</label>
								<Field className="form-control" id="username" name="username" />
								<ErrorMessage component="small" name="username" className="text-danger"  />
							</div>
							<div className="form-group my-3">
								<label htmlFor="password">Password</label>
								<Field type="password" className="form-control" name="password" id="password" />
								<ErrorMessage component="small" name="password" className="text-danger" />
							</div>
							<div className="d-grid gap-2  text-right">
                                <button type = "submit"className="btn btn-dark btn btn-primary" disabled={isSubmitting} >Login</button>
							</div>
							<hr className="mt-4" />
							<div className="text-center">
								Don't have an account? <Link to="/register" className="link-dark">Register</Link>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Login;
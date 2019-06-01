import Head from 'next/head'
import TopNavBar from '../components/top-nav-item'

const Login = () => (
    <div className="h-100">
        <Head>
            <title>E-Commerce Web App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <div className="container h-100">
            <TopNavBar />
            <div className="row justify-content-center align-items-center h-100">
                <form className="col-6">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter Password"/>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
        <style global jsx>{`
            html {
                height: 100%;
            }
            body {
                height: 100%;
            }

            #__next {
                height: 100%;
            }
            .container {
                background-color: #F5F5F5;
                font-size: 14px;
                font-family: sans-serif;
            }
        `}</style>
    </div>
)

export default Login;
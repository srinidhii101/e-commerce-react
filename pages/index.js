import Head from 'next/head'
import TopNavBar from '../components/top-nav-item'

const Index = () => (
    <div className="h-100">
        <Head>
            <title>E-Commerce Web App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <div className="container h-100">
            <TopNavBar />
            <div className="row align-items-center justify-content-center h-100">
                <p className="landingContent text-uppercase">The E-Commerce Website</p>
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
            .landingContent {
                font-size: 48px;
            }
        `}</style>
    </div>
)

export default Index;
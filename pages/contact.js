import Head from 'next/head'
import TopNavBar from '../components/top-nav-item'

const Contact = () => (
    <div className="h-100">
        <Head>
            <title>E-Commerce Web App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <div className="container h-100">
            <TopNavBar />
            <div className="p-4">
                <pre>
                < br/>
                < br/>
                < br/>
                < br/>
                < br/>
                < br/>
                    Address:1819 - 1333 < br/>South Park Street,B3J2K9
                    < br/>Halifax , Nova Scotia< br/>
                    < br/>
                    Whatsapp Number: +91 98450 34884< br/>
                </pre>
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

export default Contact;
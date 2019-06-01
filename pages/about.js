import Head from 'next/head'
import TopNavBar from '../components/top-nav-item'

const About = () => (
    <div className="h-100">
        <Head>
            <title>E-Commerce Web App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <div className="container h-100">
            <TopNavBar />
            <div className="p-3">
                <br />
                <br />
                <br />
                <br />
                <br />
                <pre>Our project’s purpose is to become an e-commerce solution for selling services.<br /><br /><br />
                Our goal is to enable a
                vendor to post his service online for a user’s consumption. <br />
                The problem statement/project can be further divided into 10 modules. The below modules constitute the
                entirety of the application.<br />
                <br /><br />
                # Module Name Features<br />
                <br />
                1. Profile Management Sign up, Login, etc.<br />
                2. Email Verification Ability to send emails<br />
                3. Role Management Change user permissions<br />
                4. Service Management Manage services offered by vendors<br />
                5. Searching Content Ability to conduct searching or filtering<br />
                6. Payment System To be able to take dummy payments<br />
                7. Checkout Services Email receipt, address entry, and card info<br />
                8. Shopping Cart To be able to store items in a cart<br />
                9. Transaction Management To override in case services aren’t delivered<br />
                10. Uploading Media Ability to upload pictures and videos<br />
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

export default About;
import Link from 'next/link'

const TopNavBar = () => (
    <div className="row justify-content-end">
        <div className="col-6 menu">
            <div className="row p-4 justify-content-center">
                <div className="col-md text-center">
                    <Link href="../login">
                        <a>Login</a>
                    </Link>
                </div>
                <div className="col-md text-center">
                <Link href="../contact">
                        <a>Catalogue</a>
                    </Link>
                </div>
                <div className="col-md text-center">
                <Link href="../about">
                        <a>About us</a>
                    </Link>
                </div>
                <div className="col-md text-center">
                <Link href="../contact">
                        <a>Contact Us</a>
                    </Link>
                </div>
            </div>
        </div>
        <style jsx>{`
            .menu {
                background-color: #FFFFFF;
                border-radius: 0px 0px 0px 30px;
            }
        `}</style>
    </div>
)

export default TopNavBar;
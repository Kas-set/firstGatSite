import * as React from "react"
import { Link } from "gatsby"
import { container }  from './Layout.module.css'

console.log("css: ", {container})

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <h1>{pageTitle}</h1>
            <nav className={container}>
                <ul>
                    <li>
                        <Link to="/index">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
      );
}
 
export default Layout;
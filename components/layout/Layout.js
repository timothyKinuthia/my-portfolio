
import Header from "../header/Header";

const Layout = ({children, dimension}) => {
    return (
        <div className="h-full pb-8 bg-bluegray-900">
            <Header dimension={dimension} />
            <main>{children}</main>
        </div>
    )
}

export default Layout

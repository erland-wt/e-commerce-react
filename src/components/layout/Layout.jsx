import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <>
            <Navbar/>

            <main style={{ padding: "16px" }}>
                {children}
            </main>
        </>
    );
}

export default Layout;
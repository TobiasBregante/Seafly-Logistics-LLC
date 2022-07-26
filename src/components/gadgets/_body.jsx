import Header from './_header'
import Footer from './_footer'

const Body = ({ children, headProps, urlNavigation }) => {
    return(
        <>
        <main className="container-fluid">
            <Header/>
            { children }
            <Footer/>
        </main>
        </>
    )
}

export default Body
import { useEffect, useState } from "react"

const Footer = () => {
    const [hostname, setHostname] = useState('')

    useEffect(() => setHostname(window.location.hostname))

    return(
        <footer className='row'>
            <article className="col-12 col-sm-12 col-lg-12 col-xl-12 contain-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889518!2d-58.38375908505231!3d-34.60373446500544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1623551772908!5m2!1ses!2sar" 
                />
            </article>
            <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
                <ul>
                    <li>Copyright &copy; reserved Seafly Logistics LLC - { hostname } { (new Date()).getFullYear() }</li>
                    <li><a className="text-light" href="tel:7866091354">Tel: 7866091354</a></li>
                    <li>9 Calumet Ave. Oakland, NJ 07436-2901</li>
                    <li>
                        Powered by <a 
                            href="https://instagram.com/nezzedsolutionsit" 
                            target='_blank' 
                            className='text-light'>
                            Nezzed IT Solutions
                        </a>
                    </li>
                </ul>
            </article>
        </footer>
    )
}

export default Footer
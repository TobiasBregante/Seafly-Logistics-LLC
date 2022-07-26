const About = ({ aboutData }) => {
    return(
        <>
        <article id={ aboutData.idReferenceHash } className="col-11 containAbout">
            <h1>{ aboutData.title }</h1>
            <p><span className='quotation'></span>{ aboutData.text }<span className='quotation'></span></p>
        </article>
        </>
    )
}

export default About
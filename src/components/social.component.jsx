const SocialMedial = ({ socialMedialObj }) => {
    console.log(socialMedialObj)
    
    return(
        <>
        <article className="containSocialMedial col-12 col-sm-12 col-lg-3 col-xl-3">
            <ul className='col-12 p-0'>
                <li>
                    <button  onClick={() => { window.open(socialMedialObj.social1.url) }} type='button' className='btn'>
                        {socialMedialObj.social1.icon}
                    </button>
                </li>
                <li>
                    <button onClick={() => {window.open(socialMedialObj.social2.url) }} type='button' className='btn'>
                        {socialMedialObj.social2.icon}
                    </button>
                </li>
                <li>
                    <button onClick={() => {window.open(socialMedialObj.social3.url) }} type='button' className='btn'>
                        {socialMedialObj.social3.icon}
                    </button>
                </li>
            </ul>
        </article>
        </>
    )
}

export default SocialMedial
const Card = ({ cardData }) => {    
    return(
        <a href={ `#${cardData.idService}` } className="card col-12 col-sm-12 col-lg-4 col-xl-4">
            <article style={{ backgroundImage: `url('${cardData.img}')` }} className="img-card-contain"/>
            <div className="card-body">
                <p className="card-title"><strong>{ cardData.title }</strong></p>
                <p className="card-text">{ cardData.description }</p>
            </div>
        </a>
    )
}

export default Card
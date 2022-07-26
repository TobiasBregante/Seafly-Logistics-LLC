import Body from './gadgets/_body'
import Carousel from './carousel.component'
import Card from './card.component'
import CardModule from './cardModule.component'
import SloganLegend from './sloganLegend.component'
import Spacing from './spacing.component'
import SwipeUp from './arrowAnimated.component'
import About from './about.component'

const PWAComponent = () => {
    return (
        <Body headProps={{ title: 'My Website' }}>
            <article className="row contain">
                <article className="card-contain col-12 col-sm-12 col-lg-12 col-xl-12 p-0">
                    <Carousel
                        img1='img/service1.jpg'
                        img2='img/service2.jpg'
                        img3='img/service3.jpg'
                    />
                </article>
                <SloganLegend sloganData='by sky, sea and land' />
                <About aboutData={{
                    title: <img src='img/brand.png' className='brand-aboutus' />,
                    text: `
                    We believe that every small or medium business 
                    deserves the opportunity to go from local to global. 
                    Let us simplify your logistics through our intuitive 
                    platform now.
                    `,
                    idReferenceHash: 'nosotros'
                }} />
                <SwipeUp />
                <article className="col-12 titlePlans">
                    <h4>Services</h4>
                </article>
                <Card
                    cardData={{
                        title: 'Sea',
                        description: `
                        We transport maritime cargo to and from the most important 
                        ports in the world, simplifying logistics operations for 
                        our clients.
                        `,
                        img: 'img/service1.jpg',
                        idService: 'service1'
                    }}
                />
                <Card
                    cardData={{
                        title: 'Sky',
                        description: `
                        A simple, fast and competitive service in alliance 
                        with the most important airlines make the difference 
                        when choosing us.
                        `,
                        img: 'img/service2.jpg',
                        idService: 'service2'
                    }}
                />
                <Card
                    cardData={{
                        title: 'Land',
                        description: `
                        We move cargo throughout World through our land fleet, 
                        monitoring service plus customs management.
                        `,
                        img: 'img/service3.jpg',
                        idService: 'service3'
                    }}
                />
                <Spacing spacing='20vh' />
                <CardModule cardData={{
                    title: 'Sea',
                    text: `
                        -El pago del 50%  anual dividido en comisiones mensuales iguales, 
                        en relacion al valor  que serapago durante un lapso de 12 meses, 
                        a partir de la primera comision  hasta la decima segunda y la 
                        devolucion del capital invertido en  el decimo tercer mes.
                    `,
                    img: 'img/service1.jpg',
                    idReferenceHash: 'service1'
                }} />
                <CardModule cardData={{
                    title: 'Sky',
                    text: `
                        -El pago del 60% anual dividido en comisiones mensuales del 5% del valor invertido,
                         que se ira ajustando en base al capital que permanezca luego de las devoluciones que se haran de forma independiente,
                         con un tiempo limite de 12 meses pudiendo ser concluido con anterioridad en caso de devolver el 100% del capital. 
                    `,
                    img: 'img/service2.jpg',
                    idReferenceHash: 'service2'
                }} />
                <CardModule cardData={{
                    title: 'Land',
                    text: `
                    El "método bola de nieve" significa, en pocas palabras, liquidar lo más rápido posible el préstamo más pequeño que tenga. 
                    Una vez que haya pagado esa deuda, podrá destinar el dinero que usaba para ese pago para la siguiente deuda más pequeña. 
                    Lo ideal sería que este proceso continuara hasta que liquide todas las cuentas. A medida que destine el dinero que usaba 
                    para el pago del saldo más bajo al siguiente de su lista, el monto aumentará más y más, como una "bola de nieve", 
                    y se acelerará el ritmo en el que se reduce la deuda.
                    `,
                    img: 'img/service3.jpg',
                    idReferenceHash: 'service3'
                }} />
                <article className="col-12 mt-5 mb-5">
                    <About aboutData={{
                        title: 'CUSTOMS BROKERS',
                        text: `
                        Our CUSTOMS Division is made up of experienced young professionals, who will 
                        be able to attend each operation in a personalized way, managing each load, 
                        providing legal and operational advice for your import or export of Merchandise.
                        • Processing and officialization of import and export clearances.
                        • Preparation, presentation of the respective customs documentation.
                        • Customs advice and tariff classification of merchandise of any kind.
                        • Records of temporary admission of machines and equipment.
                        • Temporary import dispatches, follow-up, control, management of extensions and 
                        re-export processing. Nationalization.
                        `,
                        idReferenceHash: 'nosotros'
                    }} />
                </article>
            </article>
        </Body>
    )
}

export default PWAComponent
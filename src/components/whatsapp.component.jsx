const WhatsappButtonRedirect = ({ 
    title=String, 
    message=String, 
    phone=Number, 
    background=String 
    }) => (
    <input
        onClick={() => window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank')}
        type="button" 
        className={`btn btn-${background}`} 
        value={ title } 
    />
)

export default WhatsappButtonRedirect
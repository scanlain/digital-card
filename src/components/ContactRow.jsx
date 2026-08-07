import "../App.css"

const ContactRow = ({icon : Icon, label, value, href, external}) => {

    return(
        <a 
            href={href} 
            className="contact-row" 
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
        >
            <div className="left">
                <Icon className="contact-icon" />
                <span className="contact-label">{label}</span>
            </div>
            <div className="right">
                <span className="contact-value">{value}</span>
            </div>
        </a>
    )
}

export default ContactRow
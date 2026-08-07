import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa6'

 const contacts = [
    {
        icon: FaLinkedin,
        label: "LINKEDIN",
        value:"in/saqlainkazi",
        href: "https://www.linkedin.com/in/saqlainkazi/",
        external: true
    },
    {
        icon: FaGithub,
        label: "GITHUB",
        value: "scanlain",
        href:"https://github.com/scanlain",
        external: true
    },
    {
        icon: FaEnvelope,
        label: "EMAIL",
        value: "scanlain23@gmail.com",
        href:"mailto:scanlain23@gmail.com",
        external: false
    },
    {
        icon: FaPhone,
        label: "PHONE",
        value: "+91-7738144523",
        href: "tel:+917738144523",
        external: false
    }
]

export default contacts
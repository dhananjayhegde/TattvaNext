import LinkButton from "./LinkButton"

const WhatsappButton = () => {
    return (
        <LinkButton 
            btnClass='my-8 btn btn-primary' 
            href="https://wa.me/918099664362?text=Namaskaram%21%0A%0AI%20want%20to%20start%20practicing%20Hathayoga.%20Please%20guide%20me.%0A%0AThank%20you%2C%0A" 
            text="Request Class"
            icon="fa-brands fa-whatsapp"
        /> 
    )
}

export default WhatsappButton
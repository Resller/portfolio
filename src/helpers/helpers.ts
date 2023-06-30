import  emailjs from '@emailjs/browser'

export const sendMessage = async (name:string, email:string, message:string)=>{
    const templateParams = {
        from_name:name,
        message,
        email
    }
    
    let response = await emailjs.send('service_jcjc8fu','template_w9ekrqx',templateParams,'A4VlalURMt3TuMIts');
    return response
}
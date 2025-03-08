import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+2349056118474" 
      accountName="Yogi Exchange"
      chatMessage="Hello! How can we help you? Trade Your Crypto with us"
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
};

export default WhatsAppButton;

import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import WhatsAppWidget from 'react-whatsapp-widget';

import 'react-whatsapp-widget/dist/index.css'

const Whatsup = () => {
    return (
        <div>
            <h1>Welcome To The Whats Up chat number 1</h1>
            <WhatsAppWidget 
            phoneNumber='8801991166550'
            companyName='Ehsan Markeeting'
            textReplyTime='Ehsan Marketing Support Team'
            message="What can we do for you?"
            />



            <div className="messenger-chat-bubble">

                <p>hellow world !! </p>
              <MessengerCustomerChat
                    pageId="100588302620535"
                    appId="718163472674662"     
             />
             </div>


    <h1> Ehsan marketing : infoworldehsan@gmail.com
     password : em-123123789
     sds
    </h1>
 
         
            
        </div>
    );
};

export default Whatsup;

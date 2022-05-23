// install axios, cors(?), dotenv, ...
require('dotenv').config();

const axios = require('axios');
const korBaseUrl = "https://mikeytwheelerr.korconnect.io/sendGrid/v3/mail/send"
const templateId = "d-a7cebc816ea24064bece6c96afdf3208"


async function sGSendEmail(senderName, senderTitle, senderPhone, senderEmail, senderPermission, senderMessage) {
    const assembledData = JSON.stringify({
        "from":{
            "email": process.env.REACT_APP_SG_SENDTO
        },
        "personalizations": [{
            "to": [{ 
                "email": process.env.REACT_APP_SG_SENDTO 
            }],
            "dynamic_template_data": {
                "sentName": senderName,
                "sentTitle": senderTitle,
                "sentPhoneNum": senderPhone,
                "sentEmail": senderEmail,
                "sentPermissionUse": senderPermission,
                "sentMessage": senderMessage,
            }
        }],
        "template_id": templateId
    });

    const config = {
        method: 'post',
        url: korBaseUrl,
        headers: {
            'x-api-key': process.env.REACT_APP_SG_PUBLIC_KEY, 
            'template_id': templateId, 
            'Content-Type': 'application/json'
        },
        data: assembledData
    };

    axios(config)
        .then(function(res) {
            alert("Thank you for reaching out! I'll get back with you as soon as I can");
            console.log("response data status: ", res.status);
        })
        .catch(function(err) {
            alert("Hmm, something went wrong there. Please try again");
            console.log("response ERROR, BE returned: ", err.response.data);
        })
}

export default sGSendEmail;
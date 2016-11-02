var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

exports.sendEmail = function (fromAddress, subject, content) {
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: 'karki011@gmail.com',
                        },
                        {
                            email: 'adlettow@gmail.com',
                        },
                        {
                            email: 'pinckc7@gmail.com',
                        },
                        {
                            email:'5han7anu@gmail.com'
                        }

                    ],
                    subject: subject
                }
            ],
            from: {
                email: fromAddress
            },
            content: [
                {
                    type: 'text/html',
                    value: content
                }
            ]
        }
    });

    return sg.API(request);
}


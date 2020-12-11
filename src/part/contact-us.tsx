import * as React from "react";
import * as toastr from "toastr";
import * as request from "superagent";
import { API_BASE_URL } from 'src/env';
import MessageModel from "src/model/message";
import AppState from "src/state";


interface ContactUs {
    setIsLoading: (isLoading: boolean) => void;
}

export default function ContactUs(props: ContactUs) {
    const [message, setMessage] = React.useState<MessageModel>(new MessageModel());


    function sendMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (message.body.length < 10) {
            toastr.error(
                "Please include more details in your message, so that we can address it in a better way.",
                "Message is too short"
            );
            return;
        }
        console.log(message);
        props.setIsLoading(true);
        request.post(API_BASE_URL + 'v1/mail/send')
            .set({ 'Content-Type': 'application/json', 'credentials': 'same-origin' })
            .send(message)
            .then(_res => toastr.success("Message Sent", "Thank you for your message. We appreciate your feedback."))
            .catch(err => AppState.handleError(err, true))
            .finally(() => props.setIsLoading(false));

    }

    return <section id="ms-message-us" data-section="contact" className="rr-contact-us">
        <h1>Get in Touch</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <p>Please send us a message and we’ll be in touch soon.</p>
                    <form action="#" onSubmit={sendMessage}>
                        <input type="text" className="form-control" placeholder="name (optional)" id="name" value={message.name}
                            onChange={(e) => setMessage({ ...message, name: e.target.value })} />
                        <input type="text" className="form-control" placeholder='email (optional)' id="email" value={message.email}
                            onChange={(e) => setMessage({ ...message, email: e.target.value })} />
                        <textarea name="message" id="message" className="form-control" cols={30} rows={7}
                            placeholder="write question or suggestion here" value={message.body}
                            onChange={(e) => setMessage({ ...message, body: e.target.value })} />
                        <div className="form-group ">
                            <input type="submit" value='SEND' className="btn pw-btn-product " />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://gmail.us5.list-manage.com/subscribe/post?u=401f9b2023a9607a2f7fae1d3&amp;id=387e232471";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

// use the render prop and your custom form
const Subscribe = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);

export default Subscribe;

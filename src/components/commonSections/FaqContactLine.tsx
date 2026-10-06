import { contacts } from "../../../contact";

// "Something else on your mind? Call … or email us." — shown beside FAQ lists.
const FaqContactLine: React.FC = () => {
  return (
    <>
      Something else on your mind? Call{" "}
      <a href={`tel:${contacts.phone_1.replace(/\s/g, "")}`} className="font-semibold text-sapphireBlue">
        {contacts.phone_1}
      </a>{" "}
      or{" "}
      <a href={`mailto:${contacts.email_1}`} className="font-semibold text-sapphireBlue">
        email us
      </a>
      .
    </>
  );
};

export default FaqContactLine;

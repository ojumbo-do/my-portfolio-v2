import { HiEnvelope, HiMapPin, HiPhoneArrowDownLeft } from "react-icons/hi2";
import Button from "./Button";
import ContactItem from "./ContactItem";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  return (
    <section
      id="contact"
      className="md:h-dvh shrink scroll-smooth py-10 flex flex-col gap-16"
    >
      <article className="text-center gap-4 flex items-center flex-col">
        <div>
          <h3 className="text-tertiary capitalize text-xl">Contact me</h3>
          <hr className="w-5 h-0.5 bg-tertiary border-none" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-5xl text-secondary capitalize font-semibold">
            Anything good starts with making that one big step
          </h1>
          <p className="text-lg">
            Drop an email or a phone call, I will reach out asap to discuss your
            next big project.
          </p>
        </div>
      </article>

      <article className="flex w-full max-w-screen-md mx-auto bg-tertiary rounded-md border-2 border-tertiary">
        <div className="rounded-md flex-wrap border-tertiary flex-col bg-primary flex p-4">
          <ContactItem hrefTo="mailto:ojumbo98@gmail.com">
            <HiEnvelope size={20} />
            Dancun Ojumbo
          </ContactItem>

          <ContactItem hrefTo="tel:+254746632931">
            <HiPhoneArrowDownLeft size={24} />
            +254 746 632931
          </ContactItem>

          <ContactItem hrefTo="https://wa.me/254746632931">
            <IoLogoWhatsapp size={28} />
            Let&apos;s chat on WhatsApp!
          </ContactItem>

          <ContactItem hrefTo="#">
            <HiMapPin size={24} />
            Nairobi, Kenya.
          </ContactItem>
        </div>

        <form action="" className="flex flex-col w-full gap-4 p-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-tertiary"
          />

          <div className="flex flex-row gap-3 mt-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-tertiary"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-tertiary"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-2 mt-4 rounded-md border-2 border-gray-200 focus:outline-none focus:border-tertiary"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full px-4 py-2 mt-4 rounded-md border-2 border-gray-200 focus:outline-none focus:border-tertiary"
          ></textarea>
          <Button
            type="submit"
            variant="primary"
            extraStyles="mt-10 capitalize"
          >
            Send message
          </Button>
        </form>
      </article>
    </section>
  );
}

export default Contact;

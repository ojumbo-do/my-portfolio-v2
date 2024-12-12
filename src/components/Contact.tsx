import { HiEnvelope, HiMapPin, HiPhoneArrowDownLeft } from "react-icons/hi2";
import Button from "./Button";
import ContactItem from "./ContactItem";
import { IoLogoWhatsapp } from "react-icons/io";
import Socials from "./Socials";

function Contact() {
  return (
    <section
      id="contact"
      className="md:h-dvh shrink scroll-smooth py-10 flex flex-col gap-16"
    >
      <article className="text-center gap-4 flex items-center flex-col">
        <div>
          <h3 className="text-tertiary capitalize text-3xl font-semibold">
            Contact me
          </h3>
          <hr className="w-5 h-0.5 bg-tertiary border-none" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-secondary text-xl font-semibold">
            Anything good starts with making that one big step
          </h1>
        </div>
      </article>

      <article className="flex w-full max-w-screen-lg mx-auto bg-tertiary rounded-md border-2 border-tertiary">
        <div className="rounded-md flex-wrap border-tertiary w-1/2 flex-col bg-primary flex p-4 justify-between gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium text-secondary">Get in Touch</h1>
            <p className="text-base">
              Feel free to reach out if you&apos;re interested in collaborating
              on a project or discussing potential opportunities!
            </p>
          </div>

          <div className="">
            <ContactItem hrefTo="mailto:ojumbo98@gmail.com">
              <HiEnvelope size={20} />
              <span className="text-textPrimary hover:text-secondary">
                Dancun Ojumbo
              </span>
            </ContactItem>

            <ContactItem hrefTo="tel:+254746632931">
              <HiPhoneArrowDownLeft size={22} />{" "}
              <span className="text-textPrimary hover:text-secondary">
                +254 746 632931
              </span>
            </ContactItem>

            <ContactItem hrefTo="https://wa.me/254746632931">
              <IoLogoWhatsapp size={22} />{" "}
              <span className="text-textPrimary hover:text-secondary">
                Let&apos;s chat on WhatsApp!
              </span>
            </ContactItem>

            <ContactItem hrefTo="#">
              <HiMapPin size={24} />{" "}
              <span className="text-textPrimary hover:text-secondary">
                Nairobi, Kenya.
              </span>
            </ContactItem>
          </div>

          <div className="w-full flex">
            <Socials variant="secondary" />
          </div>
        </div>

        <div className="flex flex-col gap-8 p-4 w-1/2">
          <h1 className="text-xl font-medium">Drop a Message</h1>

          <form action="" className="flex flex-col gap-4">
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
        </div>
      </article>
    </section>
  );
}

export default Contact;

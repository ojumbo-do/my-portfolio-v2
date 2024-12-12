type ContactItemProps = {
  children: React.ReactNode;
  hrefTo: string;
};

function ContactItem({ children, hrefTo = "#" }: Readonly<ContactItemProps>) {
  return (
    <a
      href={hrefTo}
      target="_blank"
      title="contact link"
      rel="noopener noreferrer"
      className="text-lg hover:text-textPrimary text-secondary flex w-full flex-row items-center text-start gap-4 p-1"
    >
      {children}
    </a>
  );
}

export default ContactItem;

import Link from "next/link";

type ButtonProps = {
  variant?:
    | "primary-link"
    | "secondary-link"
    | "tertiary-link"
    | "primary"
    | "secondary"
    | "tertiary";

  children: React.ReactNode;
  hrefTo?: string;
  extraStyles?: string;
  handleClick?: () => void;
};

function Button({
  variant,
  children,
  hrefTo = "#",
  extraStyles,
  handleClick,
}: Readonly<ButtonProps>) {
  const baseStyles = `rounded-full px-10 py-2.5 w-full text-center font-semibold border-2 text-lg border-secondary ease-in-out transition-all duration-300`;

  if (variant === "primary-link") {
    return (
      <Link
        className={`${baseStyles} ${extraStyles} bg-secondary text-white hover:bg-secondary hover:bg-opacity-20 `}
        href={hrefTo}
      >
        {children}
      </Link>
    );
  }

  if (variant === "secondary-link") {
    return (
      <Link
        className={`${baseStyles} ${extraStyles} text-secondary hover:bg-secondary hover:text-white`}
        href={hrefTo}
      >
        {children}
      </Link>
    );
  }

  if (variant === "tertiary-link") {
    return (
      <Link className={`${baseStyles} ${extraStyles}`} href={hrefTo}>
        {children}
      </Link>
    );
  }

  if (variant === "primary") {
    return (
      <button onClick={handleClick} className="">
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button onClick={handleClick} className="">
        {children}
      </button>
    );
  }

  if (variant === "tertiary") {
    return (
      <button onClick={handleClick} className="">
        {children}
      </button>
    );
  }

  return (
    <button onClick={handleClick} className={extraStyles}>
      {children}
    </button>
  );
}

export default Button;

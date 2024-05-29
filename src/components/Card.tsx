import React, { ReactNode } from "react";

type Card = {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

const Card = ({ header, footer, children }: Card) => {
  return <div className="card">{children}</div>;
};

const Header = ({ children }: { children: ReactNode }) => (
  <div className="card-header">{children}</div>
);
const Body = ({ children }: { children: ReactNode }) => (
  <div className="card-header">{children}</div>
);
const Footer = ({ children }: { children: ReactNode }) => (
  <div className="card-header">{children}</div>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

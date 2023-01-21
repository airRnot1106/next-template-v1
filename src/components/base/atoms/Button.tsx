interface ButtonProps {
  content: string;
}

export const Button = ({ content }: ButtonProps) => {
  return <button className="btn">{content}</button>;
};

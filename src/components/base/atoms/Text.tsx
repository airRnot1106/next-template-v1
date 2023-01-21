interface TextProps {
  content: string;
}

export const Text = ({ content }: TextProps) => {
  return <p>{content}</p>;
};

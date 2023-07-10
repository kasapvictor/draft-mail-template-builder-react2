export const Link = ({children, ...props}) => {
  return (
    <a target='_blank' {...props}>
      {children}
    </a>
  );
};

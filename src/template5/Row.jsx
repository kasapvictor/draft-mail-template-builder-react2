
export const Row = ({ style, children, ...props }) => {
  return (
    <tr {...props} style={style}>
      {children}
    </tr>
  );
}

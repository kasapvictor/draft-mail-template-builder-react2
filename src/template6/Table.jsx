export const Table = ({style, children, width = "100%", height = "100%", border = 0, align = "center", maxWidth = null, ...props}) => {
  return (
    <table {...props} style={{maxWidth, ...style}} cellPadding={0} cellSpacing={0} border={border} align={align} width={width}>
      <tbody>
        {children}
      </tbody>
    </table>);
}

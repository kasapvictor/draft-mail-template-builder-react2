export const Td = ({children, style, width="100%", height="100%", align = 'center', valign="top", ...props }) => {
  return <td {...props} style={style} align={align} valign={valign} width={width} height={height}>{children}</td>;
}

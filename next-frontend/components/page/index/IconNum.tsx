import { FC, ReactElement } from "react"

const IconNum: FC<{ icon: ReactElement, num: string | number, color?: string }> = ({
  icon, num, color
}) => {
  return <div style={color ? { color } : undefined}><b>{icon}</b>{' '}<span>{num}</span></div>
}

export default IconNum
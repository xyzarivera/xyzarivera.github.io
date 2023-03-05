import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const CustomMain = ({children}: Props) => {
  return(
    <main className="container">{children}</main>
  )
}

export default CustomMain
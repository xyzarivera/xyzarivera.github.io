import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const CustomMain = ({children}: Props) => {
  return(
    <main className="container pt-60 px-4">{children}</main>
  )
}

export default CustomMain
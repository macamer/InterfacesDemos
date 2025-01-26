interface Props {
    text:string
}

//estamos diciendo que Header va a ser un componente funcional
const Header:React.FC<Props> = ({text}) => {
    return (
        <header><h1 className={'read-the-docs'}>{text}</h1></header>
    )
}

export default Header;
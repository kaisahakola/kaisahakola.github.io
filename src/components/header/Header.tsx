interface HeaderProps {
    heading: {
        header: string
        subtitle: string
    }
}

const Header = (props: HeaderProps) => {
    const heading = props.heading
    return(
        <div>
            <h1>{heading.header}</h1>
            <h3>{heading.subtitle}</h3>
        </div>
    )
}

export default Header
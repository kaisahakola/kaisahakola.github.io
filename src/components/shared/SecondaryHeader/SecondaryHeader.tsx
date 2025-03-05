import './SecondaryHeader.scss'

interface Props {
    title: string;
}

const SecondaryHeader = (props: Props) => {
    return(
        <div className="secondary-header">
            <h1>{props.title}</h1>
        </div>
    )
}

export default SecondaryHeader
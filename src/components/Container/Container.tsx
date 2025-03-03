import './Container.scss';

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className='container-wrapper'>
            {children}
        </div>
    );
}

export default Container;
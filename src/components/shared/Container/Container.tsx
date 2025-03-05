import './Container.scss';

interface ContainerProps {
    children: React.ReactNode;
    hover?: boolean;
}

const Container = ({ children, hover }: ContainerProps) => {
    return (
        <div className={hover ? 'container-wrapper-hover' : 'container-wrapper'}>
            {children}
        </div>
    );
}

export default Container;
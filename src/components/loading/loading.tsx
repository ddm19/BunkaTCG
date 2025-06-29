import "./loading.scss";

interface LoadingProps {
    width?: string;
    height?: string;
    className?: string;
}
const Loading = (props: LoadingProps) => {
    const { width, height, className } = props;

    return (
        <div className={`loading ${className || ""}`}  >
            <div className="loading__spinner " style={{ width, height }} />
        </div>
    );
};

export default Loading;
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { hideNotification } from "redux/notificationSlice";
import { useEffect } from "react";
import "./toast.scss";

export default function Toast()
{
    const dispatch = useDispatch();
    const { message, isVisible } = useSelector((state: RootState) => state.notification);

    useEffect(() =>
    {
        if (isVisible)
        {
            const timer = setTimeout(() =>
            {
                dispatch(hideNotification());
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isVisible, dispatch]);

    return (
        <div className={`toast ${isVisible ? "toast--visible" : ""}`}>
            {message}
        </div>
    );
}

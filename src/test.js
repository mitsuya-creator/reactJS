import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);
    function handleClick() {
        setPending(pending => pending + 1);
        setTimeout(() => {
            setPending(pending => pending - 1);
            setCompleted(completed => completed + 1);
        }, 3000);
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}


import {  RefObject, useEffect } from "react";

function useOnClickOutside(ref: RefObject<HTMLDivElement>, handler: Function) {
    useEffect(
        () => {
            const listener = (event: Event) => {
                if (!ref.current || ref.current.contains(event.target as Node)) {
                    return;
                }

                handler(event);
            };
            document.addEventListener('click', listener);
            document.addEventListener('click', listener);

            return () => {
                document.removeEventListener('click', listener);
                document.removeEventListener('click', listener);
            };
        }, [ref, handler]
    );
}

export default useOnClickOutside;
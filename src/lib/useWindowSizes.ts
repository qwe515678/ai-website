import { useEffect, useState } from "react";

export default function useWindowSizes(defaltValue = { width: 0, height: 0 }) {
    const [sizes, setSizes] = useState(defaltValue);
    useEffect(() => {
        setSizes({ width: window.innerWidth, height: window.innerHeight });
    })
    return sizes
}
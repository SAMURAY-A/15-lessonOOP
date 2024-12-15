import { useState } from "react";

const useGetInputValues = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const resetHandler = () => setValues(initialValues);

    return { values, handleChange, resetHandler };
};

export default useGetInputValues;

import { useState } from "react"


export const useForm = <T extends Record<string, unknown>>(formulario: T) => {

    const [formValues, setFormValues] = useState(formulario);

    const handleInputChange = (value: string, field: keyof T ) => {
        setFormValues({
            ...formValues,
            [ field ]: value
        });
    }

    return {
        formValues,
        handleInputChange
    }
}

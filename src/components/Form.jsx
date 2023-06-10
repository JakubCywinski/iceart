import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../services/formControl";
import {
    StyledForm,
    Flex,
    InputLabel,
    Input,
    InputSpan,
    Button,
} from "../styles/StyledForm";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi2";

const FormInput = ({
    id,
    type,
    required,
    placeholder,
    label,
    as,
    validation,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const inputError = findInputError(errors, label);
    const isInvalid = isFormInvalid(inputError);

    return (
        <>
            <InputLabel htmlFor={id}>
                <Input
                    id={id}
                    type={type}
                    {...(required && "required")}
                    placeholder={placeholder}
                    {...register(label, validation)}
                    {...(as && { as })}
                />
                {label ? (
                    <InputSpan>
                        <InputError message={label} key={label} />

                        <AnimatePresence mode="wait" initial={false}>
                            {isInvalid && (
                                <InputError
                                    message={inputError.error.message}
                                    error
                                    key={inputError.error.message}
                                />
                            )}
                        </AnimatePresence>
                    </InputSpan>
                ) : null}
            </InputLabel>
        </>
    );
};

const InputError = ({ error, message }) => {
    return (
        <motion.p className={`${error ? "error" : ""}`} {...framer_error}>
            {message}
        </motion.p>
    );
};

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
};

export const Form = () => {
    const methods = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
        methods.reset();
        setSuccess(true);
    });

    return (
        <FormProvider {...methods}>
            <StyledForm
                onSubmit={(e) => e.preventDefault()}
                noValidate
                autoComplete="off"
            >
                <Flex>
                    <FormInput
                        id="firstName"
                        required={true}
                        placeholder=""
                        type="text"
                        label="Imię"
                        name="firstName"
                        validation={{
                            required: {
                                value: true,
                                message: "wymagane",
                            },
                        }}
                    />
                    <FormInput
                        id="lastName"
                        required={true}
                        placeholder=""
                        type="text"
                        label="Nazwisko"
                        name="lastName"
                        validation={{
                            required: {
                                value: true,
                                message: "wymagane",
                            },
                        }}
                    />
                </Flex>

                <FormInput
                    id="email"
                    required={true}
                    placeholder=""
                    type="email"
                    label="email"
                    name="email"
                    validation={{
                        required: {
                            value: true,
                            message: "wymagane",
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Niepoprawny adres email",
                        },
                    }}
                />

                <FormInput
                    id="phone"
                    required={true}
                    placeholder=""
                    type="tel"
                    label="numer tel"
                    name="phone"
                    validation={{
                        required: {
                            value: true,
                            message: "wymagane",
                        },

                        maxLength: {
                            value: 12,
                            message: "max 12 znaków",
                        },
                        pattern: {
                            value: /^[0-9]{9,}$/i,
                            message: "Niepoprawny numer",
                        },
                    }}
                />
                <FormInput
                    id="message"
                    required={true}
                    placeholder=""
                    type="text"
                    label="wiadomość"
                    as={"textarea"}
                    name="message"
                    validation={{
                        required: {
                            value: true,
                            message: "wymagane",
                        },
                        minLength: {
                            value: 6,
                            message: "min 6 znaków",
                        },
                        maxLength: {
                            value: 500,
                            message: "max 500 znaków",
                        },
                    }}
                />

                <Button href="#" $primary onClick={() => onSubmit()}>
                    <p>Wyślij</p> <HiPaperAirplane />
                </Button>
                {success && <p>Wiadomość wysłana poprawnie!</p>}
            </StyledForm>
        </FormProvider>
    );
};

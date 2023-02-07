import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
    Box,
    FormLabel,
    FormControl,
    Input,
    Button,
    Radio,
    RadioGroup,
    Stack,
    Tooltip,
} from '@chakra-ui/react'
import { InfoOutlineIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { pascalStrToSpacedWord } from './helper'

function Form({ fieldInfo, passBackResults }) {
    const [canSubmitForm, setCanSubmitForm] = useState(false)
    const {
        handleSubmit,
        register,
        getValues,
        control,
        formState: { errors, isSubmitting },
    } = useForm()

    const FormInfoLabel = ({ name, info }) => {
        const spacedName = pascalStrToSpacedWord(name)
        return (
            <FormLabel htmlFor={name}>
                {spacedName}{' '}
                {info && (
                    <Tooltip label={info}>
                        <InfoOutlineIcon />
                    </Tooltip>
                )}
            </FormLabel>
        )
    }

    return (

        <h1>Form</h1>
    )
}

export default Form
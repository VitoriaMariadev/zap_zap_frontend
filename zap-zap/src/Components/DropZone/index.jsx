import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUserPlus } from "react-icons/fi";
import './style.css'

export const MyDropzone = () => {

    const [selectedFileUrl, setSelectedFileUrl] = useState('')

    const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl)
    // Do something with the files
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
    <div className='dropzone' {...getRootProps()}>
        <input {...getInputProps()} />
            {selectedFileUrl
            ? <img src={selectedFileUrl} alt='Gabarito do Aluno' />
            : <p>
                    <FiUserPlus />
              </p>}
    </div>
  )
}
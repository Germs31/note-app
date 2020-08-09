import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Button, Form, Loader } from 'semantic-ui-react'
import { useRouter } from 'next/router'

const EditNote = ({ note }) => {
    const [form, setForm] = useState({title: note.title, description: note.description})
    // for indicating loader
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})

    const router = useRouter()

    useEffect(() => {
        if(isSubmitting) {
            if(Object.keys(errors).length === 0){
                updateNote()
            } else {
                setIsSubmitting(false)
            }
        }
    }, [errors])

    const updateNote = async() => {
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
                method: 'Put',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let errs = validate()
        setErrors(errs)
        setIsSubmitting(true)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {}
        if (!form.title) {
            err.title = 'Title is required'
        }
        if (!form.description) {
            err.description= "Description is required"
        }

        return err
    }

    return (
        <div className="form-container">
            <h1>Update Note</h1>
            <div>
                {
                    isSubmitting 
                        ? <Loader active inline='centered'/> 
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error = {errors.title ? { content: 'please enter a title', pointing: 'below'} : null}
                                label = "title"
                                placeholder = "title"
                                name = "title"
                                onChange = {handleChange}
                                value = {form.title}
                            />

                            <Form.TextArea 
                                fluid
                                error = {errors.description ? { content: 'please enter a description', pointing: 'below'} : null}
                                label = "description"
                                placeholder = "Description"
                                name = "description"
                                onChange = {handleChange}
                                value = {form.description}
                            />
                            <Button type="submit">Update</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

EditNote.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`)
    const { data } = await res.json()
    return { note: data }
}

export default EditNote
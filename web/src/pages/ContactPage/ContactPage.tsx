import { Form, TextField, Submit, SubmitHandler } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  input: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <TextField name="input" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

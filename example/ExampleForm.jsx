import Form, {
  FormGroup, TextArea, Input, Select, SubmitButton, SubmitForm,
} from '../src'

class ExampleForm extends SubmitForm {
  render({ onChange, ...props }) {
    const { formLoading, error, success } = this.state

    return (<Form {...props} onSubmit={this.submit.bind(this)} onChange={values => {
      this.reset()
      if(onChange) onChange(values)
    }}>
      <FormGroup label="Input" help="Type in something...">
        <Input name="input" value="hello-world" />
      </FormGroup>
      <FormGroup label="Select" help="Please select...">
        <Select name="select" value="2" options={[
          {
            title: 'Free will',
            value: '1',
          },
          {
            title: 'Unfree will',
            value: '2',
          },
        ]} />
      </FormGroup>
      <FormGroup label="TextArea" help="Multiple row input...">
        <TextArea name="textarea">
          One must still have chaos in oneself to be able to give birth to a dancing star.
        </TextArea>
      </FormGroup>
      <SubmitButton loading={formLoading} type="warning"
        confirmText="Submit Data" />
      {error && `Error: ${error}`}
      {success && `OK`}
    </Form>)
  }
}

export default ExampleForm
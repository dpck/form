import jsx from '@a-la/jsx'
import Idio from '../test/context/Idio'

(async () => {
  const c = new Idio()
  const j = jsx(`<Form>
    <FormGroup label="welcome">
      <Input placeholder="hello"/>
    </FormGroup>
  </Form>`, {
    quoteProps: 'dom',
  })
  const url = await c.start({
    input: j,
  })
  console.log(url)
})()
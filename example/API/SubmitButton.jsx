import { format } from './'
import rnd from './random'
/* start example */
import { SubmitButton } from '../../src'

const Example = ({ formLoading }) => (
  <SubmitButton type="light" confirmText="Add Data"
    loading={formLoading} loadingText="Loading..." outline="1" />
)
/* end example */

console.log(format(<Example />))
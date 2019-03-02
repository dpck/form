import { h } from 'preact'
import { Component } from 'preact'
import fetch from 'unfetch'

/**
 * The class that has the `submit` method for sending data to the server and controlling the loading state. The response will be read as `JSON` and if it has an `error` property, it will be set in the state, otherwise, the `success` is set to 1 on the state.
 */
export default class SubmitForm extends Component {
  constructor() {
    super()
    /**
     * @type {SubmitFormProps}
     */
    this.props = this.props
    /**
     * @type {SubmitFormState}
     */
    this.state = {
      formLoading: false,
      error: null,
      success: null,
    }
  }
  /**
   * Submits the form to the `path` property, setting `formLoading` during this time. Also sets the `error` and `success` state.
   */
  async submit(e) {
    e.preventDefault()
    if (!this.props.path) {
      this.setState({ error: 'Path is not set in the properties of the form.' })
      return false
    }
    this.setState({ error: null, success: null })
    const data = new FormData(e.target)
    this.setState({ formLoading: true })
    let res
    try {
      res = await fetch(this.props.path, {
        method: 'POST',
        body: data,
      })
      const { 'error': error } = await res.json()
      if (error) this.setState({ error })
      else this.setState({ success: 1 })
    } catch (error) {
      this.setState({ error })
    } finally {
      this.setState({ formLoading: false })
    }
    if (this.props.submitFinish) {
      await this.props.submitFinish(res)
    }
    return false
  }
  /**
   * Remove the error and the success states.
   */
  reset() {
    this.setState({
      error: null,
      success: null,
    })
  }
}

/* documentary types/SubmitForm.xml */
/**
 * @typedef {Object} SubmitFormProps Options for the SubmitForm component.
 * @prop {string} path The path where to send data.
 * @prop {(result: *) => Promise<*>} [submitFinish] The callback after the data has been sent with possible response from the server.
 *
 * @typedef {Object} SubmitFormState The state structure for the SubmitForm.
 * @prop {boolean} formLoading Whether the data has been sent for submission.
 * @prop {string} error The error returned by the server.
 * @prop {boolean} success Whether the form has been submitted successfully.
 */

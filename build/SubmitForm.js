import { h } from 'preact'
import { Component } from 'preact'
import fetch from 'unfetch'

/**
 * The class that has the `submit` method for sending data to the server and controlling the loading state. The response will be read as `JSON` and if it has an `error` property, it will be set in the state, otherwise, the `success` is set to 1 on the state.
 */
export default class SubmitForm extends Component {
  constructor() {
    super()
    /** @type {!_depackForm.SubmitFormProps} */
    this.props = this.props
    /** @type {!_depackForm.SubmitFormState} */
    this.state = {
      formLoading: false,
      error: null,
      success: null,
    }
    /** @type {!RequestInit} */
    this.fetchOptions = {}
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
        ...this.fetchOptions,
      })
      const { 'error': error } = await res.json()
      if (error) this.setState({ error })
      else this.setState({ success: 1 })
    } catch (error) {
      let err = error
      if (error instanceof Event) {
        err = new Error('Network error')
      }
      this.setState({ error: err })
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

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').SubmitFormProps} _depackForm.SubmitFormProps
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').SubmitFormState} _depackForm.SubmitFormState
 */
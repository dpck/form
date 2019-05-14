export {}
/* typal types/index.xml closure noSuppress */
/**
 * @typedef {_depackForm.FormProps} FormProps Options for the Form component.
 */
/**
 * @typedef {Object} _depackForm.FormProps Options for the Form component.
 * @prop {!Function} [onChange] The callback to call when a change is made to any of the inputs inside of the form.
 * @prop {!Function} [formRef] The function to call with the reference to the form HTML.
 * @prop {!Function} [onSubmit] The function to call on form submit.
 */
/**
 * @typedef {_depackForm.FormGroupProps} FormGroupProps Options for the FormGroup component.
 */
/**
 * @typedef {Object} _depackForm.FormGroupProps Options for the FormGroup component.
 * @prop {string} [label] The label to display for the group.
 * @prop {string} [help] The help text to show in `<small className="form-text text-muted">{help}</small>`
 */
/**
 * @typedef {_depackForm.SubmitButtonProps} SubmitButtonProps Options for the SubmitButton component.
 */
/**
 * @typedef {Object} _depackForm.SubmitButtonProps Options for the SubmitButton component.
 * @prop {boolean} [loading=false] Whether the button should display as loading. Default `false`.
 * @prop {string} [loadingText] The text to show during the loading progress.
 * @prop {string} confirmText The text for the normal state.
 * @prop {string} [className] The class name, such as `btn-lg`.
 * @prop {string} [type="primary"] The type of the button to add to the class as `btn-{type}`. One of `('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark')`. Default `primary`.
 * @prop {boolean} [outline=false] Display the outline style of the button via setting the `btn-outline-{type}` class. Default `false`.
 */

/* typal types/input.xml closure noSuppress */
/**
 * @typedef {_depackForm.InputProps} InputProps The rest is all other options to be passed to the input element. When compiling with _Depack_, the props must be added like `<Input {...({ 'onClick': test })}>`.
 */
/**
 * @typedef {Object} _depackForm.InputProps The rest is all other options to be passed to the input element. When compiling with _Depack_, the props must be added like `<Input {...({ 'onClick': test })}>`.
 * @prop {boolean} [required] Whether this is a required field.
 * @prop {string} [name] The input name.
 * @prop {string} [placeholder] The input placeholder.
 * @prop {boolean} [file] Whether the input is for selecting files.
 * @prop {string} [value] The initial value.
 * @prop {string} [type] The input type.
 */

/* typal types/select.xml closure noSuppress */
/**
 * @typedef {_depackForm.SelectProps} SelectProps Options for the Select component.
 */
/**
 * @typedef {Object} _depackForm.SelectProps Options for the Select component.
 * @prop {boolean} [required] Whether this is a required field.
 * @prop {string} [name] The select name.
 * @prop {string} [value] The initial value.
 * @prop {!Array<{value: *, title: string}>} [options] The array with options to render inside of the `select` element.
 */

/* typal types/submitform.xml closure noSuppress */
/**
 * @typedef {_depackForm.SubmitFormProps} SubmitFormProps Options for the SubmitForm component.
 */
/**
 * @typedef {Object} _depackForm.SubmitFormProps Options for the SubmitForm component.
 * @prop {string} path The path where to send data.
 * @prop {function(Object): !Promise} [submitFinish] The callback after the data has been sent with possible response from the server.
 */
/**
 * @typedef {_depackForm.SubmitFormState} SubmitFormState The state structure for the SubmitForm.
 */
/**
 * @typedef {Object} _depackForm.SubmitFormState The state structure for the SubmitForm.
 * @prop {boolean} formLoading Whether the data has been sent for submission.
 * @prop {?string} error The error returned by the server.
 * @prop {?boolean} success Whether the form has been submitted successfully.
 */

/* typal types/textarea.xml closure noSuppress */
/**
 * @typedef {_depackForm.TextAreaProps} TextAreaProps Options for the TextAreaProps component.
 */
/**
 * @typedef {Object} _depackForm.TextAreaProps Options for the TextAreaProps component.
 * @prop {boolean} [required] Whether this is a required field.
 * @prop {string} [name] The textarea name.
 * @prop {string} [placeholder] The textarea placeholder.
 * @prop {number} [rows=3] How many rows should the textarea have. Default `3`.
 */

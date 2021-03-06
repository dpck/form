/* typal types/index.xml externs */
/** @const */
var _depackForm = {}
/**
 * Options for the Form component.
 * @typedef {{ onChange: ((!Function)|undefined), formRef: ((!Function)|undefined), onSubmit: ((!Function)|undefined) }}
 */
_depackForm.FormProps
/**
 * Options for the SubmitButton component.
 * @typedef {{ loading: (boolean|undefined), loadingText: (string|undefined), confirmText: string, className: (string|undefined), type: (string|undefined), outline: (boolean|undefined), disabled: (boolean|undefined) }}
 */
_depackForm.SubmitButtonProps

/* typal types/form-group.xml externs */
/**
 * Options for the FormGroup component.
 * @typedef {{ label: (string|undefined), className: (string|undefined), labelClassName: (string|undefined), col: (string|undefined), row: (boolean|undefined), form-row: (boolean|undefined), details: (boolean|undefined), help: (string|undefined) }}
 */
_depackForm.FormGroupProps

/* typal types/Input.xml externs */
/**
 * The rest is all other options to be passed to the input element. When compiling with _Depack_, the props must be added like `<Input {...({ 'onClick': test })}>`.
 * @typedef {{ required: (boolean|undefined), name: (string|undefined), placeholder: (string|undefined), file: (boolean|undefined), value: (string|undefined), className: (string|undefined), col: (string|undefined), type: (string|undefined), help: (string|undefined), invalid: (boolean|undefined), valid: (boolean|undefined) }}
 */
_depackForm.InputProps

/* typal types/Select.xml externs */
/**
 * Options for the Select component.
 * @typedef {{ required: (boolean|undefined), name: (string|undefined), value: (string|undefined), col: (string|undefined), className: (string|undefined), defaultText: ((?string)|undefined), options: ((!Array<{value: *, title: string}>)|undefined) }}
 */
_depackForm.SelectProps

/* typal types/SubmitForm.xml externs */
/**
 * Options for the SubmitForm component.
 * @typedef {{ path: string, submitFinish: ((function(Object): !Promise)|undefined) }}
 */
_depackForm.SubmitFormProps
/**
 * The state structure for the SubmitForm.
 * @typedef {{ formLoading: boolean, error: ?string, success: ?boolean }}
 */
_depackForm.SubmitFormState

/* typal types/TextArea.xml externs */
/**
 * Options for the TextAreaProps component.
 * @typedef {{ required: (boolean|undefined), name: (string|undefined), placeholder: (string|undefined), rows: (number|undefined) }}
 */
_depackForm.TextAreaProps

## Custom Components

To implement a custom component, one must write a class component that would report its initial value in `componentDidMount` method via the `onChange` method that it receives in the context. Overall, there are 4 properties that a component can receive in the context:

- `id`: If placed in the _FormGroup_, this will be set to the ID that the component should set on the input so that the label can focus on it on click.
- `hid`: If placed in the _FormGroup_, this will be set to auto-generated value for the help field.
- `values`: This is the overall values hash containing all the values of the fields in the form. It is set by the _Form_ parent component.
- `onChange`: This is the callback set by the _Form_ to report changes to the values of the component. It must also be fired after the component is mounted to set its initial model value in the form (i.e. update the `values` field).

The components are controlled which means their values are set via the model, and are contained in the `values` context property. Whenever an update is needed, the `onChange` method has to be fired. To allow server-side rendering of the component when the initial value is not going to be reported to the _Form_ via the `componentDidMount`, it must be set manually after checking if `values` contain the name of the component. If the component for some reason is going to be used also outside of the form, the `values` must be defaulted to `{}`.

Here is an example of the _Input_ component which accounts for all the above points:

%EXAMPLE: src/Input.jsx%

%~%
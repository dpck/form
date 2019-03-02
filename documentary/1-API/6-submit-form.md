### **SubmitForm**

This class extends the `Preact.Component` and implements the `submit` method which will send the data to the server and await for the response while setting the `formLoading` property of the state to `true`. The `error` and `success` properties will also be set upon the arrival of data. The `submitFinish` callback can be used to receive the result of the form submission. Components implementing this abstract class must implement their own render method.

%TYPEDEF types/SubmitForm.xml SubmitFormProps%

%TYPEDEF types/SubmitForm.xml SubmitFormState%

%EXAMPLE: example/API/SubmitForm.jsx, ../../src => @depack/form%
%FORK-html example example/API/SubmitForm%

```#### reset => void
```

Resets the `error` and `success` properties of the form.

### **SubmitForm**

This class extends the `Preact.Component` and implements the `submit` method which will send the data to the server and await for the response while setting the `formLoading` property of the state to `true`. The `error` and `success` properties will also be set upon the arrival of data, with the JSON response being used to extract the error. The `submitFinish` callback can be used to receive the result of the form submission. Components implementing this abstract class must write their own render method.

%TYPEDEF types/SubmitForm.xml SubmitFormProps%

%TYPEDEF types/SubmitForm.xml SubmitFormState%

%EXAMPLE: example/API/SubmitForm.jsx, ../../src => @depack/form%
%FORK-html example/API/SubmitForm%

```#### reset => void
```

Resets the `error` and `success` properties of the form.


%~ width="15"%
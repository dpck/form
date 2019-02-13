## Demo

The form in the example can be rendered within the following app:

<div id="preact"></div>

<script>
  var head = document.getElementsByTagName('head')[0];
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('type', 'text/javascript');
  scriptElement.setAttribute('src', 'js/main.js?t='+Math.random());
  head.appendChild(scriptElement);
  head.removeChild(scriptElement);
</script>

<File>js/main.js.map</File>

<Code src="example/App.jsx"/>

<SectionBreak />
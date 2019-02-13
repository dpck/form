# Depack/Form Modules Demo

This page is meant for modern browsers that are capable of loading the modules files.

<File>js/modules</File>

<div id="preact"></div>

<script type="module">
  var head = document.getElementsByTagName('head')[0];
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('src', 'js/modules/example/App.js?t='+Math.random());
  scriptElement.setAttribute('type', 'module');
  head.appendChild(scriptElement);
</script>
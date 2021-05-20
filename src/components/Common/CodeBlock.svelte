<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import CodeMirror from 'codemirror';
  import vim from 'codemirror/keymap/vim';
  import css from 'codemirror/mode/css/css';
  import Window from './Window.svelte';
  import 'codemirror/lib/codemirror.css';
  import 'codemirror/theme/material-ocean.css';

  export let code;
  export let height = null;
  export let styleId = '';
  export let hidden = false;
  export let injectStyle = true;
  export let questionMark = false;

  const refs = {};
  const newStyleEl = document.createElement('style');
  newStyleEl.id = styleId;

  const dispatch = createEventDispatcher();

  const opts = {
    lineWrapping: true,
    indentWithTabs: false,
    indentUnit: 4,
    tabSize: 2,
    value: '',
    mode: 'css',
    // keyMap: 'vim', // Uncomment this lines so you get vim commands like I prefer :)
    autoCloseBrackets: true,
    autoCloseTags: true,
    foldGutter: true,
    theme: 'material-ocean',
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  };

  let editor;
  onMount(() => {
    editor = CodeMirror.fromTextArea(refs.editor, opts);
    editor.refresh();
    editor.setValue(code);
    editor.setSize(null, '100%');

    editor.on('change', (instance) => {
      const value = instance.getValue();

      if (injectStyle) {
        const current = document.getElementById(styleId);
        const style = current || newStyleEl;
        style.innerHTML = value;

        if (!current) {
          document.head.appendChild(style);
        }
      }

      dispatch('change', { value });
    });

    // cleanup
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  });

  $: if (editor && code) {
    editor.refresh();
    editor.setValue(code);
  }
</script>

<style>
  :global(.CodeMirror-cursor),
  :global(.CodeMirror-code) {
    font-size: var(--code-font-size, 1.2rem);
  }

  :global(.CodeMirror-code) {
    font-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas,
      Courier New, monospace;
  }
</style>

<Window height="{height}" hidden="{hidden}" questionMark="{questionMark}">
  <!-- svelte-ignore a11y-positive-tabindex -->
  <textarea bind:this="{refs.editor}" value="{code}"></textarea>
</Window>

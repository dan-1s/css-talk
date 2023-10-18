<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import CodeMirror from 'codemirror';
  import 'codemirror/keymap/vim';
  import 'codemirror/mode/css/css';
  import Window from './Window.svelte';
  import 'codemirror/lib/codemirror.css';
  import 'codemirror/theme/material-ocean.css';

  const mode = import.meta.env.VITE_EDITOR_MODE;

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
  const maybeUseVim = mode === 'vim' ? { keyMap: 'vim' } : {};

  const opts = {
    lineWrapping: true,
    indentWithTabs: false,
    indentUnit: 4,
    tabSize: 2,
    value: '',
    mode: 'css',
    autoCloseBrackets: true,
    autoCloseTags: true,
    foldGutter: true,
    theme: 'material-ocean',
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    ...maybeUseVim,
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
  :global(.CodeMirror) {
    /* override inline style form code mirror to fix 1px line between top part
    in window wrapper and the code section */
    clip-path: inset(-1px) !important;
  }

  :global(.CodeMirror-cursor),
  :global(.CodeMirror-code) {
    font-size: var(--code-font-size, 1.2rem);
  }

  :global(.CodeMirror-code) {
    font-family:
      'Operator Mono',
      'Source Code Pro',
      Menlo,
      Monaco,
      Consolas,
      Courier New,
      monospace;
  }
</style>

<Window {height} {hidden} {questionMark}>
  <!-- svelte-ignore a11y-positive-tabindex -->
  <textarea bind:this="{refs.editor}" value="{code}"></textarea>
</Window>

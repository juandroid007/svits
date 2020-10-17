import './index.css'
import App from './App.svelte'
import wf from 'webfontloader'

const app = new App({
  target: document.body,
})

wf.load({
  google: {
    families: ['Inconsolata']
  }
})

export default app

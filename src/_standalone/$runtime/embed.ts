import { autoEmbedOnBody } from 'svelte-standalone'

import $runtime from './index.svelte'

autoEmbedOnBody($runtime, '$runtime')
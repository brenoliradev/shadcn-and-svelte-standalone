import type { ComponentProps } from 'svelte';
import type { EmbedWindow } from 'svelte-standalone';

import Table from './index.svelte';

export type TableProps = ComponentProps<Table>;

export const defaultConfig: TableProps = {};

declare global {
	interface Window extends EmbedWindow<Table, 'table'> {}
}
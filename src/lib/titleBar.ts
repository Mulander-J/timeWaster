import { appWindow } from '@tauri-apps/api/window';
import { ask } from '@tauri-apps/api/dialog';

export function setupBar() {
	document
		.getElementById('titlebar-minimize')
		?.addEventListener('click', () => appWindow.minimize());
	document
		.getElementById('titlebar-maximize')
		?.addEventListener('click', () => appWindow.toggleMaximize());
	document.getElementById('titlebar-close')?.addEventListener('click', async () => {
		(await ask('Do you really want to leave?', { title: 'System', type: 'warning' })) &&
			appWindow.close();
	});
}

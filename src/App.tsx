import { createSignal } from "solid-js";
import {
	ColorModeProvider,
	ColorModeScript,
	createLocalStorageManager,
} from "@kobalte/core";

import { ThemeToggle } from "~/components/ThemeToggle";

function App() {
	const storageManager = createLocalStorageManager("vite-ui-theme");
	return (
		<>
			<ColorModeScript storageType={storageManager.type} />
			<ColorModeProvider storageManager={storageManager}>
				<div class={"h-screen w-screen"}>
					<ThemeToggle />
				</div>
			</ColorModeProvider>
		</>
	);
}

export default App;

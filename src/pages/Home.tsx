import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { type Component, For } from "solid-js";
import { PACKAGES } from "../data/packages";

const Home: Component = () => (
	<>
		<Title>pyrorhythm.dev</Title>
		<div class="min-h-screen flex flex-col items-center justify-center px-6 py-16">
			<div class="w-full max-w-[480px]">

				<div class="text-[11px] font-mono tracking-[0.12em] uppercase text-(--text-3) mb-5">
					pyrorhythm.dev
				</div>
				<div class="flex items-center justify-between mb-3">
					<h1 class="text-[36px] font-semibold tracking-[-0.02em] text-(--text) leading-none">
						pyrorhythm
					</h1>
					<a
						href="https://github.com/pyrorhythm"
						target="_blank"
						rel="noopener noreferrer"
						class="text-(--text-3) hover:text-(--text-2) transition-colors duration-150"
						aria-label="GitHub"
					>
						<img src="github.svg" class="size-6" aria-hidden="true" />
					</a>
				</div>
			</div>
		</div>
	</>
);

export default Home;

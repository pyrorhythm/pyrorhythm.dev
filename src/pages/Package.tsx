import { Navigate, useNavigate, useParams } from "@solidjs/router";
import { type Component, createSignal, Show } from "solid-js";
import { PackageMeta } from "../components/PackageMeta";
import { Button, LinkButton } from "../components/ui/Button";
import { type GoPackage, PACKAGES } from "../data/packages";


const Package: Component = () => {
	const params = useParams<{ name: string }>();
	const pkg = () => PACKAGES[params.name];

	return (
		<Show when={pkg()} fallback={<Navigate href="/" />}>
			{(p) => <PackagePage pkg={p()} />}
		</Show>
	);
};

const PackagePage: Component<{ pkg: GoPackage }> = (props) => {
	const importPath = `pyrorhythm.dev/${props.pkg.name}`;
	const isInstallable = props.pkg.kind === "installable";
	const installCmd = isInstallable
		? `go install ${importPath}@latest`
		: `go get ${importPath}`;
	const installLabel = isInstallable ? "install" : "get";
	const [copied, setCopied] = createSignal(false);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(installCmd);
			setCopied(true);
			setTimeout(() => setCopied(false), 1400);
		} catch { }
	};

	return (
		<>
			<PackageMeta pkg={props.pkg} />
			<div class="min-h-screen flex flex-col items-center justify-center px-6 py-16">
				<div class="w-full max-w-[480px]">
					<div class="mb-8">
						<div class="inline-flex items-center gap-2 text-[13px] font-mono text-(--text-2) mb-4">
							<img src="go.svg" class="size-8" />
							<span>{importPath}</span>
						</div>
						<h1 class="text-[32px] font-semibold tracking-[-0.02em] text-(--text) leading-tight mb-2">
							{props.pkg.name}
						</h1>
						<p class="text-(--text-2) text-[15px] leading-relaxed">
							{props.pkg.description}
						</p>
					</div>

					<div class="glass rounded-(--r-lg) overflow-hidden mb-4">
						<div class="px-5 pt-3.5 pb-1">
							<span class="text-[10px] font-semibold uppercase tracking-widest text-(--text-3)">
								{installLabel}
							</span>
						</div>
						<div class="flex items-center justify-between gap-3 px-5 pb-4">
							<code class="font-mono text-[13px] text-(--text) overflow-x-auto whitespace-nowrap flex-1 min-w-0">
								{installCmd}
							</code>
							<Button
								size="sm"
								variant="outline"
								onClick={copy}
								class="shrink-0 min-w-[56px]"
							>
								{copied() ? (
									<>
										<img src="check.svg" />
										copied
									</>
								) : (
									"copy"
								)}
							</Button>
						</div>
					</div>

					<div class="flex flex-wrap gap-2 mb-10">
						<LinkButton href={props.pkg.repo} target="_blank" rel="noopener noreferrer">
							GitHub
						</LinkButton>
						<LinkButton
							href={`https://pkg.go.dev/${importPath}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							pkg.go.dev
						</LinkButton>
					</div>
				</div>
			</div>
		</>
	);
};



export default Package;

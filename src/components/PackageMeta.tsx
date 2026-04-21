import { Meta, Title } from "@solidjs/meta";
import type { GoPackage } from "../data/packages";

export const PackageMeta = (props: { pkg: GoPackage }) => {
	const { name, repo, vcs } = props.pkg;
	const tree = `${repo}/tree/main{/dir}`;
	const blob = `${repo}/blob/main{/dir}/{file}#L{line}`;
	return (
		<>
			<Title>{name} — pyrorhythm.dev</Title>
			<Meta
				name="go-import"
				content={`pyrorhythm.dev/${name} ${vcs} ${repo}`}
			/>
			<Meta
				name="go-source"
				content={`pyrorhythm.dev/${name} ${repo} ${tree} ${blob}`}
			/>
		</>
	);
};

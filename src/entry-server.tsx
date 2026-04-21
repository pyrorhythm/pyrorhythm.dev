import { MetaProvider } from "@solidjs/meta";
import { getAssets, renderToStringAsync } from "@solidjs/web";
import { PackageMeta } from "./components/PackageMeta";
import type { GoPackage } from "./data/packages";

export { PACKAGES } from "./data/packages";

export async function renderPackageHead(pkg: GoPackage): Promise<string> {
	await renderToStringAsync(() => (
		<MetaProvider>
			<PackageMeta pkg={pkg} />
		</MetaProvider>
	));
	return getAssets();
}

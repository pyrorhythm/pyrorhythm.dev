export type VcsType = "git" | "hg" | "svn";

export type PackageKind = "installable" | "package";

export type GoPackage = {
	name: string;
	repo: string;
	description: string;
	vcs: VcsType;
	kind: PackageKind;
};

export const PACKAGES: Record<string, GoPackage> = {
	fn: {
		name: "fn",
		repo: "https://github.com/pyrorhythm/fn",
		description:
			"utility library, has fp monads and primitives, async primitives and other helpers",
		vcs: "git",
		kind: "package",
	},
	moonshine: {
		name: "moonshine",
		repo: "https://github.com/pyrorhythm/moonshine",
		description:
			"missing declarative package manager, that sits in-between actual managers and you to provide one interface for all",
		vcs: "git",
		kind: "installable",
	},
	libspot: {
		name: "libspot",
		repo: "https://github.com/pyrorhythm/libspot",
		description:
			"spotify API client written in Go, heavily inspired by go-librespot, while using modern APIs",
		vcs: "git",
		kind: "package",
	},
};

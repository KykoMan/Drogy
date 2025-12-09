export type NavItem = {
	title: string;
	href: string;
};

const navItems: NavItem[] = [
	{ title: "O projektu", href: "/aboutUs" },
	{ title: "Typy drog", href: "/drugs" },
	{ title: "Kontakty", href: "/contact" },
	{ title: "Minihra", href: "/minigame" },
];

export default navItems;


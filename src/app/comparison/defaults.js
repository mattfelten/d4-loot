export const core = {
	label: 'Core Attributes',
	fields: {
		str: {
			label: 'Strength',
			type: 'int',
			value: 100,
		},
		int: {
			label: 'Intelligence',
			type: 'int',
			value: 100,
		},
		dex: {
			label: 'Dexterity',
			type: 'int',
			value: 100,
		},
	},
};

export const weapon = {
	label: 'Weapon Stats',
	fields: {
		base: {
			label: 'Base Damage',
			type: 'int',
			value: 10,
		},
		speed: {
			label: 'Attack Speed',
			type: 'int',
			value: 1,
		},
		bonus: {
			label: 'Attack Speed Bonus',
			type: 'float',
			value: 0.05,
		},
	},
};

export const crit = {
	label: 'Critical Strike',
	fields: {
		chance: {
			label: 'Critical Strike Chance',
			type: 'float',
			value: 0,
		},
		damage: {
			label: 'Critical Strike Damage',
			type: 'float',
			value: 0,
		},
	},
};

export const vulernable = {
	label: 'Vulnerable Damage',
	type: 'float',
	value: 0,
};

export const mods = {
	label: 'Damage Mods',
	fields: {
		allDmg: {
			label: 'All Damage',
			type: 'float',
			value: 0,
		},
	},
};

export const defaults = {
	core,
	weapon,
	crit,
	vulernable,
	mods,
};


export const Q0 = { 
    title: "Q0 - Magic or Weapons?",
    text: "Do you want to fight with magic or weapons?",
    answer1: {
        keyword: "magic",
        type: 0.1,
        array: ['Bard', 'Cleric', 'Druid', 'Sorcerer', 'Warlock', 'Wizard']
    },
    answer2: {
        keyword: "weapons",
        type: 0.2,
        array: ['Fighter', 'Barbarian', 'Monk', 'Rogue']
    }
}
export const Q1 = {
    title: "Q1 - Useful or Damage-dealing",
    text: "Do you want to be more useful and creative? or more able to deal damage?",
    answer1: {
        keyword: "useful",
        type: 1.1,
        array: ['Bard', 'Wizard', 'Cleric', 'Artificer', 'Druid']
    },
    answer2: {
        keyword: "damage",
        type: 1.2,
        array: ['Sorcerer', 'Warlock', 'Paladin', 'Ranger']
    }
}
export const Q2 = {
    title: "Q2 - Study or outside source?",
    text: "Does your magic come from study or from an outside source (god/demon)?",
    answer1: {
        keyword: "study",
        type: 2.1,
        array: ['Artificer', 'Bard', 'Ranger', 'Wizard']
    },
    answer2: {
        keyword: "outside",
        type: 2.2,
        array: ['Cleric', 'Druid', 'Warlock']
    }
}
export const Q3 = {
    title: "Q3 - Healer?" , 
    text: "Do you care about being a healer?",
    answer1: {
        keyword: "sure!",
        type: 3.1,
        array: ['Cleric', 'Druid', 'Bard', 'Paladin', 'Ranger']
    },
    answer2: {
        keyword: "not really",
        type: 3.2
    }
}

export const Q4 = {
    title: "Q4 - Ethical Alignment",
    text: "Is your typical alignment good, neutral, or chaotic?",
    answer1: {
        keyword: "Good",
        type: 4.1,
        array: ['Paladin', 'Cleric']
    },
    answer2: {
        keyword: "Chaotic",
        type: 4.2,
        array: ['Sorcerer', 'Warlock']
    },
    answer3: {
        keyword: "Neutral",
        type: 4.3,
        array: ['Bard', 'Ranger', 'Druid', 'Wizard', 'Artificer']
    }
}

export const Q5 = {
    title: "Q5 - Spellcasting Ability",
    text: "Through what ability score does your character use magic?",
    answer1: {
        keyword: "Intelligence",
        type: 5.1,
        array: ['Wizard', 'Artificer']
    },
    answer2: {
        keyword: "Charisma",
        type: 5.2,
        array: ['Bard', 'Sorcerer', 'Warlock']
    },
    answer3: {
        keyword: "Wisdom",
        type: 5.3,
        array: ['Druid', 'Cleric', 'Paladin', 'Ranger']
    }
}


// MELEE


export const Q11 = {
    title: "Q11 - Strength or Dexterity",
    text: "Is your character strong or dexterous?",
    answer1: {
        keyword: "Strong",
        type: 11.1,
        array: ['Paladin', 'Fighter', 'Artificer', 'Barbarian']
    },
    answer2: {
        keyword: "Dexterous",
        type: 11.2,
        array: ['Monk', 'Rogue', 'Fighter', 'Artificer', 'Ranger']
    }
}

export const Q12 = {
    title: "Q12 - Sneaky",
    text: "Is your character capable of being very sneaky or stealthy?",
    answer1: {
        keyword: "Yes!",
        type: 12.1,
        array: ['Rogue', 'Ranger', 'Monk']
    },
    answer2: {
        keyword: "Nah",
        type: 12.2
    }
}

export const Q13 = {
    title: "Q13 - Frontline or Ranged",
    text: "Are you more a frontline or a ranged combatant?",
    answer1: {
        keyword: "Frontline",
        type: 13.1,
        array: ['Fighter', 'Paladin', 'Barbarian', 'Monk', 'Artificer']
    },
    answer2: {
        keyword: "Ranged",
        type: 13.2,
        array: ['Ranger', 'Rogue', 'Fighter', 'Artificer']
    }
}

export const Q14 = {
    title: "Q14 - Tank",
    text: "Do you want to make a tanky character?",
    answer1: {
        keyword: "Yes!",
        type: 14.1,
        array: ['Fighter', 'Paladin', 'Barbarian', 'Artificer', 'Druid']
    },
    answer2: {
        keyword: "not really",
        type: 14.2
    }
}
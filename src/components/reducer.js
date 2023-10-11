
const reducer = (state, action) => {
    switch (action) {
        case 1.1: 
            return state.filter(item => item !== "Fighter" || "Barbarian" || "Monk" || "Rogue");
        case 1.2:
            return state.filter(item => item !== "Wizard" || "Druid" || "Warlock" || "Sorcerer" || "Bard" || "Cleric")
        case 2.1:
            return state.filter(item => item !== "Sorcerer" || "Warlock");
        case 2.2:
            return state.filter(item => item !== "Bard" || "Wizard" || "Cleric")
        case 3.1:
            return state.filter(item => item !== "Cleric" || "Warlock" || "Druid")
        case 3.2:
            return state.filter(item => item !== "Bard" || "Wizard")
        case 4.1:
            return state.filter(item => item === "Cleric" || "Druid" || "Bard" || "Paladin" || "Ranger")
        case 4.2:
            return state;
        default:
            throw Error('Unknown action');
    }
}

export default reducer;
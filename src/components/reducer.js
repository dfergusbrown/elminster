
const dndClassList = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]

const reducer = (state, action) => {
    switch (action) {
    // Magic or Melee
        case 0.1: 
            return state.filter(item => {
                return (
                item !== "Fighter" && 
                item !== "Barbarian" && 
                item !== "Monk" && 
                item !== "Rogue"
                )
            })
        case 0.2:
            return state.filter(item => {
                return (
                item !== "Wizard" &&
                item !== "Druid" && 
                item !== "Warlock" &&
                item !==  "Sorcerer" &&
                item !==  "Bard" &&
                item !==  "Cleric"
                )
            })

    // Useful or Damage-oriented
        case 1.1:
            return state.filter(item => {
                return item !== "Sorcerer" && item !== "Warlock" && item !== "Paladin" && item !== "Ranger"
            });
        case 1.2:
            return state.filter(item => {
                return item !== "Bard" && item !== "Wizard" && item !== "Cleric" && item !== "Artificer" && item !== "Druid"
            })

    // no or outside source
        case 2.1: /*no*/
            return state.filter(item => {
                return item !== "Cleric" && item !== "Warlock" && item !== "Druid"
            })
        case 2.2: /*outside source*/
            return state.filter(item => {
                return item !== "Bard" && item !== "Wizard" && item !== "Artificer" && item !== "Ranger" && item !== "Sorcerer"
            })

    // Healer
        case 3.1: /* it's important */
            return state.filter(item => {
                return (
                item === "Cleric" || 
                item === "Druid" || 
                item === "Bard" || 
                item === "Paladin" || 
                item === "Ranger"
                )
            })
        case 3.2: /* don't care */
            return state;

    // Ethical Alignment - Good / Neutral / Chaotic
        case 4.1: /* Good */
            return state.filter(item => {
                return (
                item === "Paladin" || 
                item === "Cleric"
                )
            })
        case 4.3: /* Neutral */
            return state.filter(item => {
                return (
                item === "Bard" || 
                item === "Ranger" ||
                item === "Druid" ||
                item === "Wizard" ||
                item === "Artificer"
                )
            })
        case 4.2: /* Chaotic */
            return state.filter(item => {
                return (
                item === "Sorcerer" || 
                item === "Warlock"
                )
            })
        
    // Spellcasting Ability
        case 5.1: /* Intelligence */
            return state.filter(item => {
                return (
                item === "Wizard" ||
                item === "Artificer"
                )
            })
        case 5.2: /* Charisma */
            return state.filter(item => {
                return(
                    item === "Bard" ||
                    item === "Sorcerer" ||
                    item === "Warlock"
                )
            })
        case 5.3: /* Wisdom */
            return state.filter(item => {
                return(
                    item === "Druid" ||
                    item === "Cleric" ||
                    item === "Paladin" ||
                    item === "Ranger"
                )
            })

//  -- MELEE -- //

    // Strength vs Dexterity
        case 11.1: /* Strength */
            return state.filter(item => {
                return(
                    item === "Paladin" ||
                    item === "Fighter" ||
                    item === "Artificer" ||
                    item === "Barbarian"
                )
            })
        case 11.2: /* Dexterity */
            return state.filter(item => {
                return(
                    item === "Monk" ||
                    item === "Rogue" ||
                    item === "Fighter" ||
                    item === "Ranger" ||
                    item === "Artificer"
                )
            })

    // Sneakiness
        case 12.1: /* Sneaky */
            return state.filter(item => {
                return(
                    item === "Rogue" ||
                    item === "Ranger" ||
                    item === "Monk"
                )
            })
        case 12.2: /* don't care */
            return state

    // Frontline or Ranged
        case 13.1: /* Frontline */
            return state.filter(item=> {
                return(
                    item === "Fighter" ||
                    item === "Paladin" ||
                    item === "Barbarian" ||
                    item === "Monk" ||
                    item === "Artificer"
                )
            })
        case 13.2: /* Ranged */
            return state.filter(item=> {
                return(
                    item === "Ranger" ||
                    item === "Rogue" ||
                    item === "Fighter" ||
                    item === "Artificer"
                )
            })

    // Tank?
        case 14.1: /* Tank */
        return state.filter(item=> {
            return(
                item === "Fighter" ||
                item === "Paladin" ||
                item === "Barbarian" ||
                item === "Artificer" ||
                item === "Druid"
            )
        })
        case 14.2: /* don't care */
            return state

    // Healer applies here as well

        case "reset":
            return dndClassList
        default:
            throw Error('Unknown action');
    }
}

export default reducer;

export class Units {
    id: number;
    name: string;
    description?: string;
    expansion: string;
    age: string;
    createdIn: string;
    cost: {
        wood?: number;
        Food?: number;
        stone?: number;
        gold?: number;
    };
    buildTime: number;
    reloadTime: number;
    attackDelay?: number;
    movementRate: number;
    lineOfSight: number;
    hitPoints: number;
    range?: string;
    attack: number;
    armor: string[];
    attackBonus?: string[];
    armorBonus?: string[];
    searchRadius?: number;
    accuracy?: string;
    blastRadius?: number;
}

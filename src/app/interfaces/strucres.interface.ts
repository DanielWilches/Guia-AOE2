
export class Structures {
    id: number;
    name: string;
    description?: string;
    expansion: string;
    age: string;
    cost: {
        Food: number;
        Stone: number;
        Gold: number;
        Wood: number;
    };
    buildTime: number;
    hitPoints: number;
    lineOfSight: number;
    armor: string;
    range?: string;
    reloadTime?: number;
    attack?: number;
    special?: string[];

}


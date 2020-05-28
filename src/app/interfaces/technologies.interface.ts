export class Technologies{
    id: number;
    name: string;
    description?: string;
    expansion: string;
    age: string;
    developsIn: string;
    cost: {
        Food?: number;
        Stone?: number;
        Gold?: number;
        Wood?: number;
    };
    buildTime: number;
    appliesTo?: string[];
}

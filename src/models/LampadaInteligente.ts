import { Dispositivo } from "./Dispositivo.js";
import { LampadaInteligenteProps } from "../interfaces/DispositivoProps.js";

export class LampadaInteligente extends Dispositivo<LampadaInteligenteProps> {
   
    constructor(props: LampadaInteligenteProps) {
        super(props);
    }

    public get getCorHexadecimal(): string {
        return this.props.corHexadecimal;
    }

    public get getNivelBrilho(): number {
        return this.props.nivelBrilho;
    }

    public setBrilho(nivel: number): void {
        if (nivel < 0 || nivel > 100) {
            console.log("\n ERRO: O brilho deve estar entre 0 e 100!");
            return;
        }
        this.props.nivelBrilho = nivel;
    }
}

import { DispositivoProps } from "../interfaces/DispositivoProps.js";

export class Dispositivo<T extends DispositivoProps = DispositivoProps> {
   
    constructor(protected props: T) {}

    public get getIdRede(): string {
        return this.props.idRede;
    }

    public get getNomeLocal(): string {
        return this.props.nomeLocal;
    }

    public get getIsLigado(): boolean {
        return this.props.isLigado;
    }

    public set setIdRede(novoIdRede: string) {
        if (novoIdRede.trim().length === 0) {
            console.log("\n ERRO: O ID de rede não pode ser vazio!");
            return;
        }
        this.props.idRede = novoIdRede;
    }

    public set setNomeLocal(novoNomeLocal: string) {
        if (novoNomeLocal.trim().length === 0) {
            console.log("\n ERRO: O nome local não pode ser vazio!");
            return;
        }
        this.props.nomeLocal = novoNomeLocal;
    }

    public alternarEnergia(): void {
        this.props.isLigado = !this.props.isLigado;
        console.log(`\n Dispositivo ${this.props.isLigado ? 'LIGADO' : 'DESLIGADO'}.`);
    }
}
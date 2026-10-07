import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps } from "../interfaces/DispositivoProps.js";

export class Termostato extends Dispositivo<TermostatoProps> {
   
    constructor(props: TermostatoProps) {
        super(props);
    }

    public get getTemperaturaAtual(): number {
        return this.props.temperaturaAtual;
    }

    public get getTemperaturaAlvo(): number {
        return this.props.temperaturaAlvo;
    }

    public setTemperaturaAlvo(temp: number): void {
        this.props.temperaturaAlvo = temp;
    }
}
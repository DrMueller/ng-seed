import { ControlPropagationStrategy } from '.';

export class SelectConfiguration {
  constructor(
    public idPropertyName: string,
    public displayTextPropertyName: string,
    public controlPropagationStrategy: ControlPropagationStrategy,
    public placeholderText: string) {
  }
}

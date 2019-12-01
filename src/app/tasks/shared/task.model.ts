export class Task {
  
  constructor(
    public id: number, 
    public title: string,
    public description?: string,
    public deadline? :string,
    public done?: boolean,
    public deadlineFormatado? :string
    ){}
 }
 
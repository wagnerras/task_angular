export class Task {
  
  constructor(
    public id: number, 
    public title: string,
    public description?: string,
    public deadline? :string,
    public deadlineFormatado? :string
    ){}
 }
 
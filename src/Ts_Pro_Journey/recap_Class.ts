class Person {
  name: string;
   age: number

   

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }

  private mee = () => {};
  public me = () => {};

  sayHi() {
    console.log(`Hi I'm ${this.name}`);
  }
}

export class Component<TProps> {
  private myPT_Props: TProps;

  constructor(props: TProps) {
    this.myPT_Props = props;
  }

  getProps = () => this.myPT_Props;
}

const comp = new Component<{ a: number }>({ a: 1 });

const Test = new Person('ss');
console.log(Test.);
const Test2 = new Component('');
console.log(Test2.);

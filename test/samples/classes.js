class BaseClass {
  constructor(factor) {
    this.factor = factor;
  }
  timesFactor(x) {
    return x * this.factor;
  }
}

// private classes should be un-exported
export class _PrivateSimpleClass {
  constructor(factor) {
    this.factor = factor;
  }
  timesFactor(x) {
    return x * this.factor;
  }
}
export class _PrivateExtendedClass extends BaseClass {
  timesTwiceFactor(x) {
    return super.multiply(x) * 2;
  }
}

// public classes should be visible
export class PublicClass {
  constructor(value) {
    this.v = value;
  }
  get value() {
    return this.v
  }
}

// public classes should still be able to access un-exported classes
export class PublicExtendedClass extends _PrivateSimpleClass {
  timesThriceFactor(x) {
    return super.timesFactor(x) * 3;
  }
}

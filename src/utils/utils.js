
export default class {

  static formatNum(val) {
    return Number(val).toLocaleString();
  }

  static formatDate(val) {
    let d = new Date(val);
    return d.toLocaleDateString();
  }

}

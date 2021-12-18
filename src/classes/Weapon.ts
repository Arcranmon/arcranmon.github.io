import { store } from "@/store";
import { Chart } from "@/class";

class Weapon {
  private _chart: Chart;
  private _category: string;
  private _damagetype: string;
  private _hands: number;
  private _keywords: Array<string>;
  private _name: string;
  private _range: string;
  private _special: string;
  private _speed: number;

  public constructor() {
    this._chart = null;
    this._category = "";
    this._damagetype = "";
    this._hands = 3;
    this._keywords = [];
    this._name = "";
    this._range = "";
    this._special = "";
    this._speed = 0;
  }

  get CategoryHeader() {
    return this._category + ", ";
  }
  get Chart() {
    return this._chart;
  }
  get DamageType() {
    return this._damagetype;
  }
  get DamageTypeHeader() {
    return this._damagetype + " Damage";
  }
  get HandsPhrase() {
    if (this._hands == 0) return "No Hands, ";
    if (this._hands == 1) return "One-Handed, ";
    else return "Two-Handed, ";
  }
  get HasKeywords() {
    return this._keywords.length > 0;
  }
  get Keywords() {
    return this._keywords;
  }
  get KeywordsHeader() {
    var allKeywords = "";
    for (var keyword of this._keywords) {
      allKeywords = allKeywords + ", " + keyword;
    }
    return allKeywords;
  }
  get Name() {
    return this._name;
  }
  get Range() {
    return this._range;
  }
  get RangeHeader() {
    return ", " + this._range;
  }
  get Speed() {
    return this._speed;
  }
  get HasSpecial() {
    return this._special.length > 0;
  }
  get SpecialArray() {
    return this.KeywordParsedArray(this._special, "**Special:** ");
  }
  get SpeedHeader() {
    return "Speed " + this._speed;
  }

  // In the database, all keywords in effect text and the like should be underlined, giving us an easy character to search for.
  public KeywordParsedArray(input: string, header: string) {
    return (header + input).split("_");
  }

  public static Deserialize(weaponData: IWeaponData): Weapon {
    const t = new Weapon();
    t.setWeaponData(weaponData);
    return t;
  }

  public setWeaponData(data: IWeaponData): void {
    this._category = data.category || "";
    this._damagetype = data.damagetype || "";
    this._hands = data.hands || 3;
    this._keywords = data.keywords || [];
    this._name = data.name || "";
    this._range = data.range || "";
    this._special = data.special || "";
    this._speed = data.speed || 0;
    if ("chart" in data) {
      this._chart = Chart.Deserialize(data.chart);
    }
  }
}
export default Weapon;
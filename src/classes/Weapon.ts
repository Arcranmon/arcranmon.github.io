import { store } from "@/store";
import { Chart } from "@/class";

class Weapon {
  private chart_: Chart;
  private category_: string;
  private damagetype_: string;
  private desc_: string;
  private durability_: number;
  private hands_: number;
  private keywords_: Array<string>;
  private name_: string;
  private range_: string;
  private special_: string;
  private speed_: number;

  public constructor() {
    this.chart_ = null;
    this.category_ = "";
    this.damagetype_ = "";
    this.desc_ = "";
    this.durability_ = 0;
    this.hands_ = 3;
    this.keywords_ = [];
    this.name_ = "";
    this.range_ = "";
    this.special_ = "";
    this.speed_ = 0;
  }

  get CategoryHeader() {
    return this.category_;
  }
  get Category() {
    return this.category_;
  }
  get Chart() {
    return this.chart_;
  }
  get DamageType() {
    return this.damagetype_;
  }
  get Desc() {
    return this.desc_;
  }
  get DamageTypeHeader() {
    return this.damagetype_ + " Damage, ";
  }
  get Durability() {
    return this.durability_;
  }
  get DurabilityHeader() {
    if (this.durability_ != 0) return "Durability " + this.Durability + ", ";
  }
  get Hands() {
    return this.hands_;
  }
  get HandsPhrase() {
    if (this.hands_ == 0) return "No Hands, ";
    if (this.hands_ == 1) return "One-Handed, ";
    else return "Two-Handed, ";
  }
  get HasKeywords() {
    return this.keywords_.length > 0;
  }
  get Keywords() {
    return this.keywords_;
  }
  get KeywordsHeader() {
    return "_" + this.Keywords.join("_, _") + "_";
  }
  get Name() {
    return this.name_;
  }
  get Range() {
    return this.range_;
  }
  get RangeHeader() {
    if (this.Range == "Melee") return "_" + this.range_ + "_, ";
    if (this.Range.length > 2) return this.range_ + ", ";
    return "_Range_ " + this.range_ + ", ";
  }
  get Speed() {
    return this.speed_;
  }
  get HasSpecial() {
    return this.special_.length > 0;
  }
  get SpecialHeader() {
    return "**Special:** " + this.special_;
  }
  get SpeedHeader() {
    return "Speed " + this.speed_ + ", ";
  }

  // ==========================================================
  // SERIALIZATION
  // ==========================================================

  public static Deserialize(weaponData: IWeaponData): Weapon {
    const t = new Weapon();
    t.setWeaponData(weaponData);
    return t;
  }

  public setWeaponData(data: IWeaponData): void {
    this.category_ = data.category || "";
    this.damagetype_ = data.damagetype || "";
    this.desc_ = data.desc || "";
    this.durability_ = data.durability || 0;
    this.hands_ = data.hands || 0;
    this.keywords_ = data.keywords || [];
    this.name_ = data.name || "";
    this.range_ = data.range || "";
    this.special_ = data.special || "";
    this.speed_ = data.speed || 0;
    if ("chart" in data) {
      this.chart_ = Chart.Deserialize(data.chart);
    }
  }
}
export default Weapon;

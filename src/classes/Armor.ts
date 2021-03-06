import { store } from "@/store";

class Armor {
  private armor_: number;
  private category_: string;
  private durability_: number;
  private endurance_: number;
  private jump_: number;
  private name_: string;
  private reposition_: number;
  private shift_: number;
  private special_: string;
  private sprint_: number;
  private step_: number;

  public constructor() {
    this.name_ = "";
    this.special_ = "";
  }

  // ==========================================================
  // GETTERS
  // ==========================================================
  get Armor() {
    return this.armor_;
  }
  get Category() {
    return this.category_;
  }
  get Durability() {
    return this.durability_;
  }
  get Jump() {
    return this.jump_;
  }
  get Name() {
    return this.name_;
  }
  get Reposition() {
    return this.reposition_;
  }
  get Shift() {
    return this.shift_;
  }
  get HasSpecial() {
    return this.special_ != "";
  }
  get Sprint() {
    return this.sprint_;
  }
  get Step() {
    return this.step_;
  }

  // ==========================================================
  // FORMATTED GETTERS
  // ==========================================================
  get ArmorText() {
    return "**Guard:** " + this.armor_;
  }
  get DurabilityHeader() {
    if (this.durability_ != 0) return ", Durability " + this.durability_;
  }
  get EnduranceText() {
    return "**Endurance:** " + this.endurance_;
  }
  get SpecialHeader() {
    return "**Special:** " + this.special_;
  }

  // ==========================================================
  // SERIALIZATION
  // ==========================================================
  public static Deserialize(armorData: IArmorData): Armor {
    const t = new Armor();
    t.setArmorData(armorData);
    return t;
  }

  public setArmorData(data: IArmorData): void {
    this.armor_ = data.armor || 0;
    this.category_ = data.category || "";
    this.durability_ = data.durability || 0;
    this.endurance_ = data.endurance || 0;
    this.jump_ = data.jump || 0;
    this.name_ = data.name || "";
    this.reposition_ = data.reposition || 0;
    this.shift_ = data.shift || 0;
    this.special_ = data.special || "";
    this.sprint_ = data.sprint || 0;
    this.step_ = data.step || 0;
  }
}
export default Armor;

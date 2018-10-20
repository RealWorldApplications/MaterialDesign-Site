import { Icon } from "app/shared/models/icon.model";
import { PackageType } from "../enums/packageType.enum";

export class Package {
  
  public id: PackageType | string;
  public name: string;
  public icons: Icon[];
  public iconCount: string;

  constructor(packageId?: PackageType | string, packageName?: string) {
    this.id = packageId;
    this.name = packageName;
  }

  from (pack: Package): Package {
    this.id = pack.id;
    this.name = pack.name;
    this.icons = pack.icons.map(i => new Icon().from(i));
    this.iconCount = pack.iconCount;
    return this;
  }
}
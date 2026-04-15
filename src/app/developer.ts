import { Guid } from "guid-typescript"

export class Developer {
    id: string = Guid.create().toString()
    name: string = ""
    job: string = ""
    salary: number | null = null

    getShortId(): string {
        // 5e3d8ab3-7c88-41ed-11f1-21c1e6984604
        // 5e3d8ab3
        return this.id.split('-')[0]
    }

    getFormattedSalary(): string {
        return this.salary!.toLocaleString("hu-HU", {
            style: "currency",
            currency: "HUF",
            maximumFractionDigits: 0
        })
    }
}

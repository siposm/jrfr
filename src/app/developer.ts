import { Guid } from "guid-typescript"

export class Developer {
    id: string = Guid.create().toString()
    name: string = ""
    job: string = ""
    salary: number = 0

    getFormattedSalary(): string {
        return this.salary.toLocaleString("hu-HU", {
            style: "currency",
            currency: "HUF",
            maximumFractionDigits: 0
        })
    }
}

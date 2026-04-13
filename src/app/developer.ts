export class Developer {
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

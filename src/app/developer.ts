export class Developer {
    name: string = ""
    job: string = ""
    salary: number = 0

    getFormattedSalary(): string {
        let out = ""
        for (let i = 0; i < this.salary.toString().length; i++) {
            out += this.salary.toString()[i]
            if (i == 2) {
                out += " "
            }
        }
        return out + " HUF"

        // házi feladat!!!
        // 4000000 -> 4.000.000
        // 400000 -> 400.000
        // 40000 -> 40.000
        // 4000 -> 4000
        // 400 -> 400
        // 40 -> 40
    }
}

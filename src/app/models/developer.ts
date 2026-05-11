import { Guid } from "guid-typescript"

export class Developer {
    id: string = Guid.create().toString()
    name: string = ""
    email: string = ""
    job: string = ""
    age: number | null = null
    salary: number | null = null
    image: string = ""
    skills: string[] = []

    public get skillsAsString(): string {
        return this.skills.join(",")
    }

    public set skillsAsString(value: string) {
        this.skills = value.split(",")
    }

    getSkillsFormatted(): string {
        return this.skills.join(" • ")
    }

    getShortId(): string {
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

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
        // olvasás
        // bemenet: ["a","b","c"]
        // kimenet: a,b,c
        return this.skills.join(",")
    }

    public set skillsAsString(value: string) {
        // írás
        // bemenet: alma,körte,valami
        // kimenet: ["alma","körte","valami"]
        this.skills = value.split(",")
    }

    getSkillsFormatted(): string {
        return this.skills.join(" • ")
    }

    getShortId(): string {
        // ebből:   5e3d8ab3-7c88-41ed-11f1-21c1e6984604
        // ez lesz: 5e3d8ab3
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

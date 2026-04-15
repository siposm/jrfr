import { Guid } from "guid-typescript"

export class Developer {
    id: string = Guid.create().toString()
    name: string = ""
    job: string = ""
    age: number | null = null
    salary: number | null = null
    skills: string[] = []

    public get skillsAsString(): string {
        // olvasás
        return this.skills.join(",")
    }

    public set skillsAsString(value: string) {
        // írás
        // bemenet: alma,körte,valami --> ["alma","körte","valami"]
        this.skills = value.split(",")
    }

    getSkillsFormatted(): string {
        return this.skills.join(" • ")
        // let result = ""
        // for (let i = 0; i < this.skills.length; i++) {
        //     result += this.skills[i] + ", "
        // }
        // return result.slice(0, -2)
    }

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

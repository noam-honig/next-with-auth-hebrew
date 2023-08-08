import { Allow, Entity, Fields } from "remult"

@Entity("tasks", {
  allowApiCrud: Allow.authenticated,
  allowApiInsert: "admin",
})
export class Task {
  @Fields.cuid()
  id = ""
  @Fields.string<Task>({
    validate: (task) => {
      if (task.title.length < 2) throw Error("Too short")
    },
  })
  title = ""
  @Fields.boolean()
  completed = false
  @Fields.createdAt()
  createdAt = new Date()
}

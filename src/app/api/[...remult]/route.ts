import { remultNextApp } from "remult/remult-next"
import { Task } from "../../../model/task"
import { TasksController } from "../../../components/TasksController"
import { createPostgresDataProvider } from "remult/postgres"
import { getUserOnServer } from "../auth/[...nextauth]/route"

const api = remultNextApp({
  entities: [Task],
  controllers: [TasksController],
  dataProvider: createPostgresDataProvider({
    connectionString:
      process.env["POSTGRES_URL"] || process.env["DATABASE_URL"],
    configuration: {
      ssl: Boolean(process.env["POSTGRES_URL"]),
    },
  }),
  getUser: getUserOnServer,
})

export const { GET, PUT, POST, DELETE } = api

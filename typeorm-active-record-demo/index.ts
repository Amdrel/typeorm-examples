import { createConnection } from "typeorm";

import { Person } from "./person";

(async () => {
  // Initialize a connection pool against the database.
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Theeb6uu",
    database: "typeormdemo",
    entities: [Person],
  });

  // Register a new person in the database by calling the repository.
  const newPerson = new Person();
  newPerson.fullname = "Jane Doe";
  newPerson.gender = "F";
  newPerson.phone = "5555555555";
  newPerson.age = 29;
  await newPerson.save();

  // Find the person we just saved to the database using the custom query
  // method we wrote in the person repository.
  const existingPerson = await Person.findByName("Jane Doe");
  if (!existingPerson) {
    throw Error("Unable to find Jane Doe.");
  }

  // Change the person's full name.
  await existingPerson.updateName("Jane Johnson");

  // Remove the person from the database.
  await existingPerson.remove();

  // Clean up our connection pool so we can exit.
  await connection.close();
})();

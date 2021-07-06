module.exports = app => {
    const users = require("./user.controller.js");
  
    // Create a new user
    app.post("/api/user", users.create);

    // Retrieve all users
    app.get("/api/users", users.findAll);

    // Retrieve a single user with userId
    app.get("/api/user/:userId", users.findOne);

    app.post("/api/user/getPassword", users.getPassword);

    app.post("/user/changePassword", users.changePassword);

    // Retrieve a single user with email
    app.get("/api/userEmail/:userEmail", users.findOneByEmail);

    app.get("/api/users/:tab", users.getUsersByTab)

    // Retrieve a single user with username
    app.post("/api/findByEmail", users.findOneByUsername);

    // Update a user with userId
    app.put("/api/user/:userId", users.update);

    // Delete a user with userId
    app.delete("/api/user/:userId", users.delete);

    // Create a new user
    app.delete("/api/users", users.deleteAll);

    app.post("/createUser", users.createUser);

    app.get("/usersWithRoles", users.usersWithRoles)

    app.post("/users/manageRoles", users.manageRoles)
  };

# Todo App

A simple Todo application using React, NodeJS, Prisma, MySQL


## Installation

Clone the repository

```bash
  git clone https://github.com/angelostiffy/todo-app.git
```

After cloning, make sure that the branch is set to main. You can check it by doing the following:
```bash
  git branch
```
![image](https://github.com/angelostiffy/todo-app/assets/27817501/1642d304-3a01-46c0-9e1f-a786c074294d)

If not, change the branch to main
```bash
  git chcekout main
```


Inside the todo-app repository, go to the server folder and install its dependencies
```bash
  cd server
  npm install
```

Inside the server folder, create an .env file and supply it with your MySQL database connection string. Ensure that your MySQL database is already existing.

`
  DATABASE_URL='ENTER MYSQL CONNECTION STRING'
`

On your console, generate your prisma client

```bash
  npm run generate
```

Apply the migrations

```bash
  npm run migrate
```

Start the server
```bash
  npm run dev
```


Go to the client folder, install its dependencies, and start the client

```bash
  cd client
  npm install
  npm run dev
```

You can access the application at: http://localhost:5173/

![image](https://github.com/angelostiffy/todo-app/assets/27817501/b2f81792-701e-40c0-9d4e-d13b7b32542f)

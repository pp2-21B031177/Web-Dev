const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const { init, db, getUserByEmail, getAllUsers } = require("./db");
const app = express();
const port = process.env.PORT || 3000;

// Парсим incoming запросы данных с content-type - application/json
app.use(bodyParser.json());

// Роут для проверки работоспособности приложения
app.get("/api", (req, res) => {
  res.send("Express.js работает!");
});

// Роут для регистрации нового пользователя
app.post("/api/register", async (req, res) => {
  console.log("post request sent");
  const { email, password } = req.body;
  try {
    // Проверка существует ли пользователь
    const user = await getUserByEmail(email);
    if(user) {
      return res.status(400).send("Такой пользователь существует"); 
    }
    // Хэшируем пароль перед сохранением в базу данных
    const hashedPassword = await bcrypt.hash(password, 10);

    // Вставляем пользователя в базу данных
    db.run(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword],
      (err) => {
        if (err) {
          // Ошибка при вставке пользователя в базу данных
          console.log(err.message);
          res.status(500).send("Ошибка при регистрации пользователя");
        } else {
          // Пользователь успешно зарегистрирован
          res.status(201).send("Пользователь успешно зарегистрирован");
        }
      }
    );
  } catch {
    res.status(500).send("Ошибка при регистрации пользователя");
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users)
  } catch (error) {
    console.log(error);
    res.status(500).send("Ошибка")
  }
});

// Роут для авторизации пользователя
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (user == null) {
    // Пользователь не найден
    return res.status(400).send("Неправильные учетные данные");
  }
  try {
    // Сравниваем хэшированный пароль с паролем, введенным пользователем
    if (await bcrypt.compare(password, user.password)) {
      // Создаем JWT-токен при успешной авторизации
      const token = jwt.sign(
        { userId: user.id },
        "SG^HWTRH^%E%&UE$W^&TGSRYRUKRHTW^%U"
      );
      res.status(200).json({ token });
    } else {
      // Неправильный пароль
      res.status(400).send("Неправильные учетные данные");
    }
  } catch (err) {
    res.status(500).send("Ошибка при авторизации пользователя");
  }
});

app.use("/", express.static(path.join(__dirname, "client/")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/index.html"));
});

app.listen(port, async () => {
  await init();
  console.log(`Сервер запущен на порту ${port}`);
});

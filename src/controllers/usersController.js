const User = require("../models/User"); // Asegúrate de importar tu modelo de usuario correctamente

// Controlador para registrar un nuevo usuario
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Intentar crear un nuevo usuario en la base de datos
    const newUser = await User.create({ name, email, password });

    // Enviar una respuesta con el usuario creado
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    // Manejar errores
    console.error("Error registering user:", error);
    res.status(500).json({
      message: "Error registering user",
      error: error.message, // Puedes enviar el mensaje de error específico para depuración
    });
  }
};

module.exports = {
  signup,
  login,
};

// module.exports = { signup, login };

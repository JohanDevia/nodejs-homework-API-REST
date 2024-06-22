const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Obtener el token del encabezado

    if (!token) {
      return res.status(401).json({ message: "No autorizado" });
    }

    // Verificar el token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Buscar al usuario en la base de datos por ID
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: "No autorizado" });
    }

    // almacenar los datos del usuario en req.user
    req.user = user;
    next();
  } catch (error) {
    console.error("Error durante la verificación del token:", error);
    res.status(401).json({ message: "No autorizado" });
  }
};

module.exports = authMiddleware;

import { ValidationError } from "sequelize";

const errorHandler = (err, req, res, next) => {
    console.error(err); 

    if (err instanceof ValidationError) {
        return res.status(400).json({ message: err.message });
    }

    res.status(err.status || 500).json({
        message: err.message || "Internal server error",
    });
};

export default errorHandler;
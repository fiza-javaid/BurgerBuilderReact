import Express from "express"
import bcrypt from "bcryptjs";
import { Users } from "../models/index.js";
const router = Express.Router()

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    else if ((password.length > 0) && (password.length < 6)) {
        return res.status(400).json({ message: "Password must be atleast 6 characters" });
    }

    else {
        try {

            const alreadyExist = await Users.findOne({ where: { email } });
            if (alreadyExist) {
                return res.status(409).json({ message: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await Users.create({ email, password: hashedPassword });

            res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: user.id,
                    email: user.email
                }
            });
        }
        catch {
            res.status(500).json({ message: "Error registering user", error: error.message });
        }
    }
})


router.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    else if ((password.length > 0) && (password.length < 6)) {
        return res.status(400).json({ message: "Password must be atleast 6 characters" });
    }
    else {
        try {
            const user = await Users.findOne({
                where: { email }
            });

            if (!user) {
                return res.status(401).json({ message: "Email not found" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Incorrect password" });
            }

            res.status(200).json({
                message: "Login successful",
                user: {
                    id: user.id,
                    email: user.email
                }
            });
        }
        catch (error) {
            return res.status(500).json({ message: "Error fetching user", error: error });
        }
    }

});

export default router;
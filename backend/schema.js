const zod=require("zod")
const signupSchema = zod.object({
    username: zod.string().min(5).max(10),
    password: zod.string()
      .min(8) // Minimum length of 8 characters
      .max(20) // Maximum length of 20 characters
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
      .regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
      .regex(/[0-9]/, "Password must contain at least one number") // At least one number
      .regex(/[\W_]/, "Password must contain at least one special character") // At least one special character
  });
  module.exports=signupSchema
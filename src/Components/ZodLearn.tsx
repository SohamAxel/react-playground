import React from "react";
import { z } from "zod";
const hobbies = ["A", "B", "C"] as const;
const UserSchema = z.object({
  name: z.string().min(5),
  age: z.number(),
  birthday: z.date(),
  isProgrammer: z.boolean().default(false),
  hobby: z.enum(hobbies),
});

type User = z.infer<typeof UserSchema>;

const ZodLearn = () => {
  const user = {
    name: "John",
    age: 25,
    birthday: new Date(),
  };
  // const user = { name: 1 };

  // console.log(UserSchema.parse(user));
  console.log(UserSchema.safeParse(user).success);

  return <div>ZodLearn</div>;
};

export default ZodLearn;

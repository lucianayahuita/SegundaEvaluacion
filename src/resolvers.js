const { registerUser } = require('./apiRegister');
const resolvers = {
    Mutation: {
      registerUser: (_, { input }) => {
        const newUser = {
          id: Date.now(),  
          name: input.name,
          email: input.email,
          password: input.password,
          age: input.age,
          isDelete: 0
        };
  
        return {
          code: 0,
          message: 'Usuario registrado correctamente',
          user: newUser
        };
      }
    }
  };
  
module.exports = resolvers;

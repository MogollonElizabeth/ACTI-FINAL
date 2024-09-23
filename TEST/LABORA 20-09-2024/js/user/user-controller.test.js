  const UserController = require("./user-controller");
  const User = require("./user");

  const userController = new UserController();

  test('add user to userController', () => {    
      let user = new User(1234,"Santiago", "santiago@generation.org");
      userController.add(user);    
      expect(userController.getUsers()).toContain(user);
    });

  test('remove user to userController', () => {    
      let user = new User(1234,"Santiago", "santiago@generation.org");
      userController.add(user);    
      userController.remove(user);
      expect(userController.users).not.toContain(user);
    });

    test('email',()=>{

      let user = new User(7,"Elisa","elisa@gmail.com")
      userController.add(user);
      const esperada=userController.findByEmail(user.email)

      expect(esperada).toBe(user)
    })

    test('email',()=>{

      let user = new User(7,"Elisa","elisa@gmail.com")
      userController.add(user);
      const esperadas=userController.findById(user.id)

      expect(esperadas).toEqual(user)
    })
    
    

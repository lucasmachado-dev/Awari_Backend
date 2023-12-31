import UserService from "../../services/user/user.service.js";

class UserController {
  async create(req, res) {
    try {
      const response = await UserService.createUser(req.body);
      if (response) {
        return res.status(201).json(req.body);
      }
      return res.status(400).json({message: 'Email já cadastrado.'});
    } catch (error) {
      return res.status(500).json({error: 'internal server error'});
    }
  }

  async list(req, res) {
    try {    
      const response = await UserService.searchUser();
      return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({error: 'internal server error'});
    }
    
  }

  async update(req, res) {
    try{   
      const id = req.params.id;
      const response = await UserService.updateUser(req.body, id);
      if (response) {
        return res.status(200).json(req.body);
      }
      return res.status(400).json({message: 'Email já cadastrado.'});
    } catch(error) {
      return res.status(500).json({error: 'internal server error'});
    } 

  }  

  async delete(req, res) {
    try{   
      const id = req.params.id;
      await UserService.deleteUser(id);
      return res.status(200).json();
    } catch(error) {
      return res.status(500).json({error: 'internal server error'});
    } 
  }   

}

export default new UserController();
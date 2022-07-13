package bj.immobilier.immobilier.controller;


import bj.immobilier.immobilier.model.User;
import bj.immobilier.immobilier.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/utilisateur")
public class UtilisateurController {



    @Autowired
    private UserService userService;




    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<User> getUtilisateurs() {

        return userService.readAll();

    }






    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public User createUtilisateurs(@Valid @RequestBody User user) {

        return userService.createUser(user);

    }




    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public User updateUtilisateurs(@Valid @RequestBody User user) {

        return userService.update(user);

    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<User> findUtilisateurbyId(@PathVariable("id") Long id) {

        return userService.findbyId(id);

    }



    @RequestMapping(value = "/username/{username}", method = RequestMethod.GET)
    public UserDetails findUtilisateurbyUsername(@PathVariable("username") String username) {

        return userService.loadUserByUsername(username);

    }




    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteUtilisateurbyId(@PathVariable("id") Long id) {

         userService.deletebyId(id);

    }




    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteUtilisateur(@Valid @RequestBody User user) {

        userService.delete(user);

    }
    

}

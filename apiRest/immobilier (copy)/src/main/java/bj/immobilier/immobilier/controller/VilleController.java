package bj.immobilier.immobilier.controller;


import bj.immobilier.immobilier.model.Ville;
import bj.immobilier.immobilier.service.VilleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/ville")
//@CrossOrigin(origins = "http://localhost:4200")
public class VilleController {



    @Autowired
    private VilleService villeService;




    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Ville> getVilles() {

        return villeService.readAll();

    }






    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Ville createVilles(@Valid @RequestBody Ville ville) {

        return villeService.create(ville);

    }




    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Ville updateVilles(@Valid @RequestBody Ville ville) {

        return villeService.update(ville);

    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Ville> findVillebyId(@PathVariable("id") Long id) {

        return villeService.findbyId(id);

    }




    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteVillebyId(@PathVariable("id") Long id) {

        System.out.println(id);

         villeService.deletebyId(id);

    }




    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteVille(@Valid @RequestBody Ville ville) {

        villeService.delete(ville);

    }
    

}

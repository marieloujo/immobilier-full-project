package bj.immobilier.immobilier.controller;


import bj.immobilier.immobilier.model.Commune;
import bj.immobilier.immobilier.service.CommuneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/commune")
//@CrossOrigin(origins = "http://localhost:4200")
public class CommuneController {



    @Autowired
    private CommuneService communeService;




    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Commune> getCommunes() {

        return communeService.readAll();

    }






    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Commune createCommunes(@Valid @RequestBody Commune commune) {

        return communeService.create(commune);

    }




    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Commune updateCommunes(@Valid @RequestBody Commune commune) {

        return communeService.update(commune);

    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Commune> findCommunebyId(@PathVariable("id") Long id) {

        return communeService.findbyId(id);

    }




    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteCommunebyId(@PathVariable("id") Long id) {

         communeService.deletebyId(id);

    }




    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteCommune(@Valid @RequestBody Commune commune) {

        communeService.delete(commune);

    }
    

}

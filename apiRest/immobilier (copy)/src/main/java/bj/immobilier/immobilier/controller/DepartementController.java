package bj.immobilier.immobilier.controller;


import bj.immobilier.immobilier.model.Departement;
import bj.immobilier.immobilier.service.DepartementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/departement")
public class DepartementController {



    @Autowired
    private DepartementService departementService;




    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Departement> getDepartements() {

        return departementService.readAll();

    }






    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Departement createDepartements(@Valid @RequestBody Departement departement) {

        return departementService.create(departement);

    }




    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Departement updateDepartements(@Valid @RequestBody Departement departement) {

        return departementService.update(departement);

    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Departement> findDepartementbyId(@PathVariable("id") Long id) {

        return departementService.findbyId(id);

    }




    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteDepartementbyId(@PathVariable("id") Long id) {

         departementService.deletebyId(id);

    }




    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteDepartement(@Valid @RequestBody Departement departement) {

        departementService.delete(departement);

    }
    

}

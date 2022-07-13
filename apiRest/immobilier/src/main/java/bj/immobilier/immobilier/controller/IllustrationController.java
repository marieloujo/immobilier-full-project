package bj.immobilier.immobilier.controller;


import bj.immobilier.immobilier.model.Illustration;
import bj.immobilier.immobilier.service.IllustrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/illustration")
public class IllustrationController {



    @Autowired
    private IllustrationService illustrationService;




    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Illustration> getIllustrations() {

        return illustrationService.readAll();

    }






    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Illustration createIllustrations(@Valid @RequestBody Illustration illustration) {

        return illustrationService.create(illustration);

    }




    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Illustration updateIllustrations(@Valid @RequestBody Illustration illustration) {

        return illustrationService.update(illustration);

    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Illustration> findIllustrationbyId(@PathVariable("id") Long id) {

        return illustrationService.findbyId(id);

    }




    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteIllustrationbyId(@PathVariable("id") Long id) {

         illustrationService.deletebyId(id);

    }




    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void deleteIllustration(@Valid @RequestBody Illustration illustration) {

        illustrationService.delete(illustration);

    }
    

}

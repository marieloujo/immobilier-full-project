package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.Ville;
import bj.immobilier.immobilier.repository.VilleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class VilleService {


    @Autowired
    private VilleDao villeDao;



    @Transactional(rollbackOn = Exception.class)
    public List<Ville> readAll() {

        return villeDao.findAll();

    }




    @Transactional(rollbackOn = Exception.class)
    public Ville create(Ville ville) {

        return villeDao.save(ville);

    }


    @Transactional(rollbackOn = Exception.class)
    public Ville update(Ville ville) {

        return villeDao.save(ville);

    }




    @Transactional(rollbackOn = Exception.class)
    public Optional<Ville> findbyId(Long id) {

        return villeDao.findById(id);

    }




    @Transactional(rollbackOn = Exception.class)
    public void delete(Ville ville) {

         villeDao.delete(ville);

    }



    @Transactional(rollbackOn = Exception.class)
    public void deletebyId(Long id) {

        villeDao.deleteById(id);

    }






}

package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.Commune;
import bj.immobilier.immobilier.repository.CommuneDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CommuneService {


    @Autowired
    private CommuneDao communeDao;



    @Transactional(rollbackOn = Exception.class)
    public List<Commune> readAll() {

        return communeDao.findAll();

    }




    @Transactional(rollbackOn = Exception.class)
    public Commune create(Commune commune) {

        return communeDao.save(commune);

    }


    @Transactional(rollbackOn = Exception.class)
    public Commune update(Commune commune) {

        return communeDao.save(commune);

    }




    @Transactional(rollbackOn = Exception.class)
    public Optional<Commune> findbyId(Long id) {

        return communeDao.findById(id);

    }




    @Transactional(rollbackOn = Exception.class)
    public void delete(Commune commune) {

         communeDao.delete(commune);

    }



    @Transactional(rollbackOn = Exception.class)
    public void deletebyId(Long id) {

        communeDao.deleteById(id);

    }






}

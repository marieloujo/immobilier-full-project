package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.Departement;
import bj.immobilier.immobilier.repository.DepartementDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class DepartementService {


    @Autowired
    private DepartementDao departementDao;



    @Transactional(rollbackOn = Exception.class)
    public List<Departement> readAll() {

        return departementDao.findAll();

    }




    @Transactional(rollbackOn = Exception.class)
    public Departement create(Departement departement) {

        return departementDao.save(departement);

    }


    @Transactional(rollbackOn = Exception.class)
    public Departement update(Departement departement) {

        return departementDao.save(departement);

    }




    @Transactional(rollbackOn = Exception.class)
    public Optional<Departement> findbyId(Long id) {

        return departementDao.findById(id);

    }




    @Transactional(rollbackOn = Exception.class)
    public void delete(Departement departement) {

         departementDao.delete(departement);

    }



    @Transactional(rollbackOn = Exception.class)
    public void deletebyId(Long id) {

        departementDao.deleteById(id);

    }






}

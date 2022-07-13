package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.Illustration;
import bj.immobilier.immobilier.repository.IllustrationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class IllustrationService {


    @Autowired
    private IllustrationDao illustrationDao;



    @Transactional(rollbackOn = Exception.class)
    public List<Illustration> readAll() {

        return illustrationDao.findAll();

    }




    @Transactional(rollbackOn = Exception.class)
    public Illustration create(Illustration illustration) {

        return illustrationDao.save(illustration);

    }


    @Transactional(rollbackOn = Exception.class)
    public Illustration update(Illustration illustration) {

        return illustrationDao.save(illustration);

    }




    @Transactional(rollbackOn = Exception.class)
    public Optional<Illustration> findbyId(Long id) {

        return illustrationDao.findById(id);

    }




    @Transactional(rollbackOn = Exception.class)
    public void delete(Illustration illustration) {

         illustrationDao.delete(illustration);

    }



    @Transactional(rollbackOn = Exception.class)
    public void deletebyId(Long id) {

        illustrationDao.deleteById(id);

    }






}

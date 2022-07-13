package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.User;
import bj.immobilier.immobilier.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    @Autowired
    private UserDao userDao;



    @Transactional(rollbackOn = Exception.class)
    public List<User> readAll() {

        return userDao.findAll();

    }




    @Transactional(rollbackOn = Exception.class)
    public User create(User user) {

        return userDao.save(user);

    }


    @Transactional(rollbackOn = Exception.class)
    public User update(User user) {

        return userDao.save(user);

    }




    @Transactional(rollbackOn = Exception.class)
    public Optional<User> findbyId(Long id) {

        return userDao.findById(id);

    }




    @Transactional(rollbackOn = Exception.class)
    public void delete(User user) {

         userDao.delete(user);

    }



    @Transactional(rollbackOn = Exception.class)
    public void deletebyId(Long id) {

        userDao.deleteById(id);

    }






}

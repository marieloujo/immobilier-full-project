package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.Authority;
import bj.immobilier.immobilier.model.User;
import bj.immobilier.immobilier.model.UserAuthority;
import bj.immobilier.immobilier.repository.AuthorityDao;
import bj.immobilier.immobilier.repository.UserAuthorityDao;
import bj.immobilier.immobilier.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Service
public class UserService  implements UserDetailsService{


    @Autowired
    private UserDao userDao;


    private static final String AUTHORITY_USER_WRITE = "USER_WRITE";


    @Autowired
    private AuthorityDao authorityDao;


    @Qualifier("oauthClientPasswordEncoder")
    @Autowired
    PasswordEncoder passwordEncoder;


    @Autowired
    private UserAuthorityDao userAuthorityDao;




    @Transactional(rollbackOn = Exception.class)
    public List<User> readAll() {

        return userDao.findAll();

    }




    @Transactional(rollbackOn = Exception.class)
    @Override
    public User createUser(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(Boolean.TRUE);
        User result = userDao.save(user);

        Authority authority = authorityDao.findByRole(AUTHORITY_USER_WRITE);
        UserAuthority userAuth = new UserAuthority();
        userAuth.setUser(result);
        userAuth.setAuthorith(authority);
        userAuthorityDao.save(userAuth);

        return result;
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



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByUsername(username);
    }



}
